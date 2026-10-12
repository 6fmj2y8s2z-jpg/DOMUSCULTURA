# Domus Cultura — Pre-launch Changelog

## Implemented foundation

- Added structured launch data: `data/config.json`, `data/products.json`, `data/editions.json` and `data/sounds.json`.
- Rebuilt the public shop and collector pages around that data. Prices and checkout URLs remain unset until confirmed; the public call to action is the waitlist.
- Added a Vercel-ready `/api/subscribe` handler and reusable form client for contact, collector, events, submissions and booking forms. It does not store data until an email provider is connected.
- Added `book.html`, `certificate.html`, `imprint.html`, `privacy.html`, `terms.html`, `shipping-returns.html`, `404.html`, `robots.txt` and `sitemap.xml`.
- Replaced public internal/sample/test/mock language on the product, standards and edition routes.
- Kept unverified event listings unpublished; the events page links only to external cultural calendars and a Domus Cultura interest form.
- Added `docs/internal-notes.md` for supplier, payment and quality-control notes that must not appear publicly.

## Content still required before publishing

- `data/config.json`: `[CONFIRM: PLAUSIBLE_OR_UMAMI_SNIPPET]`, `[CONFIRM: PRODUCTION_AND_DELIVERY_TIME]`, `[CONFIRM: YEAR_AND_DESTINATION]`.
- `data/products.json`: `[CONFIRM: PRICE_CHF]`, materials, fit, production time, final product imagery and any `checkout_url` for every launch item.
- `data/editions.json`, `fine-art.html`, `edition-looking-up.html`: `[CONFIRM: HAHNEMUHLE_PHOTO_RAG_OR_FINEART_BARYTA]`, `[CONFIRM: WHITE_BORDER]`, `[CONFIRM: MOUNTING]`, edition size, remaining quantity, tranche prices, release date and framing SKUs.
- `book.html`: `[CONFIRM: BOOKING_AREA]`, short Juice+ biography, second mix, photo and live-clip assets.
- `about.html`: Ben Taleb biography, artist statement and approved portrait.
- `events.html`: `[CONFIRM: OPENING_SESSION_DATE_AND_LOCATION]` and any external event details after verification.
- `submissions.html`: `[CONFIRM: RESPONSE_TIME]`.
- `imprint.html`, `privacy.html`, `terms.html`, `shipping-returns.html`: legal publisher and address, editorial responsibility, analytics/privacy text, governing law, production/delivery promise and returns/refunds terms.
- `api/subscribe.js`: `[CONFIRM: EMAIL_PROVIDER]` and environment-variable integration.

## Not changed

- Vercel is still set to serve the maintenance page; `robots.txt` also blocks indexing until `domuscultura.ch` is ready.
- No order, shipping step or payment has been started with Gelato or WhiteWall.
