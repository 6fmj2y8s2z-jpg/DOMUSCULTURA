(() => {
  const controls = [...document.querySelectorAll('[data-filter]')];
  const products = [...document.querySelectorAll('[data-category]')].filter((product) => product.dataset.launch !== 'later');
  const status = document.querySelector('[data-catalogue-status]');

  if (!controls.length || !products.length) return;

  const showCategory = (category) => {
    let visible = 0;
    products.forEach((product) => {
      const matches = category === 'all' || product.dataset.category === category;
      product.hidden = !matches;
      if (matches) visible += 1;
    });

    controls.forEach((control) => {
      const selected = control.dataset.filter === category;
      control.classList.toggle('is-selected', selected);
      control.setAttribute('aria-pressed', String(selected));
    });

    if (status) status.textContent = `${visible} ${visible === 1 ? 'piece' : 'pieces'} shown`;
  };

  controls.forEach((control) => {
    control.setAttribute('aria-pressed', String(control.classList.contains('is-selected')));
    control.addEventListener('click', () => showCategory(control.dataset.filter));
  });
})();
