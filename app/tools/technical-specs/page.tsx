import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industry Technical Specifications & Standards | BorealGrit™',
  description: 'Technical reference for pitch, gauge, drive link type (Standard vs Anti-Kickback), and cutter geometry. Professional buyers and spec identification.',
  keywords: 'chainsaw chain pitch, chain gauge, drive link anti-kickback, full chisel semi chisel, chain specifications, ANSI standards',
  openGraph: {
    title: 'Industry Technical Specifications & Standards | BorealGrit™',
    description: 'Technical reference for pitch, gauge, drive link type, and cutter geometry.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/technical-specs',
  },
}

// Inline SVGs — technical reference style (Oregon/OEM manual)
const SpecPitchSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 200" fill="none" stroke="#374151" strokeWidth={1.2} className="w-full h-full max-h-[20rem] object-contain" aria-label="Pitch — distance between three consecutive rivets divided by two">
    <title>Pitch: 3 consecutive rivets ÷ 2</title>
    <rect width={340} height={200} fill="#fafafa" />
    <text x={170} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">Pitch = (R1–R3) ÷ 2</text>
    <text x={85} y={38} textAnchor="middle" fontSize={12} fontWeight={600} fill="#111">3/8&quot; LP</text>
    <text x={85} y={52} textAnchor="middle" fontSize={10} fill="#4b5563">0.365&quot; (9.27 mm)</text>
    <g transform="translate(20,58)">
      {/* Drive links + rivets — 3/8 LP */}
      <path d="M0 28 L0 8 L28 8 L32 18 L32 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
      <path d="M34 28 L34 8 L62 8 L66 18 L66 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
      <path d="M68 28 L68 8 L96 8 L100 18 L100 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
      <circle cx={16} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
      <circle cx={50} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
      <circle cx={84} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
      <text x={16} y={55} textAnchor="middle" fontSize={9} fill="#374151">R1</text>
      <text x={50} y={55} textAnchor="middle" fontSize={9} fill="#374151">R2</text>
      <text x={84} y={55} textAnchor="middle" fontSize={9} fill="#374151">R3</text>
      <line x1={16} y1={44} x2={84} y2={44} stroke="#059669" strokeWidth={1.5} strokeDasharray="3 2" />
      <polygon points="84,44 80,41 80,47" fill="#059669" />
      <text x={50} y={38} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">2 × pitch</text>
    </g>
    <text x={255} y={38} textAnchor="middle" fontSize={12} fontWeight={600} fill="#111">3/8&quot;</text>
    <text x={255} y={52} textAnchor="middle" fontSize={10} fill="#4b5563">0.375&quot; (9.525 mm)</text>
    <g transform="translate(190,58)">
      <path d="M0 28 L0 8 L30 8 L34 18 L34 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
      <path d="M36 28 L36 8 L66 8 L70 18 L70 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
      <path d="M72 28 L72 8 L102 8 L106 18 L106 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
      <circle cx={17} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
      <circle cx={53} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
      <circle cx={89} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
      <line x1={17} y1={44} x2={89} y2={44} stroke="#059669" strokeWidth={1.5} strokeDasharray="3 2" />
      <polygon points="89,44 85,41 85,47" fill="#059669" />
      <text x={53} y={38} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">2 × pitch</text>
    </g>
    <text x={170} y={188} textAnchor="middle" fontSize={10} fill="#6b7280">Rivets R1–R3 · Chain and bar pitch must match</text>
  </svg>
)
const SpecGaugeSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 200" fill="none" stroke="#374151" strokeWidth={1.2} className="w-full h-full max-h-[20rem] object-contain" aria-label="Gauge — drive link tang thickness in bar groove">
    <title>Gauge: Drive link thickness in bar groove</title>
    <rect width={340} height={200} fill="#fafafa" />
    <text x={170} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">Gauge (drive link tang thickness)</text>
    <g transform="translate(85,36)">
      {/* Bar cross-section: groove = channel, drive link fits in */}
      <path d="M0 20 L0 100 L25 100 L25 55 L115 55 L115 100 L140 100 L140 20 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.5} />
      <text x={70} y={12} textAnchor="middle" fontSize={9} fill="#4b5563">Bar groove</text>
      {/* Drive link tang in groove */}
      <rect x={52} y={60} width={46} height={32} fill="#e8eaed" stroke="#374151" strokeWidth={2} rx={1} />
      <text x={75} y={78} textAnchor="middle" fontSize={11} fontWeight={700} fill="#111">.050&quot;</text>
      <text x={75} y={90} textAnchor="middle" fontSize={9} fill="#4b5563">1.3 mm</text>
      {/* Gauge dimension */}
      <line x1={52} y1={48} x2={52} y2={60} stroke="#059669" strokeWidth={1} />
      <line x1={98} y1={48} x2={98} y2={60} stroke="#059669" strokeWidth={1} />
      <line x1={52} y1={52} x2={98} y2={52} stroke="#059669" strokeWidth={1.5} strokeDasharray="3 2" />
      <polygon points="98,52 95,49 95,55" fill="#059669" />
      <text x={75} y={44} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">gauge</text>
    </g>
    <text x={170} y={188} textAnchor="middle" fontSize={10} fill="#6b7280">Tolerance ±0.001&quot; · Mismatch causes derailment</text>
  </svg>
)
const SpecFullChiselSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" fill="none" stroke="#374151" strokeWidth={1.2} className="w-full h-full max-h-[20rem] object-contain" aria-label="Full-chisel cutter profile — top plate, depth gauge, square corner">
    <title>Full-Chisel: Square-corner cutter profile</title>
    <rect width={300} height={150} fill="#fafafa" />
    <text x={150} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">Full-Chisel (Chisel / Square-Corner)</text>
    <g transform="translate(50,30)">
      {/* Cutter profile: top plate (horizontal), side plate, cutting corner 90°, depth gauge, gullet */}
      <path d="M8 90 L8 42 L70 42 L88 58 L88 90 L75 90 L75 70 L20 70 L20 90 Z" fill="#e8eaed" stroke="#4b5563" strokeWidth={1.5} />
      <path d="M70 42 L88 58" stroke="#059669" strokeWidth={2.5} strokeLinecap="square" />
      <circle cx={70} cy={50} r={3} fill="none" stroke="#059669" strokeWidth={1} />
      <text x={79} y={48} fontSize={9} fontWeight={600} fill="#059669">90°</text>
      <text x={48} y={38} fontSize={9} fill="#4b5563">Top plate</text>
      <text x={10} y={80} fontSize={9} fill="#4b5563">Side plate</text>
      <text x={45} y={95} fontSize={9} fill="#4b5563">Gullet</text>
      <text x={82} y={82} fontSize={9} fill="#4b5563">Depth gauge</text>
    </g>
    <text x={150} y={138} textAnchor="middle" fontSize={10} fill="#6b7280">Square cutting corner · Max chip clearance · Softwoods</text>
  </svg>
)
const SpecSemiChiselSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" fill="none" stroke="#374151" strokeWidth={1.2} className="w-full h-full max-h-[20rem] object-contain" aria-label="Semi-chisel cutter profile — rounded cutting corner">
    <title>Semi-Chisel: Rounded-corner cutter profile</title>
    <rect width={300} height={150} fill="#fafafa" />
    <text x={150} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">Semi-Chisel (Rounded-Corner)</text>
    <g transform="translate(50,30)">
      <path d="M8 90 L8 42 L58 42 Q90 48 88 62 L88 90 L75 90 L75 70 L20 70 L20 90 Z" fill="#e8eaed" stroke="#4b5563" strokeWidth={1.5} />
      <path d="M58 42 Q78 44 88 62" stroke="#059669" strokeWidth={2.5} fill="none" />
      <text x={73} y={50} fontSize={9} fontWeight={600} fill="#059669">Rounded</text>
      <text x={48} y={38} fontSize={9} fill="#4b5563">Top plate</text>
      <text x={10} y={80} fontSize={9} fill="#4b5563">Side plate</text>
      <text x={45} y={95} fontSize={9} fill="#4b5563">Gullet</text>
      <text x={82} y={82} fontSize={9} fill="#4b5563">Depth gauge</text>
    </g>
    <text x={150} y={138} textAnchor="middle" fontSize={10} fill="#6b7280">Rounded cutting corner · Edge retention · Hardwoods, dirty wood</text>
  </svg>
)
const SpecDriveLinkSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 210" fill="none" stroke="#374151" strokeWidth={1.2} className="w-full h-full max-h-[20rem] object-contain" aria-label="Drive link type: Standard vs Anti-Kickback (bumper links)">
    <title>Drive Link: Standard vs Anti-Kickback</title>
    <rect width={340} height={210} fill="#fafafa" />
    <text x={170} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">Drive Link Type: Standard vs Anti-Kickback</text>
    <text x={85} y={40} textAnchor="middle" fontSize={11} fontWeight={600} fill="#111">Standard (full-depth)</text>
    <g transform="translate(15,50)">
      {/* Standard: Cutter–Tie–Cutter–Tie–Cutter — side view, no bumpers */}
      <path d="M0 32 L0 8 L22 8 L26 20 L26 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
      <path d="M28 32 L28 12 L38 12 L38 32 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth={1} />
      <path d="M40 32 L40 8 L62 8 L66 20 L66 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
      <path d="M68 32 L68 12 L78 12 L78 32 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth={1} />
      <path d="M80 32 L80 8 L102 8 L106 20 L106 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
      <text x={53} y={52} textAnchor="middle" fontSize={8} fill="#6b7280">Cutter</text>
      <text x={33} y={52} textAnchor="middle" fontSize={8} fill="#6b7280">Tie</text>
    </g>
    <text x={85} y={95} textAnchor="middle" fontSize={9} fill="#4b5563">No depth limiters · Max cutting speed</text>
    <text x={255} y={40} textAnchor="middle" fontSize={11} fontWeight={600} fill="#111">Anti-Kickback (low-kickback)</text>
    <g transform="translate(185,50)">
      {/* Anti-kickback: Cutter–Bumper–Cutter–Bumper — bumper has raised hump */}
      <path d="M0 32 L0 8 L20 8 L24 20 L24 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
      <path d="M26 32 L26 16 L30 12 L34 16 L34 32 Z" fill="#059669" fillOpacity={0.4} stroke="#047857" strokeWidth={1.5} />
      <path d="M36 32 L36 8 L56 8 L60 20 L60 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
      <path d="M62 32 L62 16 L66 12 L70 16 L70 32 Z" fill="#059669" fillOpacity={0.4} stroke="#047857" strokeWidth={1.5} />
      <path d="M72 32 L72 8 L92 8 L96 20 L96 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
      <text x={48} y={52} textAnchor="middle" fontSize={8} fill="#6b7280">Cutter</text>
      <text x={30} y={52} textAnchor="middle" fontSize={8} fill="#047857">Bumper</text>
    </g>
    <text x={255} y={95} textAnchor="middle" fontSize={9} fill="#4b5563">Bumper links limit cutter depth · ANSI B175.1</text>
    <text x={170} y={200} textAnchor="middle" fontSize={10} fill="#6b7280">Match chain type to saw OEM specification</text>
  </svg>
)
export default function TechnicalSpecsPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Technical Specifications' },
          ]}
        />
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>

        <section className="bg-white border border-forest-brand/30 rounded-none p-4 sm:p-6">
          <h1 className="text-lg sm:text-xl font-bold text-text-main mb-2">Industry Technical Specifications & Standards</h1>
          <p className="text-sm text-text-body mb-4 italic">Technical Reference for Professional Buyers</p>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Pitch */}
            <div id="pitch" className="scroll-mt-6 border-b border-forest-brand/30 pb-4 sm:pb-6">
              <h2 className="text-base sm:text-lg font-semibold text-text-main mb-4">Pitch</h2>
              <p className="text-sm text-text-body mb-4 leading-relaxed">
                Pitch is the <strong className="text-text-main">distance between any three consecutive drive link rivets divided by two</strong> (i.e., center-to-center spacing of drive links). Chain and bar pitch must match exactly.
              </p>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative w-full min-h-[18rem] sm:min-h-[20rem] mb-4 bg-white rounded-none overflow-hidden flex items-center justify-center p-1">
                    <SpecPitchSvg />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-text-body mb-3 leading-relaxed">
                    <strong className="text-text-main">3/8&quot; LP (Low Profile)</strong> and <strong className="text-text-main">3/8&quot;</strong> are mechanically distinct:
                  </p>
                  <ul className="text-sm text-text-body space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span><strong>3/8&quot; LP:</strong> 0.365&quot; (9.27mm). Low-kickback consumer saws. Reduced cutter depth.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span><strong>3/8&quot;:</strong> 0.375&quot; (9.525mm). Mid-to-large professional saws. Higher chip clearance.</span>
                    </li>
                  </ul>
                  <p className="text-xs text-text-body italic mb-4">
                    <strong>Critical:</strong> LP and standard 3/8&quot; are NOT interchangeable.
                  </p>
                  <p className="text-xs font-medium text-text-main mb-2">Common pitch summary</p>
                  <div className="fitment-table-wrap table-responsive -mx-4 sm:mx-0 overflow-visible sm:overflow-x-auto">
                    <table className="fitment-gauge-table w-full min-w-[280px]">
                      <thead>
                        <tr>
                          <th>Pitch</th>
                          <th>Spacing (approx.)</th>
                          <th>Typical use</th>
                        </tr>
                      </thead>
                      <tbody className="text-industrial">
                        <tr>
                          <td className="font-medium" data-label="Pitch">1/4&quot; P</td>
                          <td data-label="Spacing">0.250&quot; (6.35mm)</td>
                          <td className="text-text-body" data-label="Use">Mini / pole saws</td>
                        </tr>
                        <tr>
                          <td className="font-medium" data-label="Pitch">.325&quot;</td>
                          <td data-label="Spacing">0.325&quot; (8.26mm)</td>
                          <td className="text-text-body" data-label="Use">Mid-size pro / prosumer</td>
                        </tr>
                        <tr>
                          <td className="font-medium" data-label="Pitch">3/8&quot; LP</td>
                          <td data-label="Spacing">0.365&quot; (9.27mm)</td>
                          <td className="text-text-body" data-label="Use">Consumer, low-kickback</td>
                        </tr>
                        <tr>
                          <td className="font-medium" data-label="Pitch">3/8&quot;</td>
                          <td data-label="Spacing">0.375&quot; (9.525mm)</td>
                          <td className="text-text-body" data-label="Use">Professional, large saws</td>
                        </tr>
                        <tr>
                          <td className="font-medium" data-label="Pitch">.404&quot;</td>
                          <td data-label="Spacing">0.404&quot; (10.26mm)</td>
                          <td className="text-text-body" data-label="Use">Harvester / heavy-duty</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-text-body italic mt-2">
                    Chains of different pitch cannot be used on the same bar.
                  </p>
                </div>
              </div>
            </div>

            {/* Gauge */}
            <div id="gauge" className="scroll-mt-6 border-b border-forest-brand/30 pb-4 sm:pb-6">
              <h2 className="text-base sm:text-lg font-semibold text-text-main mb-4">Gauge</h2>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative w-full min-h-[18rem] sm:min-h-[20rem] mb-4 bg-white rounded-none overflow-hidden flex items-center justify-center p-1">
                    <SpecGaugeSvg />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-text-body mb-4 leading-relaxed">
                    Gauge is the <strong className="text-text-main">drive link thickness</strong> that fits into the guide bar groove. Measure with a caliper or chain gauge tool. Precision fit is critical for safe operation; mismatch causes derailment and bar wear.
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

            {/* Drive Link */}
            <div id="drive-link" className="scroll-mt-6 border-b border-forest-brand/30 pb-4 sm:pb-6">
              <h2 className="text-base sm:text-lg font-semibold text-text-main mb-4">Drive Link (Standard vs. Anti-Kickback)</h2>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative w-full min-h-[18rem] sm:min-h-[20rem] mb-4 bg-white rounded-none overflow-hidden flex items-center justify-center p-1">
                    <SpecDriveLinkSvg />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-text-body mb-4 leading-relaxed">
                    Drive link type affects <strong className="text-text-main">kickback behavior</strong> and where the chain can be used. Match the chain to your saw and application.
                  </p>
                  <ul className="text-sm text-text-body space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span><strong className="text-text-main">Standard:</strong> Full-depth cutters, maximum cutting speed. Typical for professional saws and experienced users.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-brand mt-1">•</span>
                      <span><strong className="text-text-main">Anti-Kickback (low-kickback):</strong> Bumper links or depth limiters between cutters reduce kickback. Often required for consumer saws (ANSI B175.1). Lower cutting speed, higher safety.</span>
                    </li>
                  </ul>
                  <p className="text-xs text-text-body italic">
                    <strong>Note:</strong> Use only chains specified for your saw. Mixing standard and anti-kickback on the wrong bar can affect safety and performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Cutter Geometry */}
            <div id="cutter-geometry" className="scroll-mt-6">
              <h2 className="text-base sm:text-lg font-semibold text-text-main mb-4">Cutter Geometry</h2>
              <p className="text-sm text-text-body mb-4 leading-relaxed">
                Full-chisel and semi-chisel are the two main cutter profiles in common use. Chipper and other specialty profiles exist for specific applications; the guide below covers the majority of chains.
              </p>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4">
                <div>
                  <div className="relative w-full min-h-[18rem] sm:min-h-[20rem] mb-4 bg-white rounded-none overflow-hidden flex items-center justify-center p-1">
                    <SpecFullChiselSvg />
                  </div>
                  <h3 className="text-sm font-semibold text-text-main mb-2">Full-Chisel (Square-Corner)</h3>
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
                  <div className="relative w-full min-h-[18rem] sm:min-h-[20rem] mb-4 bg-white rounded-none overflow-hidden flex items-center justify-center p-1">
                    <SpecSemiChiselSvg />
                  </div>
                  <h3 className="text-sm font-semibold text-text-main mb-2">Semi-Chisel (Rounded-Corner)</h3>
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
              <p className="text-sm text-text-body">
                See <Link href="/for-buyers/regional-guide" className="text-forest-brand hover:underline">Regional Application Guide</Link> for Series W, P, E recommendations by North American region.
              </p>
            </div>

          </div>

          <p className="mt-8 pt-6 border-t border-forest-brand/20 text-xs text-text-body">
            This reference aligns with <strong className="text-text-main">ANSI B175.1</strong> and common industry chain specifications. Definitions and tolerances are as of current standards; verify with OEM or latest standards when specifying. For fitment by saw/bar, use <Link href="/fitment-finder" className="text-forest-brand hover:underline">Fitment Finder</Link>.
          </p>
        </section>

        <Link
          href="/fitment-finder"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mt-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Fitment Finder
        </Link>
      </main>
      <Footer />
    </>
  )
}
