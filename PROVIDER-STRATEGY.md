# Domus Cultura — fulfilment and revenue strategy

Research reviewed 25 September 2026. Provider claims and availability must be rechecked when accounts are opened and samples are ordered.

## Decision

### Merchandise: start with Gelato

Gelato is the best first partner for Domus Cultura's zero-inventory merchandise because it has production partners in Switzerland and 18 European countries, integrates with Shopify and custom stores, and supports apparel, drinkware, wall art, cards and accessories. This gives Swiss buyers a chance of domestic production and European buyers a chance of EU production. The exact factory cannot be selected and some products may be routed internationally, so each launch SKU must be checked in the product catalogue.

Use Printful as the backup for a cap, embroidery, garment or branding option that Gelato cannot fulfil to the required quality. Printful operates its own European facilities in Latvia and Spain and offers stronger custom-label and pack-in controls, but its production location also cannot be manually selected.

TPOP is a good ethical French alternative for a smaller organic collection and plastic-free presentation. It is not the first choice because Domus Cultura needs one supplier with the widest mix of garments, caps, mugs and paper goods at launch.

### Fine-art photography: Hahnemühle My Art Registry first

Hahnemühle My Art Registry 2.0 is the strongest first choice for the limited photography. Hahnemühle's current platform supports on-demand fine-art print sales through Certified Studio Platinum partners and pairs each print with a Certificate of Authenticity and matching serialised hologram. That is a better fit for a single edition of 100 than an ordinary poster fulfiller. Domus Cultura can keep its own three-view product presentation and send the final Collect action to the verified My Art Registry purchase route.

Confirm during onboarding whether My Art Registry offers a supported API or embedded checkout. Its public information establishes its own marketplace and production workflow, but not an embeddable storefront API.

Prodigi is the best fallback for a direct Shopify/API workflow. Its Hahnemühle Photo Rag product is 308 gsm, 100% cotton, natural white and printed with pigment-based giclée inks. It is fulfilled in the EU, UK, US and Australia, ships worldwide and offers 3D mockups. However, Prodigi does not replace edition governance or publicly promise application of the matching Hahnemühle hologram to the reverse of each print. Do not direct-ship limited editions through Prodigi until a signed certificate, matching hologram and shared edition-counter workflow have been confirmed with the supplier.

## Edition-of-100 rule

The edition belongs to the photograph, not to its size.

- One database record per photograph: `edition_limit = 100`, `sold = 0`, `reserved = 0`.
- Small, medium and large are price/size variants drawing from the same shared stock of 100.
- Checkout reserves the next available number atomically; successful payment converts the reservation to sold.
- Every order stores artwork ID, edition number, size, production provider, print file version and certificate/hologram number.
- The provider must never be the source of truth for edition availability because it sees separate size SKUs.
- Each print is supplied unframed, signed or approved by Ben Taleb, with its matching Hahnemühle certificate.

Until shared inventory is technically connected, the website may collect interest but must not accept payment for limited editions.

## Store architecture

1. Keep the editorial experience on Vercel.
2. Use Shopify as the commerce and payment back end in CHF.
3. Connect Gelato to the merchandise products.
4. Route the fine-art Collect action to My Art Registry after artist/studio onboarding; keep Prodigi as the tested fallback if its certificate workflow is approved.
5. Use a small edition service/database to pool the three print variants under one limit of 100.
6. Every product page shows at least three views: complete object/image, reverse or material detail, and scale/context.
7. Show fulfilment country, production time, shipping estimate, returns rule and final landed price before payment.

## Target unit economics

These are decision limits, not supplier quotations. Approve a product only after a physical sample and a test shipment to Switzerland.

| Offer | Suggested retail | Maximum landed cost* | Target contribution |
|---|---:|---:|---:|
| Premium T-shirt | CHF 55–65 | CHF 32 | CHF 23–33 |
| Heavy sweatshirt | CHF 95–120 | CHF 65 | CHF 30–55 |
| Embroidered cap | CHF 45–60 | CHF 32 | CHF 13–28 |
| Mug | CHF 28–35 | CHF 22 | CHF 6–13 |
| Postcard set | CHF 18–25 | CHF 10 | CHF 8–15 |
| Small photo edition | CHF 180–200 | CHF 70 | CHF 110–130 |
| Medium photo edition | CHF 380–450 | CHF 130 | CHF 250–320 |
| Large photo edition | CHF 700–800 | CHF 240 | CHF 460–560 |

*Production, packaging, fulfilment shipping subsidy, payment fee, damaged-order allowance and certificate handling; excludes VAT and income tax.

## Revenue model

Domus Cultura should not depend on low-margin merchandise alone.

- 45% limited photography and commissioned work — highest margin and strongest Ben Taleb value.
- 25% merchandise and artist collaborations — audience entry product and repeat purchases.
- 20% photography, art placement and cultural-direction services — cash-flow engine.
- 10% ticketed visits, Juice+ events, zines and partnerships — community and acquisition.

### First 90 days

- Order samples: one premium T-shirt, one sweatshirt, one cap, one mug and one Hahnemühle print in every launch size.
- Launch only the best two merchandise objects and three photographs.
- Publish one journal story and one Juice+ selection weekly; each ends with one clear shop or mailing-list action.
- Open a seven-day private collector window before every public print release.
- Run one monthly gallery/atelier visit and collect permission-based email addresses.
- Measure contribution per order, conversion rate, email growth, repeat purchase and refund/reprint rate—not likes alone.

### Targets

| Period | Commercial target | Operating proof |
|---|---:|---|
| Month 1–3 | CHF 3k–8k cumulative | 10 customers, 100 qualified subscribers |
| Month 4–6 | CHF 12k–25k cumulative | two repeatable products, one paid event |
| Month 7–12 | CHF 45k–75k year one | quarterly drops + recurring services |
| Month 13–18 | CHF 45k–70k six months | two artist collaborations + B2B placement |
| Month 19–24 | CHF 100k–160k year two | repeat collectors, pop-up, wholesale tests |

## Sources

- Gelato production and location policy: https://support.gelato.com/en/articles/8996076-where-do-you-print-locally
- Gelato integrations: https://www.gelato.com/integrations
- Printful Europe: https://www.printful.com/print-on-demand-europe
- TPOP catalogue and model: https://www.tpop.com/products and https://www.tpop.com/en/pricing
- Prodigi Hahnemühle Photo Rag: https://www.prodigi.com/products/prints-and-posters/photo-prints/hahnemuhle-photo-rag/
- Hahnemühle Certificate of Authenticity: https://www.hahnemuehle.com/en/digital-papers/protect-authenticate/p/Product/show/189/945.html
- My Art Registry terms: https://legal.hahnemuehle.com/my-art-registry-terms-of-use
