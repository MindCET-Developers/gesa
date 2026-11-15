const fs = require('fs');
const path = require('path');

// 1. Target directory
const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'public', 'images', 'speakers', 'bootcamp');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 2. Load extracted speakers
const wixSpeakers = JSON.parse(fs.readFileSync(path.join(rootDir, 'all_extracted_wix_speakers.json'), 'utf8'));

// 3. Normalized slug function for filenames
function toSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function normalizeName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&[a-z]+;/gi, '')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// 4. Target missing speakers in bootcampData.ts
const targetSpeakers = [
  'Cecilia Waismann',
  'Lord Jim Knight',
  'Benoit Wirz',
  'Meg Hamel',
  'Irit Touitou',
  'Alan Bekker',
  'Melody Lang',
  'Matt Johnson',
  'Monique Malcolm-Hay',
  'Vincent Fung',
  'Michael Forshaw',
  'Wayne Holmes',
  'Elinor Honigstein',
  'Ilan Ben Yaakov',
  'Ran Magen',
  'Houtan Froushan',
  'Heather Lyons',
  'Morayo Ojikutu',
  'Daniel Landau',
  'Aaron Archer',
  'Chris Stack',
  'Seonghye Yoon'
];

async function downloadImages() {
  const results = [];
  
  for (const name of targetSpeakers) {
    const normTarget = normalizeName(name);
    const matched = wixSpeakers.find(w => normalizeName(w.name) === normTarget);
    
    if (!matched || !matched.imgSrc) {
      results.push({ name, status: 'FAILED', reason: 'No match or image in Wix source' });
      continue;
    }

    const rawUrl = matched.imgSrc;
    // Upgrade resolution to 400x400 for retina displays
    const downloadUrl = rawUrl.replace(/fill\/w_100,h_100/, 'fill/w_400,h_400');
    
    const res = await fetch(downloadUrl);
    if (!res.ok) {
      results.push({ name, status: 'FAILED', reason: `HTTP ${res.status}` });
      continue;
    }
    
    const contentType = res.headers.get('content-type') || '';
    let ext = 'jpg';
    if (contentType.includes('png')) ext = 'png';
    else if (contentType.includes('webp')) ext = 'webp';
    else if (contentType.includes('jpeg') || contentType.includes('jpg')) ext = 'jpg';
    
    const fileName = `${toSlug(name)}.${ext}`;
    const filePath = path.join(outputDir, fileName);
    const publicPath = `/images/speakers/bootcamp/${fileName}`;
    
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filePath, buffer);
    
    results.push({
      name,
      status: 'DOWNLOADED',
      wixName: matched.name,
      originalUrl: rawUrl,
      downloadUrl,
      localFile: fileName,
      publicPath,
      sizeBytes: buffer.length
    });
    
    console.log(`[SAVED] ${name} -> ${fileName} (${buffer.length} bytes)`);
  }
  
  fs.writeFileSync(
    path.join(rootDir, 'restoration_results.json'),
    JSON.stringify(results, null, 2)
  );
  console.log(`\nCompleted download of ${results.filter(r => r.status === 'DOWNLOADED').length} images.`);
}

downloadImages().catch(err => {
  console.error('Download script error:', err);
  process.exit(1);
});
