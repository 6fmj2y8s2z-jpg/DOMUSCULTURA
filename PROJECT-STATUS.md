# Domus Cultura — project status

Last audited: 28 September 2026

This is the operational handoff for work in Codex, Claude or another coding environment. It contains no passwords, tokens or private account credentials. Never commit secrets to this repository.

## Live system

- Production: https://domuscultura.vercel.app/
- GitHub: `6fmj2y8s2z-jpg/DOMUSCULTURA`
- Deployment: Vercel deploys the `main` branch automatically.
- Commerce direction: Shopify checkout in CHF, Gelato for print-on-demand merchandise.
- Fine-art direction: three unframed formats, one shared edition of 100 per photograph, numbered certificate.
- Languages: English, French, German and Spanish.

## What is already working

- High-end black editorial design with red, pink and green accents.
- Larger Domus Cultura identity and the requested navigation: Sounds, Art Shop, Art Journal, Events and Art.
- Click-through editorial architecture: the homepage is now a concise front page linking to separate `sounds.html`, `shop.html`, `journal.html`, `events.html` and `art.html` channels.
- A dedicated long-form journal story template begins with `story-inside-the-image.html`; future journal entries should use the same article structure.
- Portfolio and permission-linked Instagram imagery.
- SoundCloud player for Juice+.
- Ten responsive Gelato-oriented merchandise concepts with mock variants and a test cart.
- Three-view product study for merchandise and prints.
- Artist-submission page and multilingual interface.
- Responsive layouts for desktop and mobile.

## Prototype-only systems

- The cart does not take payment and is not connected to Shopify.
- The newsletter uses the visitor's email application; it does not store subscribers.
- Artist submissions use the visitor's email application; there is no form database or upload service.
- Edition availability is static; there is no shared counter across the three sizes.
- Merchandise designs are visual concepts, not production-ready Gelato artwork files.
- No analytics, cookie/consent configuration, shipping rules, taxes or legal policies are connected.

## Fine-art launch specification

| Size | Retail | Gelato product cost | Swiss shipping | Status |
|---|---:|---:|---:|---|
| 30 × 40 cm | CHF 200 | specialist quote required | — | sample required |
| 45 × 60 cm | CHF 300 | specialist quote required | — | sample required |
| 60 × 80 cm | CHF 600 | specialist quote required | — | sample required |

The required paper is Hahnemühle Photo Rag 308 gsm, 100% cotton, printed with archival pigment inks. Gelato's current Fine Art Poster is museum-quality but only 200 gsm, so it does not meet the 300+ gsm requirement. Gelato remains the merchandise fulfiller; limited photography needs a specialist fine-art route such as a Hahnemühle Certified Studio/My Art Registry or a tested Prodigi Hahnemühle workflow.

The edition limit is 100 per photograph across all sizes combined—not 100 per size. Gelato cannot enforce that rule by itself.

## Critical asset warning

The images in `assets/portfolio/` are web previews, generally around 625–670 × 850 px. They are suitable for the website but too small for production printing. Before creating a Gelato product, export the original photograph at the final aspect ratio, full print resolution, embedded colour profile and with no website compression. Keep production masters outside the public repository.

## Launch blockers, in order

1. Select three launch photographs and locate their original high-resolution files.
2. Order one proof in every print size and one sample of each first-wave merch item.
3. Decide whether limited editions use Gelato plus a separate certificate workflow, or a Hahnemühle Certified Studio/My Art Registry route.
4. Create the real Shopify products, policies, shipping zones, VAT/tax settings and CHF checkout.
5. Connect Gelato to Shopify and complete one private end-to-end test order.
6. Implement an edition registry that reserves and sells one shared number across all size variants.
7. Replace mailto newsletter/submission flows with a real consent-based form service.
8. Add privacy, terms, returns, shipping and edition-policy pages reviewed for Switzerland.
9. Add analytics and conversion events only after consent requirements are decided.
10. Connect a custom domain and complete final accessibility, mobile and checkout QA.

## Next build milestone

Build the real commerce foundation, not more mock products: connect Shopify, create one private photography product and two merchandise products, keep checkout password-protected, and run test orders before public release.
