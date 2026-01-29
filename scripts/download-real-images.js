/**
 * Download real photos into public/images.
 * Run on your machine (with internet): node scripts/download-real-images.js
 *
 * Uses Picsum Photos (https://picsum.photos) - real photos, free to use.
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'public', 'images');

// Picsum: https://picsum.photos/width/height or /seed/xxx/width/height for stable image
const TASKS = [
  { file: 'contact-banner.jpg', w: 1920, h: 700, seed: 'industrial' },
  { file: 'series-e-hero.jpg', w: 1920, h: 600, seed: 'electric' },
  { file: 'series-w-hero.jpg', w: 1920, h: 600, seed: 'winter' },
  { file: 'series-p-hero.jpg', w: 1920, h: 600, seed: 'forest' },
  { file: 'fitment-guide-bar-stamping.jpg', w: 800, h: 600, seed: 'metal1' },
  { file: 'fitment-drive-link-marking.jpg', w: 800, h: 600, seed: 'metal2' },
  { file: 'fitment-count-drive-links.jpg', w: 800, h: 600, seed: 'metal3' },
  { file: 'about/production-line.jpg', w: 1200, h: 800, seed: 'factory' },
  { file: 'about/manufacturing-equipment.jpg', w: 1200, h: 800, seed: 'machinery' },
  { file: 'oem/retail-packaging.jpg', w: 800, h: 600, seed: 'pack1' },
  { file: 'oem/bulk-packaging.jpg', w: 800, h: 600, seed: 'pack2' },
  { file: 'oem/custom-packaging.jpg', w: 800, h: 600, seed: 'pack3' },
  { file: 'quality/hardness-testing-equipment.jpg', w: 800, h: 600, seed: 'lab1' },
  { file: 'quality/dimensional-measurement.jpg', w: 800, h: 600, seed: 'lab2' },
  { file: 'quality/safety-testing.jpg', w: 800, h: 600, seed: 'lab3' },
  { file: 'products/full-chisel-325-hero.jpg', w: 1920, h: 800, seed: 'chain1' },
  { file: 'products/low-profile-325-hero.jpg', w: 1920, h: 800, seed: 'chain2' },
  { file: 'products/semi-chisel-38-hero.jpg', w: 1920, h: 800, seed: 'chain3' },
  { file: 'products/full-chisel-cutter-detail.jpg', w: 800, h: 600, seed: 'cut1' },
  { file: 'products/full-chisel-chain-detail.jpg', w: 800, h: 600, seed: 'cut2' },
  { file: 'products/full-chisel-application.jpg', w: 800, h: 600, seed: 'cut3' },
  { file: 'products/low-profile-cutter-detail.jpg', w: 800, h: 600, seed: 'lp1' },
  { file: 'products/low-profile-chain-detail.jpg', w: 800, h: 600, seed: 'lp2' },
  { file: 'products/low-profile-application.jpg', w: 800, h: 600, seed: 'lp3' },
  { file: 'products/semi-chisel-cutter-detail.jpg', w: 800, h: 600, seed: 'sc1' },
  { file: 'products/semi-chisel-chain-detail.jpg', w: 800, h: 600, seed: 'sc2' },
  { file: 'products/semi-chisel-application.jpg', w: 800, h: 600, seed: 'sc3' },
  { file: 'products/series-e-detail-kerf.jpg', w: 800, h: 600, seed: 'e1' },
  { file: 'products/series-e-detail-cutter.jpg', w: 800, h: 600, seed: 'e2' },
  { file: 'products/series-e-detail-chain.jpg', w: 800, h: 600, seed: 'e3' },
  { file: 'products/series-w-detail-cutter.jpg', w: 800, h: 600, seed: 'w1' },
  { file: 'products/series-w-detail-material.jpg', w: 800, h: 600, seed: 'w2' },
  { file: 'products/series-w-detail-edge.jpg', w: 800, h: 600, seed: 'w3' },
  { file: 'products/series-p-detail-cutter.jpg', w: 800, h: 600, seed: 'p1' },
  { file: 'products/series-p-detail-chrome.jpg', w: 800, h: 600, seed: 'p2' },
  { file: 'products/series-p-detail-edge.jpg', w: 800, h: 600, seed: 'p3' },
  { file: 'resources/product-catalog-cover.jpg', w: 600, h: 800, seed: 'res1' },
  { file: 'resources/quick-reference-guide-cover.jpg', w: 600, h: 800, seed: 'res2' },
  { file: 'resources/datasheet-fc-325-preview.jpg', w: 600, h: 800, seed: 'res3' },
  { file: 'resources/datasheet-sc-38-preview.jpg', w: 600, h: 800, seed: 'res4' },
  { file: 'resources/datasheet-lp-325-preview.jpg', w: 600, h: 800, seed: 'res5' },
  { file: 'resources/fitment-guide-preview.jpg', w: 600, h: 800, seed: 'res6' },
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node-Download/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = res.headers.location.startsWith('http') ? res.headers.location : `https:${res.headers.location}`;
        return get(next).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading real images (Picsum Photos)...\n');
  for (const { file, w, h, seed } of TASKS) {
    try {
      const outPath = path.join(ROOT, file);
      const dir = path.dirname(outPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const url = `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
      const buf = await get(url);
      fs.writeFileSync(outPath, buf);
      console.log('OK:', file);
    } catch (e) {
      console.error('FAIL:', file, e.message);
    }
  }
  console.log('\nDone. Run npm run dev and refresh to see real images.');
}

main();
