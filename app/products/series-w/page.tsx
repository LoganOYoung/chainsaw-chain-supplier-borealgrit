import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Series W: Cold-Resilient Chainsaw Chains for Frozen Hardwood | BorealGrit™',
  description: 'Don\'t let the frost stop your operation. BorealGrit Series W chains feature specialized heat treatment to prevent brittleness at -30°C. Optimized for Canadian and Northern US forestry professionals.',
  keywords: 'Series W chainsaw chain, cold weather chainsaw chain, frozen hardwood chain, sub-zero chainsaw chain, Canadian forestry, Northern US logging, -30°C chainsaw chain, CrNiMo alloy, winter logging, BorealGrit',
  openGraph: {
    title: 'Series W: Cold-Resilient Chainsaw Chains for Frozen Hardwood | BorealGrit™',
    description: 'Don\'t let the frost stop your operation. BorealGrit Series W chains feature specialized heat treatment to prevent brittleness at -30°C. Optimized for Canadian and Northern US forestry professionals.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/series-w',
  },
}

export default function SeriesWPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Full-bleed banner */}
        <section className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/series-w-winter-chainsaw-cutting.jpg"
              alt="Chainsaw cutting log in snow — Series W cold-weather chain for winter logging and sub-zero conditions"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-forest-dark/30" aria-hidden />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-8 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-3 md:mb-4 max-w-3xl">
                Engineered for the Frozen North
              </h2>
              <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mb-3 md:mb-4">
                Professional-grade chainsaw chains designed to conquer sub-zero temperatures and high-density hardwood. Zero compromises on durability in the toughest Boreal environments.
              </p>
              <p className="text-white/90 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                W-Series · Built for Boreal
              </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Series W' }]} />
        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-4">Series W: Cold-Weather Chainsaw Chains</h1>
        <p className="text-text-body mb-6 max-w-3xl">
          CrNiMo (Chromium-Nickel-Molybdenum) alloy steel with specialized nitriding heat treatment. Impact toughness maintained at -40°C. Semi-chisel cutter design.
        </p>

        {/* Technical Specifications */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Technical Specifications</h2>

          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-48">Material</th>
                  <td className="px-4 py-2.5">CrNiMo (Chromium-Nickel-Molybdenum) alloy steel</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Heat Treatment</th>
                  <td className="px-4 py-2.5">Specialized nitriding process</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Cutter Type</th>
                  <td className="px-4 py-2.5">Semi-chisel (rounded corner)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Pitch</th>
                  <td className="px-4 py-2.5">.325&quot;, 3/8&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                  <td className="px-4 py-2.5">.050&quot;, .058&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Operating Temperature</th>
                  <td className="px-4 py-2.5">-40°C to +40°C (impact toughness maintained)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Impact Toughness</th>
                  <td className="px-4 py-2.5">ASTM E23 compliant at -40°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cold-Weather Performance vs Standard Chain Comparison Infographic */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Cold-Weather Performance vs Standard Chain Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none p-4 border border-forest-brand border-2">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Series W (Cold-Weather) ✓</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Material:</strong> CrNiMo (Chromium-Nickel-Molybdenum) alloy steel</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Heat Treatment:</strong> Specialized nitriding process</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Low-Temperature Performance:</strong> Impact toughness maintained at -40°C</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Brittleness Threshold:</strong> Below -40°C (ASTM E23 compliant)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Frozen wood, Canadian winter, sub-zero conditions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutter Type:</strong> Semi-chisel (rounded corner) for dirty/frozen conditions</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-none p-4 border border-forest-brand/30">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Standard Chain</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Material:</strong> 65Mn standard carbon steel</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Heat Treatment:</strong> Standard hardening and tempering</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Low-Temperature Performance:</strong> Impact toughness degrades below -10°C</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Brittleness Threshold:</strong> -10°C (becomes brittle)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Normal temperature conditions (above 0°C)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutter Type:</strong> Full-chisel or semi-chisel (standard)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Configurations */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Available Configurations</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[600px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Pitch</th>
                  <th className="text-left px-4 py-3 font-semibold">Gauge</th>
                  <th className="text-left px-4 py-3 font-semibold">Drive Links</th>
                  <th className="text-left px-4 py-3 font-semibold">Bar Length</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">.325&quot;</td>
                  <td className="px-4 py-3">.050&quot;</td>
                  <td className="px-4 py-3">66, 72</td>
                  <td className="px-4 py-3">16&quot;, 18&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">.325&quot;</td>
                  <td className="px-4 py-3">.058&quot;</td>
                  <td className="px-4 py-3">66, 72</td>
                  <td className="px-4 py-3">16&quot;, 18&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">.325&quot;</td>
                  <td className="px-4 py-3">.063&quot;</td>
                  <td className="px-4 py-3">66, 72</td>
                  <td className="px-4 py-3">16&quot;, 18&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">3/8&quot;</td>
                  <td className="px-4 py-3">.050&quot;</td>
                  <td className="px-4 py-3">72, 84</td>
                  <td className="px-4 py-3">18&quot;, 20&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">3/8&quot;</td>
                  <td className="px-4 py-3">.058&quot;</td>
                  <td className="px-4 py-3">72, 84</td>
                  <td className="px-4 py-3">18&quot;, 20&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-body italic mt-4">Custom drive link counts available. OEM packaging available.</p>
        </section>

        {/* Compatible Brands */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-3">Compatible Brands</h2>
          <p className="text-sm text-text-body mb-4">
            Series W chains are designed as compatible replacements for cold-weather and general-purpose chainsaws from leading North American brands.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {['Husqvarna', 'Stihl', 'Echo', 'Oregon'].map((brand) => (
              <div key={brand} className="bg-white border border-forest-brand/30 rounded-none p-2 text-center">
                <div className="font-semibold text-text-main text-xs">{brand}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-body italic">
            <strong className="text-text-main">Brand Disclaimer:</strong> All brand names mentioned are trademarks of their respective owners. We are not affiliated with, authorized by, or endorsed by these brands. Our products are compatible replacements designed to meet or exceed OEM specifications.
          </p>
        </section>

        {/* Compatibility */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Compatibility Details</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[600px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Brand</th>
                  <th className="text-left px-4 py-3 font-semibold">Model</th>
                  <th className="text-left px-4 py-3 font-semibold">Bar Length</th>
                  <th className="text-left px-4 py-3 font-semibold">Chain Spec</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Husqvarna</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">435, 440, 450</td>
                  <td className="px-4 py-3">18&quot;</td>
                  <td className="px-4 py-3">.325&quot; / .050&quot; / 72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Husqvarna</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">455 Rancher</td>
                  <td className="px-4 py-3">18&quot;, 20&quot;</td>
                  <td className="px-4 py-3">.325&quot; / .050&quot; / 72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Stihl</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">MS 250, MS 251</td>
                  <td className="px-4 py-3">16&quot;, 18&quot;</td>
                  <td className="px-4 py-3">.325&quot; / .063&quot; / 66-72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Stihl</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">MS 271</td>
                  <td className="px-4 py-3">18&quot;</td>
                  <td className="px-4 py-3">.325&quot; / .050&quot; / 72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Echo</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">CS-400</td>
                  <td className="px-4 py-3">16&quot;, 18&quot;</td>
                  <td className="px-4 py-3">.325&quot; / .050&quot; / 66-72 DL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/fitment-finder" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-text-main text-sm font-semibold hover:bg-forest-brand hover:text-white border-2 border-transparent hover:border-forest-brand transition rounded">
              View Compatible Models
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products/applications/cold-climate" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-industrial text-text-body text-sm font-semibold hover:bg-gray-50 transition rounded">
              View Application Page
            </Link>
          </div>
          <p className="text-sm text-text-body italic mt-4">Always verify bar and chain specifications before ordering.</p>
        </section>

        {/* Compatible Industry Models */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Compatible Industry Models</h2>
          <p className="text-text-body text-sm mb-4">
            Series W chains are compatible replacements for the following Oregon, Stihl, and Husqvarna chain models:
          </p>
          
          <div className="space-y-6">
            {/* Oregon Models */}
            <div>
              <h3 className="text-sm font-semibold text-text-main mb-3">Oregon</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  20LPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  20BPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  M95TXL
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  95VPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  21LPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  21BPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  22LPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  22BPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  91PX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  91P
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  91VXL
                </span>
              </div>
            </div>

            {/* Stihl Models */}
            <div>
              <h3 className="text-sm font-semibold text-text-main mb-3">Stihl</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  23RS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  23RM
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  25RS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  25RM
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  26RS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  26RM
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  63PS3
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  63PM
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  71PM3
                </span>
              </div>
            </div>

            {/* Husqvarna Models */}
            <div>
              <h3 className="text-sm font-semibold text-text-main mb-3">Husqvarna</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  H30
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  S93G / H37
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  SP33G
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  H25
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-text-body italic mt-4">
            Cross-reference data based on pitch, gauge, and drive link compatibility. Verify specifications before ordering.
          </p>
        </section>

        {/* Material & Manufacturing */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Material & Manufacturing</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-48">Alloy Composition</th>
                  <td className="px-4 py-2.5">Cr: 0.8-1.2%, Ni: 1.5-2.0%, Mo: 0.3-0.5%</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Nitriding Depth</th>
                  <td className="px-4 py-2.5">0.15-0.25mm surface layer</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Hardness</th>
                  <td className="px-4 py-2.5">Surface: HRC 58-62, Core: HRC 45-50</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Impact Test</th>
                  <td className="px-4 py-2.5">ASTM E23: ≥40 J at -40°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Packaging & Ordering */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Packaging & Ordering</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-48">Packaging</th>
                  <td className="px-4 py-2.5">Individual chains, bulk boxes (10-50 units), reels (100+ feet)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">MOQ</th>
                  <td className="px-4 py-2.5">100 units per SKU</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Lead Time</th>
                  <td className="px-4 py-2.5">4-6 weeks (standard), 2-3 weeks (rush available)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">OEM/Private Label</th>
                  <td className="px-4 py-2.5">Available. Minimum 500 units per SKU.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-6 border-t border-forest-brand/30">
          <Link
            href="/request-quote?series=Series%20W"
            className="inline-flex items-center px-6 py-3 bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition"
          >
            Request Winter Season Pre-order Quote
          </Link>
        </section>
        </div>
      </main>
      <Footer />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Series W Cold-Weather Chainsaw Chain",
            "description": "CrNiMo alloy steel chainsaw chains for cold weather. Impact toughness maintained at -40°C. Semi-chisel design for frozen and dirty wood.",
            "brand": {
              "@type": "Brand",
              "name": "Borealgrit"
            },
            "category": "Chainsaw Chain",
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "price": "Varies by volume"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://borealgrit.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://borealgrit.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Series W",
                "item": "https://borealgrit.com/products/series-w"
              }
            ]
          })
        }}
      />
    </>
  )
}
