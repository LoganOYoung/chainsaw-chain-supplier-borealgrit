import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | BorealGrit™ – Industrial Chainsaw Chain Supplier',
  description: 'BorealGrit supplies professional-grade chainsaw chains to North American distributors, logging operations, and OEM partners. Factory-direct, ISO 9001 and ANSI B175.1 compliant. Reliable supply and full documentation.',
  keywords: 'chainsaw chain supplier, B2B chainsaw chain, North America forestry supply, OEM chainsaw chain, ISO 9001 chainsaw chain, ANSI compliant supplier, factory-direct chainsaw chain',
  openGraph: {
    title: 'About Us | BorealGrit™ – Industrial Chainsaw Chain Supplier',
    description: 'Factory-direct professional chainsaw chains for North American B2B markets. ISO 9001 certified, ANSI/CSA compliant.',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
        {/* Hero Banner */}
        <section className="mb-8 -mx-4 sm:mx-0">
          <div className="relative w-full h-44 sm:h-48 md:h-64 lg:h-72 rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/about-banner.png"
              alt="Freshly cut logs in forest—BorealGrit serves North American forestry and B2B supply"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-forest-brand/60" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-6 sm:py-8">
              <h1 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
                About Us
              </h1>
              <p className="text-white/95 text-sm sm:text-base mt-2 max-w-2xl">
                Your factory-direct source for professional chainsaw chains across North America.
              </p>
            </div>
          </div>
        </section>

        <p className="text-text-body mb-10 max-w-3xl text-base">
          BorealGrit supplies industrial-grade chainsaw chains to distributors, logging operations, and OEM partners in North America. We focus on technical accuracy, documented quality, and reliable supply so your business can count on consistent specs and clear documentation.
        </p>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4">Who We Work With</h2>
          <p className="text-text-body text-sm mb-4">
            We partner with businesses that need chainsaw chains at scale: distributors and dealers who resell to end users, logging and sawmill operations that run chains hard every day, and OEM and private-label partners who need exact specs and custom packaging. Our entire operation is built around serving these partners with the same standards you expect from a dedicated industrial supplier.
          </p>
          <p className="text-text-body text-sm">
            Direct-from-factory supply means you get clear pricing, full traceability, and documentation that meets North American requirements—so you can order with confidence and keep your operations running.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4">What You Can Expect</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Area</th>
                  <th className="text-left px-4 py-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Product range</td>
                  <td className="px-4 py-3">Full, semi, and low-profile chains. .325&quot;, 3/8&quot;, and .404&quot; pitch. Standard and custom drive link counts to match your needs.</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">OEM & private label</td>
                  <td className="px-4 py-3">Custom packaging, labeling, and part numbers. MOQ and lead times tailored per project.</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Quality & compliance</td>
                  <td className="px-4 py-3">ISO 9001 certified quality system. ANSI B175.1 and CSA Z62.3 compliant. Full material traceability and batch testing.</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Supply & support</td>
                  <td className="px-4 py-3">North America–focused delivery, clear shipping terms, and documentation. We respond to quotes within 24 hours on business days.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4">Why Partners Choose BorealGrit</h2>
          <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
            <li><strong className="text-text-main">Precise specifications and fitment</strong> — Detailed specs and fitment guides so you can match the right chain to the right saw and bar.</li>
            <li><strong className="text-text-main">Quality you can verify</strong> — ISO 9001 certified processes, ANSI/CSA compliant products, and material traceability from raw steel to finished chain.</li>
            <li><strong className="text-text-main">Built for B2B</strong> — Pricing, MOQ, lead times, and documentation designed for distributors and OEMs.</li>
            <li><strong className="text-text-main">Documentation that travels with the product</strong> — Catalogs, datasheets, fitment guides, and compliance certificates when you need them.</li>
            <li><strong className="text-text-main">Reliable supply</strong> — Consistent lead times and clear terms so you can plan inventory and keep downtime to a minimum.</li>
          </ul>
        </section>

        <section className="pt-4 border-t border-forest-brand/30">
          <p className="text-text-body text-sm mb-4">
            See who we serve, how we work, and what we offer for distributors and forestry buyers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/for-buyers"
              className="inline-flex items-center px-5 py-2.5 bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition"
            >
              For Buyers
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex items-center px-5 py-2.5 border-2 border-forest-brand text-forest-brand font-semibold text-sm hover:bg-forest-brand hover:text-white transition"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
