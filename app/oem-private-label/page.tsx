import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { CheckCircle2, Package, FileText, ShieldCheck, Factory, Clock, DollarSign, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OEM & Private Label Chainsaw Chains | Custom Manufacturing | BorealGrit™',
  description: 'OEM and private label chainsaw chain manufacturing. Custom specifications, packaging, branding, and part numbers. ANSI B175.1 and CSA Z62.3 compliant. B2B wholesale for North American distributors and importers. MOQ and lead time per project.',
  keywords: 'OEM chainsaw chain, private label chainsaw chain, custom chainsaw chain manufacturing, chainsaw chain OEM supplier, private label chainsaw chain manufacturer, custom chainsaw chain packaging, chainsaw chain branding, B2B chainsaw chain wholesale, chainsaw chain contract manufacturing, custom chainsaw chain specifications',
  openGraph: {
    title: 'OEM & Private Label Chainsaw Chains | Custom Manufacturing',
    description: 'Professional OEM and private label chainsaw chain manufacturing. Custom specifications, packaging, and branding for B2B partners.',
    type: 'website',
  },
  alternates: {
    canonical: '/oem-private-label',
  },
}

export default function OEMPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            OEM & Private Label Manufacturing
          </h1>
          <p className="text-lg text-text-body mb-2 max-w-3xl">
            Professional chainsaw chain manufacturing for OEM partners and private label programs. Custom specifications, packaging, branding, and part numbers tailored to your brand requirements.
          </p>
          <p className="text-sm text-text-body max-w-3xl">
            ISO 9001 certified production. ANSI B175.1 compliant. CSA Z62.3 certified models available for Canadian market. B2B wholesale only.
          </p>
        </header>

        {/* Key Benefits */}
        <section className="mb-10 bg-white border border-forest-brand/30 rounded-none p-6">
          <h2 className="text-xl font-bold text-text-main mb-6">Why Partner With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                <Factory className="w-5 h-5 text-forest-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-1 text-sm">ISO 9001 Certified</h3>
                <p className="text-xs text-text-body">Quality management system with full material traceability and batch testing protocols.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-forest-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-1 text-sm">ANSI/CSA Compliant</h3>
                <p className="text-xs text-text-body">All products meet ANSI B175.1. Selected models certified for CSA Z62.3 (Canadian market).</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                <Package className="w-5 h-5 text-forest-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-1 text-sm">Flexible Packaging</h3>
                <p className="text-xs text-text-body">Retail boxes, bulk cartons, custom formats. Your artwork, branding, and labeling specifications.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                <FileText className="w-5 h-5 text-forest-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-1 text-sm">Custom Specifications</h3>
                <p className="text-xs text-text-body">Custom drive link counts, pitch/gauge combinations, cutter profiles, and steel grades.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                <Clock className="w-5 h-5 text-forest-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-1 text-sm">Reliable Lead Times</h3>
                <p className="text-xs text-text-body">Production planning and scheduling. Standard lead times 4-8 weeks. Rush orders available.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-forest-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-1 text-sm">Competitive Pricing</h3>
                <p className="text-xs text-text-body">Volume-based pricing tiers. FOB China. Payment terms negotiable for established partners.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Options */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-main mb-6">Customization Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product Specifications */}
            <div className="bg-white border border-forest-brand/30 rounded-none p-6">
              <h3 className="text-lg font-semibold text-text-main mb-4">Product Specifications</h3>
              <div className="space-y-3 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Pitch Options:</span> .325&quot;, 3/8&quot; LP, 3/8&quot;, .404&quot;
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Gauge Options:</span> .043&quot;, .050&quot;, .058&quot;, .063&quot;
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Drive Links:</span> Custom counts from 40DL to 120DL
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Chain Types:</span> Full Chain, Semi Chain, Low Profile
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Cutter Profiles:</span> Full-Chisel, Semi-Chisel
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Steel Grades:</span> 65Mn (standard), 68CrNiMo (premium alloy)
                  </div>
                </div>
              </div>
            </div>

            {/* Packaging & Branding */}
            <div className="bg-white border border-forest-brand/30 rounded-none p-6">
              <h3 className="text-lg font-semibold text-text-main mb-4">Packaging & Branding</h3>
              
              {/* Packaging Images */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="relative w-full h-32 mb-2 bg-gray-50 border-2 border-forest-brand/30 rounded-none overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/oem/retail-packaging.jpg"
                      alt="Retail packaging example: single chain box with custom artwork and UPC barcode"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 150px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50/90 opacity-0 hover:opacity-100 transition">
                      <div className="text-center p-2">
                        <div className="text-xs text-text-body font-mono">Retail Box</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-text-body">Retail Packaging</p>
                </div>
                <div className="text-center">
                  <div className="relative w-full h-32 mb-2 bg-gray-50 border-2 border-forest-brand/30 rounded-none overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/oem/bulk-packaging.jpg"
                      alt="Bulk packaging example: multi-chain carton and master carton configuration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 150px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50/90 opacity-0 hover:opacity-100 transition">
                      <div className="text-center p-2">
                        <div className="text-xs text-text-body font-mono">Bulk Carton</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-text-body">Bulk Packaging</p>
                </div>
                <div className="text-center">
                  <div className="relative w-full h-32 mb-2 bg-gray-50 border-2 border-forest-brand/30 rounded-none overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/oem/custom-packaging.jpg"
                      alt="Custom OEM packaging example with private label branding"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 150px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50/90 opacity-0 hover:opacity-100 transition">
                      <div className="text-center p-2">
                        <div className="text-xs text-text-body font-mono">Custom OEM</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-text-body">Custom OEM</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Retail Packaging:</span> Single chain boxes with custom artwork, UPC barcodes, fitment guides
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Bulk Packaging:</span> Multi-chain cartons, master cartons, pallet configurations
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Labeling:</span> Custom part numbers, brand logos, compliance markings (ANSI/CSA)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Barcode Formats:</span> UPC-A, EAN-13, custom formats per your requirements
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Artwork:</span> Vector files (AI, EPS), print-ready PDFs. Color matching (Pantone)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-text-main">Private Label:</span> Your brand name, product descriptions, warranty information
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MOQ & Lead Time */}
        <section className="mb-10 bg-gray-50 rounded-none border border-forest-brand/30 p-6">
          <h2 className="text-xl font-bold text-text-main mb-6">Minimum Order Quantities & Lead Times</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[600px] text-sm border border-forest-brand/30 bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-text-main">Order Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-main">Minimum Order Quantity (MOQ)</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-main">Standard Lead Time</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-main">Notes</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Standard Products</td>
                  <td className="px-4 py-3">500 units per SKU</td>
                  <td className="px-4 py-3">4-6 weeks</td>
                  <td className="px-4 py-3 text-text-body text-xs">Existing specifications, standard packaging</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Custom Specifications</td>
                  <td className="px-4 py-3">1,000 units per SKU</td>
                  <td className="px-4 py-3">6-8 weeks</td>
                  <td className="px-4 py-3 text-text-body text-xs">Custom pitch/gauge/DL combinations, cutter profiles</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Custom Packaging</td>
                  <td className="px-4 py-3">2,000 units per SKU</td>
                  <td className="px-4 py-3">6-10 weeks</td>
                  <td className="px-4 py-3 text-text-body text-xs">Custom artwork, box design, labeling. Includes tooling setup</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">Full Private Label</td>
                  <td className="px-4 py-3">5,000 units per SKU</td>
                  <td className="px-4 py-3">8-12 weeks</td>
                  <td className="px-4 py-3 text-text-body text-xs">Complete branding, custom part numbers, packaging design</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-body mt-4 italic">
            <strong>Note:</strong> MOQ and lead times are project-specific and may vary based on product complexity, packaging requirements, and production capacity. Rush orders available with expedited pricing. Contact us for detailed quotes.
          </p>
        </section>

        {/* Process Workflow */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-main mb-6">OEM Partnership Process</h2>
          
          {/* RFQ to Delivery Flow Infographic */}
          <div className="mb-8 bg-white border border-forest-brand/30 rounded-none p-6">
            <h3 className="text-lg font-semibold text-text-main mb-4 text-center">RFQ to Delivery Timeline</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-forest-brand/10 rounded-none flex items-center justify-center mb-3 border-2 border-forest-brand">
                  <FileText className="w-8 h-8 text-forest-brand" />
                </div>
                <h4 className="font-semibold text-text-main text-sm mb-1">RFQ Submission</h4>
                <p className="text-xs text-text-body mb-2">1-2 days</p>
                <p className="text-xs text-text-body">Submit specifications</p>
              </div>
              <div className="hidden md:block text-forest-brand text-2xl">→</div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-forest-brand/10 rounded-none flex items-center justify-center mb-3 border-2 border-forest-brand">
                  <DollarSign className="w-8 h-8 text-forest-brand" />
                </div>
                <h4 className="font-semibold text-text-main text-sm mb-1">Quote & Agreement</h4>
                <p className="text-xs text-text-body mb-2">3-5 days</p>
                <p className="text-xs text-text-body">Review & approve</p>
              </div>
              <div className="hidden md:block text-forest-brand text-2xl">→</div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-forest-brand/10 rounded-none flex items-center justify-center mb-3 border-2 border-forest-brand">
                  <CheckCircle2 className="w-8 h-8 text-forest-brand" />
                </div>
                <h4 className="font-semibold text-text-main text-sm mb-1">Sample & Approval</h4>
                <p className="text-xs text-text-body mb-2">2-3 weeks</p>
                <p className="text-xs text-text-body">Sample review</p>
              </div>
              <div className="hidden md:block text-forest-brand text-2xl">→</div>
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-forest-brand/10 rounded-none flex items-center justify-center mb-3 border-2 border-forest-brand">
                  <Factory className="w-8 h-8 text-forest-brand" />
                </div>
                <h4 className="font-semibold text-text-main text-sm mb-1">Production</h4>
                <p className="text-xs text-text-body mb-2">4-12 weeks</p>
                <p className="text-xs text-text-body">Manufacturing</p>
              </div>
              <div className="hidden md:block text-forest-brand text-2xl">→</div>
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-forest-brand/10 rounded-none flex items-center justify-center mb-3 border-2 border-forest-brand">
                  <Package className="w-8 h-8 text-forest-brand" />
                </div>
                <h4 className="font-semibold text-text-main text-sm mb-1">Delivery</h4>
                <p className="text-xs text-text-body mb-2">1-2 weeks</p>
                <p className="text-xs text-text-body">Shipping & QC</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-none flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="flex-1 bg-white border border-forest-brand/30 rounded-none p-4">
                <h3 className="font-semibold text-text-main mb-2">RFQ Submission</h3>
                <p className="text-sm text-text-body">
                  Submit your RFQ with product specifications (pitch, gauge, drive links, chain type, cutter profile), packaging requirements, artwork files, target volumes, and timeline. Use our{' '}
                  <Link href="/request-quote" className="text-forest-brand hover:underline font-medium">
                    Professional RFQ Template
                  </Link>
                  {' '}for structured data submission.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-none flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="flex-1 bg-white border border-forest-brand/30 rounded-none p-4">
                <h3 className="font-semibold text-text-main mb-2">Quote & Agreement</h3>
                <p className="text-sm text-text-body">
                  We provide detailed quotation including unit pricing (FOB China), MOQ, lead time, payment terms (T/T, L/C), shipping options, and Incoterms. Review and approve terms. Sign manufacturing agreement.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-none flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="flex-1 bg-white border border-forest-brand/30 rounded-none p-4">
                <h3 className="font-semibold text-text-main mb-2">Sample & Approval</h3>
                <p className="text-sm text-text-body">
                  Production samples (product and packaging) sent for approval. Quality inspection reports provided. Revise if needed. Final approval triggers production release.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-none flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div className="flex-1 bg-white border border-forest-brand/30 rounded-none p-4">
                <h3 className="font-semibold text-text-main mb-2">Production & QC</h3>
                <p className="text-sm text-text-body">
                  Production begins per approved specifications. In-process quality control. Batch testing and material traceability. Pre-shipment inspection reports available upon request.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-none flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div className="flex-1 bg-white border border-forest-brand/30 rounded-none p-4">
                <h3 className="font-semibold text-text-main mb-2">Shipment & Delivery</h3>
                <p className="text-sm text-text-body">
                  Shipment per agreed Incoterms (FOB, CIF, EXW). Commercial invoice, packing list, certificate of origin, and compliance documentation provided. Trackable shipping with major carriers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Compliance */}
        <section className="mb-10 bg-white border border-forest-brand/30 rounded-none p-6">
          <h2 className="text-xl font-bold text-text-main mb-4">Quality Assurance & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-industrial">
            <div>
              <h3 className="font-semibold text-text-main mb-3">Quality Management</h3>
              <ul className="space-y-2 text-text-body">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>ISO 9001:2015 certified quality management system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Full material traceability from raw steel to finished product</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Batch testing protocols for dimensional accuracy and hardness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Pre-shipment inspection reports available (SGS, BV, TÜV)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3">Safety Standards & Compliance</h3>
              <ul className="space-y-2 text-text-body">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>ANSI B175.1 compliant (all products)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>CSA Z62.3 certified models available for Canadian market</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>RoHS compliant materials (no restricted substances)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Custom compliance markings per your market requirements</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-forest-brand/30">
            <Link
              href="/quality"
              className="inline-flex items-center gap-2 text-sm text-forest-brand font-semibold hover:underline"
            >
              View Complete Quality & Certifications Information
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent/5 border-2 border-forest-brand rounded-none p-8 text-center">
          <h2 className="text-2xl font-bold text-text-main mb-4">Ready to Start Your OEM Partnership?</h2>
          <p className="text-text-body text-sm mb-6 max-w-2xl mx-auto">
            Download our Professional RFQ Template, fill in your requirements, and send it to us. Our engineering team will provide a comprehensive quote within 24-48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition rounded"
            >
              Download RFQ Template
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-forest-brand text-forest-brand font-semibold text-sm hover:bg-forest-brand/10 transition rounded"
            >
              Contact Sales Team
            </Link>
          </div>
        </section>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "OEM Manufacturing & Private Label",
              "provider": {
                "@type": "Organization",
                "name": "Borealgrit",
                "description": "Professional chainsaw chain manufacturer for OEM and private label programs"
              },
              "areaServed": "North America",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "OEM Chainsaw Chain Manufacturing",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Custom Chainsaw Chains",
                      "description": "OEM and private label chainsaw chains with custom specifications, packaging, and branding"
                    }
                  }
                ]
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  )
}
