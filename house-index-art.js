(() => {
  const images = [...document.querySelectorAll('[data-house-art] .house-art-image')];
  if (images.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let index = 0;
  window.setInterval(() => {
    images[index].classList.remove('is-active');
    index = (index + 1) % images.length;
    images[index].classList.add('is-active');
  }, 6500);
})();
