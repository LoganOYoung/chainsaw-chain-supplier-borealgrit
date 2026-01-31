import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://borealgrit.com'),
  title: 'BorealGrit™ | Industrial Chainsaw Chain Manufacturer for North America',
  description: 'Professional-grade 68CrNiMo alloy chainsaw chains engineered for extreme Boreal environments. Direct-from-factory reliability for logging operations in BC, PNW, and beyond. Minimize your downtime today.',
  keywords: 'chainsaw chain manufacturer, industrial chainsaw chain, 68CrNiMo alloy chain, Boreal chainsaw chain, North America forestry, direct-from-factory, cold weather chainsaw chain, professional logging, BC Oregon Washington PNW, minimize downtime, Series W Series P Series E',
  authors: [{ name: 'BorealGrit' }],
  creator: 'BorealGrit',
  publisher: 'BorealGrit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BorealGrit™ | Industrial Chainsaw Chain Manufacturer for North America',
    description: 'Professional-grade 68CrNiMo alloy chainsaw chains engineered for extreme Boreal environments. Direct-from-factory reliability for logging operations in BC, PNW, and beyond. Minimize your downtime today.',
    url: 'https://borealgrit.com',
    siteName: 'BorealGrit',
    images: [
      {
        url: '/images/contact-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'BorealGrit industrial chainsaw chain manufacturer for North American forestry',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BorealGrit™ | Industrial Chainsaw Chain Manufacturer for North America',
    description: 'Professional-grade 68CrNiMo alloy chainsaw chains for BC, PNW, and beyond. Direct-from-factory reliability. Minimize your downtime today.',
    images: ['/images/contact-banner.jpg'],
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
