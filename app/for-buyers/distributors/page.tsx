import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Distributors & Forestry | BorealGrit™ – For Buyers',
  description: 'Factory-direct chainsaw chains for North American distributors, logging operations, and OEMs. Who we serve, how we work, policies, and why choose BorealGrit.',
  keywords: 'chainsaw chain distributor, B2B forestry supply, North America chainsaw chain, factory direct, wholesale chainsaw chain, logging supply',
  openGraph: {
    title: 'Distributors & Forestry | BorealGrit™ – For Buyers',
    description: 'Factory-direct chainsaw chains for North American distributors and logging operations. How we work and why choose BorealGrit.',
    type: 'website',
  },
  alternates: {
    canonical: '/for-buyers/distributors',
  },
}

export default function DistributorsPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'For Buyers', href: '/for-buyers' },
            { label: 'Distributors & Forestry' },
          ]}
        />
        {/* Hero */}
        <section className="mb-8 sm:mb-10">
          <div className="relative w-full h-44 sm:h-48 md:h-64 lg:h-72 rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/contact-banner.jpg"
              alt="BorealGrit factory-direct chainsaw chains for North American forestry and distribution"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-forest-brand/60" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-6 sm:py-8 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
              <h1 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 tracking-tight uppercase">
                Distributors & Forestry
              </h1>
              <p className="text-white/95 text-sm sm:text-lg md:text-xl max-w-2xl">
                Factory-direct chainsaw chains for distributors, logging operations, and OEMs. Clear policies, reliable supply, and a partner focused on your uptime.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-base sm:text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Who We Serve</h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="border border-forest-brand/30 rounded-none p-4 bg-white">
              <h3 className="font-semibold text-text-main mb-2">Distributors & Dealers</h3>
              <p className="text-text-body text-sm">
                Saw chain and forestry equipment distributors who need consistent bulk supply, clear specs, and documentation for resale.
              </p>
            </div>
            <div className="border border-forest-brand/30 rounded-none p-4 bg-white">
              <h3 className="font-semibold text-text-main mb-2">Logging & Sawmill Operations</h3>
              <p className="text-text-body text-sm">
                High-consumption operations that depend on reliable supply and chains built to minimize downtime in the field.
              </p>
            </div>
            <div className="border border-forest-brand/30 rounded-none p-4 bg-white">
              <h3 className="font-semibold text-text-main mb-2">OEM & Private Label</h3>
              <p className="text-text-body text-sm">
                Chainsaw and outdoor power equipment manufacturers who need matching chains, custom packaging, and part-number alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Where We Supply */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-base sm:text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Where We Supply</h2>
          <p className="text-text-body text-sm mb-4">
            We focus on <strong className="text-text-main">North America</strong>. Our primary markets include:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
            <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-4">
              <h3 className="font-semibold text-text-main text-sm mb-2">Canada</h3>
              <ul className="text-text-body text-sm space-y-1">
                <li>British Columbia</li>
                <li>Alberta</li>
                <li>Ontario</li>
                <li>Eastern provinces</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-4">
              <h3 className="font-semibold text-text-main text-sm mb-2">United States</h3>
              <ul className="text-text-body text-sm space-y-1">
                <li>Pacific Northwest (WA, OR, ID)</li>
                <li>Texas</li>
                <li>Northern states & beyond</li>
              </ul>
            </div>
          </div>
          <p className="text-text-body text-sm mb-4">
            Direct-from-factory supply to North American ports and logistics corridors. We work with you on Incoterms and delivery expectations.
          </p>
          <div className="bg-forest-brand/10 border-l-4 border-forest-brand rounded-none px-4 py-3 pl-[max(1rem,env(safe-area-inset-left))]">
            <p className="text-sm text-text-main break-words">
              <strong>North America support.</strong> Quotes provided within 12 hours during Pacific Time (PT) business hours. <Link href="/request-quote" className="text-forest-brand font-semibold hover:underline">Request a quote</Link> or <Link href="/contact" className="text-forest-brand font-semibold hover:underline">contact us</Link>.
            </p>
          </div>
        </section>

        {/* Why BorealGrit */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-base sm:text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Why BorealGrit</h2>
          <ul className="text-text-body text-sm space-y-3">
            <li className="flex gap-2">
              <span className="text-forest-brand font-bold shrink-0">1.</span>
              <span><strong className="text-text-main">Factory direct.</strong> No extra layers—better price and direct communication with the source.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest-brand font-bold shrink-0">2.</span>
              <span><strong className="text-text-main">68CrNiMo alloy & quality.</strong> Premium alloy and heat treatment for longer life and fewer failures in the field.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest-brand font-bold shrink-0">3.</span>
              <span><strong className="text-text-main">Cold-resilient & heavy-duty.</strong> Series W for sub-zero conditions, Series P for high-output logging, Series E for arborists and battery saws.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest-brand font-bold shrink-0">4.</span>
              <span><strong className="text-text-main">Minimize downtime.</strong> Reliable supply and chains built for professional use so your operations stay running.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest-brand font-bold shrink-0">5.</span>
              <span><strong className="text-text-main">B2B only.</strong> We are built for distributors and forestry buyers, not retail consumers.</span>
            </li>
          </ul>
        </section>

        {/* How We Work */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-base sm:text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">How We Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="border-l-4 border-forest-brand pl-4 py-2">
              <h3 className="font-semibold text-text-main text-sm mb-1">Step 1 · Inquiry</h3>
              <p className="text-text-body text-xs">Send an RFQ or inquiry via our form, email, or phone. Tell us product, volume, and timeline.</p>
            </div>
            <div className="border-l-4 border-forest-brand pl-4 py-2">
              <h3 className="font-semibold text-text-main text-sm mb-1">Step 2 · Quote & Samples</h3>
              <p className="text-text-body text-xs">We respond with a quote and specs. Samples available where applicable.</p>
            </div>
            <div className="border-l-4 border-forest-brand pl-4 py-2">
              <h3 className="font-semibold text-text-main text-sm mb-1">Step 3 · Order & Payment</h3>
              <p className="text-text-body text-xs">Confirm order and payment terms. We use standard B2B terms (e.g. T/T, L/C).</p>
            </div>
            <div className="border-l-4 border-forest-brand pl-4 py-2">
              <h3 className="font-semibold text-text-main text-sm mb-1">Step 4 · Production & Delivery</h3>
              <p className="text-text-body text-xs">Production and shipping to your chosen port or destination. Clear documentation and logistics support.</p>
            </div>
          </div>
        </section>

        {/* Policies at a Glance */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-base sm:text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Policies at a Glance</h2>
          <div className="table-responsive -mx-4 sm:mx-0 overflow-visible sm:overflow-x-auto rounded-none border-2 border-forest-brand/40">
            <table className="distributors-policies-table w-full min-w-[400px] text-xs border-collapse">
              <thead>
                <tr className="bg-forest-brand/15 border-b-2 border-forest-brand/40">
                  <th className="text-left px-4 py-2.5 font-bold text-text-main uppercase tracking-wide">Topic</th>
                  <th className="text-left px-4 py-2.5 font-bold text-text-main uppercase tracking-wide">Summary</th>
                </tr>
              </thead>
              <tbody className="text-text-body">
                <tr className="border-b border-forest-brand/20 bg-white">
                  <td className="px-4 py-2.5 font-bold text-text-main align-top w-[120px] sm:w-[140px]" data-label="Topic">MOQ</td>
                  <td className="px-4 py-2.5 leading-snug" data-label="Summary">Varies by product line and pitch. We can discuss volume and mix to fit your needs.</td>
                </tr>
                <tr className="border-b border-forest-brand/20 bg-gray-50/80">
                  <td className="px-4 py-2.5 font-bold text-text-main align-top" data-label="Topic">Samples</td>
                  <td className="px-4 py-2.5 leading-snug" data-label="Summary">Available for qualified B2B inquiries. Terms (e.g. paid sample or credit on first order) can be discussed.</td>
                </tr>
                <tr className="border-b border-forest-brand/20 bg-white">
                  <td className="px-4 py-2.5 font-bold text-text-main align-top" data-label="Topic">Payment</td>
                  <td className="px-4 py-2.5 leading-snug" data-label="Summary">Standard terms such as T/T, L/C. Discuss with us for your situation.</td>
                </tr>
                <tr className="border-b border-forest-brand/20 bg-gray-50/80">
                  <td className="px-4 py-2.5 font-bold text-text-main align-top" data-label="Topic">Lead time</td>
                  <td className="px-4 py-2.5 leading-snug" data-label="Summary">From order confirmation to production and shipment. Typical ranges apply; we will confirm per order.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 font-bold text-text-main align-top" data-label="Topic">Incoterms</td>
                  <td className="px-4 py-2.5 leading-snug" data-label="Summary">FOB, CIF, or other terms as agreed. We support standard North American logistics.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quality & Compliance */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-base sm:text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Quality & Compliance</h2>
          <p className="text-text-body text-sm mb-4">
            We manufacture to strict material and process standards. Our chains align with relevant North American safety and performance expectations (e.g. ANSI B175.1, CSA). Quality management is ISO 9001 oriented. For full details on certifications and testing, see our Quality & Certifications page.
          </p>
          <Link
            href="/quality"
            className="inline-flex items-center gap-1 text-forest-brand font-semibold text-sm hover:underline"
          >
            Quality & Certifications <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Next Steps */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-base sm:text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Find Your Product & Next Steps</h2>
          <p className="text-text-body text-sm mb-4">
            Match your application to the right series, then use our tools to confirm fitment and request a quote.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
            <Link
              href="/products/series-w"
              className="block border border-forest-brand/30 rounded-none p-4 hover:bg-forest-light hover:border-forest-brand transition"
            >
              <span className="font-semibold text-text-main block mb-1">Cold-climate operations</span>
              <span className="text-text-body text-sm">Series W — sub-zero and frozen hardwood.</span>
            </Link>
            <Link
              href="/products/series-p"
              className="block border border-forest-brand/30 rounded-none p-4 hover:bg-forest-light hover:border-forest-brand transition"
            >
              <span className="font-semibold text-text-main block mb-1">High-volume logging</span>
              <span className="text-text-body text-sm">Series P — full chisel, stay-sharp, heavy duty.</span>
            </Link>
            <Link
              href="/products/series-e"
              className="block border border-forest-brand/30 rounded-none p-4 hover:bg-forest-light hover:border-forest-brand transition"
            >
              <span className="font-semibold text-text-main block mb-1">Arborists & battery saws</span>
              <span className="text-text-body text-sm">Series E — narrow kerf, low vibration, efficiency.</span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <Link
              href="/fitment-finder"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 min-h-[44px] bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition rounded-none w-full sm:w-auto"
            >
              Fitment Finder <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 min-h-[44px] bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition rounded-none w-full sm:w-auto"
            >
              Catalogs & Resources
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 min-h-[44px] bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition rounded-none w-full sm:w-auto"
            >
              Request for Quote <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
