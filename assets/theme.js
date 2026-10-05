document.documentElement.classList.remove('no-js');

class ModeAtelierPredictiveSearch extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('[data-predictive-search-input]');
    this.results = this.querySelector('[data-predictive-search-results]');
    this.endpoint = this.dataset.url;
    this.abortController = null;
    this.debounceTimer = null;

    if (!this.input || !this.results || !this.endpoint) return;

    this.input.addEventListener('input', () => this.scheduleSearch());
    this.input.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.close();
    });
    this.addEventListener('focusout', (event) => {
      if (!this.contains(event.relatedTarget)) this.close();
    });
  }

  scheduleSearch() {
    window.clearTimeout(this.debounceTimer);
    this.debounceTimer = window.setTimeout(() => this.search(), 250);
  }

  async search() {
    const term = this.input.value.trim();

    if (!term) {
      this.close();
      return;
    }

    this.abortController?.abort();
    this.abortController = new AbortController();

    const params = new URLSearchParams({
      q: term,
      'resources[type]': 'query,product,collection,page',
      'resources[limit]': '6',
      'resources[options][unavailable_products]': 'last',
      section_id: 'predictive-search'
    });

    try {
      const response = await fetch(`${this.endpoint}?${params.toString()}`, {
        signal: this.abortController.signal
      });

      if (!response.ok) throw new Error(`Predictive search failed: ${response.status}`);

      const text = await response.text();
      const doc = new DOMParser().parseFromString(text, 'text/html');
      const section = doc.querySelector('#shopify-section-predictive-search');

      if (!section) {
        this.close();
        return;
      }

      this.results.innerHTML = section.innerHTML;
      this.open();
    } catch (error) {
      if (error.name !== 'AbortError') this.close();
    }
  }

  open() {
    this.results.hidden = false;
    this.input.setAttribute('aria-expanded', 'true');
  }

  close() {
    this.results.hidden = true;
    this.results.innerHTML = '';
    this.input.setAttribute('aria-expanded', 'false');
  }
}

if (!customElements.get('predictive-search')) {
  customElements.define('predictive-search', ModeAtelierPredictiveSearch);
}

const showCartNotification = (message, isError = false) => {
  const notification = document.querySelector('[data-cart-notification]');
  const messageElement = notification?.querySelector('[data-cart-notification-message]');
  if (!notification || !messageElement) return;

  messageElement.textContent = message;
  notification.dataset.state = isError ? 'error' : 'success';
  notification.hidden = false;

  window.clearTimeout(showCartNotification.timeout);
  showCartNotification.timeout = window.setTimeout(() => {
    notification.hidden = true;
  }, 5000);
};

const refreshCartCount = async () => {
  const response = await fetch(`${window.Shopify.routes.root}cart.js`, {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) throw new Error(`Cart refresh failed: ${response.status}`);

  const cart = await response.json();
  document.querySelectorAll('[data-cart-count]').forEach((count) => {
    count.textContent = `(${cart.item_count})`;
  });

  return cart;
};

const enableAjaxProductForms = () => {
  document.querySelectorAll('[data-ajax-product-form]').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const button = form.querySelector('[data-add-to-cart]');
      const buttonText = form.querySelector('[data-add-to-cart-text]');
      if (!button || button.disabled) return;

      const originalText = buttonText?.textContent || '';
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      if (buttonText) buttonText.textContent = window.modeAtelierStrings?.adding || 'Adding…';
      let customerError;

      try {
        const response = await fetch(`${window.Shopify.routes.root}cart/add.js`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form)
        });

        const payload = await response.json();

        if (!response.ok) {
          customerError = payload.description || payload.message;
          // Shopify can partially add available stock before returning a 422.
          // Keep the badge consistent with the actual cart on that error path.
          await refreshCartCount().catch(() => {});
          throw new Error(payload.description || payload.message || 'Unable to add item');
        }

        await refreshCartCount();
        showCartNotification(window.modeAtelierStrings?.added || 'Added to bag.');
      } catch {
        showCartNotification(
          customerError || window.modeAtelierStrings?.addError || 'Unable to add this item.',
          true
        );
      } finally {
        button.removeAttribute('aria-busy');
        const selectedOption = form.querySelector('[data-variant-select]')?.selectedOptions?.[0];
        const available = selectedOption ? selectedOption.dataset.available === 'true' : true;
        button.disabled = !available;
        if (buttonText) {
          buttonText.textContent = available
            ? window.modeAtelierStrings?.addToCart || originalText
            : window.modeAtelierStrings?.soldOut || 'Sold out';
        }
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      menu.hidden = isOpen;
    });
  }

  document.querySelectorAll('[data-cart-notification-close]').forEach((button) => {
    button.addEventListener('click', () => {
      const notification = button.closest('[data-cart-notification]');
      if (notification) notification.hidden = true;
    });
  });

  document.querySelectorAll('[data-product-section]').forEach((section) => {
    const select = section.querySelector('[data-variant-select]');
    const button = section.querySelector('[data-add-to-cart]');
    const buttonText = section.querySelector('[data-add-to-cart-text]');
    const price = section.querySelector('[data-product-price]');

    if (!select || !button || !buttonText) return;

    select.addEventListener('change', () => {
      const option = select.options[select.selectedIndex];
      const available = option.dataset.available === 'true';

      button.disabled = !available;
      buttonText.textContent = available
        ? window.modeAtelierStrings?.addToCart || 'Add to cart'
        : window.modeAtelierStrings?.soldOut || 'Sold out';

      if (price && option.dataset.price) {
        price.textContent = option.dataset.price;
      }

      const productUrl = section.dataset.productUrl;
      if (productUrl && window.history?.replaceState) {
        const url = new URL(productUrl, window.location.origin);
        url.searchParams.set('variant', option.value);
        window.history.replaceState({}, '', url);
      }
    });
  });

  enableAjaxProductForms();

  document.querySelectorAll('[data-product-recommendations]').forEach((section) => {
    if (!section.dataset.url || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      observer.disconnect();

      fetch(section.dataset.url)
        .then((response) => {
          if (!response.ok) throw new Error(`Recommendations request failed: ${response.status}`);
          return response.text();
        })
        .then((text) => {
          const html = document.createElement('div');
          html.innerHTML = text;
          const rendered = html.querySelector('[data-product-recommendations]');
          if (rendered?.innerHTML.trim()) {
            section.innerHTML = rendered.innerHTML;
          }
        })
        .catch(() => {
          section.remove();
        });
    }, { rootMargin: '0px 0px 250px 0px' });

    observer.observe(section);
  });
});
