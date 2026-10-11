(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const candidates = [
    'main > section:not(.page-hero):not(.merch-hero):not(.commerce-hero):not(.fine-art-hero)',
    '.article-lead-image',
    '.feature-card',
    '.art-grid figure',
    '.merch-launch-grid article',
    '.fine-art-grid > a',
  ].join(',');
  const targets = [...document.querySelectorAll(candidates)];
  if (!targets.length) return;

  document.documentElement.classList.add('cinematic-motion');
  targets.forEach((target, index) => {
    target.dataset.cinematicReveal = '';
    target.style.setProperty('--cinematic-delay', `${Math.min(index % 4, 3) * 55}ms`);
  });

  const reveal = (target) => target.classList.add('is-in-frame');
  const initialViewport = window.innerHeight * .88;
  const pending = targets.filter((target) => {
    if (target.getBoundingClientRect().top < initialViewport) {
      reveal(target);
      return false;
    }
    return true;
  });

  if (!('IntersectionObserver' in window)) {
    pending.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: .08, rootMargin: '0px 0px -8% 0px' });

  pending.forEach((target) => observer.observe(target));

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const planes = document.querySelectorAll([
    '.house-portrait',
    '.page-hero figure',
    '.fine-art-hero figure',
    '.merch-hero-study',
    '.commerce-hero > .commerce-image',
    '.journal-live-feed__latest',
  ].join(','));

  planes.forEach((plane) => {
    let frame = 0;
    let rotateX = 0;
    let rotateY = 0;
    plane.classList.add('dc-gallery-plane');

    const paint = () => {
      plane.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      frame = 0;
    };
    const schedulePaint = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    plane.addEventListener('pointerenter', () => plane.classList.add('is-tilting'));
    plane.addEventListener('pointermove', (event) => {
      const box = plane.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - .5;
      const y = (event.clientY - box.top) / box.height - .5;
      rotateX = Math.max(-2.2, Math.min(2.2, y * -4.4));
      rotateY = Math.max(-2.2, Math.min(2.2, x * 4.4));
      schedulePaint();
    });
    plane.addEventListener('pointerleave', () => {
      rotateX = 0;
      rotateY = 0;
      plane.classList.remove('is-tilting');
      schedulePaint();
    });
  });
})();
