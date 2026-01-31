import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import ToolsCalculators from './ToolsCalculators'

export const metadata: Metadata = {
  title: 'Calculators & Lookup | BorealGrit™ Tools',
  description: 'Chain length calculator, OEM part number lookup, product/series selector, and compatibility checker for BorealGrit chainsaw chains.',
  keywords: 'chainsaw chain calculator, drive link calculator, OEM part number lookup, chainsaw chain compatibility, series selector',
  openGraph: {
    title: 'Calculators & Lookup | BorealGrit™ Tools',
    description: 'Chain length calculator, OEM part number lookup, product/series selector, and compatibility checker.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools',
  },
}

export default function ToolsPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Calculators & Lookup' },
          ]}
        />
        <h1 className="text-2xl font-bold text-text-main mb-4">Calculators & Lookup</h1>
        <p className="text-text-body mb-10 max-w-3xl">
          Use these tools to calculate chain length, look up OEM part numbers, select the right series by application, or check compatibility.
        </p>

        <ToolsCalculators />
      </main>
      <Footer />
    </>
  )
}
