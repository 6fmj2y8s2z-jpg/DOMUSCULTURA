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

const cartTrigger = document.querySelector('.mock-cart-trigger');
const cart = document.querySelector('#mock-cart');
const cartBackdrop = document.querySelector('.mock-cart-backdrop');
const cartItems = document.querySelector('[data-cart-items]');
const cartCount = document.querySelector('[data-cart-count]');
const cartTotal = document.querySelector('[data-cart-total]');
const mockItems = [];

const translate = (text) => window.domusTranslate ? window.domusTranslate(text) : text;
const money = (amount) => `CHF ${amount}`;

function openCart() {
  if (!cart || !cartBackdrop) return;
  cart.hidden = false;
  cartBackdrop.hidden = false;
  cartTrigger?.setAttribute('aria-expanded', 'true');
  document.body.classList.add('cart-is-open');
}

function closeCart() {
  if (!cart || !cartBackdrop) return;
  cart.hidden = true;
  cartBackdrop.hidden = true;
  cartTrigger?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('cart-is-open');
}

function renderCart() {
  if (!cartItems || !cartCount || !cartTotal) return;
  cartItems.replaceChildren();
  if (!mockItems.length) {
    const empty = document.createElement('p');
    empty.textContent = translate('Your cart is empty.');
    cartItems.append(empty);
  } else {
    mockItems.forEach((item, index) => {
      const row = document.createElement('article');
      const copy = document.createElement('div');
      const name = document.createElement('strong');
      const variant = document.createElement('span');
      const price = document.createElement('b');
      const remove = document.createElement('button');
      name.textContent = item.product;
      variant.textContent = item.variant;
      price.textContent = money(item.price);
      remove.type = 'button';
      remove.dataset.removeMock = String(index);
      remove.setAttribute('aria-label', translate('Remove item'));
      remove.textContent = '×';
      copy.append(name, variant);
      row.append(copy, price, remove);
      cartItems.append(row);
    });
  }
  cartCount.textContent = String(mockItems.length);
  cartTotal.textContent = money(mockItems.reduce((sum, item) => sum + item.price, 0));
}

document.querySelectorAll('.purchase-mock').forEach((purchase) => {
  const select = purchase.querySelector('[data-product-variant]');
  const price = purchase.querySelector('[data-mock-price]');
  select?.addEventListener('change', () => {
    price.textContent = money(Number(select.selectedOptions[0].dataset.price));
  });
  purchase.querySelector('[data-add-mock]')?.addEventListener('click', () => {
    const option = select.selectedOptions[0];
    mockItems.push({
      product: purchase.dataset.shopProduct,
      variant: option.textContent.trim(),
      price: Number(option.dataset.price),
    });
    renderCart();
    openCart();
  });
});

cartTrigger?.addEventListener('click', openCart);
document.querySelectorAll('[data-close-cart]').forEach((button) => button.addEventListener('click', closeCart));
cartItems?.addEventListener('click', (event) => {
  const remove = event.target.closest('[data-remove-mock]');
  if (!remove) return;
  mockItems.splice(Number(remove.dataset.removeMock), 1);
  renderCart();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeCart();
});
window.addEventListener('domus-language-change', renderCart);
