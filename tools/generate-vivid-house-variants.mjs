import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from '/Users/julianebnother-parker/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.cjs';

const out = path.resolve('brand/vivid-house-variants');
await fs.mkdir(out, { recursive: true });

const palettes = {
  color: { yellow:'#FFE600', green:'#175C3A', red:'#F04435', pink:'#FF4F87', ink:'#11110f', paper:'#F8F4EA', mid:'#827C72' },
  bw: { yellow:'#FFFFFF', green:'#000000', red:'#000000', pink:'#FFFFFF', ink:'#000000', paper:'#FFFFFF', mid:'#000000' },
  grayscale: { yellow:'#D9D9D9', green:'#4C4C4C', red:'#7A7A7A', pink:'#B8B8B8', ink:'#111111', paper:'#F4F4F4', mid:'#8C8C8C' }
};
const sans = `'Avenir Next Condensed','Helvetica Neue',Arial,sans-serif`;
const serif = `'New York','Times New Roman',serif`;
const mono = `'SF Mono','Courier New',monospace`;
const svg = (body,title) => `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600" role="img" aria-labelledby="title"><title id="title">${title}</title>${body}</svg>`;

const wideType = (p,{x=500,top=282,bottom=454,size=157,panelX=435,panelY=80,panelW=710,panelH=440,rails=true}={}) => `
  <rect x="${panelX}" y="${panelY}" width="${panelW}" height="${panelH}" fill="${p.ink}"/>
  ${rails?`<rect x="${panelX+23}" y="${panelY+35}" width="18" height="${panelH-70}" fill="${p.yellow}"/><rect x="${panelX+panelW-35}" y="${panelY+35}" width="18" height="${panelH-70}" fill="${p.yellow}"/>`:''}
  <g fill="${p.paper}" font-family="${sans}" font-weight="700" font-size="${size}" letter-spacing="-3"><text x="${x}" y="${top}">DOMUS</text><text x="${x}" y="${bottom}">CULTURA</text></g>`;
const centeredType = (p,{top=276,bottom=438,size=145,color}={}) => `<g fill="${color||p.ink}" text-anchor="middle" font-family="${sans}" font-weight="700" font-size="${size}" letter-spacing="-3"><text x="600" y="${top}">DOMUS</text><text x="600" y="${bottom}">CULTURA</text></g>`;
const slogan = (p,x=85,y=565,color=p.green) => `<text x="${x}" y="${y}" fill="${color}" font-family="${mono}" font-size="26" font-weight="700" letter-spacing="6">ART LIVES AMONG US</text>`;

