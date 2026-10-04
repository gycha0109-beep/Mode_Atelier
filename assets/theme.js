document.documentElement.classList.remove('no-js');

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
