# Site Images

All image paths used by the site are filled so no 404s occur.

## Current state

- **Placeholder files**  
  Run `node scripts/create-placeholder-images.js` to (re)create minimal 1×1 JPEG/PNG files for every path. These show as solid color blocks with `object-cover` and are only to avoid broken images.

## Replacing with real images

1. **Hero / content photos**  
   Replace the small placeholder files with real photos (e.g. chainsaw chain, factory, packaging) in the same paths and filenames. Prefer high‑res JPEGs for heroes (e.g. 1920×800) and detail shots (e.g. 800×600).

2. **Brand logos** (`brands/*.png`)  
   Use official, licensed logos from each brand. Do not use unlicensed copies. Replace the placeholder PNGs in `public/images/brands/` with the correct logo files.

3. **Certification badges** (`certifications/*.png`)  
   Use official ISO/ANSI/CSA badge artwork if you have rights to do so; otherwise keep simple placeholders or remove.

4. **Suggested sources for stock photos**  
   - Unsplash / Pexels (free, check license)  
   - Your own product/factory photography  

After replacing files, keep the same filenames and paths so the app does not need code changes.
