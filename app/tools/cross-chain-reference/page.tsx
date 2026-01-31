import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cross-chain reference | BorealGrit™ Tools',
  description: 'Look up Oregon, Stihl, Husqvarna part numbers and find the corresponding BorealGrit series. Full reference table for chainsaw chain interchange.',
  keywords: 'chainsaw chain cross reference, Oregon Stihl Husqvarna equivalent, BorealGrit part number lookup',
  openGraph: {
    title: 'Cross-chain reference | BorealGrit™ Tools',
    description: 'Oregon, Stihl, Husqvarna part numbers to BorealGrit series. Full reference table.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/cross-chain-reference',
  },
}

const crossReferenceSample = [
  { series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '3/8" LP / .050"', oregon: '90PX', stihl: '61PMM3', husqvarna: 'S93G / H38', application: 'Battery saws, small pruning' },
  { series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .050"', oregon: '20LPX', stihl: '23RS', husqvarna: 'H30', application: 'Narrow kerf, high-efficiency' },
  { series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .058"', oregon: '21BPX', stihl: '25RM', husqvarna: 'H25', application: 'Cold climate hardwoods' },
  { series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .050"', oregon: '72LPX', stihl: '33RS', husqvarna: 'C83 / H42', application: 'Professional logging, 20"+ bar' },
  { series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '.404" / .063"', oregon: '59L', stihl: '46RS', husqvarna: 'H64', application: 'Large logging saw' },
]

export default function CrossChainReferencePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Cross-chain reference' },
          ]}
        />
        <h1 className="text-2xl font-bold text-text-main mb-4">Cross-chain reference</h1>
        <p className="text-text-body mb-6 max-w-3xl">
          Find BorealGrit series equivalents for Oregon, Stihl, and Husqvarna part numbers. Below is a sample; the full table is available in Fitment Finder.
        </p>
        <div className="mb-6">
          <Link
            href="/fitment-finder"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest-brand text-white font-semibold text-sm rounded-none hover:bg-forest-dark transition"
          >
            Full reference in Fitment Finder <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="table-responsive -mx-4 sm:mx-0">
          <table className="w-full min-w-[640px] text-sm border border-forest-brand/30">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold">BorealGrit series</th>
                <th className="text-left px-4 py-3 font-semibold">Pitch / gauge</th>
                <th className="text-left px-4 py-3 font-semibold">Oregon</th>
                <th className="text-left px-4 py-3 font-semibold">Stihl</th>
                <th className="text-left px-4 py-3 font-semibold">Husqvarna</th>
                <th className="text-left px-4 py-3 font-semibold">Application</th>
              </tr>
            </thead>
            <tbody className="text-industrial">
              {crossReferenceSample.map((row, i) => (
                <tr key={i} className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <Link href={row.seriesLink} className="text-forest-brand font-medium hover:underline">
                      {row.series}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{row.pitchGauge}</td>
                  <td className="px-4 py-3">{row.oregon}</td>
                  <td className="px-4 py-3">{row.stihl}</td>
                  <td className="px-4 py-3">{row.husqvarna}</td>
                  <td className="px-4 py-3 text-text-body">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-body text-sm mt-4">
          For the complete cross-reference list and saw compatibility, use <Link href="/fitment-finder" className="text-forest-brand hover:underline">Fitment Finder</Link>.
        </p>
      </main>
      <Footer />
    </>
  )
}
