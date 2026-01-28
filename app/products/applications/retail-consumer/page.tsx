import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chainsaw Chains for Retail & Consumer Market | ChainPro',
  description: 'Low-kickback chainsaw chains for consumer and homeowner saws. ANSI B175.1 compliant. Safe, reliable chains for retail market and DIY applications.',
  keywords: 'consumer chainsaw chain, homeowner chainsaw chain, retail chainsaw chain, low kickback chain, safety chain, ANSI compliant chain, DIY chainsaw chain',
  openGraph: {
    title: 'Chainsaw Chains for Retail & Consumer Market',
    description: 'Low-kickback design, ANSI B175.1 compliant. Safe and reliable chains for consumer and homeowner saws.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/applications/retail-consumer',
  },
}

export default function RetailConsumerPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Applications', href: '/products' },
            { label: 'Retail & Consumer' },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-4">Chainsaw Chains for Retail & Consumer Market</h1>
        <p className="text-text-body mb-6 max-w-3xl">
          Low-kickback chainsaw chains designed for consumer and homeowner saws. ANSI B175.1 compliant for safety. Reduced kickback risk through low-profile design and safety link geometry.
        </p>

        {/* Hero Image */}
        <section className="mb-10">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/products/low-profile-325-hero.jpg"
              alt="Low profile chainsaw chain in consumer/homeowner application - safe cutting with low-kickback design"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </section>

        {/* Application Overview */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Retail & Consumer Market Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Key Safety Requirements</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>ANSI B175.1 low-kickback compliance</li>
                <li>Reduced kickback risk (40-60% reduction)</li>
                <li>Low-profile design for safety</li>
                <li>Safety link geometry</li>
                <li>Consumer-friendly packaging</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Typical Applications</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Homeowner firewood cutting</li>
                <li>Light-duty pruning and trimming</li>
                <li>DIY projects and yard work</li>
                <li>Entry-level and mid-range saws</li>
                <li>Retail store distribution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Recommended Products</h2>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl">
            {/* Low Profile .325" Card */}
            <div className="bg-white border border-forest-brand border-2 rounded-none p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-2">Low Profile .325"</h3>
                  <p className="text-sm text-forest-brand font-medium">Consumer & Homeowner</p>
                </div>
                <div className="bg-forest-brand/10 px-3 py-1 rounded-none text-xs font-semibold text-forest-brand">ANSI Compliant</div>
              </div>
              <p className="text-sm text-text-body mb-4">
                Low-kickback design, .325" pitch. Designed specifically for consumer and homeowner saws. Reduced kickback risk through low-profile cutter design and safety link geometry. ANSI B175.1 compliant.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Kickback Risk:</strong> Reduced by 40-60% (ANSI B175.1)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Target Market:</strong> Consumer / Homeowner saws</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Power Requirement:</strong> Lower (30-50cc saws)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Safety Standard:</strong> ANSI low-kickback compliant</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Light-duty cutting, pruning, firewood</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Pitch:</strong> .325" (low profile)</span>
                </div>
              </div>
              <Link
                href="/products/low-profile-325"
                className="inline-flex items-center gap-2 px-4 py-2 bg-safety-orange text-white text-sm font-semibold rounded-none hover:bg-safety-orange/90 transition"
              >
                View Low Profile .325" Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Safety Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Low-Kickback Design</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Reduced cutter depth minimizes kickback risk</li>
                <li>Safety link geometry prevents chain binding</li>
                <li>40-60% reduction in kickback compared to full chains</li>
                <li>ANSI B175.1 compliant for consumer safety</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Consumer Benefits</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Safer operation for less experienced users</li>
                <li>Ideal for entry-level and homeowner saws</li>
                <li>Light-duty cutting applications</li>
                <li>Retail-ready packaging options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison with Full Chain */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Low Profile vs Full Chain Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none p-4 border border-forest-brand border-2">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Low Profile Chain ✓</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Kickback Risk:</strong> Reduced by 40-60%</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Target Market:</strong> Consumer / Homeowner</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Power Requirement:</strong> Lower (30-50cc)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Light-duty, pruning</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-none p-4 border border-forest-brand/30">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Full Chain</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Kickback Risk:</strong> Standard (higher)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Target Market:</strong> Professional / Prosumer</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Power Requirement:</strong> Higher (50cc+)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Professional felling, bucking</span>
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
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-48">Pitch</th>
                  <td className="px-4 py-2.5">.325" (low profile)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                  <td className="px-4 py-2.5">.043", .050"</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Drive Links</th>
                  <td className="px-4 py-2.5">52, 56, 60, 64, 66, 72 (other lengths on request)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Cutter Type</th>
                  <td className="px-4 py-2.5">Low profile, low-kickback</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Material</th>
                  <td className="px-4 py-2.5">Chromium alloy steel</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Safety Standard</th>
                  <td className="px-4 py-2.5">ANSI B175.1 low-kickback compliant</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Kickback Reduction</th>
                  <td className="px-4 py-2.5">40-60% vs full chains</td>
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
                  <td className="px-4 py-3">Mark II-style, entry-level models</td>
                  <td className="px-4 py-3">12", 14", 16"</td>
                  <td className="px-4 py-3">.325" LP / .043" / .050" / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Stihl</td>
                  <td className="px-4 py-3">MS 170, MS 180</td>
                  <td className="px-4 py-3">12", 14", 16"</td>
                  <td className="px-4 py-3">.325" LP / .043" / .050" / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Echo</td>
                  <td className="px-4 py-3">CS-310, CS-352</td>
                  <td className="px-4 py-3">12", 14", 16"</td>
                  <td className="px-4 py-3">.325" LP / .043" / .050" / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Poulan</td>
                  <td className="px-4 py-3">Pro, entry-level models</td>
                  <td className="px-4 py-3">14", 16"</td>
                  <td className="px-4 py-3">.325" LP / .043" / .050" / 52-56 DL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-body italic mt-4">Always verify bar and chain specifications before ordering.</p>
        </section>

        {/* Packaging Options */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Packaging Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-none p-5 border border-forest-brand/30">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Retail Packaging</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-1">
                <li>Single chain consumer-style box</li>
                <li>Custom branding available (OEM)</li>
                <li>UPC barcode ready</li>
                <li>Retail shelf-ready design</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-none p-5 border border-forest-brand/30">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Bulk Packaging</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-1">
                <li>Multiple chains per carton</li>
                <li>For distributors and OEM</li>
                <li>Cost-effective for volume orders</li>
                <li>Custom packaging available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-wrap gap-4 pt-4 border-t border-forest-brand/30">
          <Link href="/contact" className="inline-flex items-center px-5 py-2.5 bg-safety-orange text-white font-semibold text-sm hover:bg-safety-orange/90 transition">
            Request Quote for Retail/Consumer
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
