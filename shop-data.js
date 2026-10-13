(() => {
  const grid = document.querySelector('[data-products-grid]');
  const status = document.querySelector('[data-catalogue-status]');
  if (!grid) return;

  // Local file previews cannot always fetch JSON. Keep this minimal visual
  // fallback in sync with data/products.json; the network data remains the
  // authoritative release record on Vercel.
  const fallbackProducts = [
    { slug: 'juice-plus-chrome-tee', name: 'Juice+ Chrome Tee', status: 'launch', category: 'apparel', price_chf: null, images: ['assets/merch-mockups/01-tshirt-courtyard-black.png', 'assets/merch-mockups/02-tshirt-station-cream.png'], alt: 'Juice+ chrome T-shirt — final artwork [CONFIRM]', material: '[CONFIRM: MATERIAL_AND_WEIGHT]' },
    { slug: 'photographic-tote', name: 'Photographic Tote', status: 'launch', category: 'objects', price_chf: null, images: ['assets/merch-mockups/17-tote-courtyard-black.png', 'assets/merch-mockups/18-tote-station-cream.png'], alt: 'Photographic tote with Ben Taleb image — final artwork [CONFIRM]', material: '[CONFIRM: MATERIAL_AND_WEIGHT]' },
    { slug: 'domus-cap', name: 'Domus Cap', status: 'launch', category: 'objects', price_chf: null, images: ['assets/merch-mockups/22-cap-hunter-urban-front.png', 'assets/merch-mockups/23-cap-hunter-urban-rear.png'], alt: 'Domus cap with one-colour embroidered mark', material: '[CONFIRM: MATERIAL_AND_WEIGHT]' },
    { slug: 'postcard-set', name: 'Postcard Set', status: 'launch', category: 'objects', price_chf: null, images: ['assets/merch-mockups/40-postcards-capsule-series.png', 'assets/merch-mockups/41-postcards-capsule-scale.png'], alt: 'Domus Cultura photographic postcard set', material: '[CONFIRM: PAPER_STOCK]' },
    { slug: 'sticker-pack', name: 'Sticker Pack', status: 'launch', category: 'objects', price_chf: null, images: ['assets/merch-mockups/domus-essentials-objects-v2.png'], alt: 'Domus Cultura sticker pack — supplier and artwork [CONFIRM]', material: '[CONFIRM: MATERIAL]' }
  ];

  const price = (value) => Number.isFinite(value) ? `CHF ${value}` : '[CONFIRM: PRICE_CHF]';
  const card = (product, index) => {
    const image = product.images?.[0] || 'assets/merch-mockups/domus-essentials-objects-v2.png';
    const hover = product.images?.[1] || image;
    const href = product.checkout_url || 'contact.html#waitlist';
    const action = product.checkout_url ? 'Shop now ↗' : 'Join the waitlist ↗';
    return `<article class="shop-product${index === 0 ? ' shop-product-feature' : ''}" data-category="${product.category}">
      <a href="${href}" aria-label="${product.name}">
        <img src="${image}" data-hover-src="${hover}" alt="${product.alt || `${product.name} [CONFIRM: ALT_TEXT]`}" loading="lazy" />
        <div><span>${product.category === 'apparel' ? 'Apparel' : 'Object'} / launch</span><h3>${product.name}</h3>
        <p>${product.material || '[CONFIRM: MATERIAL_AND_WEIGHT]'}</p><b>${price(product.price_chf)} · ${action}</b></div>
      </a></article>`;
  };

  const render = (products) => {
    const launch = products.filter((product) => product.status === 'launch');
    grid.innerHTML = launch.map(card).join('');
    if (status) status.textContent = `${launch.length} pieces / current release selection`;
    document.querySelectorAll('[data-filter]').forEach((control) => {
      const category = control.dataset.filter;
      const count = category === 'all'
        ? launch.length
        : launch.filter((product) => product.category === category).length;
      const counter = control.querySelector('i');
      if (counter) counter.textContent = String(count).padStart(2, '0');
    });
    grid.querySelectorAll('img[data-hover-src]').forEach((image) => {
      const original = image.src;
      image.addEventListener('pointerenter', () => { image.src = image.dataset.hoverSrc; });
      image.addEventListener('pointerleave', () => { image.src = original; });
    });
    document.querySelectorAll('[data-filter]').forEach((control) => {
      control.onclick = () => {
        const category = control.dataset.filter;
        let count = 0;
        grid.querySelectorAll('[data-category]').forEach((item) => {
          const visible = category === 'all' || item.dataset.category === category;
          item.hidden = !visible;
          if (visible) count += 1;
        });
        document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('is-selected', item === control));
        if (status) status.textContent = `${count} ${count === 1 ? 'piece' : 'pieces'} / current release selection`;
      };
    });
  };

  fetch('data/products.json')
    .then((response) => response.ok ? response.json() : Promise.reject(response))
    .then(render)
    .catch(() => render(fallbackProducts));
})();
