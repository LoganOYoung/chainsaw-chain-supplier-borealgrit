import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chainsaw Chains for Challenging Conditions | Borealgrit',
  description: 'Durable chainsaw chains for dirty wood, frozen timber, and challenging cutting conditions. Semi-chisel design and cold-weather optimized options.',
  keywords: 'challenging conditions chainsaw chain, dirty wood chain, frozen wood chain, semi chisel chain, cold weather chain, tough conditions chain',
  openGraph: {
    title: 'Chainsaw Chains for Challenging Conditions',
    description: 'Engineered for dirty wood, frozen timber, and extreme conditions. Superior edge retention and impact toughness.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/applications/challenging-conditions',
  },
}

export default function ChallengingConditionsPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Applications', href: '/products' },
            { label: 'Challenging Conditions' },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-4">Chainsaw Chains for Challenging Conditions</h1>
        <p className="text-text-body mb-6 max-w-3xl">
          Engineered for dirty wood, frozen timber, roots, and extreme cutting conditions. Superior edge retention and impact toughness for demanding applications where standard chains fail.
        </p>

        {/* Hero Image */}
        <section className="mb-10">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/series-w-hero.jpg"
              alt="Chainsaw chain cutting frozen wood in challenging winter conditions"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </section>

        {/* Application Overview */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Challenging Conditions Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Common Challenging Conditions</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Dirty wood with embedded sand, dirt, or grit</li>
                <li>Frozen timber (sub-zero temperatures)</li>
                <li>Roots and ground contact</li>
                <li>Hardwood with knots and irregular grain</li>
                <li>Eastern North America hardwoods (oak, maple, hickory)</li>
                <li>Wet or partially frozen wood</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Why Standard Chains Fail</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Square-corner cutters dull quickly in dirty conditions</li>
                <li>Standard carbon steel becomes brittle below -10°C</li>
                <li>Insufficient edge retention for abrasive materials</li>
                <li>Poor impact toughness in frozen conditions</li>
                <li>Frequent sharpening required, reducing productivity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Recommended Products</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Series W Card */}
            <div className="bg-white border border-forest-brand/30 rounded-none p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-2">Series W</h3>
                  <p className="text-sm text-forest-brand font-medium">Cold-Weather Optimized</p>
                </div>
                <div className="bg-forest-brand/10 px-3 py-1 rounded-none text-xs font-semibold text-forest-brand">Best for Frozen</div>
              </div>
              <p className="text-sm text-text-body mb-4">
                CrNiMo alloy steel with specialized nitriding heat treatment. Impact toughness maintained at -40°C. Semi-chisel design for superior edge retention in frozen and dirty conditions.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Material:</strong> CrNiMo (Chromium-Nickel-Molybdenum) alloy</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Low-Temp Performance:</strong> -40°C impact toughness</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutter Type:</strong> Semi-chisel (rounded corner)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Frozen wood, Canadian winter, sub-zero</span>
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

            {/* Semi Chisel 3/8" Card */}
            <div className="bg-white border border-forest-brand/30 rounded-none p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-2">Semi Chisel 3/8"</h3>
                  <p className="text-sm text-forest-brand font-medium">General-Purpose Tough</p>
                </div>
              </div>
              <p className="text-sm text-text-body mb-4">
                Rounded-corner semi-chisel design with superior edge retention. Holds an edge better in dirty or frozen wood than full chisel. Ideal for challenging conditions and general-purpose cutting.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutter Type:</strong> Semi-chisel (rounded corner)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Edge Retention:</strong> Superior durability</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Dirty/frozen wood, roots, Eastern NA hardwoods</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Pitch:</strong> 3/8" (versatile sizing)</span>
                </div>
              </div>
              <Link
                href="/products/semi-chisel-38"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-industrial text-text-body text-sm font-semibold rounded-none hover:bg-gray-50 transition"
              >
                View Semi Chisel 3/8" Details
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
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main bg-gray-50">Series W</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main bg-gray-50">Semi Chisel 3/8"</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Material</td>
                  <td className="px-4 py-3 text-industrial">CrNiMo alloy steel</td>
                  <td className="px-4 py-3 text-industrial">Chromium alloy steel</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Cutter Type</td>
                  <td className="px-4 py-3 text-industrial">Semi-chisel (rounded corner)</td>
                  <td className="px-4 py-3 text-industrial">Semi-chisel (rounded corner)</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Low-Temp Performance</td>
                  <td className="px-4 py-3 text-industrial">-40°C impact toughness maintained</td>
                  <td className="px-4 py-3 text-industrial">Standard (degrades below -10°C)</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Heat Treatment</td>
                  <td className="px-4 py-3 text-industrial">Specialized nitriding process</td>
                  <td className="px-4 py-3 text-industrial">Standard hardening and tempering</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Pitch Options</td>
                  <td className="px-4 py-3 text-industrial">.325", 3/8"</td>
                  <td className="px-4 py-3 text-industrial">3/8"</td>
                </tr>
                <tr className="border-b border-forest-brand/30">
                  <td className="px-4 py-3 font-semibold text-text-main">Best For</td>
                  <td className="px-4 py-3 text-industrial">Frozen wood, sub-zero conditions, Canadian winter</td>
                  <td className="px-4 py-3 text-industrial">Dirty wood, roots, general challenging conditions</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-text-main">Edge Retention</td>
                  <td className="px-4 py-3 text-industrial">Superior (alloy + nitriding)</td>
                  <td className="px-4 py-3 text-industrial">Superior (rounded corner design)</td>
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
              <h3 className="font-semibold text-text-main mb-3 text-sm">Choose Series W If:</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-1">
                <li>You operate in sub-zero temperatures (below -10°C)</li>
                <li>You cut frozen timber regularly</li>
                <li>You need -40°C impact toughness</li>
                <li>You operate in Canadian winter conditions</li>
                <li>You require specialized CrNiMo alloy performance</li>
                <li>You need .325" pitch for your saw configuration</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-5">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Choose Semi Chisel 3/8" If:</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-1">
                <li>You cut dirty wood with embedded grit or sand</li>
                <li>You work with roots and ground contact</li>
                <li>You need 3/8" pitch configuration</li>
                <li>You operate in normal to cold conditions (above -10°C)</li>
                <li>You want superior edge retention at standard pricing</li>
                <li>You need general-purpose durability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Series W</h3>
              <div className="table-responsive -mx-4 sm:mx-0">
                <table className="w-full min-w-[300px] text-sm border border-forest-brand/30">
                  <tbody className="text-industrial">
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-32">Material</th>
                      <td className="px-4 py-2.5">CrNiMo alloy steel</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Pitch</th>
                      <td className="px-4 py-2.5">.325", 3/8"</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Operating Temp</th>
                      <td className="px-4 py-2.5">-40°C to +40°C</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Impact Toughness</th>
                      <td className="px-4 py-2.5">ASTM E23 compliant at -40°C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Semi Chisel 3/8"</h3>
              <div className="table-responsive -mx-4 sm:mx-0">
                <table className="w-full min-w-[300px] text-sm border border-forest-brand/30">
                  <tbody className="text-industrial">
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-32">Pitch</th>
                      <td className="px-4 py-2.5">3/8"</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                      <td className="px-4 py-2.5">.043", .050", .058"</td>
                    </tr>
                    <tr className="border-t border-forest-brand/30">
                      <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Cutter Type</th>
                      <td className="px-4 py-2.5">Semi-chisel (rounded corner)</td>
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
          <Link href="/contact" className="inline-flex items-center px-5 py-2.5 bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand hover:border-2 hover:border-forest-brand transition">
            Request Quote for Challenging Conditions
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
