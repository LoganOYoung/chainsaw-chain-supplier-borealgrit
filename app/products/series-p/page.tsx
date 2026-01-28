import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Series P: Professional High-Speed Logging Chains | Borealgrit',
  description: 'Full-chisel chainsaw chains with industrial chrome coating. 3/8" and .404" pitch for professional logging. Compatible with Stihl MS 362/661, Husqvarna 460/572.',
  keywords: 'Series P chainsaw chain, professional logging chain, full chisel chain, chrome coated chain, Stihl MS 362 chain, Stihl MS 661 chain, Husqvarna 460 chain, Husqvarna 572 chain, .404 pitch chain, professional chainsaw chain',
  openGraph: {
    title: 'Series P: Professional High-Speed Logging Chains',
    description: 'Full-chisel design with industrial chrome coating. Maximum chip clearance speed for professional loggers.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/series-p',
  },
}

export default function SeriesPPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Series P' },
          ]}
        />

        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-4">Series P: Professional High-Speed Logging Chains</h1>
        <p className="text-text-body mb-6 max-w-3xl">
          Full-chisel square-corner cutters with industrial chrome coating. Designed for high-power professional saws (60cc+). Extended sharpening intervals.
        </p>

        {/* Hero Image */}
        <section className="mb-10">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-none overflow-hidden bg-gray-100">
            <Image
              src="/images/series-p-hero.jpg"
              alt="Series P professional chainsaw chain in high-speed logging operation with professional forester"
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
                src="/images/series-p-detail-cutter.jpg"
                alt="Series P full-chisel square-corner cutter close-up showing razor-sharp cutting edge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-none overflow-hidden bg-gray-50">
              <Image
                src="/images/series-p-detail-chrome.jpg"
                alt="Series P industrial chrome coating detail showing hardened surface layer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              />
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-none overflow-hidden bg-gray-50">
              <Image
                src="/images/series-p-detail-edge.jpg"
                alt="Series P cutter edge showing extended sharpening interval and wear resistance"
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
                  <td className="px-4 py-2.5">Full chisel (square corner)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Coating</th>
                  <td className="px-4 py-2.5">Industrial chrome plating (0.05-0.08mm)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Material</th>
                  <td className="px-4 py-2.5">Chromium alloy steel</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Pitch</th>
                  <td className="px-4 py-2.5">3/8&quot;, .404&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Gauge</th>
                  <td className="px-4 py-2.5">.050&quot;, .058&quot;, .063&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Surface Hardness</th>
                  <td className="px-4 py-2.5">HRC 62-65 (chrome layer)</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Vibration</th>
                  <td className="px-4 py-2.5">ISO 22868 compliant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Chrome-Coated vs Uncoated Chain Comparison Infographic */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Chrome-Coated vs Uncoated Chain Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none p-4 border border-forest-brand border-2">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Series P (Chrome-Coated) ✓</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Surface Hardness:</strong> HRC 62-65 (chrome layer)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Coating Thickness:</strong> 0.05-0.08mm industrial chrome plating</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Sharpening Interval:</strong> Extended by 30-40% vs uncoated</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Wear Resistance:</strong> Superior abrasion resistance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> Professional logging, high-volume cutting</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutter Type:</strong> Full-chisel (square corner) for maximum speed</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Vibration:</strong> ISO 22868 compliant (low vibration)</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-none p-4 border border-forest-brand/30">
              <h3 className="font-semibold text-text-main mb-3 text-sm">Uncoated Chain</h3>
              <div className="space-y-2 text-sm text-industrial">
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Surface Hardness:</strong> HRC 58-62 (base material)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Coating Thickness:</strong> No coating (bare steel)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Sharpening Interval:</strong> Standard frequency</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Wear Resistance:</strong> Standard (lower than chrome-coated)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Application:</strong> General-purpose cutting, occasional use</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Cutter Type:</strong> Full-chisel or semi-chisel (standard)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-forest-brand mt-1">•</span>
                  <span><strong>Vibration:</strong> Standard (may be higher than coated)</span>
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
                  <td className="px-4 py-3 font-medium">3/8&quot;</td>
                  <td className="px-4 py-3">.050&quot;</td>
                  <td className="px-4 py-3">72, 84, 96</td>
                  <td className="px-4 py-3">18&quot;, 20&quot;, 24&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">3/8&quot;</td>
                  <td className="px-4 py-3">.058&quot;</td>
                  <td className="px-4 py-3">72, 84, 96</td>
                  <td className="px-4 py-3">18&quot;, 20&quot;, 24&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">3/8&quot;</td>
                  <td className="px-4 py-3">.063&quot;</td>
                  <td className="px-4 py-3">72, 84, 96</td>
                  <td className="px-4 py-3">18&quot;, 20&quot;, 24&quot;</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3 font-medium">.404&quot;</td>
                  <td className="px-4 py-3">.063&quot;</td>
                  <td className="px-4 py-3">84, 96, 105</td>
                  <td className="px-4 py-3">24&quot;, 28&quot;, 32&quot;</td>
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
            Series P chains are designed as compatible replacements for professional logging chainsaws from leading North American brands.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {['Stihl', 'Husqvarna', 'Echo', 'Oregon'].map((brand) => (
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
                      <span className="font-semibold text-text-main">Stihl</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">MS 261, MS 362</td>
                  <td className="px-4 py-3">20&quot;</td>
                  <td className="px-4 py-3">3/8&quot; / .063&quot; / 72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Stihl</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">MS 462</td>
                  <td className="px-4 py-3">20&quot;, 24&quot;</td>
                  <td className="px-4 py-3">3/8&quot; / .063&quot; / 72-84 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Stihl</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">MS 661</td>
                  <td className="px-4 py-3">24&quot;, 28&quot;, 32&quot;</td>
                  <td className="px-4 py-3">.404&quot; / .063&quot; / 84-105 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Husqvarna</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">460, 572</td>
                  <td className="px-4 py-3">20&quot;, 24&quot;</td>
                  <td className="px-4 py-3">3/8&quot; / .050&quot; / .058&quot; / 72-84 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Husqvarna</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">455 Rancher</td>
                  <td className="px-4 py-3">20&quot;</td>
                  <td className="px-4 py-3">3/8&quot; / .050&quot; / 72 DL</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-main">Echo</span>
                      <span className="text-xs text-text-body bg-gray-100 px-2 py-0.5 rounded">Compatible</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">CS-590 Timber Wolf</td>
                  <td className="px-4 py-3">20&quot;</td>
                  <td className="px-4 py-3">3/8&quot; / .050&quot; / 72 DL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/fitment-finder" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-text-main text-sm font-semibold hover:bg-gray-200 transition rounded">
              View Compatible Models
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products/applications/professional-loggers" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-industrial text-text-body text-sm font-semibold hover:bg-gray-50 transition rounded">
              View Application Page
            </Link>
          </div>
          <p className="text-sm text-text-body italic mt-4">Always verify bar and chain specifications before ordering.</p>
        </section>

        {/* Compatible Industry Models */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-text-main mb-4 border-b border-forest-brand/30 pb-2">Compatible Industry Models</h2>
          <p className="text-text-body text-sm mb-4">
            Series P chains are compatible replacements for the following Oregon, Stihl, and Husqvarna chain models:
          </p>
          
          <div className="space-y-6">
            {/* Oregon Models */}
            <div>
              <h3 className="text-sm font-semibold text-text-main mb-3">Oregon</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  72LPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  M72LPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  72V
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  72DPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  72CL
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  72CK
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  73LPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  73DPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  75LPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  75DPX
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  58L
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  59L
                </span>
              </div>
            </div>

            {/* Stihl Models */}
            <div>
              <h3 className="text-sm font-semibold text-text-main mb-3">Stihl</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  33RS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  33RSC
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  33RM
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  35RS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  35RM
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  36RS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  36RM
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  46RS
                </span>
              </div>
            </div>

            {/* Husqvarna Models */}
            <div>
              <h3 className="text-sm font-semibold text-text-main mb-3">Husqvarna</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  C83 / H42
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  C85 / H48
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-none text-xs font-medium bg-gray-100 text-text-main border border-forest-brand/30">
                  H64
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
          <div className="table-responsive -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-sm border border-forest-brand/30">
              <tbody className="text-industrial">
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50 w-48">Chrome Coating Thickness</th>
                  <td className="px-4 py-2.5">0.05-0.08mm</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Surface Hardness</th>
                  <td className="px-4 py-2.5">HRC 62-65</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Sharpening Interval</th>
                  <td className="px-4 py-2.5">30-40% longer vs uncoated chains</td>
                </tr>
                <tr className="border-t border-forest-brand/30">
                  <th className="text-left px-4 py-2.5 font-semibold bg-gray-50">Vibration Level</th>
                  <td className="px-4 py-2.5">ISO 22868 compliant</td>
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
            href="/request-quote?series=Series%20P"
            className="inline-flex items-center px-6 py-3 bg-safety-orange text-white font-semibold text-sm hover:bg-safety-orange/90 transition"
          >
            Request Bulk Reel Pricing for Logging Crews
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
            "name": "Series P Professional High-Speed Logging Chain",
            "description": "Full-chisel chainsaw chains with industrial chrome coating. 3/8\" and .404\" pitch for professional logging.",
            "brand": {
              "@type": "Brand",
              "name": "Borealgrit"
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
                "item": "https://borealgrit.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://borealgrit.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Series P",
                "item": "https://borealgrit.com/products/series-p"
              }
            ]
          })
        }}
      />
    </>
  )
}
