import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Professional Chainsaw Chain Manufacturer & OEM Supplier | B2B Wholesale | Borealgrit',
  description: 'Chainsaw chain manufacturer for North American B2B markets. Full, semi, low profile chains. .325", 3/8", .404" pitch. ANSI B175.1 and CSA Z62.3 compliant. OEM and private label manufacturing. ISO 9001 certified. Request quote for distributors and importers.',
  keywords: 'chainsaw chain manufacturer, chainsaw chain supplier, B2B chainsaw chain, OEM chainsaw chain, private label chainsaw chain, chainsaw chain wholesale, ANSI compliant chainsaw chain, CSA compliant chain, chainsaw chain distributor, chainsaw chain importer, chainsaw chain exporter',
  openGraph: {
    title: 'Professional Chainsaw Chain Manufacturer & OEM Supplier | B2B Wholesale',
    description: 'Chainsaw chain manufacturer for North American B2B markets. ANSI/CSA compliant. OEM and private label available.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-text-body antialiased font-sans">{children}</body>
    </html>
  )
}
