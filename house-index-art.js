(() => {
  const stage = document.querySelector('[data-house-art]');
  const images = [...document.querySelectorAll('[data-house-art] .house-art-image')];
  if (images.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // The first photograph is present at first paint. Only later changes dissolve.
  requestAnimationFrame(() => stage?.classList.add('is-ready'));
  let index = 0;
  window.setInterval(() => {
    images[index].classList.remove('is-active');
    index = (index + 1) % images.length;
    images[index].classList.add('is-active');
  }, 6500);
})();
