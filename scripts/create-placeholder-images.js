/**
 * Creates minimal valid JPEG/PNG placeholder files so image paths don't 404.
 * Run: node scripts/create-placeholder-images.js
 * Replace these with real photos when available.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'public', 'images');

// Smallest valid 1x1 pixel JPEG (~134 bytes)
const MIN_JPEG = Buffer.from(
  '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQADEQD/2Q==',
  'base64'
);

// Minimal 1x1 PNG (67 bytes)
const MIN_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  'base64'
);

function write(filePath, data) {
  const full = path.join(ROOT, filePath);
  const dir = path.dirname(full);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(full, data);
  console.log('Created:', filePath);
}

// Root images
const jpgRoot = [
  'contact-banner.jpg',
  'series-e-hero.jpg', 'series-w-hero.jpg', 'series-p-hero.jpg',
  'fitment-guide-bar-stamping.jpg', 'fitment-drive-link-marking.jpg', 'fitment-count-drive-links.jpg',
];
jpgRoot.forEach((f) => write(f, MIN_JPEG));

// OEM
['oem/retail-packaging.jpg', 'oem/bulk-packaging.jpg', 'oem/custom-packaging.jpg'].forEach((f) => write(f, MIN_JPEG));

// About
['about/production-line.jpg', 'about/manufacturing-equipment.jpg'].forEach((f) => write(f, MIN_JPEG));

// Resources
[
  'resources/product-catalog-cover.jpg',
  'resources/quick-reference-guide-cover.jpg',
  'resources/datasheet-fc-325-preview.jpg',
  'resources/datasheet-sc-38-preview.jpg',
  'resources/datasheet-lp-325-preview.jpg',
  'resources/fitment-guide-preview.jpg',
].forEach((f) => write(f, MIN_JPEG));

// Certifications (PNG)
['certifications/iso-9001-badge.png', 'certifications/ansi-b175-badge.png', 'certifications/csa-z62-badge.png'].forEach((f) => write(f, MIN_PNG));

// Quality
['quality/hardness-testing-equipment.jpg', 'quality/dimensional-measurement.jpg', 'quality/safety-testing.jpg'].forEach((f) => write(f, MIN_JPEG));

// Products
const productJpgs = [
  'products/full-chisel-325-hero.jpg', 'products/full-chisel-cutter-detail.jpg', 'products/full-chisel-chain-detail.jpg', 'products/full-chisel-application.jpg',
  'products/low-profile-325-hero.jpg', 'products/low-profile-cutter-detail.jpg', 'products/low-profile-chain-detail.jpg', 'products/low-profile-application.jpg',
  'products/semi-chisel-38-hero.jpg', 'products/semi-chisel-cutter-detail.jpg', 'products/semi-chisel-chain-detail.jpg', 'products/semi-chisel-application.jpg',
  'products/series-p-detail-cutter.jpg', 'products/series-p-detail-chrome.jpg', 'products/series-p-detail-edge.jpg',
  'products/series-w-detail-cutter.jpg', 'products/series-w-detail-material.jpg', 'products/series-w-detail-edge.jpg',
  'products/series-e-detail-kerf.jpg', 'products/series-e-detail-cutter.jpg', 'products/series-e-detail-chain.jpg',
];
productJpgs.forEach((f) => write(f, MIN_JPEG));

// Brand logos (placeholder PNGs - replace with licensed logos)
const brands = ['stihl', 'husqvarna', 'milwaukee', 'makita', 'dewalt', 'ego', 'echo', 'ryobi', 'greenworks', 'craftsman', 'poulan', 'oregon'];
brands.forEach((name) => write(`brands/${name}-logo.png`, MIN_PNG));

console.log('Done. Replace these with real images when ready.');
