import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'LP-325 Low Profile .325" Chainsaw Chain | Borealgrit',
  description: 'Low profile chainsaw chain, .325" pitch. Low-kickback design for consumer and homeowner saws. ANSI compliant. Request quote or download datasheet.',
  keywords: 'low profile chainsaw chain, .325 pitch chain, LP-325 chain, low kickback chain, consumer chainsaw chain, homeowner chainsaw chain, safety chain, ANSI compliant chain',
  openGraph: {
    title: 'LP-325 Low Profile .325" Chainsaw Chain',
    description: 'Low-kickback design, .325" pitch. Designed for consumer and homeowner saws.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/low-profile-325',
  },
}

export default function LowProfile325Page() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Low Profile .325"' },
          ]}
        />

        <h1 className="text-2xl font-bold text-text-main mb-2">LP-325 · Low profile .325&quot;</h1>
        <p className="text-text-body mb-6">
          Low-kickback design, .325&quot; pitch. Designed for consumer and homeowner saws. Reduced kickback geometry. Compatible with many entry-level and mid-range saws. Use the{' '}
          <Link href="/fitment-finder" className="text-forest-brand font-medium hover:underline">
            Fitment Finder
          </Link>{' '}
          to match your saw and bar.
        </p>

        {/* Hero Image */}
        <section className="mb-10">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/products/low-profile-325-hero.jpg"
              alt="Low Profile .325 inch chainsaw chain in consumer/homeowner application - safe cutting with low-kickback design"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </section>

        {/* Product Detail Images - Low Profile Design */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Low Profile Design & Safety Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative w-full h-48 md:h-64 rounded-none overflow-hidden bg-gray-50">
              <Image
                src="/images/products/low-profile-cutter-detail.jpg"
                alt="Low Profile cutter close-up showing reduced cutter depth and low-kickback safety geometry"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-forest-brand/70 text-white p-3">
                <p className="text-sm font-semibold">Low-Kickback Design</p>
                <p className="text-xs text-gray-200">Reduced cutter depth</p>
              </div>
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-none overflow-hidden bg-gray-50">
              <Image
                src="/images/products/low-profile-chain-detail.jpg"
                alt="Low Profile chain showing drive link configuration and safety link placement"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-forest-brand/70 text-white p-3">
                <p className="text-sm font-semibold">Safety Links</p>
                <p className="text-xs text-gray-200">ANSI low-kickback compliant</p>
              </div>
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-none overflow-hidden bg-gray-50">
              <Image
                src="/images/products/low-profile-application.jpg"
                alt="Low Profile chain in homeowner application - light-duty cutting and pruning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-forest-brand/70 text-white p-3">
                <p className="text-sm font-semibold">Homeowner Use</p>
                <p className="text-xs text-gray-200">Light-duty cutting</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-text-body italic">
            Low Profile design reduces kickback risk through reduced cutter depth and safety link geometry. ANSI B175.1 compliant for consumer safety. Ideal for entry-level and homeowner saws.
          </p>
        </section>

        {/* Low Profile vs Full Chain Comparison Infographic */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Low Profile vs Full Chain Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none p-4 border border-forest-brand border-2">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Low Profile Chain ✓</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Kickback Risk:</strong> Reduced by 40-60% (ANSI B175.1)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Target Market:</strong> Consumer / Homeowner saws</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Power Requirement:</strong> Lower (30-50cc saws)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Safety Standard:</strong> ANSI low-kickback compliant</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Light-duty cutting, pruning</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-none p-4 border border-forest-brand/30">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Full Chain</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Kickback Risk:</strong> Standard (higher than Low Profile)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Target Market:</strong> Professional / Prosumer saws</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Power Requirement:</strong> Higher (50cc+ saws)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutting Performance:</strong> Maximum chip clearance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Professional felling, bucking</span>
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
                  <td className="px-4 py-2.5">.325&quot; (low profile)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                  <td className="px-4 py-2.5">.043&quot;, .050&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Drive links</th>
                  <td className="px-4 py-2.5">52, 56, 60, 64, 66, 72 (other lengths on request)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Cutter type</th>
                  <td className="px-4 py-2.5">Low profile, low-kickback</td>
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
            Low Profile .325&quot; chains are designed as compatible replacements for consumer and homeowner chainsaws from leading North American brands.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {['Husqvarna', 'Stihl', 'Echo', 'Poulan', 'Oregon', 'Craftsman'].map((brand) => (
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
            Designed for .325&quot; low-profile bars. Fits many consumer saws (e.g. Husqvarna Mark II–style, some Stihl, Echo, Poulan). Gauge and drive link count must match bar. Always verify bar and chain specifications before ordering.
          </p>
          <div className="flex flex-wrap gap-3 mb-3">
            <Link href="/fitment-finder" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-text-main text-sm font-semibold hover:bg-gray-200 transition rounded">
              View Compatible Models
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products/applications/retail-consumer" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-industrial text-text-body text-sm font-semibold hover:bg-gray-50 transition rounded">
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
            <li>Consumer and homeowner saws</li>
            <li>Light-duty cutting, pruning, firewood</li>
            <li>Low-kickback applications</li>
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
          <Link href="/contact" className="inline-flex items-center px-5 py-2.5 bg-forest-brand text-white font-semibold text-sm hover:bg-forest-brand/90 transition">
            Request Quote
          </Link>
          <Link href="/resources#datasheets" className="inline-flex items-center px-5 py-2.5 border-2 border-industrial text-text-bodyfont-semibold text-sm hover:bg-gray-50 transition">
            Download Datasheet
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
