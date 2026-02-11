# Site Images

## Get real images (recommended)

**On your machine (with internet), run once:**

```bash
node scripts/download-real-images.js
```

This downloads real photos (Picsum Photos, free to use) into `public/images` with the correct filenames. Then commit and push so the site shows real images.

## Fallback: minimal placeholders

If you don't run the script, the repo has minimal 1×1 placeholder files so paths don't 404. To recreate them: `node scripts/create-placeholder-images.js`.

## Your own photos

- Replace any file in `public/images` with your own (same path and filename): hero shots, factory, packaging, product details.
- **Brand logos** (`brands/*.png`): use official, licensed logos only.
- **Certification badges** (`certifications/*.png`): use official artwork if you have rights.
