import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Banner */}
        <section className="relative w-full h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] max-h-[700px]">
          <div className="absolute inset-0">
            <Image
              src="/images/contact-banner.jpg"
              alt="Professional chainsaw chain manufacturing and B2B supply"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-forest-brand/60"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-8 md:py-0">
            <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cream-white mb-3 md:mb-4 tracking-tight uppercase">
              Professional Chainsaw Chain Manufacturer & OEM Supplier
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-cream-white/95 mb-3 md:mb-4 max-w-3xl leading-relaxed">
              Precision-engineered chainsaw chains for North American B2B markets. ANSI B175.1 and CSA Z62.3 compliant. Application-specific engineering for distributors, importers, and OEM partners.
            </p>
            <div className="bg-forest-brand/10 backdrop-blur-sm border border-forest-brand/30 rounded-none p-3 md:p-4 mb-4 md:mb-6 max-w-3xl">
              <p className="text-sm md:text-base text-white font-semibold mb-1 md:mb-2">
                Same Performance, Better Value: 25-40% Cost Savings vs. Tier-1 Brands
              </p>
              <p className="text-xs md:text-sm text-white/90">
                Pro-grade chains with identical specifications and ANSI-certified safety. ISO 9001 certified production. Full material traceability.
              </p>
            </div>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-10 md:py-5 bg-forest-brand text-white font-bold text-base md:text-xl hover:bg-white hover:text-forest-brand hover:border-2 hover:border-forest-brand transition shadow-2xl rounded-none transform hover:scale-105 w-fit"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>
        </section>

        {/* How It Works - Simplified */}
        <section className="bg-white py-8 md:py-12 lg:py-16 border-b border-forest-brand/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-text-main mb-3 text-center tracking-tight uppercase">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-text-body text-center mb-6 md:mb-10 max-w-2xl mx-auto">
              Get started with Borealgrit in four simple steps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-gray-50 border-2 border-forest-brand rounded-none p-4 md:p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-forest-brand text-white rounded-full mx-auto mb-3 md:mb-4 font-bold text-lg md:text-xl">
                  1
                </div>
                <h3 className="font-heading font-bold text-text-main mb-2 uppercase tracking-wide text-xs md:text-sm">Browse Products</h3>
                <p className="text-xs text-text-body leading-relaxed">
                  Explore our 36 standard models or use filters to find chains by pitch, gauge, drive links, and application.
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-forest-brand rounded-none p-4 md:p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-forest-brand text-white rounded-full mx-auto mb-3 md:mb-4 font-bold text-lg md:text-xl">
                  2
                </div>
                <h3 className="font-heading font-bold text-text-main mb-2 uppercase tracking-wide text-xs md:text-sm">Find Your Fit</h3>
                <p className="text-xs text-text-body leading-relaxed">
                  Use our Fitment Finder to match chains to your saw models, or download compatibility guides.
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-forest-brand rounded-none p-4 md:p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-forest-brand text-white rounded-full mx-auto mb-3 md:mb-4 font-bold text-lg md:text-xl">
                  3
                </div>
                <h3 className="font-heading font-bold text-text-main mb-2 uppercase tracking-wide text-xs md:text-sm">Request Quote</h3>
                <p className="text-xs text-text-body leading-relaxed">
                  Download our RFQ template, fill in your requirements, upload it, and submit your contact information.
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-forest-brand rounded-none p-4 md:p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-forest-brand text-white rounded-full mx-auto mb-3 md:mb-4 font-bold text-lg md:text-xl">
                  4
                </div>
                <h3 className="font-heading font-bold text-text-main mb-2 uppercase tracking-wide text-xs md:text-sm">Get Pricing</h3>
                <p className="text-xs text-text-body leading-relaxed">
                  Receive a comprehensive quote within 24 hours. Our team will provide detailed pricing and lead times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats - Simplified */}
        <section className="bg-gray-50 border-b border-forest-brand/30 py-6 md:py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-text-main mb-1">ANSI B175.1 / CSA Z62.3</p>
                <p className="text-xs text-text-body">Safety Standards Compliant</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-text-main mb-1">ISO 9001:2015</p>
                <p className="text-xs text-text-body">Quality Management Certified</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-text-main mb-1">OEM & Private Label</p>
                <p className="text-xs text-text-body">Custom Manufacturing</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-text-main mb-1">24-Hour Response</p>
                <p className="text-xs text-text-body">Fast Quote Turnaround</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Series Highlights */}
        <section className="py-0">
          <div className="space-y-0">
            {/* Series E Banner */}
            <Link href="/products/series-e" className="block group">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
                <Image
                  src="/images/series-e-hero.jpg"
                  alt="Series E: Efficiency Redefined for the Electric Era"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-forest-brand/70 group-hover:bg-forest-brand/60 transition"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-6 md:py-0">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 tracking-tight uppercase">
                    SERIES E: EFFICIENCY REDEFINED FOR THE ELECTRIC ERA
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/95 mb-2 md:mb-3 max-w-2xl leading-relaxed">
                    .043&quot; Narrow Kerf chains optimized for battery-powered saws. Reduced drag and heat for maximum efficiency.
                  </p>
                  <div className="flex items-center text-white text-sm sm:text-base font-semibold">
                    View Series E <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Series W Banner */}
            <Link href="/products/series-w" className="block group">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
                <Image
                  src="/images/series-w-hero.jpg"
                  alt="Series W: Engineered for the Arctic Edge"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-forest-brand/70 group-hover:bg-forest-brand/60 transition"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-6 md:py-0">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 tracking-tight uppercase">
                    SERIES W: ENGINEERED FOR THE ARCTIC EDGE
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/95 mb-2 md:mb-3 max-w-2xl leading-relaxed">
                    CrNiMo Alloy Steel with specialized nitriding for sub-zero conditions. Mastery over frozen timber at -40°C.
                  </p>
                  <div className="flex items-center text-white text-sm sm:text-base font-semibold">
                    View Series W <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Series P Banner */}
            <Link href="/products/series-p" className="block group">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
                <Image
                  src="/images/series-p-hero.jpg"
                  alt="Series P: Maximum Output for Professional Foresters"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-forest-brand/70 group-hover:bg-forest-brand/60 transition"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-6 md:py-0">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 tracking-tight uppercase">
                    SERIES P: MAXIMUM OUTPUT FOR PROFESSIONAL FORESTERS
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/95 mb-2 md:mb-3 max-w-2xl leading-relaxed">
                    Full-Chisel design with industrial chrome coating. The choice of professional loggers for highest chip clearance speed.
                  </p>
                  <div className="flex items-center text-white text-sm sm:text-base font-semibold">
                    View Series P <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Compatible Brands - Simplified */}
        <section className="bg-white py-8 md:py-10 border-b border-forest-brand/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-base sm:text-lg md:text-xl font-bold text-text-main mb-4 md:mb-6 text-center tracking-tight uppercase">Compatible with Leading Brands</h2>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 md:mb-6 flex-wrap">
              {['Stihl', 'Husqvarna', 'Oregon', 'Milwaukee', 'Makita', 'DeWalt', 'Echo'].map((brand) => (
                <div key={brand} className="bg-gray-50 border border-forest-brand/30 rounded-none px-3 py-1.5 sm:px-4 sm:py-2 hover:border-forest-brand transition whitespace-nowrap">
                  <div className="font-semibold text-text-main text-xs sm:text-sm">{brand}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/fitment-finder"
                className="inline-flex items-center gap-2 text-forest-brand font-semibold text-xs sm:text-sm hover:text-forest-brand/80 hover:underline transition"
              >
                View Full Compatibility Guide
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Simplified */}
        <section className="bg-forest-brand py-8 md:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center uppercase tracking-tight">
              Why Professional Importers Choose Us
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="pb-4 md:pb-6 border-b border-white/20 last:border-b-0">
                <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">25-40% Cost Savings</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Same performance, better value. Our clients typically see 25-40% reduction in consumable costs without sacrificing quality, edge retention, or chain life.
                </p>
              </div>

              <div className="pb-4 md:pb-6 border-b border-white/20 last:border-b-0">
                <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">Uncompromised Safety</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  ANSI B175.1 and CSA Z62.3 compliance for US/Canada retail. Every chain meets rigorous safety standards for professional and consumer markets.
                </p>
              </div>

              <div className="pb-4 md:pb-6 border-b border-white/20 last:border-b-0">
                <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">Application-Specific Engineering</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Series E for Electric Saws and Series W for Sub-Zero wood. Purpose-built chains optimized for specific applications and environmental conditions.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">Data-Ready RFQ Process</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Our structured specs save procurement managers hours of work. Granular fields for pitch, gauge, drive links, and steel grade streamline your quoting process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance - Simplified */}
        <section className="bg-white py-8 md:py-12 lg:py-16 border-b border-forest-brand/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-text-main mb-3 md:mb-4 text-center tracking-tight uppercase">
              Quality Assurance & Certifications
            </h2>
            <p className="text-xs sm:text-sm text-text-body text-center mb-6 md:mb-8 max-w-2xl mx-auto">
              ISO 9001:2015 certified quality management system. ANSI B175.1 and CSA Z62.3 compliant production. Full material traceability and comprehensive quality control processes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-4 md:p-6 text-center">
                <h3 className="font-heading font-bold text-text-main mb-2 uppercase tracking-wide text-sm md:text-base">ISO 9001:2015</h3>
                <p className="text-xs sm:text-sm text-text-body">
                  Quality management system certification. Manufacturing process control and continuous improvement.
                </p>
              </div>

              <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-4 md:p-6 text-center">
                <h3 className="font-bold text-text-main mb-2 text-sm md:text-base">ANSI B175.1</h3>
                <p className="text-xs sm:text-sm text-text-body">
                  Safety and performance standards compliance. Kickback reduction and durability requirements.
                </p>
              </div>

              <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-4 md:p-6 text-center sm:col-span-2 md:col-span-1">
                <h3 className="font-bold text-text-main mb-2 text-sm md:text-base">CSA Z62.3</h3>
                <p className="text-xs sm:text-sm text-text-body">
                  Canadian Standards Association certification. Selected models certified for Canadian market compliance.
                </p>
              </div>
            </div>
            <div className="text-center mt-6 md:mt-8">
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-forest-brand text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-forest-brand hover:border-2 hover:border-forest-brand transition rounded-none shadow-sm"
              >
                View Full Quality Documentation
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
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
