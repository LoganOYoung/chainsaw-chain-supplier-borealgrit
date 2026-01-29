import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://borealgrit.com'),
  title: 'Professional Chainsaw Chain Manufacturer & OEM Supplier | B2B Wholesale | Borealgrit',
  description: 'Chainsaw chain manufacturer for North American B2B markets. Full, semi, low profile chains. .325", 3/8", .404" pitch. ANSI B175.1 and CSA Z62.3 compliant. OEM and private label manufacturing. ISO 9001 certified. Request quote for distributors and importers.',
  keywords: 'chainsaw chain manufacturer, chainsaw chain supplier, B2B chainsaw chain, OEM chainsaw chain, private label chainsaw chain, chainsaw chain wholesale, ANSI compliant chainsaw chain, CSA compliant chain, chainsaw chain distributor, chainsaw chain importer, chainsaw chain exporter',
  authors: [{ name: 'Borealgrit' }],
  creator: 'Borealgrit',
  publisher: 'Borealgrit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Professional Chainsaw Chain Manufacturer & OEM Supplier | B2B Wholesale',
    description: 'Chainsaw chain manufacturer for North American B2B markets. ANSI/CSA compliant. OEM and private label available.',
    url: 'https://borealgrit.com',
    siteName: 'Borealgrit',
    images: [
      {
        url: '/logo-borealgrit-champagne.svg',
        width: 280,
        height: 90,
        alt: 'Borealgrit Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Chainsaw Chain Manufacturer & OEM Supplier',
    description: 'Chainsaw chain manufacturer for North American B2B markets. ANSI/CSA compliant.',
    images: ['/logo-borealgrit-champagne.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://borealgrit.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-text-body antialiased font-sans">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R77WSZMC9M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R77WSZMC9M', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
