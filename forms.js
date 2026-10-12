(() => {
  let configuredEndpoint = document.documentElement.dataset.formsEndpoint || '/api/subscribe';
  const configuredForms = new WeakSet();

  const connectForms = () => document.querySelectorAll('[data-domus-form]').forEach((form) => {
    if (configuredForms.has(form)) return;
    configuredForms.add(form);
    const endpoint = form.dataset.endpoint || configuredEndpoint;
    form.action = endpoint;
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector('[data-form-status]');
      const button = form.querySelector('button[type="submit"]');
      if (button) button.disabled = true;
      if (status) status.textContent = 'Sending…';
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
        });
        if (!response.ok) throw new Error('Submission unavailable');
        form.reset();
        if (status) status.textContent = 'Thank you — your message has been received.';
        window.dispatchEvent(new CustomEvent('domus-form-submitted', { detail: { form: form.dataset.domusForm } }));
      } catch {
        if (status) status.textContent = 'This form is being connected. Please try again shortly.';
      } finally {
        if (button) button.disabled = false;
      }
    });
  });

  fetch('data/config.json')
    .then((response) => response.ok ? response.json() : null)
    .then((config) => {
      if (config?.forms_endpoint) configuredEndpoint = config.forms_endpoint;
      connectForms();
    })
    .catch(connectForms);

  window.addEventListener('domus-forms-ready', connectForms);
})();
