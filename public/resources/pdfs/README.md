# PDF Resources Directory

This directory contains downloadable PDF resources for the Resources & Downloads page.

## Directory Structure

```
pdfs/
├── datasheets/          # Technical datasheets (direct download)
│   ├── fc-325-datasheet.pdf
│   ├── sc-38-datasheet.pdf
│   └── lp-325-datasheet.pdf
├── guides/              # Guides and reference materials (direct download)
│   ├── fitment-reference-guide.pdf
│   ├── pitch-gauge-guide.pdf
│   ├── buyers-guide.pdf
│   └── faq-document.pdf
└── catalogs/            # Product catalogs
    ├── quick-reference-guide.pdf  # Direct download
    └── product-catalog-2025.pdf   # Requires contact (not in public folder)
```

## File Status

### ✅ Direct Download (Public)
These files are accessible directly via URL and can be downloaded without contact:
- All files in `datasheets/`
- All files in `guides/`
- `catalogs/quick-reference-guide.pdf`

### 🔒 Requires Contact
These resources require contact form submission:
- `product-catalog-2025.pdf` (contains pricing, not in public folder)
- Packaging specifications
- Labeling standards
- Ordering guides
- Certifications
- Marketing assets

## Adding New PDF Files

1. Place the PDF file in the appropriate subdirectory
2. Update the resources page (`app/resources/page.tsx`) with the correct path
3. For direct downloads, use: `/resources/pdfs/[subdirectory]/[filename].pdf`
4. For contact-required resources, link to: `/request-quote?resource=[resource-code]&type=[type]`

## File Naming Convention

- Use lowercase letters and hyphens
- Be descriptive: `fc-325-datasheet.pdf` not `datasheet1.pdf`
- Include version/year if applicable: `product-catalog-2025.pdf`

## Notes

- PDF files should be optimized for web (reasonable file size)
- Ensure PDFs are accessible (proper text, not just images)
- Update file paths in code when files are added/renamed
