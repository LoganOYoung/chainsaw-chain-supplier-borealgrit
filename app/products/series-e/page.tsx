import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Series E: Narrow Kerf Chains for Battery-Powered Saws | ChainPro',
  description: '.043" Narrow Kerf chains for battery-powered saws. Compatible with Milwaukee, Makita, EGO, DeWalt cordless saws. Technical specifications and compatibility data.',
  keywords: 'Series E chainsaw chain, narrow kerf chain, battery chainsaw chain, cordless saw chain, .043 gauge chain, Milwaukee chainsaw chain, Makita chainsaw chain, EGO chainsaw chain, DeWalt chainsaw chain, electric chainsaw chain',
  openGraph: {
    title: 'Series E: Narrow Kerf Chains for Battery-Powered Saws',
    description: '.043" Narrow Kerf chains optimized for cordless saws. Reduces power consumption by 15-25%. ANSI compliant.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/series-e',
  },
}

export default function SeriesEPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Series E' },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-4">Series E: Narrow Kerf Chains for Battery-Powered Saws</h1>
        <p className="text-text-body mb-6 max-w-3xl">
          .043&quot; and .050&quot; gauge narrow kerf chains optimized for cordless saws. Reduces power consumption by 15-25% compared to standard chains.
        </p>

        {/* Hero Image */}
        <section className="mb-10">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/series-e-hero.jpg"
              alt="Series E narrow kerf chainsaw chain in use with battery-powered cordless saw cutting wood"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Technical Specifications</h2>
          
          {/* Product Detail Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative w-full h-48 md:h-64 rounded-none overflow-hidden bg-gray-50">
              <Image
                src="/images/series-e-detail-kerf.jpg"
                alt="Series E narrow kerf chain cross-section showing .043 inch kerf width measurement"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-none overflow-hidden bg-gray-50">
              <Image
                src="/images/series-e-detail-cutter.jpg"
                alt="Series E semi-chisel cutter close-up showing rounded-none corner design for battery saws"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-none overflow-hidden bg-gray-50">
              <Image
                src="/images/series-e-detail-chain.jpg"
                alt="Series E chain on battery-powered saw bar showing low profile design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
            </div>
          </div>

          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-48">Cutter Type</th>
                  <td className="px-4 py-2.5">Semi-chisel, Low profile</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Kerf Width</th>
                  <td className="px-4 py-2.5">.043&quot; (narrow kerf)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Pitch</th>
                  <td className="px-4 py-2.5">.325&quot;, 3/8&quot; LP, 1/4&quot; P</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                  <td className="px-4 py-2.5">.043&quot;, .050&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Material</th>
                  <td className="px-4 py-2.5">Chromium alloy steel</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Power Reduction</th>
                  <td className="px-4 py-2.5">15-25% vs standard chains</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Narrow Kerf vs Standard Kerf Comparison Infographic */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Narrow Kerf vs Standard Kerf Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none p-4 border border-forest-brand border-2">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Narrow Kerf (.043&quot;) ✓</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Kerf Width:</strong> .043&quot; (1.1mm) - 30-35% narrower</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Power Consumption:</strong> 15-25% reduction</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Battery Life:</strong> Extended runtime (20-30% longer)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Heat Generation:</strong> 20-30% less heat buildup</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Battery-powered saws (Milwaukee, Makita, EGO)</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-none p-4 border border-forest-brand/30">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Standard Kerf (.050&quot;)</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Kerf Width:</strong> .050&quot; (1.3mm) - standard width</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Power Consumption:</strong> Standard (higher than narrow kerf)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Battery Life:</strong> Standard runtime</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Heat Generation:</strong> Standard heat buildup</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Gas-powered saws, higher power saws</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Configurations */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Available Configurations</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[600px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Pitch</th>
                  <th className="text-left px-4 py-3 font-semibold">Gauge</th>
                  <th className="text-left px-4 py-3 font-semibold">Drive Links</th>
                  <th className="text-left px-4 py-3 font-semibold">Bar Length</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">.325&quot;</td>
                  <td className="px-4 py-3">.043&quot;</td>
                  <td className="px-4 py-3">52, 56, 60</td>
                  <td className="px-4 py-3">12&quot;, 14&quot;, 16&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">.325&quot;</td>
                  <td className="px-4 py-3">.050&quot;</td>
                  <td className="px-4 py-3">52, 56, 60, 64</td>
                  <td className="px-4 py-3">12&quot;, 14&quot;, 16&quot;, 18&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">3/8&quot; LP</td>
                  <td className="px-4 py-3">.043&quot;</td>
                  <td className="px-4 py-3">52, 56, 60</td>
                  <td className="px-4 py-3">12&quot;, 14&quot;, 16&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">3/8&quot; LP</td>
                  <td className="px-4 py-3">.050&quot;</td>
                  <td className="px-4 py-3">52, 56, 60, 64</td>
                  <td className="px-4 py-3">12&quot;, 14&quot;, 16&quot;, 18&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">1/4&quot; P</td>
                  <td className="px-4 py-3">.043&quot;</td>
                  <td className="px-4 py-3">40, 44, 48</td>
                  <td className="px-4 py-3">6&quot;, 8&quot;, 10&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-body italic mt-4">Custom drive link counts available. OEM packaging available.</p>
        </section>

        {/* Compatible Brands */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-3">Compatible Brands</h2>
          <p className="text-sm text-text-body mb-4">
            Series E chains are designed as compatible replacements for battery-powered and small engine chainsaws from leading North American brands.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {['Milwaukee', 'Makita', 'EGO Power+', 'DeWalt', 'Ryobi', 'Greenworks Pro', 'Stihl', 'Husqvarna'].map((brand) => (
              <div key={brand} className="bg-white border border-forest-brand/30 rounded-none p-2 text-center">
                <div className="font-semibold text-text-main text-xs">{brand}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-body italic">
            <strong className="text-text-main">Brand Disclaimer:</strong> All brand names mentioned are trademarks of their respective owners. We are not affiliated with, authorized by, or endorsed by these brands. Our products are compatible replacements designed to meet or exceed OEM specifications.
          </p>
        </section>

        {/* Compatibility */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Compatibility Details</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[600px] text-sm border border-forest-brand/30">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold">Brand</th>
                  <th className="text-left px-4 py-3 font-semibold">Model</th>
                  <th className="text-left px-4 py-3 font-semibold">Bar Length</th>
                  <th className="text-left px-4 py-3 font-semibold">Chain Spec</th>
                </tr>
              </thead>
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Milwaukee</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">M18 FUEL, M12 FUEL Hatchet</td>
                  <td className="px-4 py-3">6&quot;, 12&quot;, 14&quot;, 16&quot;</td>
                  <td className="px-4 py-3">.043&quot; / .050&quot; / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Makita</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">XCU01, XCU02, XCU03, XCU04</td>
                  <td className="px-4 py-3">12&quot;, 14&quot;, 16&quot;</td>
                  <td className="px-4 py-3">.043&quot; / .050&quot; / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">EGO Power+</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">CS1600, CS1800</td>
                  <td className="px-4 py-3">14&quot;, 16&quot;, 18&quot;</td>
                  <td className="px-4 py-3">.043&quot; / .050&quot; / 56-60 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">DeWalt</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">DCCS620, DCCS670 60V</td>
                  <td className="px-4 py-3">12&quot;, 14&quot;, 18&quot;</td>
                  <td className="px-4 py-3">.043&quot; / .050&quot; / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Ryobi</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">40V Brushless</td>
                  <td className="px-4 py-3">14&quot;</td>
                  <td className="px-4 py-3">.043&quot; / 52-56 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Greenworks Pro</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">80V</td>
                  <td className="px-4 py-3">18&quot;</td>
                  <td className="px-4 py-3">.043&quot; / 60 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Stihl</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">MSA 160 / 200, MS 170 / MS 180</td>
                  <td className="px-4 py-3">12&quot;, 14&quot;, 16&quot;</td>
                  <td className="px-4 py-3">.043&quot; / .050&quot; / 52-56 DL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/fitment-finder" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-text-main text-sm font-semibold hover:bg-gray-200 transition rounded">
              View Compatible Models
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products/applications/battery-saws" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-industrial text-text-body text-sm font-semibold hover:bg-gray-50 transition rounded">
              View Application Page
            </Link>
          </div>
          <p className="text-sm text-text-body italic mt-4">Always verify bar and chain specifications before ordering.</p>
        </section>

        {/* Compatible Industry Models */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Compatible Industry Models</h2>
          <p className="text-text-body text-sm mb-4">
            Series E chains are compatible replacements for the following Oregon, Stihl, and Husqvarna chain models:
          </p>
          
          <div className="space-y-6">
            {/* Oregon Models */}
            <div>
              <h3 className="text-sm font-semibold text-text-main mb-3">Oregon</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  90SG
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  90PX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  M91VXL
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  27P
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  25A
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  25AP
                </span>
              </div>
            </div>

            {/* Stihl Models */}
            <div>
              <h3 className="text-sm font-semibold text-text-main mb-3">Stihl</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  61PMM3
                </span>
              </div>
            </div>

            {/* Husqvarna Models */}
            <div>
              <h3 className="text-sm font-semibold text-text-main mb-3">Husqvarna</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  S93G / H38
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  46RM
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  13RMS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  HOO
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-text-body italic mt-4">
            Cross-reference data based on pitch, gauge, and drive link compatibility. Verify specifications before ordering.
          </p>
        </section>

        {/* Material & Manufacturing */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Material & Manufacturing</h2>
          
          {/* Material Composition Infographic */}
          <div className="mb-6 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
            <h3 className="text-md font-semibold text-text-main mb-4">Material Composition</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-forest-brand/20 rounded-none flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-forest-brand">65Mn</span>
                </div>
                <p className="text-sm font-semibold text-text-main">Steel Grade</p>
                <p className="text-xs text-text-body">Standard Carbon Steel</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-forest-brand/20 rounded-none flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl font-bold text-forest-brand">HRC</span>
                </div>
                <p className="text-sm font-semibold text-text-main">Hardness</p>
                <p className="text-xs text-text-body">48-52 HRC</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-forest-brand/20 rounded-none flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-forest-brand">30%</span>
                </div>
                <p className="text-sm font-semibold text-text-main">Kerf Reduction</p>
                <p className="text-xs text-text-body">vs Standard Chains</p>
              </div>
            </div>
          </div>

          {/* Performance Comparison Infographic */}
          <div className="mb-6 bg-white rounded-none p-6 border border-forest-brand/30">
            <h3 className="text-md font-semibold text-text-main mb-4">Performance Comparison</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-main">Power Consumption Reduction</span>
                  <span className="text-sm font-bold text-forest-brand">15-25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-none h-3">
                  <div className="bg-accent h-3 rounded-none" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-main">Kerf Width Reduction</span>
                  <span className="text-sm font-bold text-forest-brand">30-35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-none h-3">
                  <div className="bg-accent h-3 rounded-none" style={{ width: '32%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-main">Heat Generation Reduction</span>
                  <span className="text-sm font-bold text-forest-brand">20-30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-none h-3">
                  <div className="bg-accent h-3 rounded-none" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-48">Material</th>
                  <td className="px-4 py-2.5">65Mn Chromium alloy steel</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Kerf Reduction</th>
                  <td className="px-4 py-2.5">30-35% narrower vs standard chains</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Power Consumption</th>
                  <td className="px-4 py-2.5">15-25% reduction vs standard chains</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Heat Generation</th>
                  <td className="px-4 py-2.5">Reduced friction, lower operating temperature</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Hardness</th>
                  <td className="px-4 py-2.5">HRC 48-52</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Packaging & Ordering */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Packaging & Ordering</h2>
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-48">Packaging</th>
                  <td className="px-4 py-2.5">Individual chains, bulk boxes (10-50 units), reels (100+ feet)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">MOQ</th>
                  <td className="px-4 py-2.5">100 units per SKU</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Lead Time</th>
                  <td className="px-4 py-2.5">4-6 weeks (standard), 2-3 weeks (rush available)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">OEM/Private Label</th>
                  <td className="px-4 py-2.5">Available. Minimum 500 units per SKU.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-6 border-t border-forest-brand/30">
          <Link
            href="/request-quote?series=Series%20E"
            className="inline-flex items-center px-6 py-3 bg-safety-orange text-white font-semibold text-sm hover:bg-safety-orange/90 transition"
          >
            Request Bulk Quote for Series E
          </Link>
        </section>
      </main>
      <Footer />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Series E Narrow Kerf Chainsaw Chain",
            "description": ".043\" Narrow Kerf chains optimized for battery-powered saws. Reduces power consumption by 15-25% compared to standard chains.",
            "brand": {
              "@type": "Brand",
              "name": "ChainPro"
            },
            "category": "Chainsaw Chain",
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "price": "Varies by volume"
              }
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Distributors, Importers, OEM Partners"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://chainpro.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://chainpro.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Series E",
                "item": "https://chainpro.com/products/series-e"
              }
            ]
          })
        }}
      />
    </>
  )
}
