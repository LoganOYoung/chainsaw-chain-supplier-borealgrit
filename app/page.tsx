import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Zap, FileText, Download, Award, CheckCircle2, ArrowRight, Factory, Search, DollarSign } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* 1. Hero Banner (First Screen) */}
        <section className="relative w-full h-[60vh] min-h-[500px] max-h-[700px]">
          <div className="absolute inset-0">
            <Image
              src="/images/contact-banner.jpg"
              alt="Professional chainsaw chain manufacturing and B2B supply"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-green-800/60"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-cream-white mb-4 tracking-tight uppercase">
              Professional Chainsaw Chain Manufacturer & OEM Supplier
            </h1>
            <p className="text-base md:text-lg text-cream-white/95 mb-4 max-w-3xl leading-relaxed">
              Precision-engineered chainsaw chains for North American B2B markets. ANSI B175.1 and CSA Z62.3 compliant. Application-specific engineering for distributors, importers, and OEM partners.
            </p>
            <div className="bg-forest-brand/10 backdrop-blur-sm border border-forest-brand/30 rounded-none p-4 mb-6 max-w-3xl">
              <p className="text-base text-white font-semibold mb-2">
                Same Performance, Better Value: 25-40% Cost Savings vs. Tier-1 Brands
              </p>
              <p className="text-sm text-white/90">
                Pro-grade chains with identical specifications and ANSI-certified safety. No compromise on quality—just smarter pricing that boosts your bottom line.
              </p>
            </div>
            <p className="text-sm md:text-base text-cream-white/90 mb-6 max-w-3xl">
              ISO 9001 certified production. Full material traceability. Custom specifications, packaging, and private label programs available.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-safety-orange text-white font-semibold text-lg hover:bg-safety-orange/90 transition shadow-xl rounded-none"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/fitment-finder"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/95 text-text-main font-semibold text-lg hover:bg-white transition shadow-xl rounded-none"
              >
                Find Compatible Chain
                <Search className="w-5 h-5" />
              </Link>
              <Link
                href="/resources#catalogs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-forest-brand/10 backdrop-blur-sm border border-forest-brand/30 text-forest-brand font-semibold text-lg hover:bg-forest-brand/20 transition shadow-xl rounded-none"
              >
                Download Catalog
                <Download className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Quick Stats / Trust Indicators */}
        <section className="bg-gray-50 border-b border-forest-brand/30 py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-forest-brand" />
                  <span className="text-sm font-semibold text-text-main">ANSI B175.1 / CSA Z62.3</span>
                </div>
                <p className="text-xs text-text-body">Safety Standards Compliant</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-forest-brand" />
                  <span className="text-sm font-semibold text-text-main">ISO 9001:2015</span>
                </div>
                <p className="text-xs text-text-body">Quality Management Certified</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Factory className="w-5 h-5 text-forest-brand" />
                  <span className="text-sm font-semibold text-text-main">OEM & Private Label</span>
                </div>
                <p className="text-xs text-text-body">Custom Manufacturing</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-forest-brand" />
                  <span className="text-sm font-semibold text-text-main">Structured RFQ</span>
                </div>
                <p className="text-xs text-text-body">Streamlined Procurement</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Product Series Highlights (Three Main Series as Banners) */}
        <section className="py-0">
          <div className="space-y-0">
            {/* Series E Banner */}
            <Link href="/products/series-e" className="block group">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/images/series-e-hero.jpg"
                  alt="Series E: Efficiency Redefined for the Electric Era - Battery-powered chainsaw cutting wood"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-green-800/70 group-hover:bg-green-800/60 transition"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight uppercase">
                    SERIES E: EFFICIENCY REDEFINED FOR THE ELECTRIC ERA
                  </h3>
                  <p className="text-base md:text-lg text-white/95 mb-3 max-w-2xl leading-relaxed">
                    .043&quot; Narrow Kerf chains optimized for battery-powered saws. Reduced drag and heat for maximum efficiency.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4 text-xs md:text-sm text-white/85">
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Pitch: .325&quot; - 3/8&quot; LP</span>
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Gauge: .043&quot;</span>
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Drive Links: 50DL - 72DL</span>
                  </div>
                  <div className="flex items-center text-white text-base font-semibold">
                    View Series E <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Series W Banner */}
            <Link href="/products/series-w" className="block group">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/images/series-w-hero.jpg"
                  alt="Series W: Engineered for the Arctic Edge - Chainsaw cutting frozen wood in cold weather conditions"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-green-800/70 group-hover:bg-green-800/60 transition"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight uppercase">
                    SERIES W: ENGINEERED FOR THE ARCTIC EDGE
                  </h3>
                  <p className="text-base md:text-lg text-white/95 mb-3 max-w-2xl leading-relaxed">
                    CrNiMo Alloy Steel with specialized nitriding for sub-zero conditions. Mastery over frozen timber at -40°C.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4 text-xs md:text-sm text-white/85">
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Pitch: 3/8&quot;</span>
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Gauge: .050&quot; - .058&quot;</span>
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Drive Links: 56DL - 72DL</span>
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Temp Range: -40°C</span>
                  </div>
                  <div className="flex items-center text-white text-base font-semibold">
                    View Series W <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Series P Banner */}
            <Link href="/products/series-p" className="block group">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/images/series-p-hero.jpg"
                  alt="Series P: Maximum Output for Professional Foresters - Professional logging chainsaw in action"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-green-800/70 group-hover:bg-green-800/60 transition"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight uppercase">
                    SERIES P: MAXIMUM OUTPUT FOR PROFESSIONAL FORESTERS
                  </h3>
                  <p className="text-base md:text-lg text-white/95 mb-3 max-w-2xl leading-relaxed">
                    Full-Chisel design with industrial chrome coating. The choice of professional loggers for highest chip clearance speed.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4 text-xs md:text-sm text-white/85">
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Pitch: 3/8&quot; - .404&quot;</span>
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Gauge: .050&quot; - .063&quot;</span>
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Drive Links: 56DL - 84DL</span>
                    <span className="bg-green-800/50 px-3 py-1 rounded-none font-mono text-xs">Chrome Coated</span>
                  </div>
                  <div className="flex items-center text-white text-base font-semibold">
                    View Series P <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* 3.5. Compatible Brands Section */}
        <section className="bg-white py-10 border-b border-forest-brand/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-lg md:text-xl font-bold text-text-main mb-2 text-center tracking-tight uppercase">Compatible with Leading Brands</h2>
            <p className="text-sm text-text-body text-center mb-6 max-w-2xl mx-auto">
              Our chainsaw chains are designed as compatible replacements for major North American brands. All products meet or exceed OEM specifications.
            </p>
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              {['Stihl', 'Husqvarna', 'Oregon', 'Milwaukee', 'Makita', 'DeWalt', 'Echo'].map((brand) => (
                <div key={brand} className="bg-gray-50 border border-forest-brand/30 rounded-none px-4 py-2 hover:border-forest-brand transition whitespace-nowrap">
                  <div className="font-semibold text-text-main text-sm">{brand}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/fitment-finder"
                className="inline-flex items-center gap-2 text-forest-brand font-semibold text-sm hover:text-forest-brand/80 hover:underline transition"
              >
                View Full Compatibility Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-6 bg-gray-50 border border-forest-brand/30 rounded-none p-4">
              <p className="text-xs text-text-body leading-relaxed text-center">
                <strong className="text-text-main">Brand Disclaimer:</strong> All brand names mentioned are trademarks of their respective owners. We are not affiliated with, authorized by, or endorsed by these brands. Our products are compatible replacements designed to meet or exceed OEM specifications.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Professional Importers Choose Us - Unified Value Proposition */}
        <section className="bg-green-800 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {/* Cost Advantage */}
              <div className="flex items-start gap-4 pb-6 border-b border-white/20 last:border-b-0">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-none flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white mb-2 uppercase tracking-wide">25-40% Cost Savings</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Same performance, better value. Our clients typically see 25-40% reduction in consumable costs without sacrificing quality, edge retention, or chain life.
                  </p>
                  <Link href="/fitment-finder" className="text-white text-sm font-semibold hover:text-white/80 inline-flex items-center gap-2 transition underline">
                    Compare Pricing <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Uncompromised Safety */}
              <div className="flex items-start gap-4 pb-6 border-b border-white/20 last:border-b-0">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-none flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white mb-2 uppercase tracking-wide">Uncompromised Safety</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    ANSI B175.1 and CSA Z62.3 compliance for US/Canada retail. Every chain meets rigorous safety standards for professional and consumer markets.
                  </p>
                  <Link href="/quality" className="text-white text-sm font-semibold hover:text-white/80 inline-flex items-center gap-2 transition underline">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Application-Specific Engineering */}
              <div className="flex items-start gap-4 pb-6 border-b border-white/20 last:border-b-0">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-none flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white mb-2 uppercase tracking-wide">Application-Specific Engineering</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Series E for Electric Saws and Series W for Sub-Zero wood. Purpose-built chains optimized for specific applications and environmental conditions.
                  </p>
                  <Link href="/products" className="text-white text-sm font-semibold hover:text-white/80 inline-flex items-center gap-2 transition underline">
                    View Series <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Data-Ready RFQ Process */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-none flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white mb-2 uppercase tracking-wide">Data-Ready RFQ Process</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Our structured specs save procurement managers hours of work. Granular fields for pitch, gauge, drive links, and steel grade streamline your quoting process.
                  </p>
                  <Link href="/request-quote" className="text-white text-sm font-semibold hover:text-white/80 inline-flex items-center gap-2 transition underline">
                    Download Template <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Quality Assurance & Certifications */}
        <section className="bg-white py-16 md:py-20 border-b border-forest-brand/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-text-main mb-4 text-center tracking-tight uppercase">
              Quality Assurance & Certifications
            </h2>
            <p className="text-sm text-text-body text-center mb-10 max-w-2xl mx-auto">
              ISO 9001:2015 certified quality management system. ANSI B175.1 and CSA Z62.3 compliant production. Full material traceability and comprehensive quality control processes.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* ISO 9001 */}
              <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-6 text-center hover:border-forest-brand transition">
                <div className="w-16 h-16 bg-white border-2 border-forest-brand/30 rounded-none mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-forest-brand" />
                </div>
                <h3 className="font-heading font-bold text-text-main mb-2 uppercase tracking-wide">ISO 9001:2015</h3>
                <p className="text-sm text-text-body mb-4">
                  Quality management system certification. Manufacturing process control and continuous improvement.
                </p>
                <Link href="/quality" className="text-xs text-forest-brand font-semibold hover:text-forest-brand/80 hover:underline transition inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* ANSI B175.1 */}
              <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-6 text-center hover:border-forest-brand transition">
                <div className="w-16 h-16 bg-white border-2 border-forest-brand/30 rounded-none mx-auto mb-4 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-forest-brand" />
                </div>
                <h3 className="font-bold text-text-main mb-2">ANSI B175.1</h3>
                <p className="text-sm text-text-body mb-4">
                  Safety and performance standards compliance. Kickback reduction and durability requirements.
                </p>
                <Link href="/quality" className="text-xs text-forest-brand font-semibold hover:text-forest-brand/80 hover:underline transition inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* CSA Z62.3 */}
              <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-6 text-center hover:border-forest-brand transition">
                <div className="w-16 h-16 bg-white border-2 border-forest-brand/30 rounded-none mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-forest-brand" />
                </div>
                <h3 className="font-bold text-text-main mb-2">CSA Z62.3</h3>
                <p className="text-sm text-text-body mb-4">
                  Canadian Standards Association certification. Selected models certified for Canadian market compliance.
                </p>
                <Link href="/quality" className="text-xs text-forest-brand font-semibold hover:text-forest-brand/80 hover:underline transition inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Quality Features */}
            <div className="grid md:grid-cols-2 gap-6 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <FileText className="w-5 h-5 text-forest-brand" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-main mb-1 text-sm uppercase tracking-wide">Material Traceability</h4>
                  <p className="text-xs text-text-body">Full traceability from raw steel to finished product. Batch tracking and documentation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-forest-brand" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-main mb-1 text-sm uppercase tracking-wide">Pre-Shipment Inspection</h4>
                  <p className="text-xs text-text-body">Comprehensive quality checks before shipment. Inspection reports available upon request.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 px-6 py-3 bg-safety-orange text-white font-semibold text-sm hover:bg-safety-orange/90 transition rounded-none shadow-sm"
              >
                View Full Quality Documentation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>


        {/* 7. Quick Navigation Links */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="font-heading text-xl font-bold text-text-main mb-8 text-center uppercase tracking-tight">Explore Our Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/products"
              className="block p-6 border border-forest-brand/30 hover:border-forest-brand hover:bg-gray-50 transition rounded-none"
            >
              <h3 className="font-heading font-bold text-text-main mb-2 uppercase tracking-wide">Products</h3>
              <p className="text-sm text-industrial">
                By chain type, pitch, and application. Specs, compatibility, packaging, OEM.
              </p>
              <span className="text-forest-brand text-sm font-medium mt-2 inline-block">View products →</span>
            </Link>
            <Link
              href="/fitment-finder"
              className="block p-6 border border-forest-brand/30 hover:border-forest-brand hover:bg-gray-50 transition rounded-none"
            >
              <h3 className="font-bold text-text-main mb-2">Fitment Finder</h3>
              <p className="text-sm text-industrial">
                Filter by brand, pitch, gauge, drive links. Designed for saw/bar compatibility.
              </p>
              <span className="text-forest-brand text-sm font-medium mt-2 inline-block">Open Fitment Finder →</span>
            </Link>
            <Link
              href="/oem-private-label"
              className="block p-6 border border-forest-brand/30 hover:border-forest-brand hover:bg-gray-50 transition rounded-none"
            >
              <h3 className="font-bold text-text-main mb-2">OEM / Private Label</h3>
              <p className="text-sm text-industrial">
                Custom packaging, labeling, part numbers. MOQ and lead time per project.
              </p>
              <span className="text-forest-brand text-sm font-medium mt-2 inline-block">Learn more →</span>
            </Link>
            <Link
              href="/resources"
              className="block p-6 border border-forest-brand/30 hover:border-forest-brand hover:bg-gray-50 transition rounded-none"
            >
              <h3 className="font-bold text-text-main mb-2">Resources & Downloads</h3>
              <p className="text-sm text-industrial">
                Catalogs, datasheets, fitment guides, packaging standards, ordering info.
              </p>
              <span className="text-forest-brand text-sm font-medium mt-2 inline-block">Downloads →</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Borealgrit",
            "description": "Professional chainsaw chain manufacturer for North American B2B markets",
            "url": "https://borealgrit.com",
            "logo": "https://borealgrit.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "areaServed": "US, CA",
              "availableLanguage": "English"
            },
            "sameAs": [],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Chainsaw Chain",
            "description": "Professional chainsaw chains for North American B2B markets. ANSI B175.1 and CSA Z62.3 compliant.",
            "brand": {
              "@type": "Brand",
              "name": "Borealgrit"
            },
            "category": "Industrial Equipment",
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
            "@type": "WebSite",
            "name": "Borealgrit - Professional Chainsaw Chain Manufacturer",
            "url": "https://borealgrit.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://borealgrit.com/products?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  )
}
