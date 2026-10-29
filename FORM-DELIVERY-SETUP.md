# Domus Cultura — form and newsletter delivery

The Vercel endpoint at `/api/subscribe` is deliberately inactive until its provider secrets are set. It never reports a request as delivered when it was not delivered.

## Recommended split

- **Buttondown** stores consented waitlist and events-list subscribers.
- **Resend** forwards contact and booking requests to the Domus Cultura mailbox.

This separates marketing consent from one-to-one enquiries and keeps public code free of secrets.

## Vercel environment variables

Add these in the Vercel project for Production, Preview and Development as appropriate:

```text
BUTTONDOWN_API_KEY=...
RESEND_API_KEY=...
FORMS_FROM_EMAIL=Domus Cultura <forms@domuscultura.com>
FORMS_TO_EMAIL=info@domuscultura.com
```

`FORMS_FROM_EMAIL` must be a verified Resend sending identity. Configure SPF and DKIM for the sending subdomain before turning on production delivery.

## Behaviour

- Waitlist, newsletter and events-list forms require explicit consent and create/update a Buttondown subscriber.
- Contact and booking forms are delivered to `info@domuscultura.com` through Resend.
- Without valid provider configuration, forms return an honest error and show the public contact email rather than pretending the request was received.

## Before enabling

1. Confirm the privacy notice names the selected providers and retention policy.
2. Send one test from each form type and verify mailbox delivery, subscriber tagging and unsubscribe links.
3. Confirm the public sender address is active in Proton Mail and that replies reach the inbox.
