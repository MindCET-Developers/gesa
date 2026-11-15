const fs = require('fs');
const html = fs.readFileSync('wix_bootcamp.html', 'utf8');

// The speakers section is from 305000 to 445000!
const speakersHtml = html.substring(305000, 445000);

// In Wix, each item in these repeaters has an image and text elements (name and company/role).
// Let's find all repeater items: class="[^"]*wixui-repeater__item\b[^"]*"
// Or split by wixui-repeater__item
const itemMatches = [...speakersHtml.matchAll(/<div[^>]+class="[^"]*wixui-repeater__item[^"]*"[\s\S]*?(?=(?:<div[^>]+class="[^"]*wixui-repeater__item|$))/g)];

console.log('Total speaker items found:', itemMatches.length);

const extracted = [];

for (const match of itemMatches) {
  const block = match[0];
  
  // Image extraction
  // Look for <img ... src="..." ...> or srcSet
  // Wix images often have: src="https://static.wixstatic.com/media/..."
  const imgMatches = [...block.matchAll(/<img[^>]+(?:src|srcSet)="([^">]+)"[^>]*>/gi)];
  let imgSrc = null;
  let imgAlt = null;
  
  for (const im of imgMatches) {
    const fullTag = im[0];
    const srcMatch = fullTag.match(/src="([^">]+)"/i);
    const altMatch = fullTag.match(/alt="([^">]*)"/i);
    if (srcMatch && srcMatch[1].includes('static.wixstatic.com/media/')) {
      imgSrc = srcMatch[1];
      imgAlt = altMatch ? altMatch[1] : null;
      break;
    }
  }
  
  // Text extraction
  // Rich text elements
  const richTexts = [];
  const rtMatches = block.matchAll(/data-testid="richTextElement"[\s\S]*?>([\s\S]*?)<\/div>/g);
  for (const rm of rtMatches) {
    // Strip HTML tags and entities
    let text = rm[1]
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();
    if (text) {
      richTexts.push(text);
    }
  }
  
  if (richTexts.length > 0 || imgSrc) {
    extracted.push({
      imgSrc,
      imgAlt,
      name: richTexts[0] || '',
      title: richTexts[1] || '',
      extra: richTexts.slice(2)
    });
  }
}

console.log('Extracted speakers count:', extracted.length);
fs.writeFileSync('all_extracted_wix_speakers.json', JSON.stringify(extracted, null, 2));

for (const sp of extracted) {
  console.log(`- "${sp.name}" | "${sp.title}" | img: ${sp.imgSrc ? 'YES (' + sp.imgSrc.substring(0, 60) + '...)' : 'NO'}`);
}