const variants = [
  ['01-flagship','Flagship House',p=>`<rect x="55" y="80" width="440" height="440" rx="220" fill="${p.yellow}"/><polygon points="95,525 360,75 545,75 280,525" fill="${p.red}"/><circle cx="470" cy="300" r="205" fill="${p.green}"/><circle cx="155" cy="145" r="58" fill="${p.pink}"/>${wideType(p)}${slogan(p)}`],
  ['02-soft-orbit','Soft Orbit',p=>`<circle cx="255" cy="300" r="225" fill="${p.yellow}"/><circle cx="405" cy="300" r="205" fill="${p.green}"/><circle cx="140" cy="150" r="55" fill="${p.pink}"/><rect x="85" y="245" width="390" height="110" rx="55" fill="${p.red}"/>${wideType(p)}${slogan(p)}`],
  ['03-diagonal-house','Diagonal House',p=>`<polygon points="55,520 325,80 500,80 230,520" fill="${p.yellow}"/><polygon points="210,520 480,80 620,80 350,520" fill="${p.red}"/><circle cx="410" cy="300" r="175" fill="${p.green}"/><circle cx="115" cy="130" r="48" fill="${p.pink}"/>${wideType(p,{panelX:455,panelW:690,x:515})}${slogan(p)}`],
  ['04-arch-signal','Arch Signal',p=>`<path d="M65 520V285C65 125 475 125 475 285V520H350V300C350 225 190 225 190 300V520Z" fill="${p.yellow}"/><path d="M160 520V310C160 205 410 205 410 310V520Z" fill="${p.green}"/><circle cx="400" cy="155" r="65" fill="${p.pink}"/><rect x="80" y="85" width="65" height="230" fill="${p.red}"/>${wideType(p)}${slogan(p)}`],
  ['05-grid-house','Grid House',p=>`<rect x="60" y="80" width="170" height="205" fill="${p.yellow}"/><rect x="245" y="80" width="230" height="205" fill="${p.green}"/><rect x="60" y="300" width="270" height="220" fill="${p.red}"/><rect x="345" y="300" width="130" height="220" fill="${p.pink}"/>${wideType(p)}${slogan(p)}`],
  ['06-horizon','Yellow Horizon',p=>`<circle cx="265" cy="300" r="225" fill="${p.yellow}"/><rect x="55" y="300" width="420" height="220" fill="${p.green}"/><rect x="55" y="255" width="420" height="45" fill="${p.red}"/><circle cx="385" cy="175" r="72" fill="${p.pink}"/>${wideType(p)}${slogan(p)}`],
  ['07-capsule','Cultural Capsule',p=>`<rect x="55" y="90" width="420" height="420" rx="210" fill="${p.green}"/><rect x="55" y="90" width="215" height="420" rx="108" fill="${p.yellow}"/><circle cx="375" cy="190" r="92" fill="${p.pink}"/><polygon points="120,510 350,90 445,90 215,510" fill="${p.red}" opacity=".9"/>${wideType(p)}${slogan(p)}`],
  ['08-eclipse','Hunter Eclipse',p=>`<ellipse cx="270" cy="300" rx="225" ry="165" fill="${p.green}"/><ellipse cx="355" cy="300" rx="145" ry="225" fill="${p.yellow}"/><circle cx="105" cy="125" r="44" fill="${p.pink}"/><rect x="80" y="470" width="380" height="50" fill="${p.red}"/>${wideType(p)}${slogan(p)}`],
  ['09-staircase','Culture Steps',p=>`<rect x="55" y="400" width="105" height="120" fill="${p.green}"/><rect x="160" y="315" width="105" height="205" fill="${p.yellow}"/><rect x="265" y="215" width="105" height="305" fill="${p.red}"/><rect x="370" y="95" width="105" height="425" fill="${p.pink}"/>${wideType(p)}${slogan(p)}`],
  ['10-sun-cut','Sun Cut',p=>`<circle cx="270" cy="300" r="225" fill="${p.yellow}"/><polygon points="45,520 300,80 450,80 195,520" fill="${p.green}"/><rect x="360" y="80" width="115" height="440" fill="${p.red}"/><circle cx="100" cy="130" r="45" fill="${p.pink}"/>${wideType(p)}${slogan(p)}`],
  ['11-center-stage','Centre Stage',p=>`<rect x="65" y="70" width="1070" height="460" fill="${p.ink}"/><circle cx="195" cy="300" r="165" fill="${p.yellow}"/><circle cx="300" cy="300" r="145" fill="${p.green}"/><polygon points="80,510 315,90 410,90 175,510" fill="${p.red}"/><circle cx="1090" cy="120" r="36" fill="${p.pink}"/><g fill="${p.paper}" font-family="${sans}" font-weight="700" font-size="158" letter-spacing="-3"><text x="470" y="282">DOMUS</text><text x="470" y="454">CULTURA</text></g><rect x="440" y="115" width="17" height="365" fill="${p.yellow}"/>`],
  ['12-poster-block','Poster Block',p=>`<rect x="60" y="65" width="1080" height="470" fill="${p.yellow}"/><rect x="410" y="65" width="730" height="470" fill="${p.ink}"/><circle cx="255" cy="300" r="170" fill="${p.green}"/><polygon points="60,535 280,65 425,65 205,535" fill="${p.red}"/><circle cx="105" cy="110" r="40" fill="${p.pink}"/><g fill="${p.paper}" font-family="${sans}" font-weight="700" font-size="162"><text x="485" y="284">DOMUS</text><text x="485" y="462">CULTURA</text></g>`],
  ['13-open-frame','Open Frame',p=>`<rect x="65" y="80" width="1070" height="440" fill="none" stroke="${p.green}" stroke-width="30"/><circle cx="185" cy="300" r="145" fill="${p.yellow}"/><polygon points="65,520 320,80 455,80 200,520" fill="${p.red}"/><circle cx="415" cy="175" r="72" fill="${p.pink}"/>${centeredType(p,{top:280,bottom:450,size:155})}${slogan(p,700,565,p.green)}`],
  ['14-soft-stack','Soft Stack',p=>`<rect x="80" y="80" width="1040" height="440" rx="220" fill="${p.yellow}"/><rect x="410" y="80" width="710" height="440" rx="220" fill="${p.green}"/><circle cx="340" cy="300" r="170" fill="${p.pink}"/><polygon points="95,520 330,80 465,80 230,520" fill="${p.red}"/><g fill="${p.paper}" font-family="${sans}" font-weight="700" font-size="150"><text x="500" y="280">DOMUS</text><text x="500" y="448">CULTURA</text></g>`],
  ['15-house-banner','House Banner',p=>`<path d="M55 250L265 70L475 250V520H55Z" fill="${p.yellow}"/><path d="M180 520V310H350V520Z" fill="${p.green}"/><circle cx="405" cy="145" r="60" fill="${p.pink}"/><polygon points="70,520 330,80 435,80 175,520" fill="${p.red}"/>${wideType(p)}${slogan(p)}`],
  ['16-horizontal-signal','Horizontal Signal',p=>`<rect x="55" y="95" width="420" height="95" fill="${p.yellow}"/><rect x="55" y="205" width="420" height="95" fill="${p.green}"/><rect x="55" y="315" width="420" height="95" fill="${p.red}"/><rect x="55" y="425" width="420" height="95" fill="${p.pink}"/>${wideType(p,{rails:false})}<rect x="470" y="118" width="630" height="15" fill="${p.yellow}"/><rect x="470" y="470" width="630" height="15" fill="${p.yellow}"/>`],
  ['17-circle-badge','Circle Badge',p=>`<circle cx="300" cy="300" r="250" fill="${p.yellow}"/><circle cx="300" cy="300" r="190" fill="${p.green}"/><circle cx="300" cy="300" r="115" fill="${p.ink}"/><text x="300" y="340" text-anchor="middle" fill="${p.paper}" font-family="${sans}" font-size="120" font-weight="700" letter-spacing="-14">DC</text><circle cx="160" cy="125" r="52" fill="${p.pink}"/><rect x="70" y="430" width="460" height="42" fill="${p.red}"/><g fill="${p.ink}" font-family="${sans}" font-size="128" font-weight="700"><text x="625" y="278">DOMUS</text><text x="625" y="422">CULTURA</text></g>`],
  ['18-vertical-totem','Vertical Totem',p=>`<rect x="55" y="65" width="255" height="470" fill="${p.ink}"/><text x="183" y="492" text-anchor="middle" fill="${p.paper}" font-family="${sans}" font-size="104" font-weight="700" transform="rotate(-90 183 300)">DOMUS CULTURA</text><rect x="330" y="65" width="170" height="470" fill="${p.yellow}"/><circle cx="415" cy="175" r="85" fill="${p.green}"/><polygon points="330,535 430,65 500,65 400,535" fill="${p.red}"/><circle cx="470" cy="475" r="45" fill="${p.pink}"/><text x="555" y="275" fill="${p.ink}" font-family="${serif}" font-size="150">A home for</text><text x="555" y="430" fill="${p.green}" font-family="${serif}" font-size="150" font-style="italic">culture.</text>`],
  ['19-dc-house','DC House',p=>`<rect x="65" y="65" width="470" height="470" rx="235" fill="${p.yellow}"/><circle cx="300" cy="300" r="175" fill="${p.green}"/><polygon points="85,535 340,65 465,65 210,535" fill="${p.red}"/><circle cx="130" cy="125" r="50" fill="${p.pink}"/><text x="300" y="375" text-anchor="middle" fill="${p.paper}" font-family="${sans}" font-size="235" font-weight="700" letter-spacing="-28">DC</text><g fill="${p.ink}" font-family="${sans}" font-size="145" font-weight="700"><text x="610" y="275">DOMUS</text><text x="610" y="435">CULTURA</text></g>`],
  ['20-editorial-house','Editorial House',p=>`<circle cx="220" cy="300" r="190" fill="${p.yellow}"/><circle cx="355" cy="300" r="170" fill="${p.green}"/><polygon points="60,520 320,80 455,80 195,520" fill="${p.red}"/><circle cx="100" cy="130" r="45" fill="${p.pink}"/><text x="540" y="278" fill="${p.ink}" font-family="${serif}" font-size="180">Domus</text><text x="540" y="445" fill="${p.green}" font-family="${serif}" font-size="180" font-style="italic">Cultura</text><line x1="540" y1="485" x2="1110" y2="485" stroke="${p.yellow}" stroke-width="16"/>`]
];

