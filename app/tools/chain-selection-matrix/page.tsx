'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const SPECIES = [
  { id: 'hardwood', label: 'Hardwood', desc: 'Oak, Maple, Hickory', series: 'P' as const },
  { id: 'softwood', label: 'Softwood', desc: 'Douglas Fir, Pine, Spruce', series: 'P' as const },
  { id: 'frozen', label: 'Frozen / Dirty Timber', desc: 'Winter logging, ground contact', series: 'W' as const },
]

const EQUIPMENT = [
  { id: 'gas-heavy', label: 'Gas Heavy Duty (70cc+)', desc: 'Professional logging saws', series: 'P' as const },
  { id: 'electric', label: 'Electric / Cordless', desc: 'Stihl MSA, Milwaukee M18, battery saws', series: 'E' as const },
  { id: 'harvester', label: 'Mechanical Harvester', desc: 'Feller Buncher, processing heads', series: 'P' as const },
]

const TASKS = [
  { id: 'logging', label: 'Commercial Logging', desc: 'High-volume, TCO-focused', series: 'P' as const },
  { id: 'arborist', label: 'Arboriculture & Pruning', desc: 'Precision cuts, tree healing', series: 'E' as const },
  { id: 'firewood', label: 'Firewood Processing', desc: 'Dry wood, abrasion resistance', series: 'P' as const },
  { id: 'disaster', label: 'Disaster Recovery', desc: 'Complex conditions, impact resistance', series: 'W' as const },
]

const SERIES_INFO = {
  W: {
    name: 'Series W (Arctic Shield)',
    href: '/products/series-w',
    tagline: 'Cold-resilient alloy for sub-zero and impact-heavy work.',
    reasons: [
      '68CrNiMo alloy maintains toughness to -40°C',
      'Prevents chain fatigue and tooth fracture in frozen wood',
      'Ideal for winter logging and disaster recovery',
    ],
  },
  P: {
    name: 'Series P (Industrial)',
    href: '/products/series-p',
    tagline: 'High output, stay-sharp, and maximum chip clearance.',
    reasons: [
      'Full-chisel design for hardwood and softwood',
      'Industrial chrome for extended sharpening intervals',
      'Built for gas saws 70cc+ and mechanical harvesters',
    ],
  },
  E: {
    name: 'Series E (Efficiency)',
    href: '/products/series-e',
    tagline: 'Narrow kerf, low vibration, battery-optimized.',
    reasons: [
      '15–25% less power draw for longer battery runtime',
      'Smooth cutting for arborist and precision work',
      'Designed for cordless and electric saws',
    ],
  },
}

function getRecommendedSeries(
  speciesId: string | null,
  equipmentId: string | null,
  taskId: string | null
): 'W' | 'P' | 'E' | null {
  if (!speciesId && !equipmentId && !taskId) return null
  const votes: Record<string, number> = { W: 0, P: 0, E: 0 }
  const add = (s: 'W' | 'P' | 'E', n: number) => { votes[s] += n }
  if (speciesId) {
    const s = SPECIES.find((x) => x.id === speciesId)
    if (s) add(s.series, 2)
  }
  if (equipmentId) {
    const e = EQUIPMENT.find((x) => x.id === equipmentId)
    if (e) add(e.series, 2)
  }
  if (taskId) {
    const t = TASKS.find((x) => x.id === taskId)
    if (t) add(t.series, 2)
  }
  const max = Math.max(votes.W, votes.P, votes.E)
  if (max === 0) return null
  if (votes.W === max) return 'W'
  if (votes.E === max) return 'E'
  return 'P'
}

