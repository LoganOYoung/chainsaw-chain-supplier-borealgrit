import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ShieldCheck, Award, CheckCircle2, FileText, Microscope, BarChart3, Factory, ArrowRight, Download, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quality & Certifications | ISO 9001, ANSI B175.1, CSA Z62.3 | BorealGrit™',
  description: 'Chainsaw chain quality control and certifications. ISO 9001:2015 certified quality management system. ANSI B175.1 and CSA Z62.3 compliant. Material traceability, batch testing, pre-shipment inspection. B2B quality assurance for distributors and importers.',
  keywords: 'chainsaw chain quality control, ISO 9001 chainsaw chain, ANSI B175.1 compliant, CSA Z62.3 certified, chainsaw chain quality assurance, material traceability, batch testing, pre-shipment inspection, chainsaw chain certifications, quality management system',
  openGraph: {
    title: 'Quality & Certifications | ISO 9001, ANSI B175.1, CSA Z62.3',
    description: 'ISO 9001:2015 certified quality management system. ANSI B175.1 and CSA Z62.3 compliant chainsaw chains.',
    type: 'website',
  },
  alternates: {
    canonical: '/quality',
  },
}

export default function QualityPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Quality & Certifications' }]} />
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Quality Assurance & Certifications
          </h1>
          <p className="text-lg text-text-body mb-2 max-w-3xl">
            ISO 9001:2015 certified quality management system. ANSI B175.1 and CSA Z62.3 compliant production. Comprehensive quality control processes ensuring consistent product specifications and safety standards for North American B2B markets.
          </p>
          <p className="text-sm text-text-body max-w-3xl">
            Full material traceability from raw steel to finished product. Batch testing protocols. Pre-shipment inspection reports available. Quality documentation available upon request.
          </p>
        </header>

        {/* Key Certifications Overview */}
        <section className="mb-10 bg-white border border-forest-brand/30 rounded-none p-6">
          <h2 className="text-xl font-bold text-text-main mb-6">Certifications & Standards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4 bg-white border-2 border-forest-brand/30 rounded-none overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/certifications/iso-9001-badge.png"
                  alt="ISO 9001:2015 Quality Management System Certification Badge"
                  fill
                  className="object-contain p-2"
                  sizes="128px"
                />
              </div>
              <h3 className="font-semibold text-text-main mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Quality management system certification. Manufacturing process control, continuous improvement, customer satisfaction focus.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4 bg-white border-2 border-forest-brand/30 rounded-none overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/certifications/ansi-b175-badge.png"
                  alt="ANSI B175.1 Safety and Performance Standard Badge"
                  fill
                  className="object-contain p-2"
                  sizes="128px"
                />
              </div>
              <h3 className="font-semibold text-text-main mb-2">ANSI B175.1</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Safety and performance standards for chainsaw chains. Kickback reduction, cutting performance, durability requirements.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4 bg-white border-2 border-forest-brand/30 rounded-none overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/certifications/csa-z62-badge.png"
                  alt="CSA Z62.3 Canadian Standards Association Certification Badge"
                  fill
                  className="object-contain p-2"
                  sizes="128px"
                />
              </div>
              <h3 className="font-semibold text-text-main mb-2">CSA Z62.3</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Canadian Standards Association certification. Selected models certified for Canadian market retail compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Certifications Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-main mb-6">Certification Details</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[600px] text-sm border border-forest-brand/30 bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-text-main">Certification</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-main">Standard / Scope</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-main">Description</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">ISO 9001:2015</td>
                  <td className="px-4 py-3">Quality Management System</td>
                  <td className="px-4 py-3 text-text-body">
                    Comprehensive quality management system covering manufacturing process control, continuous improvement, customer satisfaction, and supplier management. Annual audits and recertification.
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">ANSI B175.1</td>
                  <td className="px-4 py-3">Safety & Performance Standard</td>
                  <td className="px-4 py-3 text-text-body">
                    American National Standards Institute safety and performance requirements. Kickback reduction, cutting performance, durability, dimensional accuracy. All products meet ANSI B175.1 requirements.
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">CSA Z62.3</td>
                  <td className="px-4 py-3">Canadian Market Compliance</td>
                  <td className="px-4 py-3 text-text-body">
                    Canadian Standards Association certification for chainsaw chains. Selected models certified for Canadian retail market. Compliance markings on packaging and product.
                  </td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">RoHS Compliant</td>
                  <td className="px-4 py-3">Restriction of Hazardous Substances</td>
                  <td className="px-4 py-3 text-text-body">
                    Materials comply with RoHS directive. No restricted substances (lead, mercury, cadmium, etc.) in finished products. Material certificates available.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quality Control Process */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-main mb-6">Quality Control Process</h2>
          
          {/* QC Process Flow Infographic */}
          <div className="mb-8 bg-white border border-forest-brand/30 rounded-none p-6">
            <h3 className="text-lg font-semibold text-text-main mb-4 text-center">Quality Control Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-forest-brand/10 rounded-none flex items-center justify-center mb-3 border-2 border-forest-brand">
                  <Microscope className="w-8 h-8 text-forest-brand" />
                </div>
                <h4 className="font-semibold text-text-main text-sm mb-1">Material Inspection</h4>
                <p className="text-xs text-text-body">Raw Steel QC</p>
              </div>
              <div className="hidden md:block text-forest-brand text-2xl">→</div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-forest-brand/10 rounded-none flex items-center justify-center mb-3 border-2 border-forest-brand">
                  <Factory className="w-8 h-8 text-forest-brand" />
                </div>
                <h4 className="font-semibold text-text-main text-sm mb-1">In-Process QC</h4>
                <p className="text-xs text-text-body">Manufacturing</p>
              </div>
              <div className="hidden md:block text-forest-brand text-2xl">→</div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-forest-brand/10 rounded-none flex items-center justify-center mb-3 border-2 border-forest-brand">
                  <CheckCircle2 className="w-8 h-8 text-forest-brand" />
                </div>
                <h4 className="font-semibold text-text-main text-sm mb-1">Final Inspection</h4>
                <p className="text-xs text-text-body">Pre-Shipment</p>
              </div>
              <div className="hidden md:block text-forest-brand text-2xl">→</div>
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-forest-brand/10 rounded-none flex items-center justify-center mb-3 border-2 border-forest-brand">
                  <BarChart3 className="w-8 h-8 text-forest-brand" />
                </div>
                <h4 className="font-semibold text-text-main text-sm mb-1">Traceability</h4>
                <p className="text-xs text-text-body">Batch Tracking</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white border border-forest-brand/30 rounded-none p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-forest-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-main mb-2">1. Material Inspection</h3>
                  <p className="text-sm text-text-body leading-relaxed mb-3">
                    Incoming chromium alloy steel (65Mn, 68CrNiMo) undergoes comprehensive inspection:
                  </p>
                  <ul className="text-sm text-text-body space-y-1 ml-4 list-disc">
                    <li>Chemical composition analysis (spectroscopy)</li>
                    <li>Hardness testing (HRC measurement)</li>
                    <li>Dimensional checks (thickness, width tolerances)</li>
                    <li>Surface quality inspection</li>
                    <li>Material certificate verification (mill test certificates)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-forest-brand/30 rounded-none p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <Factory className="w-5 h-5 text-forest-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-main mb-2">2. In-Process Quality Control</h3>
                  <p className="text-sm text-text-body leading-relaxed mb-3">
                    Continuous monitoring during manufacturing:
                  </p>
                  <ul className="text-sm text-text-body space-y-1 ml-4 list-disc">
                    <li>Pitch measurement (drive link spacing accuracy)</li>
                    <li>Gauge verification (drive link thickness)</li>
                    <li>Cutter geometry inspection (chisel vs. semi-chisel profile)</li>
                    <li>Heat treatment verification (hardness, tempering curves)</li>
                    <li>Chrome plating thickness (for premium models)</li>
                    <li>Assembly integrity checks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-forest-brand/30 rounded-none p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-forest-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-main mb-2">3. Final Inspection</h3>
                  <p className="text-sm text-text-body leading-relaxed mb-3">
                    Pre-shipment quality verification:
                  </p>
                  <ul className="text-sm text-text-body space-y-1 ml-4 list-disc">
                    <li>Dimensional accuracy (pitch, gauge, drive link count)</li>
                    <li>Surface finish and deburring quality</li>
                    <li>Assembly integrity (rivet integrity, link connection)</li>
                    <li>Batch sampling per AQL (Acceptable Quality Level) standards</li>
                    <li>Visual inspection for defects</li>
                    <li>Packaging integrity and labeling accuracy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-forest-brand/30 rounded-none p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-forest-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-main mb-2">4. Material Traceability</h3>
                  <p className="text-sm text-text-body leading-relaxed mb-3">
                    Complete traceability from raw material to finished product:
                  </p>
                  <ul className="text-sm text-text-body space-y-1 ml-4 list-disc">
                    <li>Batch tracking system (raw steel lot numbers)</li>
                    <li>Production batch identification</li>
                    <li>Lot numbers on packaging and documentation</li>
                    <li>Material certificate retention (5+ years)</li>
                    <li>Quality records database for audit purposes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Standards */}
        <section className="mb-10 bg-gray-50 rounded-none border border-forest-brand/30 p-6">
          <h2 className="text-xl font-bold text-text-main mb-6">Manufacturing Standards & Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3">Material Specifications</h3>
              <ul className="text-sm text-text-body space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Chromium alloy steel per industry specifications (65Mn standard, 68CrNiMo premium)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Chemical composition: Carbon, Chromium, Nickel, Molybdenum within specified ranges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Hardness: Cutter HRC 58-62, Tie strap HRC 45-50 (after heat treatment)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>RoHS compliant materials (no restricted substances)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3">Dimensional Tolerances</h3>
              <ul className="text-sm text-text-body space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Pitch accuracy: ±0.001&quot; (within ANSI B175.1 tolerances)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Gauge tolerance: ±0.001&quot; (critical for bar fit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Drive link spacing: Consistent within ±0.002&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Surface finish: Deburred, smooth edges, no sharp protrusions</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-forest-brand/30">
            <h3 className="font-semibold text-text-main mb-3">Heat Treatment Process</h3>
            <ul className="text-sm text-text-body space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                <span>Precision heat treatment: Hardened cutters (HRC 58-62), tempered tie straps (HRC 45-50)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                <span>Specialized nitriding for Series W (cold-weather models): Enhanced impact toughness at -40°C</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                <span>Industrial chrome coating for Series P (professional models): Extended sharpening intervals</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                <span>Temperature-controlled furnaces with process monitoring and documentation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Testing & Inspection Equipment */}
        <section className="mb-10 bg-white border border-forest-brand/30 rounded-none p-6">
          <h2 className="text-xl font-bold text-text-main mb-6">Testing & Inspection Equipment</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="relative w-full h-48 mb-4 bg-gray-50 border-2 border-forest-brand/30 rounded-none overflow-hidden">
                <Image
                  src="/images/quality/hardness-testing-equipment.jpg"
                  alt="Hardness testing equipment (Rockwell C scale) for measuring chain cutter and tie strap hardness"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-semibold text-text-main mb-2 text-sm">Hardness Testing</h3>
              <p className="text-xs text-text-body">Rockwell C scale measurement for cutter (HRC 58-62) and tie strap (HRC 45-50) hardness verification.</p>
            </div>
            <div className="text-center">
              <div className="relative w-full h-48 mb-4 bg-gray-50 border-2 border-forest-brand/30 rounded-none overflow-hidden">
                <Image
                  src="/images/quality/dimensional-measurement.jpg"
                  alt="Precision dimensional measurement equipment for pitch, gauge, and drive link spacing accuracy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-semibold text-text-main mb-2 text-sm">Dimensional Measurement</h3>
              <p className="text-xs text-text-body">Precision measurement equipment for pitch (±0.001&quot;), gauge (±0.001&quot;), and drive link spacing accuracy.</p>
            </div>
            <div className="text-center">
              <div className="relative w-full h-48 mb-4 bg-gray-50 border-2 border-forest-brand/30 rounded-none overflow-hidden">
                <Image
                  src="/images/quality/safety-testing.jpg"
                  alt="Kickback safety testing equipment for ANSI B175.1 compliance verification"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-semibold text-text-main mb-2 text-sm">Safety Testing</h3>
              <p className="text-xs text-text-body">Kickback testing equipment for ANSI B175.1 compliance verification and safety performance standards.</p>
            </div>
          </div>
        </section>

        {/* Testing & Inspection Services */}
        <section className="mb-10 bg-white border border-forest-brand/30 rounded-none p-6">
          <h2 className="text-xl font-bold text-text-main mb-6">Testing & Inspection Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-main mb-3">In-House Testing</h3>
              <ul className="text-sm text-text-body space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Dimensional accuracy testing (pitch, gauge, drive link spacing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Hardness testing (Rockwell C scale)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Chemical composition analysis (spectroscopy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Surface finish inspection</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3">Third-Party Inspection</h3>
              <ul className="text-sm text-text-body space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Pre-shipment inspection reports available (SGS, Bureau Veritas, TÜV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Material certificates from certified testing laboratories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Compliance documentation (ANSI, CSA) available upon request</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Custom testing protocols for OEM partners</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* After-Sales Support & Quality Commitment */}
        <section className="mb-10 bg-white border border-forest-brand/30 rounded-none p-6">
          <h2 className="text-xl font-bold text-text-main mb-6">After-Sales Support & Quality Commitment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="w-5 h-5 text-forest-brand" />
                <h3 className="font-semibold text-text-main">Returns, Complaints & Support</h3>
              </div>
              <p className="text-sm text-text-body mb-3">
                We take every quality concern seriously. For returns, defects, or complaints:
              </p>
              <ul className="text-sm text-text-body space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Contact us via the <Link href="/contact" className="text-forest-brand underline hover:no-underline">contact form</Link> or your account manager with order/batch details and a brief description.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>We respond to quality-related inquiries within 1–2 business days and will guide you through our return or replacement process.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
                  <span>Defective or non-conforming product: we arrange return authorization and, upon verification, provide replacement or credit per our terms.</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-forest-brand" />
                <h3 className="font-semibold text-text-main">Quality Promise</h3>
              </div>
              <p className="text-sm text-text-body">
                We stand behind our product: any verified quality or specification issue is resolved with replacement or credit in line with our supply terms. Our ISO 9001 processes and full traceability support fast root-cause analysis and corrective action when needed.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent/5 border-2 border-forest-brand rounded-none p-8">
          <h2 className="text-xl font-bold text-text-main mb-4">Request Quality Documentation</h2>
          <p className="text-text-body text-sm mb-6 max-w-2xl">
            Need certificates, test reports, or quality documentation for your procurement or compliance requirements? Our quality team can provide:
          </p>
          <ul className="text-sm text-text-body space-y-2 mb-6 max-w-2xl">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
              <span>ISO 9001:2015 quality management system certificate</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
              <span>Material certificates (mill test certificates, chemical composition)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
              <span>Pre-shipment inspection reports (SGS, BV, TÜV)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
              <span>ANSI B175.1 and CSA Z62.3 compliance documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-brand mt-0.5 flex-shrink-0" />
              <span>Batch testing reports and quality records</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest-brand text-white font-semibold text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition rounded"
            >
              Request Documentation
              <FileText className="w-4 h-4" />
            </Link>
            <Link
              href="/resources#quality-certs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-forest-brand text-forest-brand font-semibold text-sm hover:bg-forest-brand/10 transition rounded"
            >
              <Download className="w-4 h-4" />
              View Resources
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Borealgrit",
            "description": "ISO 9001:2015 certified chainsaw chain manufacturer",
            "certification": [
              {
                "@type": "Certification",
                "name": "ISO 9001:2015",
                "description": "Quality Management System"
              },
              {
                "@type": "Certification",
                "name": "ANSI B175.1",
                "description": "Safety and Performance Standards"
              },
              {
                "@type": "Certification",
                "name": "CSA Z62.3",
                "description": "Canadian Standards Association"
              }
            ]
          })
        }}
      />
    </>
  )
}
