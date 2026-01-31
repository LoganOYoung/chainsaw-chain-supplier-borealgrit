'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ToolsCalculators() {
  const [barLength, setBarLength] = useState('')
  const [pitch, setPitch] = useState('')
  const [driveLinks, setDriveLinks] = useState('')
  const [oemPartNumber, setOemPartNumber] = useState('')
  const [scenario, setScenario] = useState('')

  return (
    <div className="space-y-12">
      {/* 1. Chain length / drive link calculator */}
      <section id="chain-length-calculator" className="scroll-mt-6 border border-forest-brand/30 rounded-none p-6 bg-white">
        <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
          Chain length / drive link calculator
        </h2>
        <p className="text-text-body text-sm mb-4">
          Enter bar length and pitch to get recommended drive link count; or enter link count to get corresponding bar length.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-text-main mb-1">Bar length (inches)</label>
            <input
              type="text"
              value={barLength}
              onChange={(e) => setBarLength(e.target.value)}
              placeholder="e.g. 18"
              className="w-full border border-forest-brand/30 rounded-none px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-main mb-1">Pitch</label>
            <select
              value={pitch}
              onChange={(e) => setPitch(e.target.value)}
              className="w-full border border-forest-brand/30 rounded-none px-3 py-2 text-sm"
            >
              <option value="">Select pitch</option>
              <option value=".325">.325&quot;</option>
              <option value="3/8">3/8&quot;</option>
              <option value=".404">.404&quot;</option>
              <option value="3/8 LP">3/8&quot; LP</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-main mb-1">Drive links (optional)</label>
            <input
              type="text"
              value={driveLinks}
              onChange={(e) => setDriveLinks(e.target.value)}
              placeholder="e.g. 72"
              className="w-full border border-forest-brand/30 rounded-none px-3 py-2 text-sm"
            />
          </div>
        </div>
        <button type="button" className="px-4 py-2 bg-forest-brand text-white font-semibold text-sm rounded-none hover:bg-forest-dark transition">
          Calculate
        </button>
        <p className="text-text-body text-xs mt-3">Results will appear here once logic is connected.</p>
      </section>

      {/* 2. OEM / part number lookup */}
      <section id="oem-lookup" className="scroll-mt-6 border border-forest-brand/30 rounded-none p-6 bg-white">
        <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
          OEM / part number lookup
        </h2>
        <p className="text-text-body text-sm mb-4">
          Enter Oregon, Stihl, Husqvarna or other part number to find the corresponding BorealGrit model or series.
        </p>
        <div className="max-w-md mb-4">
          <label className="block text-sm font-medium text-text-main mb-1">Part number</label>
          <input
            type="text"
            value={oemPartNumber}
            onChange={(e) => setOemPartNumber(e.target.value)}
            placeholder="e.g. 20LPX, 33RS, H30"
            className="w-full border border-forest-brand/30 rounded-none px-3 py-2 text-sm"
          />
        </div>
        <button type="button" className="px-4 py-2 bg-forest-brand text-white font-semibold text-sm rounded-none hover:bg-forest-dark transition">
          Look up
        </button>
        <p className="text-text-body text-xs mt-3">Lookup results will appear here once database is connected. For now, use <Link href="/tools/cross-chain-reference" className="text-forest-brand hover:underline">Cross-chain reference</Link> or <Link href="/fitment-finder" className="text-forest-brand hover:underline">Fitment Finder</Link>.</p>
      </section>

      {/* 3. Product / series selector */}
      <section id="series-selector" className="scroll-mt-6 border border-forest-brand/30 rounded-none p-6 bg-white">
        <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
          Product / series selector
        </h2>
        <p className="text-text-body text-sm mb-4">
          Select by scenario: cold climate, battery saw, or professional logging — we recommend the right series.
        </p>
        <div className="max-w-md mb-4">
          <label className="block text-sm font-medium text-text-main mb-1">Application</label>
          <select
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            className="w-full border border-forest-brand/30 rounded-none px-3 py-2 text-sm"
          >
            <option value="">Select scenario</option>
            <option value="cold">Cold climate / frozen hardwood</option>
            <option value="battery">Battery saw / arborist / pruning</option>
            <option value="logging">Professional logging / high-volume</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/products/series-w" className="inline-flex items-center gap-1 px-4 py-2 border-2 border-forest-brand/30 text-forest-brand font-semibold text-sm rounded-none hover:border-forest-brand hover:bg-forest-light/30 transition">
            Series W (Cold) <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/products/series-e" className="inline-flex items-center gap-1 px-4 py-2 border-2 border-forest-brand/30 text-forest-brand font-semibold text-sm rounded-none hover:border-forest-brand hover:bg-forest-light/30 transition">
            Series E (Battery/Arborist) <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/products/series-p" className="inline-flex items-center gap-1 px-4 py-2 border-2 border-forest-brand/30 text-forest-brand font-semibold text-sm rounded-none hover:border-forest-brand hover:bg-forest-light/30 transition">
            Series P (Logging) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. Compatibility checker */}
      <section id="compatibility-checker" className="scroll-mt-6 border border-forest-brand/30 rounded-none p-6 bg-white">
        <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">
          Compatibility checker
        </h2>
        <p className="text-text-body text-sm mb-4">
          Select saw, bar, and chain model to check compatibility. For full fitment and cross-reference, use Fitment Finder.
        </p>
        <Link
          href="/fitment-finder"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest-brand text-white font-semibold text-sm rounded-none hover:bg-forest-dark transition"
        >
          Open Fitment Finder <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  )
}
