import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { FullChiselCutterSvg, Chain325Svg } from '@/components/product-diagrams'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FC-325 Full Chisel .325" Chainsaw Chain | BorealGrit™',
  description: 'Full chisel chainsaw chain, .325" pitch. Square-corner cutters for professional felling and bucking. ANSI compliant. Request quote or download datasheet.',
  keywords: 'full chisel chainsaw chain, .325 pitch chain, FC-325 chain, square corner chain, professional chainsaw chain, felling chain, bucking chain, ANSI compliant chain',
  openGraph: {
    title: 'FC-325 Full Chisel .325" Chainsaw Chain',
    description: 'Square-corner full chisel cutter, .325" pitch. For professional felling and bucking in clean wood.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/full-chisel-325',
  },
}

export default function FullChisel325Page() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Full Chisel .325"' },
          ]}
        />

        <h1 className="text-2xl font-bold text-text-main mb-2">FC-325 · Full chisel .325&quot;</h1>
        <p className="text-text-body mb-6">
          Square-corner full chisel cutter, .325&quot; pitch. For professional felling and bucking in clean wood. Compatible with many mid-size pro and prosumer saws. Use the{' '}
          <Link href="/fitment-finder" className="text-forest-brand font-medium hover:underline">
            Fitment Finder
          </Link>{' '}
          to match your saw and bar.
        </p>

        {/* Cutter & Chain Diagram */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Cutter Profile & Chain Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-white border border-forest-brand/30 rounded-none p-4 flex items-center justify-center min-h-[18rem]">
              <FullChiselCutterSvg />
            </div>
            <div className="bg-white border border-forest-brand/30 rounded-none p-4 flex items-center justify-center min-h-[18rem]">
              <Chain325Svg />
            </div>
          </div>
          <p className="text-sm text-text-body italic">
            Full-Chisel cutters feature square corners for maximum chip clearance speed. Optimal for clean softwood in Western North America (pine, fir, cedar). Requires frequent sharpening in dirty conditions.
          </p>
        </section>

        {/* Cutter Type Comparison Infographic */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Full-Chisel vs Semi-Chisel Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none p-4 border border-forest-brand border-2">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Full-Chisel (Square-Corner) ✓</h3>
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
                  <span><strong>Productivity:</strong> 20-30% faster cutting speed</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Sharpening:</strong> Frequent in dirty conditions</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-none p-4 border border-forest-brand/30">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Semi-Chisel (Rounded-Corner)</h3>
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
                  <span><strong>Cutting Speed:</strong> Moderate chip clearance</span>
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
                  <td className="px-4 py-2.5">.325&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                  <td className="px-4 py-2.5">.050&quot;, .058&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Drive links</th>
                  <td className="px-4 py-2.5">52, 56, 60, 64, 66, 68, 72, 78, 84 (other lengths on request)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Cutter type</th>
                  <td className="px-4 py-2.5">Full chisel (square corner)</td>
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
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-3">Compatible Brands</h2>
          <p className="text-sm text-text-body mb-4">
            Full Chisel .325&quot; chains are designed as compatible replacements for mid-size professional and prosumer chainsaws from leading North American brands.
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

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-3">Compatibility summary</h2>
          <p className="text-text-body text-sm mb-3">
            Designed for .325&quot; pitch bars. Typically used on Husqvarna, Stihl, Echo, and other saws with .325&quot; drive sprockets. Gauge must match bar groove: .050&quot; or .058&quot;. Drive link count must match bar length. Always verify bar and chain specifications before ordering.
          </p>
          <div className="flex flex-wrap gap-3 mb-3">
            <Link href="/fitment-finder" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-text-main text-sm font-semibold hover:bg-forest-brand hover:text-white border-2 border-transparent hover:border-forest-brand transition rounded">
              View Compatible Models
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products/applications/professional-loggers" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-industrial text-text-body text-sm font-semibold hover:bg-gray-50 transition rounded">
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
            <li>Professional felling and bucking</li>
            <li>Landscape and arborist use</li>
            <li>Clean wood; not recommended for dirty or frozen wood</li>
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
                  <td className="px-4 py-2.5">Single chain, consumer-style box. Custom branding available (OEM).</td>
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
            OEM and private label available. MOQ and lead time per project. See{' '}
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
