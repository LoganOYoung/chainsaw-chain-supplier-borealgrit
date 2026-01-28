import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources & Downloads | Chainsaw Chain | ChainPro',
  description: 'Download chainsaw chain catalogs, technical datasheets, fitment guides, packaging standards, quality certifications, ordering info. B2B resources for distributors, importers, and OEM partners.',
  keywords: 'chainsaw chain catalog, chainsaw chain datasheet, fitment guide, packaging standards, quality certifications, chainsaw chain resources, B2B downloads, technical documentation',
  openGraph: {
    title: 'Resources & Downloads | Chainsaw Chain',
    description: 'Technical and commercial resources for distributors, importers, and OEM partners.',
    type: 'website',
  },
  alternates: {
    canonical: '/resources',
  },
}

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="text-2xl font-bold text-text-main mb-4">Resources & Downloads</h1>
        <p className="text-text-body mb-10 max-w-3xl">
          Technical and commercial resources for distributors, importers, and OEM partners. Download catalogs, datasheets, fitment guides, packaging standards, and ordering information.
        </p>

        {/* 1. Product Catalogs */}
        <section id="catalogs" className="mb-12">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">1. Product Catalogs</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Resource</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-left px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-20 bg-gray-50 border border-forest-brand/30 rounded-none overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/resources/product-catalog-cover.jpg"
                          alt="Product Catalog 2025 cover preview"
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Product Catalog 2025</div>
                        <div className="text-xs text-text-body mt-1">PDF • ~50 pages</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">Complete product line: full, semi, low profile. All pitches, gauges, drive link counts. Specifications, packaging, pricing (on request).</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="inline-flex items-center gap-1 text-forest-brand font-medium hover:underline">
                      <Download className="w-4 h-4" />
                      Request download
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-20 bg-gray-50 border border-forest-brand/30 rounded-none overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/resources/quick-reference-guide-cover.jpg"
                          alt="Quick Reference Guide cover preview"
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Quick Reference Guide</div>
                        <div className="text-xs text-text-body mt-1">PDF • 1 page</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">One-page product matrix: chain types, pitches, typical applications, part numbers.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="inline-flex items-center gap-1 text-forest-brand font-medium hover:underline">
                      <Download className="w-4 h-4" />
                      Request download
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. Technical Datasheets */}
        <section id="datasheets" className="mb-12">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">2. Technical Datasheets</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Resource</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-left px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-20 bg-gray-50 border border-forest-brand/30 rounded-none overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/resources/datasheet-fc-325-preview.jpg"
                          alt="FC-325 Datasheet preview"
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-medium">FC-325 Datasheet</div>
                        <div className="text-xs text-text-body mt-1">PDF • ~4 pages</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">Full chisel .325&quot;. Technical specifications, compatibility, performance features, packaging, quality compliance.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="inline-flex items-center gap-1 text-forest-brand font-medium hover:underline">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-20 bg-gray-50 border border-forest-brand/30 rounded-none overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/resources/datasheet-sc-38-preview.jpg"
                          alt="SC-38 Datasheet preview"
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-medium">SC-38 Datasheet</div>
                        <div className="text-xs text-text-body mt-1">PDF • ~4 pages</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">Semi-chisel 3/8&quot;. Technical specifications, compatibility, performance features, packaging, quality compliance.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="inline-flex items-center gap-1 text-forest-brand font-medium hover:underline">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-20 bg-gray-50 border border-forest-brand/30 rounded-none overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/resources/datasheet-lp-325-preview.jpg"
                          alt="LP-325 Datasheet preview"
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-medium">LP-325 Datasheet</div>
                        <div className="text-xs text-text-body mt-1">PDF • ~4 pages</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">Low profile .325&quot;. Technical specifications, compatibility, performance features, packaging, quality compliance.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="inline-flex items-center gap-1 text-forest-brand font-medium hover:underline">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Fitment & Compatibility Guides */}
        <section id="fitment-guides" className="mb-12">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">3. Fitment & Compatibility Guides</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Resource</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-left px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-20 bg-gray-50 border border-forest-brand/30 rounded-none overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/resources/fitment-guide-preview.jpg"
                          alt="Fitment Reference Guide preview"
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Fitment Reference Guide</div>
                        <div className="text-xs text-text-body mt-1">PDF • ~12 pages</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">Common saw models and compatible chains. Pitch, gauge, drive link count by saw brand/model. Always verify bar specs.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="inline-flex items-center gap-1 text-forest-brand font-medium hover:underline">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Pitch & Gauge Guide</td>
                  <td className="px-4 py-3">How to identify pitch and gauge. Bar groove measurement. Drive link count calculation.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Download PDF
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Packaging & Labeling Standards */}
        <section id="packaging" className="mb-12">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">4. Packaging & Labeling Standards</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Resource</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-left px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Packaging Specifications</td>
                  <td className="px-4 py-3">Retail box dimensions, bulk carton specs, pallet configuration. Standard and custom options.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request document
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Labeling Standards</td>
                  <td className="px-4 py-3">Required label elements: part number, pitch/gauge/DL, fitment text, barcode format. OEM customization options.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request document
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Quality & Certifications */}
        <section id="quality-certs" className="mb-12">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">5. Quality & Certifications</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Resource</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-left px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">ISO Certificate</td>
                  <td className="px-4 py-3">ISO 9001 quality management system certificate. Manufacturing process compliance.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request copy
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">ANSI Compliance Statement</td>
                  <td className="px-4 py-3">ANSI B175.1 compliance. Safety and performance standards for chainsaw chains.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request copy
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Quality Control Process</td>
                  <td className="px-4 py-3">QC procedures, inspection standards, material traceability, batch testing protocols.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request document
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Ordering & Logistics Information */}
        <section id="ordering" className="mb-12">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">6. Ordering & Logistics Information</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Resource</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-left px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Ordering Guide</td>
                  <td className="px-4 py-3">MOQ by product, lead times, payment terms, shipping options, Incoterms. Standard and OEM orders.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request document
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Shipping & Logistics</td>
                  <td className="px-4 py-3">Ports, transit times, container options, documentation requirements. North American import procedures.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request document
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Part Number Reference</td>
                  <td className="px-4 py-3">Complete part number system. How to read part numbers: chain type, pitch, gauge, drive links.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request document
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. Media & Marketing Assets */}
        <section id="media" className="mb-12">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">7. Media & Marketing Assets</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Resource</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-left px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Product Images</td>
                  <td className="px-4 py-3">High-resolution product photos. Retail box, chain detail, packaging. For distributor catalogs and websites.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request access
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Logo & Brand Assets</td>
                  <td className="px-4 py-3">Company logo, brand guidelines (OEM partners). Vector and raster formats.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Request access
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. Guides & FAQs */}
        <section id="guides" className="mb-12">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">8. Guides & FAQs</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Resource</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-left px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Buyer&apos;s Guide</td>
                  <td className="px-4 py-3">How to specify chainsaw chains. Pitch, gauge, drive links explained. Common mistakes to avoid.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Download PDF
                    </Link>
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">FAQ Document</td>
                  <td className="px-4 py-3">Frequently asked questions: MOQ, lead times, OEM customization, quality, shipping, returns.</td>
                  <td className="px-4 py-3">
                    <Link href="/contact" className="text-forest-brand font-medium hover:underline">
                      Download PDF
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="pt-6 border-t border-forest-brand/30">
          <p className="text-text-body text-sm mb-4">
            Need a resource not listed?{' '}
            <Link href="/contact" className="text-forest-brand font-medium hover:underline">
              Contact us
            </Link>{' '}
            with your request.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-safety-orange text-white font-semibold text-sm hover:bg-safety-orange/90 transition"
          >
            Request a Quote
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
