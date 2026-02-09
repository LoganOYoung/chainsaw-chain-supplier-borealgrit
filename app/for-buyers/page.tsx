import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Buyers | BorealGrit™ – Distributors, Forestry & OEM',
  description: 'Factory-direct chainsaw chains for North American distributors, logging operations, and OEM partners. Choose your path: Distributors & Forestry or OEM & Private Label.',
  keywords: 'chainsaw chain buyer, B2B forestry supply, North America chainsaw chain, OEM chainsaw chain, distributor chainsaw chain',
  openGraph: {
    title: 'For Buyers | BorealGrit™ – Distributors, Forestry & OEM',
    description: 'Factory-direct chainsaw chains for North American distributors, logging operations, and OEM partners.',
    type: 'website',
  },
  alternates: {
    canonical: '/for-buyers',
  },
}

export default function ForBuyersHubPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'For Buyers' }]} />
        <h1 className="text-2xl font-bold text-text-main mb-4">For Buyers</h1>
        <p className="text-text-body mb-10 max-w-3xl">
          We supply North American distributors, logging operations, and OEM partners with factory-direct chainsaw chains. Choose your path below.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/for-buyers/distributors"
            className="block border-2 border-forest-brand/30 rounded-none p-6 hover:border-forest-brand hover:bg-forest-light/30 transition"
          >
            <h2 className="text-lg font-bold text-text-main mb-2">Distributors & Forestry</h2>
            <p className="text-text-body text-sm mb-4">
              Who we serve, where we supply, why BorealGrit, how we work, and policies at a glance. For distributors, dealers, and logging operations.
            </p>
            <span className="inline-flex items-center gap-1 text-forest-brand font-semibold text-sm">
              View page <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link
            href="/oem-private-label"
            className="block border-2 border-forest-brand/30 rounded-none p-6 hover:border-forest-brand hover:bg-forest-light/30 transition"
          >
            <h2 className="text-lg font-bold text-text-main mb-2">OEM & Private Label</h2>
            <p className="text-text-body text-sm mb-4">
              Custom packaging, labeling, part numbers, and supply terms for chainsaw and outdoor power equipment manufacturers.
            </p>
            <span className="inline-flex items-center gap-1 text-forest-brand font-semibold text-sm">
              View page <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link
            href="/for-buyers/regional-guide"
            className="block border-2 border-forest-brand/30 rounded-none p-6 hover:border-forest-brand hover:bg-forest-light/30 transition"
          >
            <h2 className="text-lg font-bold text-text-main mb-2">Regional Application Guide</h2>
            <p className="text-text-body text-sm mb-4">
              Chain selection by North American region: Pacific Northwest & BC, Boreal Belt, Urban Forestry. Series P, W, E recommendations.
            </p>
            <span className="inline-flex items-center gap-1 text-forest-brand font-semibold text-sm">
              View guide <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link
            href="/for-buyers/chain-selection-matrix"
            className="block border-2 border-forest-brand/30 rounded-none p-6 hover:border-forest-brand hover:bg-forest-light/30 transition"
          >
            <h2 className="text-lg font-bold text-text-main mb-2">Chain Selection Matrix</h2>
            <p className="text-text-body text-sm mb-4">
              Reference by species, equipment, and task: hardwood, softwood, frozen timber; gas, battery, harvester; logging, arborist, firewood.
            </p>
            <span className="inline-flex items-center gap-1 text-forest-brand font-semibold text-sm">
              View matrix <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
