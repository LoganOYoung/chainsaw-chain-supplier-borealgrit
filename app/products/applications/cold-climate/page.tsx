import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chainsaw Chains for Cold Climate | Borealgrit',
  description: 'Cold-weather chainsaw chains with CrNiMo alloy steel. Impact toughness maintained at -40°C. Designed for frozen timber and Canadian winter conditions.',
  keywords: 'cold weather chainsaw chain, frozen wood chain, winter chainsaw chain, Canadian chainsaw chain, sub-zero chainsaw chain, -40°C chainsaw chain, CrNiMo alloy chain',
  openGraph: {
    title: 'Chainsaw Chains for Cold Climate',
    description: 'CrNiMo alloy steel with specialized nitriding. Impact toughness maintained at -40°C for frozen timber cutting.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/applications/cold-climate',
  },
}

export default function ColdClimatePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Applications', href: '/products' },
            { label: 'Cold Climate' },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-4">Chainsaw Chains for Cold Climate</h1>
        <p className="text-text-body mb-6 max-w-3xl">
          CrNiMo (Chromium-Nickel-Molybdenum) alloy steel chainsaw chains with specialized nitriding heat treatment. Impact toughness maintained at -40°C for cutting frozen timber and operating in extreme cold conditions.
        </p>

        {/* Hero Image */}
        <section className="mb-10">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/series-w-hero.jpg"
              alt="Chainsaw chain cutting frozen wood in cold winter conditions"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </section>

        {/* Application Overview */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Cold Climate Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Key Performance Requirements</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Impact toughness maintained at sub-zero temperatures</li>
                <li>Resistance to brittleness below -10°C</li>
                <li>Superior edge retention in frozen wood</li>
                <li>CrNiMo alloy steel for low-temperature performance</li>
                <li>Specialized nitriding heat treatment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Typical Applications</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Canadian winter logging operations</li>
                <li>Frozen timber cutting (sub-zero conditions)</li>
                <li>Cold climate forestry work</li>
                <li>Winter firewood processing</li>
                <li>Operations below -10°C</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Recommended Products</h2>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl">
            {/* Series W Card */}
            <div className="bg-white border border-forest-brand border-2 rounded-none p-6 transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-2">Series W</h3>
                  <p className="text-sm text-forest-brand font-medium">Cold-Weather Optimized</p>
                </div>
                <div className="bg-forest-brand/10 px-3 py-1 rounded-none text-xs font-semibold text-forest-brand">Best for Cold</div>
              </div>
              <p className="text-sm text-text-body mb-4">
                CrNiMo alloy steel with specialized nitriding heat treatment. Impact toughness maintained at -40°C. Semi-chisel design for superior edge retention in frozen and dirty conditions. Designed specifically for cold climate operations.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Material:</strong> CrNiMo (Chromium-Nickel-Molybdenum) alloy steel</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Low-Temp Performance:</strong> Impact toughness maintained at -40°C</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Heat Treatment:</strong> Specialized nitriding process</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Brittleness Threshold:</strong> Below -40°C (ASTM E23 compliant)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutter Type:</strong> Semi-chisel (rounded corner)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Pitch Options:</strong> .325", 3/8"</span>
                </div>
              </div>
              <Link
                href="/products/series-w"
                className="inline-flex items-center gap-2 px-4 py-2 bg-forest-brand text-white text-sm font-semibold rounded-none hover:bg-white hover:text-forest-brand hover:border-2 hover:border-forest-brand transition"
              >
                View Series W Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Comparison */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Cold-Weather Performance Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none p-4 border border-forest-brand border-2">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Series W (Cold-Weather) ✓</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Material:</strong> CrNiMo alloy steel</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Low-Temp Performance:</strong> -40°C impact toughness</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Brittleness Threshold:</strong> Below -40°C</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Frozen wood, Canadian winter</span>
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
                  <span><strong>Low-Temp Performance:</strong> Degrades below -10°C</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Brittleness Threshold:</strong> -10°C (becomes brittle)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Normal temperature (above 0°C)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <td className="px-4 py-2.5">.325", 3/8"</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                  <td className="px-4 py-2.5">.050", .058"</td>
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

        {/* Compatibility */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Compatibility</h2>
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
                  <td className="px-4 py-3 font-medium">Husqvarna</td>
                  <td className="px-4 py-3">435, 440, 450</td>
                  <td className="px-4 py-3">18"</td>
                  <td className="px-4 py-3">.325" / .050" / 72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Husqvarna</td>
                  <td className="px-4 py-3">455 Rancher</td>
                  <td className="px-4 py-3">18", 20"</td>
                  <td className="px-4 py-3">.325" / .050" / 72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Stihl</td>
                  <td className="px-4 py-3">MS 250, MS 251</td>
                  <td className="px-4 py-3">16", 18"</td>
                  <td className="px-4 py-3">.325" / .063" / 66-72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Stihl</td>
                  <td className="px-4 py-3">MS 271</td>
                  <td className="px-4 py-3">18"</td>
                  <td className="px-4 py-3">.325" / .050" / 72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Echo</td>
                  <td className="px-4 py-3">CS-400</td>
                  <td className="px-4 py-3">16", 18"</td>
                  <td className="px-4 py-3">.325" / .050" / 66-72 DL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-body italic mt-4">Always verify bar and chain specifications before ordering.</p>
        </section>

        {/* CTA Section */}
        <section className="flex flex-wrap gap-4 pt-4 border-t border-forest-brand/30">
          <Link href="/contact" className="inline-flex items-center px-5 py-2.5 bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand hover:border-2 hover:border-forest-brand transition">
            Request Quote for Cold Climate
          </Link>
          <Link href="/products" className="inline-flex items-center px-5 py-2.5 border-2 border-industrial text-text-bodyfont-semibold text-sm hover:bg-gray-50 transition">
            Browse All Products
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
