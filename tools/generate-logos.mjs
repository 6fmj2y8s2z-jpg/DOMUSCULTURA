import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from '/Users/julianebnother-parker/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.cjs';

const out = path.resolve('brand/logos');
await fs.mkdir(out, { recursive: true });

const ink = '#11110f';
const red = '#d13d32';
const pink = '#d94b73';
const green = '#9abf88';
const cream = '#f8f4ea';
const sans = `'Helvetica Neue','Avenir Next',Arial,sans-serif`;
const condensed = `'Avenir Next Condensed','Helvetica Neue',Arial,sans-serif`;
const serif = `'New York','Times New Roman',serif`;
const mono = `'SF Mono','Courier New',monospace`;

const svg = (body, title) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600" role="img" aria-labelledby="title">
<title id="title">${title}</title>${body}</svg>`;

const concepts = [
  ['01-house-stack','House Stack','Primary identity / website / tote',svg(`
    <g fill="${ink}" font-family="${sans}" font-weight="700" letter-spacing="-14">
      <text x="72" y="275" font-size="238">DOMUS</text><text x="72" y="505" font-size="238">CULTURA</text>
    </g>`, 'Domus Cultura — House Stack')],
  ['02-gallery-wide','Gallery Wide','Gallery signage / chest print / packaging',svg(`
    <text x="55" y="350" fill="${ink}" font-family="${sans}" font-size="152" font-weight="500" letter-spacing="-9">DOMUS CULTURA</text>
    <line x1="60" y1="405" x2="1140" y2="405" stroke="${red}" stroke-width="18"/>`, 'Domus Cultura — Gallery Wide')],
  ['03-dc-monogram','DC Monogram','Cap embroidery / social avatar / labels',svg(`
    <circle cx="600" cy="300" r="230" fill="${ink}"/><text x="600" y="382" text-anchor="middle" fill="${cream}" font-family="${sans}" font-size="255" font-weight="700" letter-spacing="-30">DC</text>
    <circle cx="600" cy="300" r="252" fill="none" stroke="${red}" stroke-width="12"/>`, 'Domus Cultura — DC Monogram')],
  ['04-archway','Archway','Architecture programme / embroidered patch',svg(`
    <path d="M265 505V265C265 88 935 88 935 265V505H785V280C785 195 415 195 415 280V505Z" fill="${ink}"/>
    <text x="600" y="558" text-anchor="middle" fill="${ink}" font-family="${mono}" font-size="42" letter-spacing="12">DOMUS CULTURA</text>`, 'Domus Cultura — Archway')],
  ['05-culture-in-motion','Culture in Motion','Back print / sweatshirt / event graphics',svg(`
    <text x="55" y="225" fill="${ink}" font-family="${condensed}" font-size="196" font-weight="700" letter-spacing="-7">CULTURE</text>
    <text x="55" y="425" fill="${red}" font-family="${serif}" font-size="205" font-style="italic" letter-spacing="-9">in motion.</text>
    <text x="900" y="115" fill="${ink}" font-family="${mono}" font-size="38">DOMUS</text>`, 'Domus Cultura — Culture in Motion')],
  ['06-swiss-grid','Swiss Grid','Editorial masthead / stationery',svg(`
    <rect x="60" y="60" width="1080" height="480" fill="none" stroke="${ink}" stroke-width="10"/>
    <line x1="600" y1="60" x2="600" y2="540" stroke="${ink}" stroke-width="3"/><line x1="60" y1="300" x2="1140" y2="300" stroke="${ink}" stroke-width="3"/>
    <text x="95" y="270" fill="${ink}" font-family="${sans}" font-size="170" font-weight="700" letter-spacing="-11">DOMUS</text>
    <text x="635" y="500" fill="${ink}" font-family="${sans}" font-size="150" font-weight="700" letter-spacing="-10">CULTURA</text>
    <rect x="635" y="95" width="190" height="170" fill="${green}"/>`, 'Domus Cultura — Swiss Grid')],
  ['07-slash-mark','Slash Mark','T-shirt front / hangtag / favicon system',svg(`
    <path d="M110 500L390 100H565L285 500Z" fill="${red}"/><path d="M420 500L700 100H875L595 500Z" fill="${pink}"/>
    <text x="720" y="280" fill="${ink}" font-family="${sans}" font-size="92" font-weight="700">DOMUS</text><text x="720" y="390" fill="${ink}" font-family="${sans}" font-size="92" font-weight="700">CULTURA</text>`, 'Domus Cultura — Slash Mark')],
  ['08-orbit','Orbit','Sounds / cap badge / circular sticker',svg(`
    <circle cx="360" cy="300" r="215" fill="none" stroke="${ink}" stroke-width="34"/><circle cx="360" cy="300" r="112" fill="${green}"/>
    <circle cx="532" cy="170" r="46" fill="${red}"/><text x="650" y="275" fill="${ink}" font-family="${sans}" font-size="108" font-weight="700">DOMUS</text><text x="650" y="395" fill="${ink}" font-family="${serif}" font-size="118" font-style="italic">Cultura</text>`, 'Domus Cultura — Orbit')],
  ['09-editorial-serif','Editorial Serif','Journal masthead / art book / invitation',svg(`
    <text x="600" y="280" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="205" letter-spacing="-8">Domus</text>
    <text x="600" y="445" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="205" font-style="italic" letter-spacing="-8">Cultura</text>
    <text x="600" y="520" text-anchor="middle" fill="${red}" font-family="${mono}" font-size="28" letter-spacing="16">ART LIVES AMONG US</text>`, 'Domus Cultura — Editorial Serif')],
  ['10-stencil-block','Stencil Block','Streetwear / screen print / stencil',svg(`
    <g fill="${ink}" font-family="${condensed}" font-weight="700" font-size="205" letter-spacing="-4"><text x="65" y="270">DOMUS</text><text x="65" y="500">CULTURA</text></g>
    <rect x="380" y="75" width="28" height="470" fill="${cream}"/><rect x="820" y="75" width="28" height="470" fill="${cream}"/><rect x="1040" y="75" width="28" height="470" fill="${red}"/>`, 'Domus Cultura — Stencil Block')],
  ['11-museum-plaque','Museum Plaque','Certificate / edition label / museum merchandise',svg(`
    <rect x="80" y="95" width="1040" height="410" rx="4" fill="${ink}"/>
    <text x="130" y="275" fill="${cream}" font-family="${serif}" font-size="150">Domus Cultura</text>
    <line x1="130" y1="325" x2="1070" y2="325" stroke="${red}" stroke-width="5"/><text x="132" y="405" fill="${cream}" font-family="${mono}" font-size="30" letter-spacing="8">IMAGE · SOUND · EDITIONS · EVENTS</text>`, 'Domus Cultura — Museum Plaque')],
  ['12-street-stamp','Street Stamp','Mug / tote / packaging stamp',svg(`
    <g transform="rotate(-4 600 300)"><rect x="110" y="105" width="980" height="390" rx="40" fill="none" stroke="${ink}" stroke-width="26"/>
    <text x="600" y="305" text-anchor="middle" fill="${ink}" font-family="${condensed}" font-size="180" font-weight="700" letter-spacing="3">DOMUS</text>
    <text x="600" y="435" text-anchor="middle" fill="${ink}" font-family="${mono}" font-size="72" font-weight="700" letter-spacing="18">CULTURA</text><circle cx="190" cy="185" r="35" fill="${pink}"/></g>`, 'Domus Cultura — Street Stamp')],
  ['13-constructivist','Constructivist','Poster / limited drop / bold back print',svg(`
    <polygon points="65,520 360,70 555,70 260,520" fill="${red}"/><circle cx="570" cy="300" r="195" fill="${pink}" opacity=".9"/>
    <rect x="560" y="80" width="575" height="440" fill="${ink}"/>
    <text x="605" y="275" fill="${cream}" font-family="${condensed}" font-size="135" font-weight="700">DOMUS</text><text x="605" y="420" fill="${cream}" font-family="${condensed}" font-size="135" font-weight="700">CULTURA</text>`, 'Domus Cultura — Constructivist')],
  ['14-ribbon','Ribbon','Neck label / sleeve print / small-format merch',svg(`
    <path d="M80 180H1120L1030 300L1120 420H80L170 300Z" fill="${ink}"/>
    <text x="600" y="345" text-anchor="middle" fill="${cream}" font-family="${mono}" font-size="105" font-weight="700" letter-spacing="12">DOMUS CULTURA</text>
    <circle cx="170" cy="300" r="48" fill="${green}"/><circle cx="1030" cy="300" r="48" fill="${red}"/>`, 'Domus Cultura — Ribbon')],
  ['15-frame-shift','Frame Shift','Photography editions / print packaging',svg(`
    <rect x="105" y="85" width="430" height="430" fill="none" stroke="${ink}" stroke-width="22"/><rect x="185" y="165" width="430" height="350" fill="none" stroke="${red}" stroke-width="18"/>
    <text x="675" y="270" fill="${ink}" font-family="${sans}" font-size="112" font-weight="700">DOMUS</text><text x="675" y="395" fill="${ink}" font-family="${sans}" font-size="112" font-weight="700">CULTURA</text>`, 'Domus Cultura — Frame Shift')],
  ['16-signal-bars','Signal Bars','Sounds / digital / woven label',svg(`
    <g fill="${ink}"><rect x="80" y="260" width="55" height="190"/><rect x="160" y="175" width="55" height="275"/><rect x="240" y="95" width="55" height="355"/><rect x="320" y="210" width="55" height="240"/><rect x="400" y="145" width="55" height="305"/></g>
    <rect x="480" y="95" width="30" height="355" fill="${green}"/><text x="565" y="270" fill="${ink}" font-family="${sans}" font-size="112" font-weight="700">DOMUS</text><text x="565" y="400" fill="${ink}" font-family="${sans}" font-size="112" font-weight="700">CULTURA</text>`, 'Domus Cultura — Signal Bars')],
  ['17-column','Column','Architecture / vertical garment print',svg(`
    <rect x="130" y="70" width="230" height="460" fill="${ink}"/><text x="255" y="495" text-anchor="middle" fill="${cream}" font-family="${condensed}" font-size="112" font-weight="700" transform="rotate(-90 255 300)">DOMUS CULTURA</text>
    <text x="435" y="280" fill="${ink}" font-family="${serif}" font-size="170">A home for</text><text x="435" y="445" fill="${red}" font-family="${serif}" font-size="170" font-style="italic">culture.</text>`, 'Domus Cultura — Column')],
  ['18-mirror','Mirror','Art fair / reversible print / experimental merch',svg(`
    <text x="600" y="290" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="180" font-weight="700" letter-spacing="-10">DOMUS</text>
    <text x="600" y="475" text-anchor="middle" fill="${red}" font-family="${sans}" font-size="180" font-weight="700" letter-spacing="-10" transform="translate(1200 0) scale(-1 1)">CULTURA</text>
    <line x1="110" y1="330" x2="1090" y2="330" stroke="${ink}" stroke-width="6"/>`, 'Domus Cultura — Mirror')],
  ['19-word-circle','Word Circle','Sticker / cap patch / ceramic base mark',svg(`
    <circle cx="600" cy="300" r="250" fill="none" stroke="${ink}" stroke-width="18"/>
    <text x="600" y="118" text-anchor="middle" fill="${ink}" font-family="${mono}" font-size="45" letter-spacing="14">DOMUS CULTURA</text>
    <text x="600" y="520" text-anchor="middle" fill="${ink}" font-family="${mono}" font-size="34" letter-spacing="9">ART LIVES AMONG US</text>
    <circle cx="600" cy="300" r="145" fill="${red}"/><text x="600" y="355" text-anchor="middle" fill="${cream}" font-family="${sans}" font-size="145" font-weight="700" letter-spacing="-17">DC</text>`, 'Domus Cultura — Word Circle')],
  ['20-soft-geometry','Soft Geometry','Lifestyle merch / capsule collaboration',svg(`
    <rect x="70" y="100" width="400" height="400" rx="200" fill="${green}"/><circle cx="430" cy="300" r="200" fill="${pink}" opacity=".88"/><rect x="380" y="100" width="250" height="400" rx="125" fill="${red}" opacity=".84"/>
    <text x="685" y="285" fill="${ink}" font-family="${sans}" font-size="108" font-weight="700">DOMUS</text><text x="685" y="410" fill="${ink}" font-family="${serif}" font-size="122" font-style="italic">Cultura</text>`, 'Domus Cultura — Soft Geometry')],
];

const cards = [];
for (const [slug, name, use, source] of concepts) {
  await fs.writeFile(path.join(out, `${slug}.svg`), source);
  const png = await sharp(Buffer.from(source), { density: 600 })
    .resize(3600, 1800, { fit: 'fill' })
    .withMetadata({ density: 600 })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
  await fs.writeFile(path.join(out, `${slug}-600dpi.png`), png);
  cards.push(`<article><div class="mark">${source.replace(/<\?xml[^>]*>/, '')}</div><div><b>${slug.slice(0,2)}</b><h2>${name}</h2><p>${use}</p></div></article>`);
}

const sheet = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Domus Cultura — 20 Logo Directions</title><style>
*{box-sizing:border-box}body{margin:0;background:${cream};color:${ink};font-family:Helvetica,Arial,sans-serif}.head{padding:48px;display:flex;justify-content:space-between;border-bottom:1px solid}.head h1{font-size:54px;line-height:.9;letter-spacing:-.06em;margin:0}.head p{max-width:500px;margin:0;font:14px/1.5 monospace}.grid{display:grid;grid-template-columns:repeat(4,1fr)}article{min-height:330px;padding:22px;border-right:1px solid;border-bottom:1px solid;display:flex;flex-direction:column;justify-content:space-between}.mark{height:210px;display:grid;place-items:center;background:white}.mark svg{width:100%;height:100%}article>div:last-child{display:grid;grid-template-columns:35px 1fr;gap:2px 8px;align-items:baseline}b,p{font:10px/1.4 monospace;text-transform:uppercase}h2{font-size:20px;margin:0}p{grid-column:2;margin:5px 0 0;opacity:.65}@media(max-width:900px){.grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.head{display:block}.head p{margin-top:25px}.grid{grid-template-columns:1fr}}</style></head><body><header class="head"><h1>DOMUS CULTURA<br>20 LOGO DIRECTIONS</h1><p>Vector masters + transparent 600-DPI PNG exports. Explorations for brand, apparel, embroidery, packaging, editions, events and sound.</p></header><main class="grid">${cards.join('')}</main></body></html>`;
await fs.writeFile(path.join(out, 'contact-sheet.html'), sheet);
await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="6000" height="3000"><rect width="100%" height="100%" fill="${cream}"/><text x="200" y="300" font-family="Helvetica Neue" font-size="170" font-weight="700" fill="${ink}">DOMUS CULTURA — 20 LOGO DIRECTIONS</text>${concepts.map(([slug,name,,source],i)=>{const col=i%4,row=Math.floor(i/4),x=150+col*1460,y=420+row*500;const inner=source.replace(/^[\s\S]*?<svg[^>]*>|<\/svg>\s*$/g,'');return `<g transform="translate(${x} ${y}) scale(.95 .62)">${inner}</g><text x="${x}" y="${y+420}" font-family="Helvetica Neue" font-size="42" fill="${ink}">${slug.slice(0,2)} / ${name}</text>`}).join('')}</svg>`), { density: 72, limitInputPixels: false }).png({ compressionLevel: 9 }).toFile(path.join(out, 'contact-sheet.png'));

console.log(`Generated ${concepts.length} SVG masters, ${concepts.length} 600-DPI PNGs and contact sheets in ${out}`);
