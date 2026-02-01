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

// Inline SVGs — no network request, always display
const SpecPitchSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 192" fill="none" stroke="#374151" strokeWidth={1.5} className="w-full h-full max-h-[20rem] object-contain" aria-label="3/8&quot; LP vs 3/8&quot; pitch comparison — drive link spacing diagram">
    <title>3/8&quot; LP vs 3/8&quot; Pitch — Drive link spacing</title>
    <rect width={320} height={192} fill="#fff" />
    <text x={160} y={22} textAnchor="middle" fontSize={14} fontWeight={600} fontFamily="system-ui,sans-serif" fill="#1f2937">Pitch comparison</text>
    <text x={80} y={44} textAnchor="middle" fontSize={13} fontWeight={600} fill="#111">3/8&quot; LP</text>
    <text x={80} y={60} textAnchor="middle" fontSize={11} fill="#374151">0.365&quot; (9.27mm)</text>
    <g transform="translate(40,70)">
      <rect x={0} y={20} width={36} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={42} y={20} width={36} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={84} y={20} width={36} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <line x1={36} y1={32} x2={42} y2={32} stroke="#547950" strokeWidth={2} />
      <line x1={78} y1={32} x2={84} y2={32} stroke="#547950" strokeWidth={2} />
      <text x={60} y={90} textAnchor="middle" fontSize={11} fontWeight={500} fill="#374151">pitch</text>
    </g>
    <text x={240} y={44} textAnchor="middle" fontSize={13} fontWeight={600} fill="#111">3/8&quot;</text>
    <text x={240} y={60} textAnchor="middle" fontSize={11} fill="#374151">0.375&quot; (9.525mm)</text>
    <g transform="translate(200,70)">
      <rect x={0} y={20} width={38} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={44} y={20} width={38} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={88} y={20} width={38} height={24} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <line x1={38} y1={32} x2={44} y2={32} stroke="#547950" strokeWidth={2} />
      <line x1={82} y1={32} x2={88} y2={32} stroke="#547950" strokeWidth={2} />
      <text x={63} y={90} textAnchor="middle" fontSize={11} fontWeight={500} fill="#374151">pitch</text>
    </g>
    <text x={160} y={175} textAnchor="middle" fontSize={11} fontWeight={500} fill="#374151">Drive link spacing — not interchangeable</text>
  </svg>
)
const SpecGaugeSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 192" fill="none" stroke="#374151" strokeWidth={1.5} className="w-full h-full max-h-[20rem] object-contain" aria-label="Drive link gauge — cross-section in bar groove">
    <title>Drive link gauge — cross-section</title>
    <rect width={320} height={192} fill="#fff" />
    <text x={160} y={22} textAnchor="middle" fontSize={14} fontWeight={600} fontFamily="system-ui,sans-serif" fill="#1f2937">Gauge (drive link thickness)</text>
    <g transform="translate(80,50)">
      <path d="M0 46 L0 96 L120 96 L120 46 L100 56 L20 56 Z" fill="#e5e7eb" stroke="#9ca3af" />
      <rect x={30} y={50} width={60} height={42} fill="#f9fafb" stroke="#547950" strokeWidth={2} />
      <text x={60} y={78} textAnchor="middle" fontSize={12} fontWeight={600} fill="#111">.050&quot;</text>
      <text x={60} y={92} textAnchor="middle" fontSize={11} fill="#374151">1.3mm</text>
      <text x={60} y={115} textAnchor="middle" fontSize={11} fontWeight={500} fill="#374151">Drive link in bar groove</text>
    </g>
    <line x1={95} y1={45} x2={95} y2={54} stroke="#374151" strokeWidth={1} />
    <line x1={95} y1={92} x2={95} y2={101} stroke="#374151" strokeWidth={1} />
    <line x1={95} y1={50} x2={95} y2={96} stroke="#374151" strokeDasharray="4 2" />
    <text x={105} y={75} fontSize={11} fontWeight={500} fill="#1f2937">gauge</text>
    <text x={160} y={175} textAnchor="middle" fontSize={11} fontWeight={500} fill="#374151">Fit into guide bar groove — tolerance ±0.001&quot;</text>
  </svg>
)
const SpecFullChiselSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 128" fill="none" stroke="#374151" strokeWidth={1.5} className="w-full h-full max-h-[20rem] object-contain" aria-label="Full-chisel cutter profile — square-corner geometry">
    <title>Full-Chisel cutter — square-corner</title>
    <rect width={280} height={128} fill="#fff" />
    <text x={140} y={18} textAnchor="middle" fontSize={13} fontWeight={600} fontFamily="system-ui,sans-serif" fill="#1f2937">Full-Chisel (square-corner)</text>
    <g transform="translate(70,28)">
      <path d="M14 72 L14 32 L66 32 L84 52 L84 72 Z" fill="#f9fafb" stroke="#374151" strokeWidth={2} />
      <path d="M66 32 L84 52" stroke="#547950" strokeWidth={2.5} strokeLinecap="square" />
    </g>
    <text x={140} y={92} textAnchor="middle" fontSize={11} fontWeight={600} fill="#1f2937">Square corner · 90°</text>
    <text x={140} y={106} textAnchor="middle" fontSize={10} fill="#374151">Max chip clearance · softwoods</text>
  </svg>
)
const SpecSemiChiselSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 128" fill="none" stroke="#374151" strokeWidth={1.5} className="w-full h-full max-h-[20rem] object-contain" aria-label="Semi-chisel cutter profile — rounded-corner geometry">
    <title>Semi-Chisel cutter — rounded-corner</title>
    <rect width={280} height={128} fill="#fff" />
    <text x={140} y={18} textAnchor="middle" fontSize={13} fontWeight={600} fontFamily="system-ui,sans-serif" fill="#1f2937">Semi-Chisel (rounded-corner)</text>
    <g transform="translate(70,28)">
      <path d="M14 72 L14 32 L62 32 Q88 42 86 58 L86 72 Z" fill="#f9fafb" stroke="#374151" strokeWidth={2} />
      <path d="M62 32 Q82 38 86 58" stroke="#547950" strokeWidth={2.5} fill="none" />
    </g>
    <text x={140} y={92} textAnchor="middle" fontSize={11} fontWeight={600} fill="#1f2937">Rounded corner</text>
    <text x={140} y={106} textAnchor="middle" fontSize={10} fill="#374151">Better edge retention · hardwoods</text>
  </svg>
)
const SpecDriveLinkSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 192" fill="none" stroke="#374151" strokeWidth={1.5} className="w-full h-full max-h-[20rem] object-contain" aria-label="Drive link: Standard vs Anti-Kickback">
    <title>Drive Link — Standard vs Anti-Kickback</title>
    <rect width={320} height={192} fill="#fff" />
    <text x={160} y={22} textAnchor="middle" fontSize={14} fontWeight={600} fontFamily="system-ui,sans-serif" fill="#1f2937">Drive Link: Standard vs Anti-Kickback</text>
    <text x={80} y={48} textAnchor="middle" fontSize={12} fontWeight={600} fill="#111">Standard</text>
    <g transform="translate(30,58)">
      <rect x={0} y={0} width={100} height={28} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={8} y={6} width={20} height={16} rx={1} fill="#e5e7eb" stroke="#6b7280" />
      <rect x={36} y={6} width={28} height={16} rx={1} fill="#e5e7eb" stroke="#6b7280" />
      <rect x={72} y={6} width={20} height={16} rx={1} fill="#e5e7eb" stroke="#6b7280" />
    </g>
    <text x={80} y={108} textAnchor="middle" fontSize={10} fill="#374151">Full-depth cutters</text>
    <text x={80} y={122} textAnchor="middle" fontSize={10} fill="#374151">Max cutting speed</text>
    <text x={240} y={48} textAnchor="middle" fontSize={12} fontWeight={600} fill="#111">Anti-Kickback</text>
    <g transform="translate(190,58)">
      <rect x={0} y={0} width={100} height={28} rx={2} fill="#f3f4f6" stroke="#9ca3af" />
      <rect x={6} y={6} width={18} height={16} rx={1} fill="#e5e7eb" stroke="#6b7280" />
      <rect x={28} y={4} width={12} height={8} rx={1} fill="#547950" fillOpacity={0.4} stroke="#547950" />
      <rect x={44} y={6} width={24} height={16} rx={1} fill="#e5e7eb" stroke="#6b7280" />
      <rect x={72} y={4} width={12} height={8} rx={1} fill="#547950" fillOpacity={0.4} stroke="#547950" />
      <rect x={88} y={6} width={18} height={16} rx={1} fill="#e5e7eb" stroke="#6b7280" />
    </g>
    <text x={240} y={108} textAnchor="middle" fontSize={10} fill="#374151">Bumper / depth limiters</text>
    <text x={240} y={122} textAnchor="middle" fontSize={10} fill="#374151">Low-kickback (consumer)</text>
    <text x={160} y={168} textAnchor="middle" fontSize={10} fill="#6b7280">Match chain type to saw and application</text>
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
          href="/fitment-finder"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Fitment Finder
        </Link>

        <section className="bg-white border border-forest-brand/30 rounded-none p-4 sm:p-6">
          <h1 className="text-lg sm:text-xl font-bold text-text-main mb-2">Industry Technical Specifications & Standards</h1>
          <p className="text-sm text-text-body mb-6 italic">Technical Reference for Professional Buyers</p>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Pitch */}
            <div className="border-b border-forest-brand/30 pb-4 sm:pb-6">
              <h2 className="text-base sm:text-lg font-semibold text-text-main mb-4">Pitch</h2>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative w-full min-h-[18rem] sm:min-h-[20rem] mb-4 bg-white rounded-none overflow-hidden flex items-center justify-center p-1">
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
              <h2 className="text-base sm:text-lg font-semibold text-text-main mb-4">Gauge</h2>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative w-full min-h-[18rem] sm:min-h-[20rem] mb-4 bg-white rounded-none overflow-hidden flex items-center justify-center p-1">
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

            {/* Drive Link */}
            <div className="border-b border-forest-brand/30 pb-4 sm:pb-6">
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
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-text-main mb-4">Cutter Geometry</h2>
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
              <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-4">
                <p className="text-xs text-text-body">
                  <strong className="text-text-main">Regional Application Guide:</strong> Eastern North America (hardwood-dominant) benefits from Semi-Chisel for durability in dense timber. Western North America (softwood-dominant) can maximize productivity with Full-Chisel for faster cutting speeds.
                </p>
              </div>
            </div>
          </div>
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
