const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Keep the cultural routes legible as one house. The House Index is the
// top-level map; each editorial route uses the same five-room navigation.
const domusRooms = [
  ['Art', 'art.html'],
  ['Objects', 'collection-domus-essentials.html'],
  ['Sound', 'sounds.html'],
  ['Journal', 'journal.html'],
  ['Events', 'events.html'],
];
const currentRoom = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.editorial-nav').forEach((nav) => {
  nav.replaceChildren(...domusRooms.map(([label, href]) => {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;
    if (href === currentRoom) link.classList.add('is-current');
    return link;
  }));
});

if (document.body.classList.contains('fine-art-page')) {
  const collectorStyles = document.createElement('link');
  collectorStyles.rel = 'stylesheet';
  collectorStyles.href = 'collector-print-presentation.css?v=20261005';
  document.head.append(collectorStyles);
}

// Every public Domus Cultura route shares the same restrained atelier system.
// Kept here rather than copied into each editorial prototype so the art direction
// stays coherent as new pages are added.
const domusPage = document.querySelector(
  '.portal-home, .fine-art-page, .commerce-page, .retail-page, .editorial-header, .submissions-page'
);
if (domusPage && !document.querySelector('link[data-domus-atelier]')) {
  const atelierStyles = document.createElement('link');
  atelierStyles.rel = 'stylesheet';
  atelierStyles.href = 'atelier-art-direction.css?v=20261005';
  atelierStyles.dataset.domusAtelier = 'true';
  document.head.append(atelierStyles);
}

// Use the collector desk address consistently while legacy page copy is being
// retired. This leaves non-email links and all checkout behaviour untouched.
document.querySelectorAll('a[href^="mailto:hello@domuscultura.ch"]').forEach((link) => {
  link.href = link.href.replace('hello@domuscultura.ch', 'info@domuscultura.com');
  link.textContent = link.textContent.replace('hello@domuscultura.ch', 'info@domuscultura.com');
});

// The original Edition 001 page remains a collector preview, not a product claim.
// Its public call-to-action therefore leads to the proof-gated art programme.
if (document.body.classList.contains('art-page')) {
  const editionLink = document.querySelector('.channel-strip a');
  if (editionLink) {
    editionLink.href = 'fine-art.html';
    editionLink.textContent = 'View collector programme ↗';
  }
}
