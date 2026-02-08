import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chain Selection Matrix: Reference by Species, Equipment & Task | BorealGrit™',
  description: 'Professional reference: how wood species, power source, and application affect chainsaw chain choice. Hardwood, softwood, frozen timber; gas, electric, harvester; logging, arborist, firewood. Inform your decision with specs and Fitment Finder.',
  keywords: 'best chain for frozen oak, chainsaw chain Douglas fir, battery chainsaw chain replacement, electric saw chain, professional logging chain, arborist chainsaw chain, wildfire fuel reduction tools, chain selection reference',
  openGraph: {
    title: 'Chain Selection Matrix: Reference by Species, Equipment & Task | BorealGrit™',
    description: 'Information reference for chain selection by species, equipment, and task. North American forestry and arborist applications.',
    type: 'website',
  },
  alternates: {
    canonical: '/for-buyers/chain-selection-matrix',
  },
}

export default function ChainSelectionMatrixPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'For Buyers', href: '/for-buyers' },
            { label: 'Chain Selection Matrix' },
          ]}
        />
        <Link
          href="/for-buyers"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to For Buyers
        </Link>

        <header className="mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-main mb-2">
            Chain Selection Matrix: A Reference by Species, Equipment & Task
          </h1>
          <p className="text-sm sm:text-base text-text-body max-w-3xl leading-relaxed mb-4">
            This page is an <strong className="text-text-main">information reference</strong> for professional buyers. It explains how <strong className="text-text-main">wood species</strong>, <strong className="text-text-main">power source and equipment</strong>, and <strong className="text-text-main">application type</strong> influence chain design and suitability—so you can weigh options yourself. For region-based context, see the <Link href="/for-buyers/regional-guide" className="text-forest-brand hover:underline">Regional Application Guide</Link>; for exact saw and bar compatibility, use the <Link href="/fitment-finder" className="text-forest-brand hover:underline">Fitment Finder</Link>.
          </p>
        </header>

        {/* By Species */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
            Chain considerations by species: hardwood, softwood, and frozen timber
          </h2>
          <div className="space-y-4 text-sm text-text-body">
            <div>
              <h3 className="font-semibold text-text-main mb-2">Hardwood (Oak, Maple, Hickory)</h3>
              <p>
                Dense hardwoods place high demand on <strong>edge retention and abrasion resistance</strong>. Chains built for this use typically combine full-chisel geometry with hard-wearing surface treatment to extend sharpening intervals. BorealGrit <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> is designed for high-output cutting in oak, maple, and hickory with industrial chrome and full-chisel cutters; specifications and pitch/gauge options are on the series page.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Softwood (Douglas Fir, Pine, Spruce)</h3>
              <p>
                Softwoods often have higher moisture content and benefit from <strong>maximum chip clearance and sustained cutting speed</strong> to avoid packing and overheating. Chains suited to continuous softwood logging typically emphasize chip flow and stay-sharp performance. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> is engineered for moisture-heavy Douglas Fir and high-volume softwood operations; compare specs with your bar length and pitch before ordering.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Frozen wood and dirty timber</h3>
              <p>
                Sub-zero temperatures and ground contact increase <strong>impact loading and fatigue risk</strong>; steel toughness and low-temperature performance become critical. Chains intended for frozen and dirty timber often use alloy and heat treatment specified for cold conditions. BorealGrit <Link href="/products/series-w" className="text-forest-brand hover:underline">Series W</Link> uses 68CrNiMo alloy and is designed to maintain impact toughness to -40°C, reducing chain fatigue and tooth fracture in winter logging and dirty-wood applications. Check the series datasheet for operating limits.
              </p>
            </div>
          </div>
        </section>

        {/* By Equipment */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
            Chain considerations by equipment: gas saws, electric/cordless saws, and harvesters
          </h2>
          <div className="space-y-4 text-sm text-text-body">
            <div>
              <h3 className="font-semibold text-text-main mb-2">Professional gas chainsaw chain (70cc+)</h3>
              <p>
                Heavy-duty gas saws deliver high torque and require chains with <strong>strength, anti-stretch, and chip clearance</strong> to match power output. Full-chisel cutters and industrial-grade construction are common for 60cc+ professional applications. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> is built for this class of saw; verify pitch, gauge, and drive link count against your bar and sprocket in the <Link href="/fitment-finder" className="text-forest-brand hover:underline">Fitment Finder</Link>.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Battery chainsaw chain replacement / electric saw chain</h3>
              <p>
                Cordless and electric saws are power-limited; chains that reduce <strong>kerf width and power draw</strong> help extend runtime and reduce motor load. Narrow-kerf, low-vibration profiles are often specified for Stihl MSA, Milwaukee M18, and similar platforms. BorealGrit <Link href="/products/series-e" className="text-forest-brand hover:underline">Series E</Link> is designed for cordless and electric saws with lower power consumption (on the order of 15–25% in typical testing) and smoother cutting; confirm compatibility with your saw and bar before purchase.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Chainsaw chain for mechanical harvesters</h3>
              <p>
                Feller bunchers and processing heads run at high duty cycles and require <strong>industrial-grade reliability and consistent performance</strong>. Chain specifications for harvesters often align with OEM and high-output gas saw requirements. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> is used in harvester and heavy-duty applications; bulk and custom configurations are available—contact us with your machine and bar specifications for exact fitment.
              </p>
            </div>
          </div>
        </section>

        {/* By Task */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
            Chain considerations by application: logging, arborist work, firewood, and land clearing
          </h2>
          <div className="space-y-4 text-sm text-text-body">
            <div>
              <h3 className="font-semibold text-text-main mb-2">Commercial logging chainsaw chain</h3>
              <p>
                High-volume logging prioritizes <strong>cuts per hour and total cost of ownership</strong>. Chains selected for this application typically emphasize productivity, stay-sharp duration, and compatibility with large gas saws. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> is designed for commercial logging; match pitch and gauge to your bar and verify drive link count for your setup.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Arborist chainsaw chain / pruning chain</h3>
              <p>
                Tree care and pruning benefit from <strong>smooth cuts, low vibration, and precision</strong> to support tree health and operator comfort. Narrow-kerf, low-vibration profiles are often preferred for battery and mid-size saws used in arboriculture. <Link href="/products/series-e" className="text-forest-brand hover:underline">Series E</Link> is designed for this type of work; use the Fitment Finder to confirm fit for your saw and bar.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Firewood processing and land clearing chain</h3>
              <p>
                Firewood involves dry, often abrasive wood; land clearing can add impact, dirt, and mixed conditions. For <strong>general firewood</strong>, chains with good abrasion resistance and chip clearance are typical; for <strong>frozen wood or disaster-recovery</strong> conditions, toughness at low temperature becomes important. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> suits many firewood and clearing applications; <Link href="/products/series-w" className="text-forest-brand hover:underline">Series W</Link> is an option when cold or impact-heavy conditions dominate. Compare specs and your operating environment before choosing.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap gap-4">
          <Link
            href="/for-buyers/regional-guide"
            className="inline-flex items-center gap-2 text-sm text-forest-brand hover:underline font-medium"
          >
            Regional Application Guide <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/fitment-finder"
            className="inline-flex items-center gap-2 text-sm text-forest-brand hover:underline font-medium"
          >
            Fitment Finder <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <Link
          href="/for-buyers"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mt-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to For Buyers
        </Link>
      </main>
      <Footer />
    </>
  )
}
