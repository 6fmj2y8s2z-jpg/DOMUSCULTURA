const submissionForm = document.querySelector('#artist-submission-form');
const submissionStatus = document.querySelector('#submission-status');

submissionForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!submissionForm.reportValidity()) return;

  const form = new FormData(submissionForm);
  const subject = `Artist submission — ${form.get('artist')} — ${form.get('project')}`;
  const body = [
    'DOMUS CULTURA — ARTIST SUBMISSION',
    '',
    `Artist / collective: ${form.get('artist')}`,
    `Email: ${form.get('email')}`,
    `Location: ${form.get('location')}`,
    `Website / Instagram: ${form.get('social')}`,
    `Practice: ${form.get('practice')}`,
    `Project: ${form.get('project')}`,
    `Portfolio: ${form.get('portfolio')}`,
    '',
    'ABOUT THE WORK',
    form.get('statement'),
    '',
    'WHY DOMUS CULTURA',
    form.get('fit'),
  ].join('\n');

  const readyMessage = 'Your email application is ready. Review it in your email app, then send.';
  submissionStatus.textContent = window.domusTranslate ? window.domusTranslate(readyMessage) : readyMessage;
  window.location.href = `mailto:hello@domuscultura.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
