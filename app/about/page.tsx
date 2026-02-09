import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | BorealGrit™ – Industrial Chainsaw Chain Supplier',
  description: 'BorealGrit supplies professional chainsaw chains to North American distributors, logging operations, and OEM partners. ISO 9001 & ANSI B175.1 compliant. Direct supply, clear specs, full documentation.',
  keywords: 'chainsaw chain supplier, B2B chainsaw chain, North America forestry supply, OEM chainsaw chain, ISO 9001 chainsaw chain, ANSI compliant supplier, industrial chainsaw chain',
  openGraph: {
    title: 'About Us | BorealGrit™ – Industrial Chainsaw Chain Supplier',
    description: 'Professional chainsaw chains for North American B2B. ISO 9001 certified, ANSI/CSA compliant. Direct supply and full documentation.',
    type: 'website',
    url: 'https://borealgrit.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | BorealGrit™ – Industrial Chainsaw Chain Supplier',
    description: 'Professional chainsaw chains for North American B2B. ISO 9001 & ANSI/CSA compliant.',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12" aria-label="About BorealGrit">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

        {/* Hero */}
        <section className="mb-8 -mx-4 sm:mx-0">
          <div className="relative w-full h-40 sm:h-48 md:h-56 rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/about-banner.png"
              alt="Freshly cut logs in forest—BorealGrit serves North American forestry and B2B supply"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-forest-brand/60" />
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-6">
              <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
                About Us
              </h1>
              <p className="text-white/90 text-sm mt-1.5 max-w-xl">
                Professional chainsaw chains for North America—direct supply, clear specs, reliable delivery.
              </p>
            </div>
          </div>
        </section>

        <p className="text-text-body text-sm leading-relaxed mb-8">
          BorealGrit supplies industrial-grade chainsaw chains to <Link href="/for-buyers" className="text-forest-brand hover:underline">distributors</Link>, logging operations, and <Link href="/oem-private-label" className="text-forest-brand hover:underline">OEM partners</Link> in North America. We focus on technical accuracy, documented quality, and reliable supply so your business can count on consistent specs and clear documentation.
        </p>

        <section className="mb-8">
          <h2 className="text-base font-semibold text-text-main mb-3 pb-2 border-b border-forest-brand/20">Who We Work With</h2>
          <p className="text-text-body text-sm leading-relaxed mb-3">
            We partner with businesses that need chainsaw chains at scale: <Link href="/for-buyers/distributors" className="text-forest-brand hover:underline">distributors and dealers</Link> who resell to end users, logging and sawmill operations that run chains hard every day, and <Link href="/oem-private-label" className="text-forest-brand hover:underline">OEM and private-label partners</Link> who need exact specs and custom packaging. Our entire operation is built around serving these partners with the same standards you expect from a dedicated industrial supplier.
          </p>
          <p className="text-text-body text-sm leading-relaxed">
            Direct-from-factory supply means you get clear pricing, full traceability, and documentation that meets North American requirements—so you can order with confidence and keep your operations running.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base font-semibold text-text-main mb-3 pb-2 border-b border-forest-brand/20">What You Can Expect</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[320px] text-sm border border-forest-brand/20" aria-describedby="expect-table-desc">
              <caption id="expect-table-desc" className="sr-only">What you can expect: product range, OEM options, quality and compliance, supply and support.</caption>
              <thead>
                <tr className="bg-gray-50/80">
                  <th className="text-left px-3 py-2.5 font-medium text-text-main">Area</th>
                  <th className="text-left px-3 py-2.5 font-medium text-text-main">Details</th>
                </tr>
              </thead>
              <tbody className="text-text-body">
                <tr className="border-t border-forest-brand/20">
                  <td className="px-3 py-2.5 font-medium text-text-main align-top w-36">Product range</td>
                  <td className="px-3 py-2.5 leading-snug">Full, semi, and low-profile chains. .325&quot;, 3/8&quot;, and .404&quot; pitch. Standard and custom drive link counts to match your needs.</td>
                </tr>
                <tr className="border-t border-forest-brand/20">
                  <td className="px-3 py-2.5 font-medium text-text-main align-top">OEM & private label</td>
                  <td className="px-3 py-2.5 leading-snug">Custom packaging, labeling, and part numbers. MOQ and lead times tailored per project.</td>
                </tr>
                <tr className="border-t border-forest-brand/20">
                  <td className="px-3 py-2.5 font-medium text-text-main align-top">Quality & compliance</td>
                  <td className="px-3 py-2.5 leading-snug">ISO 9001 certified quality system. ANSI B175.1 and CSA Z62.3 compliant. Full material traceability and batch testing.</td>
                </tr>
                <tr className="border-t border-forest-brand/20">
                  <td className="px-3 py-2.5 font-medium text-text-main align-top">Supply & support</td>
                  <td className="px-3 py-2.5 leading-snug">North America–focused delivery, clear shipping terms, and documentation. We respond to quotes within 24 hours on business days.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-base font-semibold text-text-main mb-3 pb-2 border-b border-forest-brand/20">Why Partners Choose BorealGrit</h2>
          <ul className="text-text-body text-sm leading-relaxed space-y-2 list-none pl-0">
            <li className="flex gap-2"><span className="text-forest-brand mt-0.5">·</span><span><strong className="text-text-main font-medium">Precise specifications and fitment</strong> — Detailed specs and <Link href="/fitment-finder" className="text-forest-brand hover:underline">fitment guides</Link> so you can match the right chain to the right saw and bar.</span></li>
            <li className="flex gap-2"><span className="text-forest-brand mt-0.5">·</span><span><strong className="text-text-main font-medium">Quality you can verify</strong> — <Link href="/quality" className="text-forest-brand hover:underline">ISO 9001 certified</Link> processes, ANSI/CSA compliant products, and material traceability from raw steel to finished chain.</span></li>
            <li className="flex gap-2"><span className="text-forest-brand mt-0.5">·</span><span><strong className="text-text-main font-medium">Built for B2B</strong> — Pricing, MOQ, lead times, and documentation designed for distributors and OEMs.</span></li>
            <li className="flex gap-2"><span className="text-forest-brand mt-0.5">·</span><span><strong className="text-text-main font-medium">Documentation that travels with the product</strong> — <Link href="/resources" className="text-forest-brand hover:underline">Catalogs, datasheets, fitment guides</Link>, and compliance certificates when you need them.</span></li>
            <li className="flex gap-2"><span className="text-forest-brand mt-0.5">·</span><span><strong className="text-text-main font-medium">Reliable supply</strong> — Consistent lead times and clear terms so you can plan inventory and keep downtime to a minimum.</span></li>
          </ul>
        </section>

        <section className="pt-6 border-t border-forest-brand/20">
          <p className="text-text-body text-sm mb-4">
            See who we serve, how we work, and what we offer for distributors and forestry buyers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/for-buyers"
              className="inline-flex items-center px-4 py-2 bg-forest-brand text-white font-medium text-sm hover:bg-forest-dark transition"
            >
              For Buyers
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex items-center px-4 py-2 border border-forest-brand text-forest-brand font-medium text-sm hover:bg-forest-brand hover:text-white transition"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BorealGrit',
            description: 'Industrial chainsaw chain supplier for North American distributors, logging operations, and OEM partners. ISO 9001 certified, ANSI B175.1 and CSA Z62.3 compliant.',
            url: 'https://borealgrit.com',
            logo: 'https://borealgrit.com/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Sales',
              areaServed: ['US', 'CA'],
              availableLanguage: 'English',
              url: 'https://borealgrit.com/contact',
            },
            certification: [
              { '@type': 'Certification', name: 'ISO 9001:2015', description: 'Quality Management System' },
              { '@type': 'Certification', name: 'ANSI B175.1', description: 'Safety and Performance Standards' },
              { '@type': 'Certification', name: 'CSA Z62.3', description: 'Canadian Standards Association' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://borealgrit.com' },
              { '@type': 'ListItem', position: 2, name: 'About' },
            ],
          }),
        }}
      />
    </>
  )
}
