import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Regional Application Guide | Cutter Selection by Wood & Region | BorealGrit™',
  description: 'Choose Full-Chisel vs Semi-Chisel chain by region: Eastern hardwood, Western softwood, Northern boreal. Professional chainsaw chain selection guide.',
  keywords: 'chainsaw chain regional guide, full chisel softwood, semi chisel hardwood, cutter selection by region, Eastern hardwood, Western softwood',
  openGraph: {
    title: 'Regional Application Guide | BorealGrit™',
    description: 'Cutter type selection by wood species and region.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/regional-guide',
  },
}

export default function RegionalGuidePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Regional Application Guide' },
          ]}
        />
        <Link
          href="/tools/technical-specs"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Technical Specifications
        </Link>

        <section className="bg-white border border-forest-brand/30 rounded-none p-4 sm:p-6">
          <h1 className="text-lg sm:text-xl font-bold text-text-main mb-2">Regional Application Guide</h1>
          <p className="text-sm text-text-body mb-6 italic">Cutter type selection by wood species and region</p>

          <p className="text-sm text-text-body mb-6 leading-relaxed">
            Wood species varies by region—density, grain structure, and cutting conditions affect chain performance. Choosing the right cutter geometry (<strong className="text-text-main">Full-Chisel</strong> vs <strong className="text-text-main">Semi-Chisel</strong>) helps maximize productivity and durability. Use this guide alongside <Link href="/tools/technical-specs" className="text-forest-brand hover:underline">Technical Specifications</Link> for definitions and <Link href="/fitment-finder" className="text-forest-brand hover:underline">Fitment Finder</Link> for saw/bar compatibility.
          </p>

          {/* Quick reference table */}
          <div className="mb-8">
            <h2 className="text-base font-semibold text-text-main mb-3 border-b border-forest-brand/30 pb-2">Quick reference</h2>
            <div className="fitment-table-wrap table-responsive -mx-4 sm:mx-0 overflow-visible sm:overflow-x-auto">
              <table className="fitment-gauge-table w-full min-w-[400px]">
                <thead>
                  <tr>
                    <th>Region</th>
                    <th>Dominant species</th>
                    <th>Recommended cutter</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody className="text-industrial">
                  <tr>
                    <td className="font-medium" data-label="Region">Eastern North America</td>
                    <td data-label="Species">Oak, maple, hickory, cherry, ash</td>
                    <td className="font-medium" data-label="Cutter">Semi-Chisel</td>
                    <td className="text-text-body" data-label="Notes">Dense hardwood, edge retention</td>
                  </tr>
                  <tr>
                    <td className="font-medium" data-label="Region">Western North America</td>
                    <td data-label="Species">Pine, fir, cedar, Douglas-fir, hemlock</td>
                    <td className="font-medium" data-label="Cutter">Full-Chisel</td>
                    <td className="text-text-body" data-label="Notes">Softwood, max cutting speed</td>
                  </tr>
                  <tr>
                    <td className="font-medium" data-label="Region">Northern / Boreal</td>
                    <td data-label="Species">Mixed, spruce, tamarack, birch</td>
                    <td className="font-medium" data-label="Cutter">Semi-Chisel</td>
                    <td className="text-text-body" data-label="Notes">Cold climate, frozen wood</td>
                  </tr>
                  <tr>
                    <td className="font-medium" data-label="Region">General / unknown</td>
                    <td data-label="Species">—</td>
                    <td className="font-medium" data-label="Cutter">Semi-Chisel</td>
                    <td className="text-text-body" data-label="Notes">Safer default, versatile</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed sections */}
          <div className="space-y-6">
            <div className="border-b border-forest-brand/20 pb-6">
              <h2 className="text-base font-semibold text-text-main mb-3">Eastern North America (hardwood-dominant)</h2>
              <p className="text-sm text-text-body mb-3 leading-relaxed">
                Oak, maple, hickory, cherry, ash, and other hardwoods are dense and abrasive. Square-corner Full-Chisel cutters dull quickly in these conditions and require frequent sharpening. <strong className="text-text-main">Semi-Chisel</strong> rounded corners hold an edge longer and resist dulling from dirt and bark.
              </p>
              <p className="text-xs text-text-body italic">
                Recommendation: Semi-Chisel for durability and extended sharpening intervals.
              </p>
            </div>

            <div className="border-b border-forest-brand/20 pb-6">
              <h2 className="text-base font-semibold text-text-main mb-3">Western North America (softwood-dominant)</h2>
              <p className="text-sm text-text-body mb-3 leading-relaxed">
                Pine, fir, cedar, Douglas-fir, and hemlock are softer and typically cut in cleaner conditions. <strong className="text-text-main">Full-Chisel</strong> square corners provide maximum chip clearance and cutting speed, ideal for high-volume professional logging and milling.
              </p>
              <p className="text-xs text-text-body italic">
                Recommendation: Full-Chisel for maximum productivity when conditions allow.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-text-main mb-3">Northern / Boreal (mixed species, cold climate)</h2>
              <p className="text-sm text-text-body mb-3 leading-relaxed">
                Mixed conifers and hardwoods, often in frozen or semi-frozen conditions. Frozen wood accelerates dulling of Full-Chisel cutters. <strong className="text-text-main">Semi-Chisel</strong> performs more consistently in cold weather and dirty conditions.
              </p>
              <p className="text-xs text-text-body italic">
                Recommendation: Semi-Chisel as the default for cold-climate and frozen wood applications.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-forest-brand/20 flex flex-wrap gap-4">
            <Link
              href="/tools/technical-specs"
              className="inline-flex items-center gap-2 text-sm text-forest-brand hover:underline font-medium"
            >
              Technical Specifications & Standards <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/fitment-finder"
              className="inline-flex items-center gap-2 text-sm text-forest-brand hover:underline font-medium"
            >
              Fitment Finder <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <Link
          href="/tools/technical-specs"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mt-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Technical Specifications
        </Link>
      </main>
      <Footer />
    </>
  )
}
