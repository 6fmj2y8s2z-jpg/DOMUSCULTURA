(() => {
  const storeUrl = 'https://0zqajf-pi.myshopify.com';
  const checkoutEnabled = false;
  const collectionHero = document.querySelector('.merch-hero-study > img');
  if (collectionHero) {
    collectionHero.src = 'assets/merch-mockups/domus-essentials-editorial-hero-v5-instagram.png';
    collectionHero.alt = 'Two people in a concrete urban setting wearing a black Domus Cultura hoodie and navy crewneck, with a green cap and black canvas tote';
    const caption = collectionHero.closest('figure')?.querySelector('figcaption');
    if (caption) caption.textContent = 'Capsule 01 / urban editorial / fit, fabric, movement';
  }
  const products = [
    ['domus-house-mark-t-shirt', '59540727628101', 'Gelato'],
    ['domus-good-morning-world-crewneck', '59540732182853', 'Gelato'],
    ['domus-culture-in-motion-hoodie', '59540732248389', 'Gelato'],
    ['domus-dc-hunter-cap', '59540732346693', 'Gelato'],
    ['domus-courtyard-canvas-tote', '59540732543301', 'Gelato'],
    ['domus-house-mark-ceramic-mug', '59540733264197', 'Gelato'],
    ['domus-field-notes-postcard-set', '59540733329733', 'Gelato'],
  ].map(([handle, variantId, provider]) => ({ handle, variantId, provider }));

  document.querySelectorAll('a[href^="mailto:hello@domuscultura.ch"]').forEach((link) => {
    link.href = link.href.replace('hello@domuscultura.ch', 'info@domuscultura.com');
    link.textContent = link.textContent.replace('hello@domuscultura.ch', 'info@domuscultura.com');
  });

  document.querySelectorAll('.merch-launch-grid article').forEach((card, index) => {
    const product = products[index];
    const detail = card.querySelector(':scope > div:last-child');
    if (!product || !detail) return;

    card.dataset.shopifyHandle = product.handle;
    const checkout = document.createElement('a');
    checkout.className = 'shopify-checkout';
    checkout.dataset.provider = product.provider;
    checkout.textContent = checkoutEnabled
      ? 'Checkout with Shopify ↗'
      : `${product.provider} connected / sample + payments approval pending`;

    if (checkoutEnabled) {
      checkout.href = `${storeUrl}/cart/${product.variantId}:1`;
    } else {
      checkout.href = '#shopify-sample-pending';
      checkout.setAttribute('aria-disabled', 'true');
      checkout.addEventListener('click', (event) => event.preventDefault());
    }
    detail.append(checkout);
  });
})();
