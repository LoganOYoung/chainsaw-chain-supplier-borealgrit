import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Chainsaw Chain Manufacturer | Borealgrit',
  description: 'Chainsaw chain manufacturer. B2B export, OEM, wholesale. North American distributors and importers. ISO 9001 certified, ANSI B175.1 and CSA Z62.3 compliant.',
  keywords: 'chainsaw chain manufacturer, B2B chainsaw chain supplier, OEM chainsaw chain, chainsaw chain exporter, ISO 9001 chainsaw chain, ANSI compliant manufacturer',
  openGraph: {
    title: 'About Us | Chainsaw Chain Manufacturer',
    description: 'Professional chainsaw chain manufacturer for North American B2B markets. ISO 9001 certified, ANSI/CSA compliant.',
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
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="text-2xl font-bold text-text-main mb-4">About Us</h1>
        
        {/* Banner Image */}
        <section className="mb-8">
          <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-none overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src="/images/contact-banner.jpg"
              alt="Professional chainsaw chain manufacturing and B2B supply"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </section>
        <p className="text-text-body mb-8 max-w-3xl">
          Chainsaw chain manufacturer. B2B export, OEM, and wholesale. We supply North American distributors, importers, and OEM brands. ISO 9001 certified. ANSI B175.1 compliant production.
        </p>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4">Company</h2>
          <p className="text-text-body text-sm mb-6">
            We manufacture chainsaw chains for the North American B2B market. Our focus is on technical accuracy, quality control, and reliable supply. We serve distributors, importers, and OEM partners who require consistent product specifications and documentation.
          </p>
          <p className="text-text-body text-sm mb-6">
            We are not a retail or DTC brand. We are a B2B supplier. Our customers are businesses that resell or incorporate our chains into their products.
          </p>
          
          {/* Manufacturing Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative w-full h-64 bg-gray-50 border-2 border-forest-brand/30 rounded-none overflow-hidden">
              <Image
                src="/images/about/production-line.jpg"
                alt="Production line showing chainsaw chain manufacturing process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-forest-brand/70 text-white p-3">
                <p className="text-sm font-semibold">Production Line</p>
                <p className="text-xs text-gray-200">ISO 9001 certified manufacturing facility</p>
              </div>
            </div>
            <div className="relative w-full h-64 bg-gray-50 border-2 border-forest-brand/30 rounded-none overflow-hidden">
              <Image
                src="/images/about/manufacturing-equipment.jpg"
                alt="Key manufacturing equipment for chainsaw chain production"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-forest-brand/70 text-white p-3">
                <p className="text-sm font-semibold">Manufacturing Equipment</p>
                <p className="text-xs text-gray-200">Precision machinery for quality production</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4">Capabilities</h2>
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
                  <td className="px-4 py-3">Full, semi, low profile. .325&quot;, 3/8&quot;, .404&quot; pitch. Standard and custom drive link counts.</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">OEM & private label</td>
                  <td className="px-4 py-3">Custom packaging, labeling, part numbers. MOQ and lead time per project.</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Quality</td>
                  <td className="px-4 py-3">ISO 9001 certified. ANSI B175.1 compliant. Material traceability, batch testing.</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Export</td>
                  <td className="px-4 py-3">North American market. Standard shipping terms, documentation, logistics support.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4">Why work with us</h2>
          <ul className="text-text-body text-sm list-disc pl-5 space-y-2">
            <li>Technical accuracy: precise specifications, fitment documentation</li>
            <li>Quality control: ISO certified, ANSI compliant, material traceability</li>
            <li>B2B focus: we understand distributor and OEM requirements</li>
            <li>Documentation: catalogs, datasheets, fitment guides, compliance certificates</li>
            <li>Reliable supply: consistent lead times, clear MOQ and terms</li>
          </ul>
        </section>

        <section className="pt-4 border-t border-forest-brand/30">
          <Link
            href="/request-quote"
            className="inline-flex items-center px-5 py-2.5 bg-forest-brand text-white font-semibold text-sm hover:bg-forest-brand/90 transition"
          >
            Request a Quote
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
