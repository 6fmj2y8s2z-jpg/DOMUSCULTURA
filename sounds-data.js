(() => {
  const stage = document.querySelector('[data-sound-stage]');
  if (!stage) return;

  const render = (episodes) => {
    const latest = episodes[0];
    if (!latest) return;
    const title = stage.querySelector('[data-sound-title]');
    const date = stage.querySelector('[data-sound-date]');
    const player = stage.querySelector('[data-sound-player]');
    if (title) title.textContent = latest.title;
    if (date) date.textContent = latest.date;
    if (player && latest.embed_url) {
      player.src = latest.embed_url;
      player.title = latest.title;
    }
  };

  fetch('data/sounds.json')
    .then((response) => response.ok ? response.json() : [])
    .then(render)
    .catch(() => {});
})();
