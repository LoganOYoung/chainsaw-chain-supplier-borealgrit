import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chainsaw Chains for Battery-Powered Saws | ChainPro',
  description: 'Narrow kerf chainsaw chains optimized for battery-powered cordless saws. Reduces power consumption by 15-25%. Compatible with Milwaukee, Makita, EGO, DeWalt.',
  keywords: 'battery chainsaw chain, cordless saw chain, narrow kerf chain, battery-powered chainsaw chain, Milwaukee chainsaw chain, Makita chainsaw chain, EGO chainsaw chain, DeWalt chainsaw chain, electric chainsaw chain',
  openGraph: {
    title: 'Chainsaw Chains for Battery-Powered Saws',
    description: 'Narrow kerf chains optimized for cordless saws. Reduces power consumption by 15-25% and extends battery runtime.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/applications/battery-saws',
  },
}

export default function BatterySawsPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Applications', href: '/products' },
            { label: 'Battery Saws' },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-4">Chainsaw Chains for Battery-Powered Saws</h1>
        <p className="text-text-body mb-6 max-w-3xl">
          Narrow kerf chainsaw chains specifically engineered for battery-powered cordless saws. Reduces power consumption by 15-25% compared to standard chains, extending battery runtime and improving cutting efficiency.
        </p>

        {/* Hero Image */}
        <section className="mb-10">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/series-e-hero.jpg"
              alt="Battery-powered cordless chainsaw with narrow kerf chain cutting wood"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </section>

        {/* Application Overview */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Battery-Powered Saw Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Key Performance Requirements</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Reduced power consumption to extend battery runtime</li>
                <li>Narrow kerf width (.043") for lower cutting resistance</li>
                <li>Optimized for lower-torque electric motors</li>
                <li>Reduced heat generation to protect battery cells</li>
                <li>Compatibility with popular cordless saw brands</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3 text-sm">Compatible Brands & Models</h3>
              <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
                <li>Milwaukee M18 FUEL, M12 FUEL Hatchet</li>
                <li>Makita XCU01, XCU02, XCU03, XCU04</li>
                <li>EGO Power+ CS1600, CS1800</li>
                <li>DeWalt DCCS620, DCCS670 60V</li>
                <li>Ryobi 40V Brushless</li>
                <li>Greenworks Pro 80V</li>
                <li>Stihl MSA 160/200, MS 170/180</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Recommended Products</h2>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl">
            {/* Series E Card */}
            <div className="bg-white border border-forest-brand border-2 rounded-none p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-2">Series E</h3>
                  <p className="text-sm text-forest-brand font-medium">Optimized for Battery Saws</p>
                </div>
                <div className="bg-forest-brand/10 px-3 py-1 rounded-none text-xs font-semibold text-forest-brand">Best Performance</div>
              </div>
              <p className="text-sm text-text-body mb-4">
                .043" and .050" gauge narrow kerf chains specifically designed for battery-powered cordless saws. Reduces power consumption by 15-25% compared to standard chains, extending battery runtime by 20-30%.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Kerf Width:</strong> .043" (narrow kerf) - 30-35% narrower</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Power Reduction:</strong> 15-25% vs standard chains</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Battery Life:</strong> Extended runtime (20-30% longer)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Heat Generation:</strong> 20-30% less heat buildup</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Pitch Options:</strong> .325", 3/8" LP, 1/4" P</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-industrial">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutter Type:</strong> Semi-chisel, Low profile</span>
                </div>
              </div>
              <Link
                href="/products/series-e"
                className="inline-flex items-center gap-2 px-4 py-2 bg-safety-orange text-white text-sm font-semibold rounded-none hover:bg-safety-orange/90 transition"
              >
                View Series E Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Benefits */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Performance Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-brand mb-2">15-25%</div>
              <p className="text-sm text-text-bodyfont-semibold">Power Consumption Reduction</p>
              <p className="text-xs text-text-body mt-1">Lower cutting resistance reduces motor load</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-brand mb-2">20-30%</div>
              <p className="text-sm text-text-bodyfont-semibold">Extended Battery Runtime</p>
              <p className="text-xs text-text-body mt-1">More cuts per battery charge</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-brand mb-2">30-35%</div>
              <p className="text-sm text-text-bodyfont-semibold">Narrower Kerf Width</p>
              <p className="text-xs text-text-body mt-1">.043" vs standard .050"</p>
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
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-48">Cutter Type</th>
                  <td className="px-4 py-2.5">Semi-chisel, Low profile</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Kerf Width</th>
                  <td className="px-4 py-2.5">.043" (narrow kerf)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Pitch</th>
                  <td className="px-4 py-2.5">.325", 3/8" LP, 1/4" P</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                  <td className="px-4 py-2.5">.043", .050"</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Material</th>
                  <td className="px-4 py-2.5">Chromium alloy steel</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Power Reduction</th>
                  <td className="px-4 py-2.5">15-25% vs standard chains</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Battery Life Extension</th>
                  <td className="px-4 py-2.5">20-30% longer runtime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Compatibility Table */}
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
                  <td className="px-4 py-3 font-medium">Milwaukee</td>
                  <td className="px-4 py-3">M18 FUEL, M12 FUEL Hatchet</td>
                  <td className="px-4 py-3">6", 12", 14", 16"</td>
                  <td className="px-4 py-3">.043" / .050" / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Makita</td>
                  <td className="px-4 py-3">XCU01, XCU02, XCU03, XCU04</td>
                  <td className="px-4 py-3">12", 14", 16"</td>
                  <td className="px-4 py-3">.043" / .050" / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">EGO Power+</td>
                  <td className="px-4 py-3">CS1600, CS1800</td>
                  <td className="px-4 py-3">14", 16", 18"</td>
                  <td className="px-4 py-3">.043" / .050" / 56-60 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">DeWalt</td>
                  <td className="px-4 py-3">DCCS620, DCCS670 60V</td>
                  <td className="px-4 py-3">12", 14", 18"</td>
                  <td className="px-4 py-3">.043" / .050" / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Ryobi</td>
                  <td className="px-4 py-3">40V Brushless</td>
                  <td className="px-4 py-3">14"</td>
                  <td className="px-4 py-3">.043" / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Greenworks Pro</td>
                  <td className="px-4 py-3">80V</td>
                  <td className="px-4 py-3">18"</td>
                  <td className="px-4 py-3">.043" / 60 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Stihl</td>
                  <td className="px-4 py-3">MSA 160 / 200, MS 170 / MS 180</td>
                  <td className="px-4 py-3">12", 14", 16"</td>
                  <td className="px-4 py-3">.043" / .050" / 52-56 DL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-body italic mt-4">Always verify bar and chain specifications before ordering.</p>
        </section>

        {/* CTA Section */}
        <section className="flex flex-wrap gap-4 pt-4 border-t border-forest-brand/30">
          <Link href="/contact" className="inline-flex items-center px-5 py-2.5 bg-safety-orange text-white font-semibold text-sm hover:bg-safety-orange/90 transition">
            Request Quote for Battery Saws
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