const sheetCards = { color:[], bw:[], grayscale:[] };
for (const [slug,name,render] of variants) {
  for (const [tone,palette] of Object.entries(palettes)) {
    const source = svg(render(palette), `Domus Cultura — ${name} — ${tone}`);
    const stem = `${slug}-${tone}`;
    await fs.writeFile(path.join(out, `${stem}.svg`), source);
    await sharp(Buffer.from(source), { density:600 }).resize(3600,1800,{fit:'fill'}).withMetadata({density:600}).png({compressionLevel:9,adaptiveFiltering:true}).toFile(path.join(out,`${stem}-600dpi.png`));
    sheetCards[tone].push({slug,name,source});
  }
}

for (const [tone,cards] of Object.entries(sheetCards)) {
  const bg = tone==='bw' ? '#e9e9e9' : '#F8F4EA';
  const cardMarkup = cards.map(({slug,name,source},i)=>{const col=i%4,row=Math.floor(i/4),x=30+col*590,y=145+row*335;const inner=source.replace(/^[\s\S]*?<svg[^>]*>|<\/svg>\s*$/g,'');return `<g transform="translate(${x} ${y})"><rect width="560" height="270" fill="#fff"/><g transform="scale(.4667 .45)">${inner}</g><text x="0" y="304" font-family="Helvetica Neue,Arial" font-size="18" font-weight="700" fill="#111">${slug.slice(0,2)} / ${name}</text></g>`}).join('');
  const sheet = `<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1800"><rect width="100%" height="100%" fill="${bg}"/><text x="30" y="70" font-family="Helvetica Neue,Arial" font-size="48" font-weight="700" fill="#111">VIVID HOUSE — 20 ${tone.toUpperCase()} DIRECTIONS</text>${cardMarkup}</svg>`;
  await fs.writeFile(path.join(out,`contact-sheet-${tone}.svg`),sheet);
  await sharp(Buffer.from(sheet),{density:144,limitInputPixels:false}).resize(4800,3600).png({compressionLevel:9}).toFile(path.join(out,`contact-sheet-${tone}.png`));
}

const readme = `# Domus Cultura — Vivid House logo family\n\n20 coordinated directions. Every direction includes:\n\n- full-colour SVG and transparent 3600 × 1800 PNG with 600-DPI metadata;\n- pure black-and-white SVG and transparent 600-DPI PNG;\n- grayscale SVG and transparent 600-DPI PNG.\n\nThe lettering remains unobstructed in all variants. SVG typography should be converted to outlines after a final mark is selected and before sending production files to a supplier. Test embroidery, screen printing and small-format legibility physically before launch.\n`;
await fs.writeFile(path.join(out,'README.md'),readme);
console.log(`Generated ${variants.length} directions × 3 colour modes = ${variants.length*3} SVG and ${variants.length*3} 600-DPI PNG files.`);
