export default function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = request.body || {};
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return response.status(400).json({ error: 'A valid email is required' });
  }

  // Wire this handler to the selected email provider with environment variables.
  // It intentionally stores no personal data until that provider is configured.
  return response.status(202).json({ received: true, provider: '[CONFIRM: EMAIL_PROVIDER]' });
}
