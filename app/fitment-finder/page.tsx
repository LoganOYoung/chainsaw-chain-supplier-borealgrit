'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Zap, DollarSign, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Inline SVGs for Industry Specs — no network request, always display
const SpecPitchSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 192" fill="none" stroke="#374151" strokeWidth={1.5} className="w-full h-full max-h-48 object-contain" aria-label="3/8&quot; LP vs 3/8&quot; pitch comparison — drive link spacing diagram">
    <title>3/8&quot; LP vs 3/8&quot; Pitch — Drive link spacing</title>
    <rect width={320} height={192} fill="#fff" />
    <text x={160} y={20} textAnchor="middle" fontSize={11} fontFamily="system-ui,sans-serif" fill="#6b7280">Pitch comparison</text>
    <text x={80} y={42} textAnchor="middle" fontSize={10} fontWeight={600} fill="#222">3/8&quot; LP</text>
    <text x={80} y={56} textAnchor="middle" fontSize={9} fill="#6b7280">0.365&quot; (9.27mm)</text>
    <g transform="translate(40,70)">
      <rect x={0} y={20} width={36} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={42} y={20} width={36} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={84} y={20} width={36} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <line x1={36} y1={32} x2={42} y2={32} stroke="#547950" strokeWidth={2} />
      <line x1={78} y1={32} x2={84} y2={32} stroke="#547950" strokeWidth={2} />
      <text x={60} y={90} textAnchor="middle" fontSize={8} fill="#6b7280">pitch</text>
    </g>
    <text x={240} y={42} textAnchor="middle" fontSize={10} fontWeight={600} fill="#222">3/8&quot;</text>
    <text x={240} y={56} textAnchor="middle" fontSize={9} fill="#6b7280">0.375&quot; (9.525mm)</text>
    <g transform="translate(200,70)">
      <rect x={0} y={20} width={38} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={44} y={20} width={38} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={88} y={20} width={38} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <line x1={38} y1={32} x2={44} y2={32} stroke="#547950" strokeWidth={2} />
      <line x1={82} y1={32} x2={88} y2={32} stroke="#547950" strokeWidth={2} />
      <text x={63} y={90} textAnchor="middle" fontSize={8} fill="#6b7280">pitch</text>
    </g>
    <text x={160} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">Drive link spacing — not interchangeable</text>
  </svg>
)
const SpecGaugeSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 192" fill="none" stroke="#374151" strokeWidth={1.5} className="w-full h-full max-h-48 object-contain" aria-label="Drive link gauge — cross-section in bar groove">
    <title>Drive link gauge — cross-section</title>
    <rect width={320} height={192} fill="#fff" />
    <text x={160} y={20} textAnchor="middle" fontSize={11} fontFamily="system-ui,sans-serif" fill="#6b7280">Gauge (drive link thickness)</text>
    <g transform="translate(80,50)">
      <path d="M0 46 L0 96 L120 96 L120 46 L100 56 L20 56 Z" fill="#e5e7eb" stroke="#9ca3af" />
      <rect x={30} y={50} width={60} height={42} fill="#f9fafb" stroke="#547950" strokeWidth={2} />
      <text x={60} y={78} textAnchor="middle" fontSize={9} fill="#374151">.050&quot;</text>
      <text x={60} y={90} textAnchor="middle" fontSize={8} fill="#6b7280">1.3mm</text>
      <text x={60} y={115} textAnchor="middle" fontSize={9} fill="#6b7280">Drive link in bar groove</text>
    </g>
    <line x1={95} y1={45} x2={95} y2={54} stroke="#374151" strokeWidth={1} />
    <line x1={95} y1={92} x2={95} y2={101} stroke="#374151" strokeWidth={1} />
    <line x1={95} y1={50} x2={95} y2={96} stroke="#374151" strokeDasharray="4 2" />
    <text x={105} y={75} fontSize={8} fill="#374151">gauge</text>
    <text x={160} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">Fit into guide bar groove — tolerance ±0.001&quot;</text>
  </svg>
)
const SpecFullChiselSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 192" fill="none" stroke="#374151" strokeWidth={1.5} className="w-full h-full max-h-48 object-contain" aria-label="Full-chisel cutter profile — square-corner geometry">
    <title>Full-Chisel cutter — square-corner</title>
    <rect width={320} height={192} fill="#fff" />
    <text x={160} y={20} textAnchor="middle" fontSize={11} fontFamily="system-ui,sans-serif" fill="#6b7280">Full-Chisel (square-corner)</text>
    <g transform="translate(100,45)">
      <path d="M20 100 L20 50 L80 50 L100 70 L100 100 Z" fill="#f9fafb" stroke="#374151" strokeWidth={2} />
      <path d="M80 50 L100 70" stroke="#547950" strokeWidth={2.5} strokeLinecap="square" />
      <text x={60} y={130} textAnchor="middle" fontSize={9} fill="#6b7280">Square corner</text>
      <text x={60} y={142} textAnchor="middle" fontSize={8} fill="#6b7280">90° — max chip clearance</text>
    </g>
    <text x={160} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">Razor-sharp corner · fastest cutting · softwoods</text>
  </svg>
)
const SpecSemiChiselSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 192" fill="none" stroke="#374151" strokeWidth={1.5} className="w-full h-full max-h-48 object-contain" aria-label="Semi-chisel cutter profile — rounded-corner geometry">
    <title>Semi-Chisel cutter — rounded-corner</title>
    <rect width={320} height={192} fill="#fff" />
    <text x={160} y={20} textAnchor="middle" fontSize={11} fontFamily="system-ui,sans-serif" fill="#6b7280">Semi-Chisel (rounded-corner)</text>
    <g transform="translate(100,45)">
      <path d="M20 100 L20 50 L75 50 Q100 60 98 75 L98 100 Z" fill="#f9fafb" stroke="#374151" strokeWidth={2} />
      <path d="M75 50 Q95 55 98 75" stroke="#547950" strokeWidth={2.5} fill="none" />
      <text x={60} y={130} textAnchor="middle" fontSize={9} fill="#6b7280">Rounded corner</text>
      <text x={60} y={142} textAnchor="middle" fontSize={8} fill="#6b7280">Better edge retention</text>
    </g>
    <text x={160} y={175} textAnchor="middle" fontSize={9} fill="#6b7280">Durable · hardwoods · frozen / dirty conditions</text>
  </svg>
)

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
      <main>
        {/* Full-bleed semi-transparent banner (same style as homepage hero) */}
        <section id="fitment-guarantee" className="relative w-full min-h-[240px] md:min-h-[280px] flex flex-col justify-center py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/contact-banner.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-forest-brand/60" aria-hidden />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">
              Performance Without the &quot;Brand Premium&quot;
            </h2>
            <p className="text-white/95 text-sm sm:text-base max-w-3xl leading-relaxed">
              Pro-grade chains at smart-value pricing: same high-carbon CrNiMo alloy, ANSI-certified safety, and industrial-grade durability as Tier-1 brands—without the logo markup. Our series-matched alternatives deliver the pitch, gauge, and cutting performance you trust.{' '}
              <strong className="text-white">100% Fitment Guaranteed.</strong>
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] overflow-x-hidden sm:overflow-visible">
          <h1 className="text-xl sm:text-2xl font-bold text-text-main mb-6">Fitment & Compatibility</h1>

        {/* Search Box */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by brand, model, bar length, pitch, gauge, or series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 min-h-[44px] border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
          />
        </div>

        {/* Disclaimer */}
        <div className="mb-6 max-w-4xl">
          <p className="text-sm text-text-body italic">
            Always verify bar and chain specifications before ordering. Compatibility is based on pitch, gauge, and bar length. Saw and bar may vary. Consult your bar manufacturer or saw manual when in doubt.
          </p>
        </div>

        {/* Compatibility Table */}
        <div className="fitment-table-wrap table-responsive -mx-4 sm:mx-0 overflow-x-hidden sm:overflow-x-auto">
          <table className="fitment-compat-table w-full min-w-[900px]">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Saw Model</th>
                <th>Bar Length</th>
                <th>Pitch</th>
                <th>Gauge</th>
                <th>Replacement</th>
                <th className="min-w-[180px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, idx) => (
                  <tr key={idx}>
                    <td data-label="Brand">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-text-main">{item.brand}</span>
                        <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">
                          Compatible
                        </span>
                      </div>
                    </td>
                    <td data-label="Saw Model">{item.model}</td>
                    <td data-label="Bar Length">{item.bar}</td>
                    <td data-label="Pitch">{item.pitch}</td>
                    <td data-label="Gauge">
                      {item.gauge === '.043"' || item.gauge === '.050"' ? (
                        <strong>{item.gauge}</strong>
                      ) : (
                        item.gauge
                      )}
                    </td>
                    <td data-label="Replacement">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 sm:flex-col sm:items-start sm:gap-1">
                        <Link
                          href={item.seriesLink}
                          className="text-forest-brand font-medium hover:underline"
                        >
                          {item.series}
                        </Link>
                        <span className="text-text-body text-xs">({item.seriesType})</span>
                      </div>
                    </td>
                    <td className="min-w-0 fitment-actions-cell" data-label="Actions">
                      <div className="fitment-actions-block min-w-0 max-w-full">
                        <span className="fitment-actions-grid-spacer" aria-hidden />
                        <Link
                          href={buildQuoteUrl(item)}
                          className="flex items-center justify-center gap-1.5 text-xs sm:text-sm py-2.5 sm:py-1.5 px-5 sm:px-4 min-h-[44px] sm:min-h-[32px] w-full max-w-none sm:max-w-[240px] sm:w-auto bg-forest-brand text-white font-semibold hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition rounded-none [&_svg]:text-white fitment-actions-btn sm:self-start whitespace-nowrap"
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
                  <td colSpan={7} className="py-8 text-center text-industrial">
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
        <section className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-gray-300">
          <h2 className="text-lg sm:text-xl font-bold text-text-main mb-4">Cross-Chain Reference</h2>
          <p className="text-text-body text-sm mb-6 max-w-3xl">
            Cross-reference table for North American chainsaw chain models. Match our Series E, W, and P chains to equivalent Oregon, Stihl, and Husqvarna part numbers.
          </p>

          {/* Cross-Reference Search Box */}
          <div className="mb-6">
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

          <div className="fitment-table-wrap table-responsive -mx-4 sm:mx-0 overflow-x-hidden sm:overflow-x-auto">
            <table className="fitment-crossref-table w-full min-w-[1000px]">
              <thead>
                <tr>
                  <th>Replacement</th>
                  <th>Pitch / Gauge</th>
                  <th>Oregon Model</th>
                  <th>Stihl Model</th>
                  <th>Husqvarna Model</th>
                  <th>Application</th>
                </tr>
              </thead>
              <tbody>
                {filteredCrossRef.length > 0 ? (
                  filteredCrossRef.map((item) => (
                    <tr key={item.id}>
                      <td className="font-medium" data-label="Replacement">
                        <Link href={item.seriesLink} className="text-forest-brand hover:underline">
                          {item.series}
                        </Link>
                      </td>
                      <td data-label="Pitch / Gauge">{item.pitchGauge}</td>
                      <td data-label="Oregon Model">
                        {item.oregon !== '-' ? (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:flex-col sm:gap-1">
                            <span className="font-medium text-text-main">{item.oregon}</span>
                            <span className="text-xs text-text-body">Replacement for</span>
                          </div>
                        ) : (
                          <span className="text-text-body">-</span>
                        )}
                      </td>
                      <td data-label="Stihl Model">
                        {item.stihl !== '-' ? (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:flex-col sm:gap-1">
                            <span className="font-medium text-text-main">{item.stihl}</span>
                            <span className="text-xs text-text-body">Replacement for</span>
                          </div>
                        ) : (
                          <span className="text-text-body">-</span>
                        )}
                      </td>
                      <td data-label="Husqvarna Model">
                        {item.husqvarna !== '-' ? (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:flex-col sm:gap-1">
                            <span className="font-medium text-text-main">{item.husqvarna}</span>
                            <span className="text-xs text-text-body">Replacement for</span>
                          </div>
                        ) : (
                          <span className="text-text-body">-</span>
                        )}
                      </td>
                      <td className="text-text-body" data-label="Application">{item.application}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-industrial">
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
        </section>

        {/* Why Switch to Our Premium Alternatives - after tools */}
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
                  <div className="relative w-full min-h-[12rem] mb-4 bg-white border-2 border-gray-300 rounded-none overflow-hidden flex items-center justify-center">
                    <SpecPitchSvg />
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
                  <div className="relative w-full min-h-[12rem] mb-4 bg-white border-2 border-gray-300 rounded-none overflow-hidden flex items-center justify-center">
                    <SpecGaugeSvg />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-text-body mb-4 leading-relaxed">
                    Gauge refers to the drive link thickness that fits into the guide bar groove. Precision fit is critical for safe operation.
                  </p>
                  <div className="fitment-table-wrap table-responsive -mx-4 sm:mx-0 overflow-visible sm:overflow-x-auto">
                    <table className="fitment-gauge-table w-full min-w-[300px]">
                      <thead>
                        <tr>
                          <th>Imperial</th>
                          <th>Metric</th>
                          <th>Application</th>
                        </tr>
                      </thead>
                      <tbody className="text-industrial">
                        <tr>
                          <td className="font-medium" data-label="Imperial">.043&quot;</td>
                          <td data-label="Metric">1.1mm</td>
                          <td className="text-text-body" data-label="Application">Battery saws, narrow kerf</td>
                        </tr>
                        <tr>
                          <td className="font-medium" data-label="Imperial">.050&quot;</td>
                          <td data-label="Metric">1.3mm</td>
                          <td className="text-text-body" data-label="Application">Consumer saws, general purpose</td>
                        </tr>
                        <tr>
                          <td className="font-medium" data-label="Imperial">.058&quot;</td>
                          <td data-label="Metric">1.5mm</td>
                          <td className="text-text-body" data-label="Application">Mid-range professional</td>
                        </tr>
                        <tr>
                          <td className="font-medium" data-label="Imperial">.063&quot;</td>
                          <td data-label="Metric">1.6mm</td>
                          <td className="text-text-body" data-label="Application">Heavy-duty professional</td>
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
                  <div className="relative w-full min-h-[12rem] mb-4 bg-white border-2 border-gray-300 rounded-none overflow-hidden flex items-center justify-center">
                    <SpecFullChiselSvg />
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
                  <div className="relative w-full min-h-[12rem] mb-4 bg-white border-2 border-gray-300 rounded-none overflow-hidden flex items-center justify-center">
                    <SpecSemiChiselSvg />
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

        {/* Brand Disclaimer — page bottom */}
        <div className="mt-8 pt-6 border-t border-gray-200 max-w-4xl bg-gray-50 rounded-none p-4 sm:p-5">
          <p className="text-xs sm:text-sm text-text-body leading-relaxed">
            <strong className="text-text-main">Brand Disclaimer:</strong> Oregon®, Stihl®, Husqvarna®, Milwaukee®, Makita®, DeWalt®, EGO Power+®, Echo®, Ryobi®, Greenworks Pro®, Craftsman®, and Poulan Pro® are trademarks of their respective owners. We are not affiliated with, authorized by, or endorsed by these brands. Our products are compatible replacements designed to meet or exceed OEM specifications.
          </p>
        </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
