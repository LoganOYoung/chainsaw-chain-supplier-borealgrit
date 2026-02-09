import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight, ArrowLeft, TreeDeciduous, Snowflake, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Regional Application Guide: Precision for North American Forests | BorealGrit™',
  description: 'Chainsaw chain selection by region: Pacific Northwest & BC, Boreal Belt, Urban Forestry & Eastern Districts. Series P, W, E recommendations for local conditions.',
  keywords: 'chainsaw chain BC logging, chainsaw chain frozen hardwood Alberta, chainsaw chain Pacific Northwest, best chain Douglas Fir, Series W cold climate, Series P heavy timber, Series E arborist',
  openGraph: {
    title: 'Regional Application Guide: Precision for North American Forests | BorealGrit™',
    description: 'Local expert chain recommendations for Pacific Northwest, Boreal Belt, and Urban Forestry. Series P, W, E by region.',
    type: 'website',
    url: 'https://borealgrit.com/for-buyers/regional-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regional Application Guide: Precision for North American Forests | BorealGrit™',
    description: 'Local expert chain recommendations for Pacific Northwest, Boreal Belt, and Urban Forestry. Series P, W, E by region.',
  },
  alternates: {
    canonical: '/for-buyers/regional-guide',
  },
}

const regions = [
  {
    id: 'pnw',
    title: 'Pacific Northwest & BC',
    subtitle: 'The Heavy Timber Zone',
    icon: TreeDeciduous,
    bgClass: 'bg-gradient-to-br from-green-50 to-emerald-50/80',
    borderClass: 'border-emerald-200/60',
    challenges: [
      'Giant softwoods (Douglas Fir, Red Cedar, Sitka Spruce)',
      'Wet, slippery conditions; high moisture content',
      'Continuous high-output logging operations',
    ],
    series: 'Series P (Industrial)',
    seriesHref: '/products/series-p',
    expertTip: 'High chip clearance and stay-sharp performance reduce machine load and downtime in moisture-heavy softwoods. Full-chisel design maximizes cuts per hour in massive timber.',
  },
  {
    id: 'boreal',
    title: 'The Boreal Belt',
    subtitle: 'The Frozen Frontier',
    icon: Snowflake,
    bgClass: 'bg-gradient-to-br from-sky-50 to-blue-50/80',
    borderClass: 'border-sky-200/60',
    challenges: [
      'Sub-zero temperatures (-30°C and below)',
      'Frozen hardwood; brittle, high-impact cutting',
      'Steel fatigue and chain breakage risk',
    ],
    series: 'Series W (Arctic Shield)',
    seriesHref: '/products/series-w',
    expertTip: 'Use Series W when temperatures drop below -15°C. 68CrNiMo alloy and specialized heat treatment maintain impact toughness to -40°C, preventing chain fatigue and tooth fracture.',
  },
  {
    id: 'urban',
    title: 'Urban Forestry & Eastern Districts',
    subtitle: 'The Precision & Utility Zone',
    icon: Leaf,
    bgClass: 'bg-gradient-to-br from-amber-50/80 to-green-50/60',
    borderClass: 'border-amber-200/60',
    challenges: [
      'Arborist work; mixed species, frequent pruning',
      'High battery saw usage; lithium-powered cordless',
      'Low vibration and smooth cutting requirements',
    ],
    series: 'Series E (Efficiency)',
    seriesHref: '/products/series-e',
    expertTip: 'Narrow kerf design reduces power draw by 15–25%, extending battery runtime. Low-vibration cutter profile reduces operator fatigue for all-day precision work.',
  },
]

export default function RegionalGuidePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14" aria-label="Regional Application Guide">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'For Buyers' },
            { label: 'Regional Application Guide' },
          ]}
        />
        <Link
          href="/for-buyers/distributors"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Distributors & Forestry
        </Link>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-main mb-2">
            Regional Application Guide: Precision for North American Forests
          </h1>
          <p className="text-sm sm:text-base text-text-body max-w-3xl leading-relaxed">
            North American forestry managers care most about whether the chain can handle <em>their</em> species and climate—not lab benchmarks. This guide maps your region to the right BorealGrit series: <strong className="text-text-main">W</strong>, <strong className="text-text-main">P</strong>, or <strong className="text-text-main">E</strong>.
          </p>
        </header>

        {/* Three zone cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {regions.map((r) => {
            const Icon = r.icon
            return (
              <article
                key={r.id}
                className={`relative rounded-none border-2 ${r.borderClass} ${r.bgClass} p-5 sm:p-6 flex flex-col min-h-[420px]`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-none bg-white/80 border border-forest-brand/20 text-forest-brand">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-text-main">{r.title}</h2>
                    <p className="text-xs sm:text-sm text-forest-brand font-medium italic">{r.subtitle}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-text-main mb-2">Key challenges</h3>
                  <ul className="space-y-1.5 text-sm text-text-body">
                    {r.challenges.map((c, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-forest-brand mt-0.5">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-text-main mb-1">Recommended series</h3>
                  <p className="text-base font-bold text-forest-brand">{r.series}</p>
                </div>

                <div className="mb-6 flex-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-text-main mb-2">Expert tip</h3>
                  <p className="text-sm text-text-body leading-relaxed italic">&ldquo;{r.expertTip}&rdquo;</p>
                </div>

                <Link
                  href={r.seriesHref}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 bg-forest-brand text-white font-semibold text-sm rounded-none hover:bg-forest-dark transition"
                >
                  View specs for this region <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            )
          })}
        </div>

        {/* Cross-links */}
        <section className="mb-6 flex flex-wrap gap-4">
          <Link
            href="/for-buyers/chain-selection-matrix"
            className="inline-flex items-center gap-2 text-sm text-forest-brand hover:underline font-medium"
          >
            Select by species, equipment & task <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Fitment Finder CTA */}
        <section className="bg-white border-2 border-forest-brand/30 rounded-none p-5 sm:p-6">
          <p className="text-sm text-text-body mb-4">
            <strong className="text-text-main">Still unsure?</strong> Use our <Link href="/fitment-finder" className="text-forest-brand hover:underline">Fitment Finder</Link> to match your specific saw and bar model to the right BorealGrit chain.
          </p>
          <Link
            href="/fitment-finder"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-brand text-white font-semibold text-sm rounded-none hover:bg-forest-dark transition"
          >
            Open Fitment Finder <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <Link
          href="/for-buyers/distributors"
          className="inline-flex items-center gap-1.5 text-sm text-forest-brand hover:underline mt-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Distributors & Forestry
        </Link>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Regional Application Guide: Precision for North American Forests | BorealGrit',
            description: 'Chainsaw chain selection by region: Pacific Northwest & BC, Boreal Belt, Urban Forestry. Series P, W, E recommendations.',
            url: 'https://borealgrit.com/for-buyers/regional-guide',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://borealgrit.com' },
              { '@type': 'ListItem', position: 2, name: 'Regional Application Guide' },
            ],
          }),
        }}
      />
    </>
  )
}
