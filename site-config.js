/*
 * Domus Cultura — public-content configuration
 *
 * Keep live facts here. A null value renders as a clearly labelled placeholder;
 * do not replace it with an invented price, date, edition count or claim.
 */
window.DOMUS_CONFIG = {
  identity: {
    line: 'Photography, sound and artists\' studios, from Switzerland.',
    instagram: 'https://www.instagram.com/domuscultura/',
    contactEndpoint: '[FORMSPREE_OR_VERCEL_FORM_ENDPOINT]',
    founded: 'Paris, 2011',
    founderBio: 'Domus Cultura was founded in Paris in 2011.'
  },
  products: [
    { id: 'house-mark-tee', name: 'House Mark T-shirt', category: 'apparel', launchPriceChf: null, colourways: ['Black', 'White', 'Hunter green'], status: 'sample approval pending' },
    { id: 'good-morning-crewneck', name: 'Good Morning World Crewneck', category: 'apparel', launchPriceChf: null, colourways: ['Black', 'Heather grey', 'Hunter green'], status: 'sample approval pending' },
    { id: 'culture-motion-hoodie', name: 'Culture in Motion Hoodie', category: 'apparel', launchPriceChf: null, colourways: ['Black', 'Grey Melange'], status: 'sample approval pending' },
    { id: 'dc-cap', name: 'Domus Cultura Cap', category: 'objects', launchPriceChf: null, colourways: ['Olive Green', 'Black', 'Oxford Navy', 'Graphite Grey'], status: 'sample approval pending' },
    { id: 'courtyard-tote', name: 'Courtyard Canvas Tote', category: 'objects', launchPriceChf: null, colourways: ['Black'], status: 'coming later' }
  ],
  editions: {
    sizes: [
      { id: 'small', label: '30 × 40 cm', editionSize: null, launchPriceChf: null },
      { id: 'medium', label: '45 × 60 cm', editionSize: null, launchPriceChf: null },
      { id: 'large', label: '60 × 80 cm', editionSize: null, launchPriceChf: null }
    ],
    paper: '[WHITEWALL PAPER NAME]',
    finish: '[WHITEWALL FINISH]',
    certificate: '[CERTIFICATE OF AUTHENTICITY PROCESS]',
    leadTime: '[MADE-TO-ORDER LEAD TIME]',
    shipping: '[SHIPPING COST AND DESTINATIONS]',
    returns: '[RETURNS POLICY]',
    vat: '[SWISS VAT NOTE]'
  },
  events: [
    { title: 'Opening session', date: '[DATE TBA]', status: 'registration placeholder', external: false },
    { title: 'External openings list', date: '[VERIFY EACH EVENT BEFORE PUBLISHING]', status: 'unpublished', external: true }
  ]
};
