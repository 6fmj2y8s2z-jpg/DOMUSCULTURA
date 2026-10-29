const emailPattern = /^\S+@\S+\.\S+$/;

function clean(value, maxLength = 2000) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

async function addToButtondown(email, tags) {
  const providerResponse = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, tags }),
  });

  if (!providerResponse.ok && providerResponse.status !== 409) {
    throw new Error(`Newsletter provider returned ${providerResponse.status}`);
  }
}

async function sendToResend({ source, fields }) {
  const text = Object.entries(fields)
    .filter(([key]) => !['consent', 'source'].includes(key))
    .map(([key, value]) => `${key}: ${value || '—'}`)
    .join('\n');
  const providerResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.FORMS_FROM_EMAIL,
      to: [process.env.FORMS_TO_EMAIL],
      reply_to: fields.email,
      subject: `Domus Cultura — ${source}`,
      text,
    }),
  });
  if (!providerResponse.ok) throw new Error(`Mail provider returned ${providerResponse.status}`);
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const fields = Object.fromEntries(
    Object.entries(request.body || {}).map(([key, value]) => [key, clean(value)]),
  );
  const email = fields.email;
  const source = fields.source || 'website enquiry';
  if (!emailPattern.test(email)) {
    return response.status(400).json({ error: 'A valid email is required' });
  }

  const isNewsletter = ['collector-waitlist', 'events-list', 'waitlist', 'newsletter'].includes(source);
  if (isNewsletter && !['yes', 'on'].includes(fields.consent)) {
    return response.status(400).json({ error: 'Consent is required for newsletter subscriptions' });
  }

  try {
    if (isNewsletter && process.env.BUTTONDOWN_API_KEY) {
      await addToButtondown(email, ['domus-cultura', source]);
      return response.status(200).json({ received: true, subscription: true });
    }
    if (process.env.RESEND_API_KEY && process.env.FORMS_FROM_EMAIL && process.env.FORMS_TO_EMAIL) {
      await sendToResend({ source, fields });
      return response.status(200).json({ received: true, delivered: true });
    }
    return response.status(503).json({ error: 'Forms are not yet connected. Please email info@domuscultura.com.' });
  } catch (error) {
    console.error('Domus form delivery failed', error);
    return response.status(502).json({ error: 'We could not send this request. Please email info@domuscultura.com.' });
  }
}
