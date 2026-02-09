import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import ToolsCalculators from './ToolsCalculators'

export const metadata: Metadata = {
  title: 'Tools | BorealGrit™ – Cross-chain reference, calculators & lookup',
  description: 'Cross-chain reference, chain length calculator, OEM part number lookup, product/series selector, and compatibility checker for BorealGrit chainsaw chains.',
  keywords: 'chainsaw chain cross reference, chain length calculator, drive link calculator, OEM part number lookup, chainsaw chain compatibility, series selector',
  openGraph: {
    title: 'Tools | BorealGrit™ – Cross-chain reference, calculators & lookup',
    description: 'Cross-chain reference, chain length calculator, OEM part number lookup, product/series selector, and compatibility checker.',
    type: 'website',
    url: 'https://borealgrit.com/tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools | BorealGrit™ – Cross-chain reference, calculators & lookup',
    description: 'Cross-chain reference, chain length calculator, OEM part number lookup, product/series selector, compatibility checker.',
  },
  alternates: {
    canonical: '/tools',
  },
}

export default function ToolsPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14" aria-label="Tools">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools' },
          ]}
        />
        <h1 className="text-2xl font-bold text-text-main mb-4">Tools</h1>
        <p className="text-text-body mb-10 max-w-3xl">
          Cross-chain reference, chain length calculator, OEM part number lookup, product/series selector, and compatibility checker. For full fitment by saw/bar, use <Link href="/fitment-finder" className="text-forest-brand hover:underline">Fitment Finder</Link>.
        </p>

        <ToolsCalculators />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Tools | BorealGrit – Cross-chain reference, calculators & lookup',
            description: 'Cross-chain reference, chain length calculator, OEM part number lookup, product/series selector, and compatibility checker for BorealGrit chainsaw chains.',
            url: 'https://borealgrit.com/tools',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://borealgrit.com' },
              { '@type': 'ListItem', position: 2, name: 'Tools' },
            ],
          }),
        }}
      />
    </>
  )
}
