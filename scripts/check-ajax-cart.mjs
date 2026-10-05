// Unit contract fixtures. These are not live Shopify checkout or inventory QA.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const source = fs.readFileSync(new URL('../assets/theme.js', import.meta.url), 'utf8');

async function scenario({ ok, message, count, refreshOk = true, networkFailure = false }) {
  const events = new Map();
  const button = { disabled: false, setAttribute() {}, removeAttribute() {} };
  const buttonText = { textContent: 'Add to bag' };
  const badge = { textContent: '(0)' };
  const noticeText = { textContent: '' };
  const notice = { hidden: true, dataset: {}, querySelector: () => noticeText };
  const form = {
    addEventListener: (type, callback) => events.set(type, callback),
    querySelector: (selector) => ({
      '[data-add-to-cart]': button,
      '[data-add-to-cart-text]': buttonText,
      '[data-variant-select]': { selectedOptions: [{ dataset: { available: 'true' } }] }
    })[selector]
  };
  const requests = [];
  const document = {
    documentElement: { classList: { remove() {} } },
    querySelector: (selector) => selector === '[data-cart-notification]' ? notice : null,
    querySelectorAll: (selector) => ({
      '[data-ajax-product-form]': [form], '[data-cart-count]': [badge]
    })[selector] || [],
    addEventListener: (type, callback) => events.set(type, callback)
  };
  const context = vm.createContext({
    document, HTMLElement: class {}, customElements: { get: () => true },
    FormData: class {}, window: { Shopify: { routes: { root: '/ja/' } },
      setTimeout() {}, clearTimeout() {}, modeAtelierStrings: { added: 'Added', addError: '商品を追加できませんでした。もう一度お試しください。' } },
    fetch: async (url) => {
      requests.push(url);
      if (networkFailure) throw new TypeError('Failed to fetch');
      return url.endsWith('add.js')
        ? { ok, json: async () => ({ description: message }) }
        : { ok: refreshOk, status: refreshOk ? 200 : 503,
          json: async () => ({ item_count: count }) };
    }
  });
  vm.runInContext(source, context);
  events.get('DOMContentLoaded')();
  await events.get('submit')({ preventDefault() {} });
  assert.deepEqual(requests, networkFailure ? ['/ja/cart/add.js'] : ['/ja/cart/add.js', '/ja/cart.js']);
  assert.equal(button.disabled, false, 'form becomes usable after the response');
  assert.equal(notice.hidden, false);
  assert.equal(notice.dataset.state, ok ? 'success' : 'error');
  assert.equal(noticeText.textContent, networkFailure ? '商品を追加できませんでした。もう一度お試しください。' : ok ? 'Added' : message);
  assert.equal(badge.textContent, refreshOk && !networkFailure ? `(${count})` : '(0)');
}

await scenario({ ok: true, count: 2 });
await scenario({ ok: false, message: 'Only available stock was added', count: 8 });
await scenario({ ok: false, message: 'Already sold out', count: 0 });
await scenario({ ok: false, message: 'Already sold out', count: 0, refreshOk: false });
await scenario({ ok: false, networkFailure: true });
console.log('Ajax cart unit contracts PASS: locale route, success, partial 422, sold-out, refresh failure, localized network error');
