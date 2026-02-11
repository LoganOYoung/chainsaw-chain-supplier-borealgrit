import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { SemiChiselCutterSvg, Chain38Svg } from '@/components/product-diagrams'
import { ProductChainSemiChisel } from '@/components/product-chain-illustrations'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SC-38 Semi-Chisel 3/8" Chainsaw Chain | BorealGrit™',
  description: 'Semi-chisel chainsaw chain, 3/8" pitch. General-purpose chain with rounded-corner cutters. Holds edge better in dirty or frozen wood. ANSI compliant.',
  keywords: 'semi chisel chainsaw chain, 3/8 pitch chain, SC-38 chain, general purpose chain, rounded-none corner chain, dirty wood chain, frozen wood chain, ANSI compliant chain',
  openGraph: {
    title: 'SC-38 Semi-Chisel 3/8" Chainsaw Chain',
    description: 'Rounded-corner semi-chisel, 3/8" pitch. General-purpose chain for consumer and pro saws.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/semi-chisel-38',
  },
}

export default function SemiChisel38Page() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Semi Chisel 3/8"' },
          ]}
        />

        {/* Product illustration — inline SVG for reliable display */}
        <section className="mb-8 bg-white border border-forest-brand/20 rounded-none overflow-hidden">
          <div className="relative w-full aspect-[3/2] max-h-[280px] flex items-center justify-center p-4 bg-gray-50">
            <ProductChainSemiChisel className="w-full h-full max-h-[240px] object-contain" />
          </div>
        </section>

        <h1 className="text-2xl font-bold text-text-main mb-2">SC-38 · Semi-chisel 3/8&quot;</h1>
        <p className="text-text-body mb-6">
          Rounded-corner semi-chisel, 3/8&quot; pitch. General-purpose chain. Holds an edge better in dirty or frozen wood than full chisel. Compatible with a wide range of consumer and pro saws. Use the{' '}
          <Link href="/fitment-finder" className="text-forest-brand font-medium hover:underline">
            Fitment Finder
          </Link>{' '}
          to match your saw and bar.
        </p>

        {/* Cutter & Chain Diagram */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Semi-Chisel Design & Durability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-gray-50 rounded-none p-4 flex items-center justify-center min-h-[18rem]">
              <SemiChiselCutterSvg />
            </div>
            <div className="bg-gray-50 rounded-none p-4 flex items-center justify-center min-h-[18rem]">
              <Chain38Svg />
            </div>
          </div>
          <p className="text-sm text-text-body italic">
            Semi-Chisel cutters feature rounded corners for superior edge retention. Less prone to dulling in dirty or frozen conditions. Optimal for Eastern North America hardwoods (oak, maple, hickory) and challenging cutting environments.
          </p>
        </section>

        {/* Cutter Type Comparison Infographic */}
        <section className="mb-10 bg-gray-50 rounded-none p-6">
          <h2 className="text-lg font-bold text-text-main mb-4">Full-Chisel vs Semi-Chisel Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none p-4 shadow-sm">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Full-Chisel (Square-Corner)</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutting Speed:</strong> Highest chip clearance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Clean softwood (Western NA)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Sharpening:</strong> Frequent in dirty conditions</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-none p-4 ring-2 ring-forest-brand">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Semi-Chisel (Rounded-Corner) ✓</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Edge Retention:</strong> Superior durability</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Dirty/frozen wood (Eastern NA)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Sharpening:</strong> Extended intervals</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-3">Technical specifications</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-40">Pitch</th>
                  <td className="px-4 py-2.5">3/8&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                  <td className="px-4 py-2.5">.043&quot;, .050&quot;, .058&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Drive links</th>
                  <td className="px-4 py-2.5">52, 56, 60, 64, 66, 72, 84, 96, 105 (other lengths on request)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Cutter type</th>
                  <td className="px-4 py-2.5">Semi-chisel (rounded corner)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Material</th>
                  <td className="px-4 py-2.5">Chromium alloy steel</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Heat treatment</th>
                  <td className="px-4 py-2.5">Hardened cutters, tempered tie straps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Compatible Brands */}
        <section className="mb-10 bg-gray-50 rounded-none p-6">
          <h2 className="text-lg font-bold text-text-main mb-3">Compatible Brands</h2>
          <p className="text-sm text-text-body mb-4">
            Semi-Chisel 3/8&quot; chains are designed as compatible replacements for general-purpose chainsaws from leading North American brands.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {['Husqvarna', 'Stihl', 'Echo', 'Poulan', 'Oregon', 'Craftsman'].map((brand) => (
                <div key={brand} className="bg-white rounded-none p-2 text-center shadow-sm">
                <div className="font-semibold text-text-main text-xs">{brand}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-body italic">
            <strong className="text-text-main">Brand Disclaimer:</strong> All brand names mentioned are trademarks of their respective owners. We are not affiliated with, authorized by, or endorsed by these brands. Our products are compatible replacements designed to meet or exceed OEM specifications.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-3">Compatibility summary</h2>
          <p className="text-text-body text-sm mb-3">
            Designed for 3/8&quot; pitch bars. Fits many Husqvarna, Stihl, Echo, Poulan, and other saws with 3/8&quot; or 3/8&quot; low-profile drive sprockets. Gauge must match bar groove. Drive link count must match bar length. Always verify bar and chain specifications before ordering.
          </p>
          <div className="flex flex-wrap gap-3 mb-3">
            <Link href="/fitment-finder" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-text-main text-sm font-semibold hover:bg-forest-brand hover:text-white border-2 border-transparent hover:border-forest-brand transition rounded">
              View Compatible Models
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products/applications/challenging-conditions" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-industrial text-text-body text-sm font-semibold hover:bg-gray-50 transition rounded">
              View Application Page
            </Link>
          </div>
          <p className="text-sm text-text-body italic">
            Use the <Link href="/fitment-finder" className="text-forest-brand hover:underline">Fitment Finder</Link> for saw‑specific results.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-3">Application</h2>
          <ul className="text-text-body text-sm list-disc pl-5 space-y-1">
            <li>General-purpose cutting</li>
            <li>Dirty wood, roots, frozen wood</li>
            <li>Consumer and prosumer saws</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-3">Packaging options</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2.5 font-semibold">Option</th>
                  <th className="text-left px-4 py-2.5 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-2.5">Retail box</td>
                  <td className="px-4 py-2.5">Single chain. Custom branding (OEM).</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-2.5">Bulk / master</td>
                  <td className="px-4 py-2.5">Multiple chains per carton. For distributors and OEM.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-3">OEM availability</h2>
          <p className="text-text-body text-sm">
            OEM and private label available. See{' '}
            <Link href="/oem-private-label" className="text-forest-brand font-medium hover:underline">
              OEM / Private Label
            </Link>
            .
          </p>
        </section>

        <section className="flex flex-wrap gap-4 pt-4 border-t border-forest-brand/30">
          <Link href="/contact" className="inline-flex items-center px-5 py-2.5 bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition">
            Request Quote
          </Link>
          <Link href="/resources#datasheets" className="inline-flex items-center px-5 py-2.5 border-2 border-industrial text-text-body font-semibold text-sm hover:bg-gray-50 transition">
            Download Datasheet
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
