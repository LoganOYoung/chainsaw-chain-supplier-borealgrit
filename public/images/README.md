# Site Images

## Get real images (recommended)

**On your machine (with internet), run once:**

```bash
node scripts/download-real-images.js
```

This downloads real photos (Picsum Photos, free to use) into `public/images` with the correct filenames. Then commit and push so the site shows real images.

## Fallback: minimal placeholders

If you don't run the script, the repo has minimal 1×1 placeholder files so paths don't 404. To recreate them: `node scripts/create-placeholder-images.js`.

## Product illustrations (SVG)

- `products/product-chain-*.svg` – Professional catalog-style chain illustrations (full-chisel, semi-chisel, low-profile).
- `products/product-cutter-*.svg` – Cutter detail close-ups for technical documentation.
- These are vector graphics; no 3D/CAD required. Replace with real product photos when available.

## Your own photos

- Replace any file in `public/images` with your own (same path and filename): hero shots, factory, packaging, product details.
- **Brand logos** (`brands/*.png`): use official, licensed logos only.
- **Certification badges** (`certifications/*.png`): use official artwork if you have rights.
