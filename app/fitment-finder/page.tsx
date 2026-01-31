'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Zap, DollarSign, ArrowRight, ExternalLink } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Brand logo mapping with fallback
const getBrandLogo = (brand: string) => {
  const brandMap: Record<string, string> = {
    'Stihl': '/images/brands/stihl-logo.png',
    'Husqvarna': '/images/brands/husqvarna-logo.png',
    'Milwaukee': '/images/brands/milwaukee-logo.png',
    'Makita': '/images/brands/makita-logo.png',
    'DeWalt': '/images/brands/dewalt-logo.png',
    'EGO Power+': '/images/brands/ego-logo.png',
    'Echo': '/images/brands/echo-logo.png',
    'Ryobi': '/images/brands/ryobi-logo.png',
    'Greenworks Pro': '/images/brands/greenworks-logo.png',
    'Craftsman': '/images/brands/craftsman-logo.png',
    'Poulan Pro': '/images/brands/poulan-logo.png',
    'Oregon': '/images/brands/oregon-logo.png',
  }
  return brandMap[brand] || null
}

const compatibilityData = [
  // Stihl models
  { brand: 'Stihl', model: 'MS 170 / MS 180', bar: '14" / 16"', pitch: '3/8" LP', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  { brand: 'Stihl', model: 'MSA 160 / 200 (Battery)', bar: '12" / 14"', pitch: '1/4" P', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  { brand: 'Stihl', model: 'MS 250 / MS 251', bar: '18"', pitch: '.325"', gauge: '.063"', series: 'Series W', seriesType: 'Cold Weather/General', seriesLink: '/products/series-w' },
  { brand: 'Stihl', model: 'MS 261 / MS 362', bar: '20"', pitch: '3/8"', gauge: '.063"', series: 'Series P', seriesType: 'Professional', seriesLink: '/products/series-p' },
  
  // Husqvarna models
  { brand: 'Husqvarna', model: '120 Mark II / 130', bar: '14" / 16"', pitch: '3/8" LP', gauge: '.050"', series: 'Series E', seriesType: 'General Purpose', seriesLink: '/products/series-e' },
  { brand: 'Husqvarna', model: '435 / 440 / 450', bar: '18"', pitch: '.325"', gauge: '.050"', series: 'Series W', seriesType: 'Cold Weather Impact', seriesLink: '/products/series-w' },
  { brand: 'Husqvarna', model: '455 Rancher', bar: '20"', pitch: '3/8"', gauge: '.050"', series: 'Series P', seriesType: 'Professional', seriesLink: '/products/series-p' },
  { brand: 'Husqvarna', model: 'T540i XP (Battery)', bar: '14"', pitch: '.325" Mini', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  
  // Echo models
  { brand: 'Echo', model: 'CS-310 / CS-352', bar: '14" / 16"', pitch: '3/8" LP', gauge: '.050"', series: 'Series E', seriesType: 'General Purpose', seriesLink: '/products/series-e' },
  { brand: 'Echo', model: 'CS-590 Timber Wolf', bar: '20"', pitch: '3/8"', gauge: '.050"', series: 'Series P', seriesType: 'Professional', seriesLink: '/products/series-p' },
  
  // Battery-powered saws (Series E)
  { brand: 'Milwaukee', model: 'M18 FUEL (Battery)', bar: '16"', pitch: '3/8" LP', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  { brand: 'Milwaukee', model: 'M12 FUEL Hatchet', bar: '6"', pitch: '1/4"', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  { brand: 'DeWalt', model: 'DCCS670 60V (Battery)', bar: '18"', pitch: '3/8" LP', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  { brand: 'Makita', model: 'XCU03 / XCU04 (Battery)', bar: '14" / 16"', pitch: '3/8" LP', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  { brand: 'Ryobi', model: '40V Brushless (Battery)', bar: '14"', pitch: '3/8" LP', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  { brand: 'EGO Power+', model: 'CS1800 (Battery)', bar: '18"', pitch: '3/8" LP', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  { brand: 'Greenworks Pro', model: '80V (Battery)', bar: '18"', pitch: '3/8" LP', gauge: '.043"', series: 'Series E', seriesType: 'Narrow Kerf', seriesLink: '/products/series-e' },
  { brand: 'Craftsman', model: 'S165 / S185', bar: '16" / 18"', pitch: '3/8" LP', gauge: '.050"', series: 'Series E', seriesType: 'General Purpose', seriesLink: '/products/series-e' },
  { brand: 'Poulan Pro', model: 'PR4218', bar: '18"', pitch: '3/8" LP', gauge: '.050"', series: 'Series E', seriesType: 'General Purpose', seriesLink: '/products/series-e' },
  { brand: 'Oregon', model: 'CS1500 (Corded)', bar: '18"', pitch: '3/8" LP', gauge: '.050"', series: 'Series E', seriesType: 'General Purpose', seriesLink: '/products/series-e' },
]

const crossReferenceData = [
  { id: 1, series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '3/8" LP / .043" (1.1mm)', oregon: '90SG', stihl: '-', husqvarna: '-', application: 'Early small engine models, battery saws' },
  { id: 2, series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '3/8" LP / .050" (1.3mm)', oregon: '90PX', stihl: '61PMM3', husqvarna: 'S93G / H38', application: 'Battery saws, small pruning saws' },
  { id: 3, series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '3/8" LP / .050" (1.3mm)', oregon: 'M91VXL', stihl: '-', husqvarna: '-', application: 'Reinforced cutter version' },
  { id: 4, series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '3/8" LP / .050" (1.3mm)', oregon: '27P', stihl: '-', husqvarna: '46RM', application: 'Heavy duty semi-chisel, farm use' },
  { id: 5, series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '1/4" / .050" (1.3mm)', oregon: '25A', stihl: '-', husqvarna: '13RMS', application: 'Carving and fine trimming' },
  { id: 6, series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '1/4" / .050" (1.3mm)', oregon: '25AP', stihl: '-', husqvarna: 'HOO', application: 'Battery single-hand saw, pole pruner' },
  { id: 7, series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .050" (1.3mm)', oregon: '20LPX', stihl: '23RS', husqvarna: 'H30', application: 'Narrow kerf high-efficiency saw chain' },
  { id: 8, series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .050" (1.3mm)', oregon: '20BPX', stihl: '23RM', husqvarna: 'S93G / H37', application: 'Mainstream agricultural models in Canada' },
  { id: 9, series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .050" (1.3mm)', oregon: 'M95TXL', stihl: '-', husqvarna: '-', application: 'Reinforced wear-resistant version' },
  { id: 10, series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .050" (1.3mm)', oregon: '95VPX', stihl: '-', husqvarna: 'H30', application: 'Narrow kerf cutting' },
  { id: 11, series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .058" (1.5mm)', oregon: '21LPX', stihl: '25RS', husqvarna: 'SP33G', application: 'Professional medium-sized saw' },
  { id: 12, series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .058" (1.5mm)', oregon: '21BPX', stihl: '25RM', husqvarna: 'H25', application: 'Cold climate hardwoods, general purpose' },
  { id: 13, series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .063" (1.6mm)', oregon: '22LPX', stihl: '26RS', husqvarna: '-', application: 'Commonly used by German brand chainsaws' },
  { id: 14, series: 'Series W', seriesLink: '/products/series-w', pitchGauge: '.325" / .063" (1.6mm)', oregon: '22BPX', stihl: '26RM', husqvarna: 'H25', application: 'Cold climate hardwoods, general purpose' },
  { id: 15, series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '3/8" LP / .050" (1.3mm)', oregon: '91PX', stihl: '63PS3', husqvarna: '-', application: 'Low kickback safety type' },
  { id: 16, series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '3/8" LP / .050" (1.3mm)', oregon: '91P', stihl: '63PM', husqvarna: '-', application: 'General garden consumer grade' },
  { id: 17, series: 'Series E', seriesLink: '/products/series-e', pitchGauge: '3/8" LP / .050" (1.3mm)', oregon: '91VXL', stihl: '71PM3', husqvarna: 'S93G / H37', application: 'Battery saws, general purpose' },
  { id: 18, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .050" (1.3mm)', oregon: '72LPX', stihl: '33RS', husqvarna: 'C83 / H42', application: 'Professional logging, 20"+ bar' },
  { id: 19, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .050" (1.3mm)', oregon: 'M72LPX', stihl: '-', husqvarna: '-', application: 'Professional extreme wear resistance' },
  { id: 20, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .050" (1.3mm)', oregon: '72V', stihl: '33RSC', husqvarna: '-', application: 'Vibration suppression professional chain' },
  { id: 21, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .050" (1.3mm)', oregon: '72DPX', stihl: '33RM', husqvarna: '-', application: 'Semi-chisel professional chain, dirt resistant' },
  { id: 22, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .050" (1.3mm)', oregon: '72CL', stihl: '-', husqvarna: '-', application: 'Full chisel with protective link' },
  { id: 23, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .050" (1.3mm)', oregon: '72CK', stihl: '-', husqvarna: '-', application: 'Special purpose chain' },
  { id: 24, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .058" (1.5mm)', oregon: '73LPX', stihl: '35RS', husqvarna: 'C85 / H48', application: 'Professional logging, high performance' },
  { id: 25, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .058" (1.5mm)', oregon: '73DPX', stihl: '35RM', husqvarna: '-', application: 'Professional mixed operation' },
  { id: 26, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .063" (1.6mm)', oregon: '75LPX', stihl: '36RS', husqvarna: '-', application: 'Extremely high strength professional felling' },
  { id: 27, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '3/8" / .063" (1.6mm)', oregon: '75DPX', stihl: '36RM', husqvarna: '-', application: 'Extra large guide bar wear-resistant type' },
  { id: 28, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '.404" / .058" (1.5mm)', oregon: '58L', stihl: '-', husqvarna: '-', application: 'Old heavy-duty saw' },
  { id: 29, series: 'Series P', seriesLink: '/products/series-p', pitchGauge: '.404" / .063" (1.6mm)', oregon: '59L', stihl: '46RS', husqvarna: 'H64', application: 'Giant logging saw (Stihl MS880)' },
]

export default function FitmentFinderPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [crossRefSearch, setCrossRefSearch] = useState('')

  const buildQuoteUrl = (product: typeof compatibilityData[0]) => {
    const params = new URLSearchParams({
      series: product.series,
      seriesType: product.seriesType,
      brand: product.brand,
      model: product.model,
      bar: product.bar,
      pitch: product.pitch,
      gauge: product.gauge,
    })
    return `/request-quote?${params.toString()}`
  }

  // Get application page link based on series
  const getApplicationLink = (series: string) => {
    const appMap: Record<string, string> = {
      'Series E': '/products/applications/battery-saws',
      'Series W': '/products/applications/cold-climate',
      'Series P': '/products/applications/professional-loggers',
    }
    return appMap[series] || null
  }

  const filteredData = compatibilityData.filter((item) => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      item.brand.toLowerCase().includes(query) ||
      item.model.toLowerCase().includes(query) ||
      item.bar.toLowerCase().includes(query) ||
      item.pitch.toLowerCase().includes(query) ||
      item.gauge.toLowerCase().includes(query) ||
      item.series.toLowerCase().includes(query) ||
      item.seriesType.toLowerCase().includes(query)
    )
  })

  const filteredCrossRef = crossReferenceData.filter((item) => {
    if (!crossRefSearch) return true
    const query = crossRefSearch.toLowerCase()
    return (
      item.series.toLowerCase().includes(query) ||
      item.pitchGauge.toLowerCase().includes(query) ||
      item.oregon.toLowerCase().includes(query) ||
      item.stihl.toLowerCase().includes(query) ||
      item.husqvarna.toLowerCase().includes(query) ||
      item.application.toLowerCase().includes(query)
    )
  })

  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] overflow-x-hidden sm:overflow-visible">
        <h1 className="text-xl sm:text-2xl font-bold text-text-main mb-4">Fitment & Compatibility</h1>
        
        {/* Performance Without the Brand Premium */}
        <section id="fitment-guarantee" className="mb-8 bg-white border border-forest-brand/30 rounded-none p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-text-main mb-4">Performance Without the &quot;Brand Premium&quot;</h2>
          <p className="text-text-body text-sm leading-relaxed">
            Pro-grade chains at smart-value pricing: same high-carbon CrNiMo alloy, ANSI-certified safety, and industrial-grade durability as Tier-1 brands—without the logo markup. Our series-matched alternatives deliver the pitch, gauge, and cutting performance you trust. <strong className="text-text-main">100% Fitment Guaranteed.</strong>
          </p>
        </section>

        {/* Why Switch to Our Premium Alternatives */}
        <section className="mb-8 bg-gray-50 rounded-none p-4 sm:p-6 border border-forest-brand/30">
          <h2 className="text-lg sm:text-xl font-bold text-text-main mb-4 sm:mb-6">Why Switch to Our Premium Alternatives?</h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-forest-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-2 text-sm">Direct Compatibility</h3>
                <p className="text-sm text-text-body">No guessing games. Our chains are built to the exact same specifications as Oregon® and Stihl® equivalents, ensuring a seamless fit for your current fleet.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-forest-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-2 text-sm">Maximized ROI</h3>
                <p className="text-sm text-text-body">We eliminate the &apos;Brand Tax.&apos; Our clients typically see a 25-40% reduction in consumable costs without sacrificing edge retention or chain life.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                <Zap className="w-5 h-5 text-forest-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main mb-2 text-sm">Built for North America</h3>
                <p className="text-sm text-text-body">While others sell &apos;universal&apos; chains, we offer series-specific solutions—like our Series W for frozen hardwood—ensuring better performance in your local environment than &apos;off-the-shelf&apos; originals.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-forest-brand/30">
            <p className="text-sm font-semibold text-text-main">
              We offer a <a href="#fitment-guarantee" className="text-forest-brand underline hover:no-underline">100% Fitment Guarantee</a>: If it doesn&apos;t match your specified Oregon or Stihl model, we take it back.
            </p>
          </div>
        </section>

        {/* Search Box */}
        <div className="mb-4 sm:mb-6">
          <input
            type="text"
            placeholder="Search by brand, model, bar length, pitch, gauge, or series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 min-h-[44px] border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
          />
        </div>

        {/* Disclaimer */}
        <div className="mb-6 space-y-3">
          <p className="text-sm text-text-body italic">
            Always verify bar and chain specifications before ordering. Compatibility is based on pitch, gauge, and bar length. Saw and bar may vary. Consult your bar manufacturer or saw manual when in doubt.
          </p>
          <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-4">
            <p className="text-xs text-text-body leading-relaxed">
              <strong className="text-text-main">Brand Disclaimer:</strong> All brand names mentioned are trademarks of their respective owners. We are not affiliated with, authorized by, or endorsed by these brands. Our products are compatible replacements designed to meet or exceed OEM specifications.
            </p>
          </div>
        </div>

        {/* Compatibility Table */}
        <div className="table-responsive -mx-4 sm:mx-0 overflow-x-hidden sm:overflow-x-auto">
          <table className="fitment-compat-table w-full min-w-[900px] text-sm border border-forest-brand/30">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold">Brand</th>
                <th className="text-left px-4 py-3 font-semibold">Saw Model</th>
                <th className="text-left px-4 py-3 font-semibold">Bar Length</th>
                <th className="text-left px-4 py-3 font-semibold">Pitch</th>
                <th className="text-left px-4 py-3 font-semibold">Gauge</th>
                <th className="text-left px-4 py-3 font-semibold">Our Series</th>
                <th className="text-left px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, idx) => (
                  <tr key={idx} className="border-t border-forest-brand/30 hover:bg-gray-50">
                    <td className="px-4 py-3" data-label="Brand">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-text-main">{item.brand}</span>
                        <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">
                          Compatible
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3" data-label="Saw Model">{item.model}</td>
                    <td className="px-4 py-3" data-label="Bar Length">{item.bar}</td>
                    <td className="px-4 py-3" data-label="Pitch">{item.pitch}</td>
                    <td className="px-4 py-3" data-label="Gauge">
                      {item.gauge === '.043"' || item.gauge === '.050"' ? (
                        <strong>{item.gauge}</strong>
                      ) : (
                        item.gauge
                      )}
                    </td>
                    <td className="px-4 py-3" data-label="Our Series">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 sm:flex-col sm:items-start sm:gap-1">
                        <div className="flex items-center gap-2">
                          <Link
                            href={item.seriesLink}
                            className="text-forest-brand font-medium hover:underline"
                          >
                            {item.series}
                          </Link>
                          <span className="text-xs text-forest-brand bg-forest-brand/10 px-2 py-0.5 rounded-none font-semibold">
                            Replacement
                          </span>
                        </div>
                        <span className="text-text-body text-xs">({item.seriesType})</span>
                        {getApplicationLink(item.series) && (
                          <Link
                            href={getApplicationLink(item.series)!}
                            className="text-xs text-forest-brand hover:underline inline-flex items-center gap-1"
                          >
                            View Application
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </Link>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 min-w-0 fitment-actions-cell" data-label="Actions">
                      <div className="fitment-actions-block min-w-0 max-w-full">
                        <span className="fitment-actions-grid-spacer" aria-hidden />
                        <Link
                          href={buildQuoteUrl(item)}
                          className="flex items-center justify-center gap-1.5 text-xs sm:text-sm py-2.5 sm:py-1.5 px-5 sm:px-4 min-h-[44px] sm:min-h-[32px] w-full max-w-none sm:max-w-[240px] sm:w-auto bg-forest-brand text-white font-semibold hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition rounded-none [&_svg]:text-white fitment-actions-btn sm:self-start"
                        >
                          <ArrowRight className="hidden sm:inline w-3.5 h-3.5 shrink-0" aria-hidden />
                          <span>Request Quote</span>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-industrial">
                    No matching results found. Try a different search term or{' '}
                    <Link href="/request-quote" className="text-forest-brand font-medium hover:underline">
                      request a quote
                    </Link>{' '}
                    with your saw specifications.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Results count */}
        {searchQuery && (
          <p className="text-sm text-text-body mt-4">
            Found {filteredData.length} result{filteredData.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
          </p>
        )}

        {/* Cross-Chain Reference */}
        <section className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-300">
          <h2 className="text-lg sm:text-xl font-bold text-text-main mb-4">Cross-Chain Reference</h2>
          <p className="text-text-body text-sm mb-4 max-w-3xl">
            Cross-reference table for North American chainsaw chain models. Match our Series E, W, and P chains to equivalent Oregon, Stihl, and Husqvarna part numbers.
          </p>

          {/* Cross-Reference Search Box */}
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              placeholder="Search by series, pitch/gauge, model number, or application..."
              value={crossRefSearch}
              onChange={(e) => setCrossRefSearch(e.target.value)}
              className="w-full px-4 py-3 min-h-[44px] border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
            />
          </div>

          {crossRefSearch && (
            <p className="text-sm text-text-body mb-4">
              Found {filteredCrossRef.length} result{filteredCrossRef.length !== 1 ? 's' : ''} for &quot;{crossRefSearch}&quot;
            </p>
          )}

          <div className="table-responsive -mx-4 sm:mx-0 overflow-x-hidden sm:overflow-x-auto">
            <table className="fitment-crossref-table w-full min-w-[1000px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Our Series</th>
                  <th className="text-left px-4 py-3 font-semibold">Pitch / Gauge</th>
                  <th className="text-left px-4 py-3 font-semibold">Oregon Model</th>
                  <th className="text-left px-4 py-3 font-semibold">Stihl Model</th>
                  <th className="text-left px-4 py-3 font-semibold">Husqvarna Model</th>
                  <th className="text-left px-4 py-3 font-semibold">Application</th>
                </tr>
              </thead>
              <tbody>
                {filteredCrossRef.length > 0 ? (
                  filteredCrossRef.map((item) => (
                    <tr key={item.id} className="border-t border-forest-brand/30 hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium" data-label="Our Series">
                        <Link href={item.seriesLink} className="text-forest-brand hover:underline">
                          {item.series}
                        </Link>
                      </td>
                      <td className="px-4 py-3" data-label="Pitch / Gauge">{item.pitchGauge}</td>
                      <td className="px-4 py-3" data-label="Oregon Model">
                        {item.oregon !== '-' ? (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:flex-col sm:gap-1">
                            <span className="font-medium text-text-main">{item.oregon}</span>
                            <span className="text-xs text-text-body">Replacement for</span>
                          </div>
                        ) : (
                          <span className="text-text-body">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3" data-label="Stihl Model">
                        {item.stihl !== '-' ? (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:flex-col sm:gap-1">
                            <span className="font-medium text-text-main">{item.stihl}</span>
                            <span className="text-xs text-text-body">Replacement for</span>
                          </div>
                        ) : (
                          <span className="text-text-body">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3" data-label="Husqvarna Model">
                        {item.husqvarna !== '-' ? (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:flex-col sm:gap-1">
                            <span className="font-medium text-text-main">{item.husqvarna}</span>
                            <span className="text-xs text-text-body">Replacement for</span>
                          </div>
                        ) : (
                          <span className="text-text-body">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-text-body" data-label="Application">{item.application}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-industrial">
                      No matching results found. Try a different search term or{' '}
                      <Link href="/request-quote" className="text-forest-brand font-medium hover:underline">
                        request a quote
                      </Link>
                      .
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-body italic mt-4">
            Cross-reference data is provided for compatibility guidance. Always verify specifications with your bar and saw manufacturer before ordering.
          </p>
          
          {/* Brand Disclaimer */}
          <div className="mt-6 bg-gray-50 border border-forest-brand/30 rounded-none p-4">
            <p className="text-xs text-text-body leading-relaxed">
              <strong className="text-text-main">Brand Disclaimer:</strong> Oregon®, Stihl®, Husqvarna®, Milwaukee®, Makita®, DeWalt®, EGO Power+®, Echo®, Ryobi®, Greenworks Pro®, Craftsman®, and Poulan Pro® are trademarks of their respective owners. We are not affiliated with, authorized by, or endorsed by these brands. Our products are compatible replacements designed to meet or exceed OEM specifications.
            </p>
          </div>
        </section>

        {/* How to Identify Your Specifications - reference at end */}
        <section className="mb-8 sm:mb-10 bg-white border border-forest-brand/30 rounded-none p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-text-main mb-4">How to Identify Your Specifications</h2>
          <p className="text-sm text-text-body mb-4 sm:mb-6">
            Follow these three steps to identify the correct chain specifications for your chainsaw. Most guide bars have the specifications stamped on the tail end.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-none p-4 sm:p-5 border border-forest-brand/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-forest-brand text-white rounded-none flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <h3 className="text-base sm:text-lg font-semibold text-text-main">Check the Bar</h3>
              </div>
              <div className="relative w-full h-40 sm:h-48 mb-4 bg-white border-2 border-gray-300 rounded-none overflow-hidden">
                <Image
                  src="/images/fitment-guide-bar-stamping.jpg"
                  alt="Guide bar tail end showing stamped specifications: Pitch, Gauge, and Drive Link count"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-sm text-text-body leading-relaxed">
                Most guide bars have the <strong className="text-text-main">Pitch, Gauge, and Drive Link count</strong> stamped on the tail end. Look for markings like &quot;.325&quot; &quot;.050&quot; &quot;56DL&quot; or similar specifications.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-none p-4 sm:p-5 border border-forest-brand/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-forest-brand text-white rounded-none flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <h3 className="text-base sm:text-lg font-semibold text-text-main">Read the Drive Link</h3>
              </div>
              <div className="relative w-full h-40 sm:h-48 mb-4 bg-white border-2 border-gray-300 rounded-none overflow-hidden">
                <Image
                  src="/images/fitment-drive-link-marking.jpg"
                  alt="Close-up macro shot of drive link showing stamped model number (e.g., Oregon 91 or Stihl 6)"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-sm text-text-body leading-relaxed">
                Observe the stamped numbers on the drive links. Common markings include <strong className="text-text-main">Oregon&apos;s 91</strong> or <strong className="text-text-main">Stihl&apos;s 6</strong>. These numbers correspond to specific chain models.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-none p-4 sm:p-5 border border-forest-brand/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-forest-brand text-white rounded-none flex items-center justify-center font-bold text-sm shrink-0">3</div>
                <h3 className="text-base sm:text-lg font-semibold text-text-main">Count the Links</h3>
              </div>
              <div className="relative w-full h-40 sm:h-48 mb-4 bg-white border-2 border-gray-300 rounded-none overflow-hidden">
                <Image
                  src="/images/fitment-count-drive-links.jpg"
                  alt="Chain laid flat showing how to count total drive links for chain length"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-sm text-text-body leading-relaxed">
                If specifications are unclear, lay the chain flat and <strong className="text-text-main">count the total number of drive links</strong>. This gives you the chain length (e.g., 56DL = 56 drive links).
              </p>
            </div>
          </div>

          {/* Help Box */}
          <div className="bg-forest-brand/10 border-2 border-forest-brand rounded-none p-4 sm:p-5">
            <p className="text-sm font-semibold text-text-main">
              Still unsure? Send us a photo of your bar stamping, and our engineers will match it for you.
            </p>
          </div>
        </section>

        {/* Industry Technical Specifications & Standards - reference at end */}
        <section className="mb-8 sm:mb-10 bg-white border border-forest-brand/30 rounded-none p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-text-main mb-2">Industry Technical Specifications & Standards</h2>
          <p className="text-sm text-text-body mb-4 sm:mb-6 italic">Technical Reference for Professional Buyers</p>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Pitch */}
            <div className="border-b border-forest-brand/30 pb-4 sm:pb-6">
              <h3 className="text-base sm:text-lg font-semibold text-text-main mb-4">Pitch</h3>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative w-full h-48 mb-4 bg-white border-2 border-gray-300 rounded-none flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    <div className="text-center">
                      <div className="text-xs text-text-body font-mono mb-2">Technical Drawing</div>
                      <div className="text-xs text-text-body">3/8&quot; LP vs 3/8&quot; Pitch Comparison</div>
                      <div className="text-xs text-text-body mt-2">Drive link spacing diagram</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-text-body mb-4 leading-relaxed">
                    <strong className="text-text-main">3/8&quot; LP (Low Profile)</strong> and <strong className="text-text-main">3/8&quot;</strong> are mechanically distinct pitch standards:
                  </p>
                  <ul className="text-sm text-text-body space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span><strong>3/8&quot; LP:</strong> Drive link spacing = 0.365&quot; (9.27mm). Designed for low-kickback safety chains on consumer saws. Reduced cutter depth limits chip size.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span><strong>3/8&quot;:</strong> Drive link spacing = 0.375&quot; (9.525mm). Standard professional pitch for mid-to-large saws. Higher chip clearance, faster cutting speed.</span>
                    </li>
                  </ul>
                  <p className="text-xs text-text-body italic">
                    <strong>Critical:</strong> These are NOT interchangeable. LP chains will not seat properly on standard 3/8&quot; bars, and vice versa.
                  </p>
                </div>
              </div>
            </div>

            {/* Gauge */}
            <div className="border-b border-forest-brand/30 pb-4 sm:pb-6">
              <h3 className="text-base sm:text-lg font-semibold text-text-main mb-4">Gauge</h3>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative w-full h-48 mb-4 bg-white border-2 border-gray-300 rounded-none flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    <div className="text-center">
                      <div className="text-xs text-text-body font-mono mb-2">Technical Drawing</div>
                      <div className="text-xs text-text-body">Drive link gauge measurement</div>
                      <div className="text-xs text-text-body mt-2">Cross-section view with dimensions</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-text-body mb-4 leading-relaxed">
                    Gauge refers to the drive link thickness that fits into the guide bar groove. Precision fit is critical for safe operation.
                  </p>
                  <div className="table-responsive -mx-4 sm:mx-0 overflow-visible sm:overflow-x-auto">
                    <table className="fitment-gauge-table w-full min-w-[300px] text-sm border border-forest-brand/30">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left px-4 py-2 font-semibold text-text-main">Imperial</th>
                          <th className="text-left px-4 py-2 font-semibold text-text-main">Metric</th>
                          <th className="text-left px-4 py-2 font-semibold text-text-main">Application</th>
                        </tr>
                      </thead>
                      <tbody className="text-industrial">
                        <tr className="border-t border-forest-brand/30">
                          <td className="px-4 py-2 font-medium" data-label="Imperial">.043&quot;</td>
                          <td className="px-4 py-2" data-label="Metric">1.1mm</td>
                          <td className="px-4 py-2 text-text-body" data-label="Application">Battery saws, narrow kerf</td>
                        </tr>
                        <tr className="border-t border-forest-brand/30">
                          <td className="px-4 py-2 font-medium" data-label="Imperial">.050&quot;</td>
                          <td className="px-4 py-2" data-label="Metric">1.3mm</td>
                          <td className="px-4 py-2 text-text-body" data-label="Application">Consumer saws, general purpose</td>
                        </tr>
                        <tr className="border-t border-forest-brand/30">
                          <td className="px-4 py-2 font-medium" data-label="Imperial">.058&quot;</td>
                          <td className="px-4 py-2" data-label="Metric">1.5mm</td>
                          <td className="px-4 py-2 text-text-body" data-label="Application">Mid-range professional</td>
                        </tr>
                        <tr className="border-t border-forest-brand/30">
                          <td className="px-4 py-2 font-medium" data-label="Imperial">.063&quot;</td>
                          <td className="px-4 py-2" data-label="Metric">1.6mm</td>
                          <td className="px-4 py-2 text-text-body" data-label="Application">Heavy-duty professional</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-text-body italic mt-4">
                    <strong>Note:</strong> Gauge tolerance is ±0.001&quot;. Mismatched gauge causes chain derailment and bar damage.
                  </p>
                </div>
              </div>
            </div>

            {/* Cutter Geometry */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-text-main mb-4">Cutter Geometry</h3>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4">
                <div>
                  <div className="relative w-full h-48 mb-4 bg-white border-2 border-gray-300 rounded-none flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    <div className="text-center">
                      <div className="text-xs text-text-body font-mono mb-2">Technical Drawing</div>
                      <div className="text-xs text-text-body">Full-Chisel Cutter Profile</div>
                      <div className="text-xs text-text-body mt-2">Square-corner geometry</div>
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-text-main mb-2">Full-Chisel (Square-Corner)</h4>
                  <ul className="text-sm text-text-body space-y-1 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span>Razor-sharp square corners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span>Highest chip clearance speed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span>Optimal for: Western softwoods (pine, fir, cedar)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span>Requires frequent sharpening in dirty conditions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative w-full h-48 mb-4 bg-white border-2 border-gray-300 rounded-none flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    <div className="text-center">
                      <div className="text-xs text-text-body font-mono mb-2">Technical Drawing</div>
                      <div className="text-xs text-text-body">Semi-Chisel Cutter Profile</div>
                      <div className="text-xs text-text-body mt-2">Rounded-corner geometry</div>
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-text-main mb-2">Semi-Chisel (Rounded-Corner)</h4>
                  <ul className="text-sm text-text-body space-y-1 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span>Rounded cutting corners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span>Superior edge retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span>Optimal for: Eastern hardwoods (oak, maple, hickory), frozen wood, dirty conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span>Less prone to dulling, extended sharpening intervals</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-4">
                <p className="text-xs text-text-body">
                  <strong className="text-text-main">Regional Application Guide:</strong> Eastern North America (hardwood-dominant) benefits from Semi-Chisel for durability in dense timber. Western North America (softwood-dominant) can maximize productivity with Full-Chisel for faster cutting speeds.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
