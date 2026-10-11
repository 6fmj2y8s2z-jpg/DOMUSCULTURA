(() => {
  const feed = document.getElementById('curator-feed-default-feed-layout');
  const image = document.getElementById('journal-live-feed-image');
  const link = document.getElementById('journal-live-feed-link');
  const status = document.getElementById('journal-live-feed-status');

  if (!feed || !image || !link || !status) return;

  const showLatest = () => {
    const postImage = [...feed.querySelectorAll('img')].find((candidate) => candidate.currentSrc || candidate.src);
    if (!postImage) return false;

    const postLink = postImage.closest('a[href*="instagram.com/p/"]') || feed.querySelector('a[href*="instagram.com/p/"]');
    image.src = postImage.currentSrc || postImage.src;
    image.alt = postImage.alt || 'Latest image from Domus Cultura on Instagram';
    if (postLink) link.href = postLink.href;

    image.addEventListener('load', () => {
      image.classList.add('is-loaded');
      status.hidden = true;
    }, { once: true });

    if (image.complete) {
      image.classList.add('is-loaded');
      status.hidden = true;
    }
    return true;
  };

  const observer = new MutationObserver(() => {
    if (showLatest()) observer.disconnect();
  });

  observer.observe(feed, { childList: true, subtree: true });
  showLatest();
})();
