const explorer = document.querySelector('#product-explorer');
const productTriggers = document.querySelectorAll('[data-product].product-card-trigger');
const viewButtons = document.querySelectorAll('[data-view-target]');
const productCopies = document.querySelectorAll('[data-product-copy]');
const productViews = document.querySelectorAll('[data-product-panel]');

function showView(product, view) {
  productViews.forEach((panel) => {
    const active = panel.dataset.productPanel === product && panel.dataset.view === view;
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });

  viewButtons.forEach((button) => {
    button.classList.toggle(
      'is-active',
      button.dataset.product === product && button.dataset.viewTarget === view,
    );
  });
}

function showProduct(product) {
  productCopies.forEach((copy) => {
    const active = copy.dataset.productCopy === product;
    copy.hidden = !active;
    copy.classList.toggle('is-active', active);
  });

  showView(product, product === 'print' ? 'image' : 'front');
}

productTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    showProduct(trigger.dataset.product);
    explorer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showView(button.dataset.product, button.dataset.viewTarget);
  });
});
