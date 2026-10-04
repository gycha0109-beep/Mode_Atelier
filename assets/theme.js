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

    if (!select || !button || !buttonText) return;

    select.addEventListener('change', () => {
      const option = select.options[select.selectedIndex];
      const available = option.dataset.available === 'true';
      button.disabled = !available;
      buttonText.textContent = available
        ? window.modeAtelierStrings?.addToCart || 'Add to cart'
        : window.modeAtelierStrings?.soldOut || 'Sold out';
    });
  });
});
