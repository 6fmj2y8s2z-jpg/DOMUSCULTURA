const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Keep every editorial route on the same public map.
const domusRooms = [
  ['Art', 'art.html'],
  ['Journal', 'journal.html'],
  ['Shop', 'shop.html'],
  ['Sounds', 'sounds.html'],
  ['Events', 'events.html'],
  ['About', 'about.html'],
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
  const book = document.createElement('a');
  book.href = 'book.html';
  book.textContent = 'Book Juice+';
  book.className = 'nav-book';
  nav.append(book);
});

if (document.body.classList.contains('fine-art-page')) {
  const collectorStyles = document.createElement('link');
  collectorStyles.rel = 'stylesheet';
  collectorStyles.href = 'collector-print-presentation.css?v=20261005';
  document.head.append(collectorStyles);
}

// Every public Domus Cultura route shares the same restrained atelier system.
// Kept here rather than copied into each editorial page so the art direction
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

document.querySelectorAll('footer').forEach((footer) => {
  if (footer.querySelector('[data-legal-links]')) return;
  const legal = document.createElement('span');
  legal.dataset.legalLinks = 'true';
  legal.innerHTML = '<a href="imprint.html">Imprint</a><br><a href="privacy.html">Privacy</a><br><a href="terms.html">Terms</a><br><a href="shipping-returns.html">Shipping &amp; returns</a>';
  footer.append(legal);
});
