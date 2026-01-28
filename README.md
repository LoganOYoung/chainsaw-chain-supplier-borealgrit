# Chainsaw Chain Supplier - Next.js Version

This is the Next.js + Tailwind CSS version of the chainsaw chain supplier website. All UI, UX, structure, and content remain identical to the original HTML version.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS 3**

## Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
chainsaw-chain-supplier-nextjs/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── products/           # Products pages
│   ├── fitment-finder/     # Fitment Finder page
│   ├── oem-private-label/  # OEM page
│   ├── resources/          # Resources page
│   ├── quality/            # Quality page
│   ├── about/              # About page
│   └── contact/            # Contact/RFQ page
├── components/
│   ├── Navigation.tsx      # Shared navigation
│   └── Footer.tsx          # Shared footer
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── package.json
```

## Features

- ✅ All pages converted from HTML to Next.js
- ✅ Identical UI/UX to original
- ✅ Shared Navigation and Footer components
- ✅ Client-side interactivity (Fitment Finder)
- ✅ SEO-friendly metadata
- ✅ Responsive design
- ✅ TypeScript support

## Notes

- All content, styling, and structure match the original HTML version exactly
- Navigation uses Next.js Link components for client-side routing
- Fitment Finder uses React hooks for state management
- Forms can be connected to backend APIs as needed