export default function ChainSelectionMatrixPage() {
  const [species, setSpecies] = useState<string | null>(null)
  const [equipment, setEquipment] = useState<string | null>(null)
  const [task, setTask] = useState<string | null>(null)
  const recommended = getRecommendedSeries(species, equipment, task)
  const info = recommended ? SERIES_INFO[recommended] : null

  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'For Buyers', href: '/for-buyers' },
            { label: 'Chain Selection Matrix' },
          ]}
        />
        <Link
          href="/for-buyers"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to For Buyers
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-main mb-2">
            Chainsaw Chain Selection Matrix
          </h1>
          <p className="text-sm sm:text-base text-text-body max-w-3xl leading-relaxed">
            Select by <strong className="text-text-main">species</strong>, <strong className="text-text-main">equipment</strong>, and <strong className="text-text-main">task</strong> to get the right BorealGrit series for your conditions.
          </p>
        </header>

        {/* Interactive filters */}
        <section className="mb-8 p-5 sm:p-6 bg-white border-2 border-forest-brand/30 rounded-none">
          <h2 className="text-base font-semibold text-text-main mb-4">Select your application</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-text-main mb-2">
                By species
              </label>
              <select
                value={species ?? ''}
                onChange={(e) => setSpecies(e.target.value || null)}
                className="w-full border border-forest-brand/30 rounded-none px-3 py-2.5 text-sm bg-white"
              >
                <option value="">— Select —</option>
                {SPECIES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-text-main mb-2">
                By equipment
              </label>
              <select
                value={equipment ?? ''}
                onChange={(e) => setEquipment(e.target.value || null)}
                className="w-full border border-forest-brand/30 rounded-none px-3 py-2.5 text-sm bg-white"
              >
                <option value="">— Select —</option>
                {EQUIPMENT.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-text-main mb-2">
                By task
              </label>
              <select
                value={task ?? ''}
                onChange={(e) => setTask(e.target.value || null)}
                className="w-full border border-forest-brand/30 rounded-none px-3 py-2.5 text-sm bg-white"
              >
                <option value="">— Select —</option>
                {TASKS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dynamic result */}
          {info && (
            <div className="p-4 sm:p-5 bg-forest-light/30 border border-forest-brand/30 rounded-none">
              <p className="text-xs font-semibold uppercase tracking-wide text-forest-brand mb-2">Recommended</p>
              <h3 className="text-lg font-bold text-text-main mb-2">{info.name}</h3>
              <p className="text-sm text-text-body mb-4">{info.tagline}</p>
              <p className="text-xs font-medium text-text-main mb-2">Why this works:</p>
              <ul className="text-sm text-text-body space-y-1 mb-4">
                {info.reasons.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-forest-brand">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={info.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest-brand text-white font-semibold text-sm rounded-none hover:bg-forest-dark transition"
              >
                View {info.name.split(' ')[0]} specs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </section>

        {/* SEO content: By Species */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
            Best chain for hardwood, softwood, and frozen timber
          </h2>
          <div className="space-y-4 text-sm text-text-body">
            <div>
              <h3 className="font-semibold text-text-main mb-2">Best chain for hardwood (Oak, Maple, Hickory)</h3>
              <p>
                Hardwoods demand <strong>edge retention and abrasion resistance</strong>. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> full-chisel cutters with industrial chrome deliver extended sharpening intervals in dense oak, maple, and hickory.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Best chain for softwood (Douglas Fir, Pine, Spruce)</h3>
              <p>
                Softwoods benefit from <strong>maximum chip clearance and cutting speed</strong>. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> high-output design handles moisture-heavy Douglas Fir and continuous softwood logging.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Best chain for frozen wood and dirty timber</h3>
              <p>
                Sub-zero temperatures and ground contact require <strong>steel that stays tough</strong>. <Link href="/products/series-w" className="text-forest-brand hover:underline">Series W</Link> 68CrNiMo alloy maintains impact toughness to -40°C, preventing chain fatigue and tooth fracture.
              </p>
            </div>
          </div>
        </section>

        {/* SEO content: By Equipment */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
            Replacement chain for gas saws, electric saws, and harvesters
          </h2>
          <div className="space-y-4 text-sm text-text-body">
            <div>
              <h3 className="font-semibold text-text-main mb-2">Professional gas chainsaw chain (70cc+)</h3>
              <p>
                Heavy-duty gas saws need <strong>strength and anti-stretch</strong>. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> is built for 60cc+ professional saws with full-chisel cutters and industrial-grade construction.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Battery chainsaw chain replacement / electric saw chain</h3>
              <p>
                Cordless and electric saws perform best with <strong>narrow kerf and low power draw</strong>. <Link href="/products/series-e" className="text-forest-brand hover:underline">Series E</Link> reduces consumption 15–25%, extending battery runtime for Stihl MSA, Milwaukee M18, and similar platforms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Chainsaw chain for mechanical harvesters</h3>
              <p>
                Feller Bunchers and processing heads require <strong>industrial-grade reliability</strong>. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> meets high-output OEM and harvester specifications. Contact us for bulk and custom configurations.
              </p>
            </div>
          </div>
        </section>

        {/* SEO content: By Task */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
            Best chain for logging, arborist work, firewood, and land clearing
          </h2>
          <div className="space-y-4 text-sm text-text-body">
            <div>
              <h3 className="font-semibold text-text-main mb-2">Commercial logging chainsaw chain</h3>
              <p>
                High-volume logging prioritizes <strong>cuts per hour and TCO</strong>. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> maximizes productivity and stay-sharp duration for commercial operations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Arborist chainsaw chain / pruning chain</h3>
              <p>
                Tree care requires <strong>smooth cuts and low vibration</strong>. <Link href="/products/series-e" className="text-forest-brand hover:underline">Series E</Link> narrow kerf profile reduces fatigue and promotes clean, healing-friendly cuts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">Firewood processing and land clearing chain</h3>
              <p>
                Firewood often involves dry, abrasive wood; land clearing adds impact and debris. <Link href="/products/series-p" className="text-forest-brand hover:underline">Series P</Link> for general firewood; <Link href="/products/series-w" className="text-forest-brand hover:underline">Series W</Link> for frozen or disaster-recovery conditions.
              </p>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="flex flex-wrap gap-4">
          <Link
            href="/tools/regional-guide"
            className="inline-flex items-center gap-2 text-sm text-forest-brand hover:underline font-medium"
          >
            Regional Application Guide <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/fitment-finder"
            className="inline-flex items-center gap-2 text-sm text-forest-brand hover:underline font-medium"
          >
            Fitment Finder <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <Link
          href="/for-buyers"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mt-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to For Buyers
        </Link>
      </main>
      <Footer />
    </>
  )
}
