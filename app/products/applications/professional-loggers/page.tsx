import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chainsaw Chains for Professional Loggers | ChainPro',
  description: 'High-performance chainsaw chains for professional logging operations. Full-chisel design with extended sharpening intervals. Series P and Full Chisel .325" options.',
  keywords: 'professional logging chainsaw chain, professional forester chain, high-speed logging chain, full chisel chain, chrome coated chain, professional chainsaw chain',
  openGraph: {
    title: 'Chainsaw Chains for Professional Loggers',
    description: 'Maximum productivity chains for professional logging operations. Full-chisel design with industrial chrome coating.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/applications/professional-loggers',
  },
}

export default function ProfessionalLoggersPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Applications', href: '/products' },
            { label: 'Professional Loggers' },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-4">Chainsaw Chains for Professional Loggers</h1>
        <p className="text-text-body mb-6 max-w-3xl">
          High-performance chainsaw chains engineered for professional logging operations. Maximum chip clearance speed, extended sharpening intervals, and superior durability for high-volume cutting operations.
        </p>

        {/* Hero Image */}
        <section className="mb-10">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/series-p-hero.jpg"
              alt="Professional logger using chainsaw chain in high-speed logging operation"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </section>

        {/* Application Overview */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Professional Logging Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Key Performance Requirements</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Maximum cutting speed for high-volume operations</li>
                <li>Extended sharpening intervals to minimize downtime</li>
                <li>Superior wear resistance for long workdays</li>
                <li>Low vibration for reduced operator fatigue</li>
                <li>Compatibility with high-power professional saws (60cc+)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Typical Applications</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Commercial felling operations</li>
                <li>High-volume bucking and limbing</li>
                <li>Professional forestry crews</li>
                <li>Timber harvesting operations</li>
                <li>Clean softwood cutting (Western NA)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Recommended Products</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Series P Card */}
            <div className="bg-white border border-forest-brand/30 rounded-none p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-2">Series P</h3>
                  <p className="text-sm text-forest-brand font-medium">Premium Choice</p>
                </div>
                <div className="bg-forest-brand/10 px-3 py-1 rounded-none text-xs font-semibold text-forest-brand">Best Performance</div>
              </div>
              <p className="text-sm text-text-body mb-4">
                Full-chisel chains with industrial chrome coating (HRC 62-65). Extended sharpening intervals (30-40% longer). Designed for high-power professional saws (60cc+). 3/8" and .404" pitch options.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Coating:</strong> Industrial chrome plating (0.05-0.08mm)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Sharpening Interval:</strong> Extended by 30-40%</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Pitch Options:</strong> 3/8", .404"</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Vibration:</strong> ISO 22868 compliant</span>
                </div>
              </div>
              <Link
                href="/products/series-p"
                className="inline-flex items-center gap-2 px-4 py-2 bg-safety-orange text-white text-sm font-semibold rounded-none hover:bg-safety-orange/90 transition"
              >
                View Series P Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Full Chisel .325" Card */}
            <div className="bg-white border border-forest-brand/30 rounded-none p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-2">Full Chisel .325"</h3>
                  <p className="text-sm text-forest-brand font-medium">Mid-Size Professional</p>
                </div>
              </div>
              <p className="text-sm text-text-body mb-4">
                Square-corner full chisel cutter, .325" pitch. Optimal for mid-size professional saws and prosumer applications. Maximum chip clearance speed for clean softwood cutting.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutter Type:</strong> Full chisel (square corner)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutting Speed:</strong> Highest chip clearance</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Clean softwood (Western NA)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Pitch:</strong> .325" (mid-size saws)</span>
                </div>
              </div>
              <Link
                href="/products/full-chisel-325"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-industrial text-text-body text-sm font-semibold rounded-none hover:bg-gray-50 transition"
              >
                View Full Chisel .325" Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Product Comparison Table */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Product Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main bg-gray-50">Feature</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main bg-gray-50">Series P</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main bg-gray-50">Full Chisel .325"</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Cutter Type</td>
                  <td className="px-4 py-3 text-industrial">Full chisel (square corner)</td>
                  <td className="px-4 py-3 text-industrial">Full chisel (square corner)</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Coating</td>
                  <td className="px-4 py-3 text-industrial">Industrial chrome (HRC 62-65)</td>
                  <td className="px-4 py-3 text-industrial">Standard</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Sharpening Interval</td>
                  <td className="px-4 py-3 text-industrial">Extended (30-40% longer)</td>
                  <td className="px-4 py-3 text-industrial">Standard</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Pitch Options</td>
                  <td className="px-4 py-3 text-industrial">3/8", .404"</td>
                  <td className="px-4 py-3 text-industrial">.325"</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Saw Power Range</td>
                  <td className="px-4 py-3 text-industrial">60cc+ (high-power)</td>
                  <td className="px-4 py-3 text-industrial">40-60cc (mid-size)</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Best For</td>
                  <td className="px-4 py-3 text-industrial">High-volume logging, extended workdays</td>
                  <td className="px-4 py-3 text-industrial">Mid-size professional saws, prosumer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-text-main">Vibration</td>
                  <td className="px-4 py-3 text-industrial">ISO 22868 compliant (low)</td>
                  <td className="px-4 py-3 text-industrial">Standard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Selection Guide */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Selection Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/5 border border-forest-brand rounded-none p-5">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Choose Series P If:</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-1">
                <li>You operate high-power professional saws (60cc+)</li>
                <li>You need maximum sharpening interval (minimize downtime)</li>
                <li>You require .404" pitch for large-diameter timber</li>
                <li>You prioritize extended durability for long workdays</li>
                <li>You want industrial chrome coating for superior wear resistance</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-5">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Choose Full Chisel .325" If:</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-1">
                <li>You operate mid-size professional saws (40-60cc)</li>
                <li>You need .325" pitch for your bar configuration</li>
                <li>You prioritize maximum cutting speed</li>
                <li>You cut clean softwood (Western NA)</li>
                <li>You want professional performance at a standard price point</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Series P</h3>
              <div className="table-responsive -mx-4 sm:mx-0">
                <table className="w-full min-w-[300px] text-sm border border-forest-brand/30">
                  <tbody className="text-industrial">
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-32">Pitch</th>
                      <td className="px-4 py-2.5">3/8", .404"</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                      <td className="px-4 py-2.5">.050", .058", .063"</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Surface Hardness</th>
                      <td className="px-4 py-2.5">HRC 62-65 (chrome layer)</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Vibration</th>
                      <td className="px-4 py-2.5">ISO 22868 compliant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Full Chisel .325"</h3>
              <div className="table-responsive -mx-4 sm:mx-0">
                <table className="w-full min-w-[300px] text-sm border border-forest-brand/30">
                  <tbody className="text-industrial">
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-32">Pitch</th>
                      <td className="px-4 py-2.5">.325"</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                      <td className="px-4 py-2.5">.050", .058"</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Cutter Type</th>
                      <td className="px-4 py-2.5">Full chisel (square corner)</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Material</th>
                      <td className="px-4 py-2.5">Chromium alloy steel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-wrap gap-4 pt-4 border-t border-forest-brand/30">
          <Link href="/contact" className="inline-flex items-center px-5 py-2.5 bg-safety-orange text-white font-semibold text-sm hover:bg-safety-orange/90 transition">
            Request Quote for Professional Loggers
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
