import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-forest-brand/20 bg-[#547950] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:max-w-xs">
            <span className="font-heading font-extrabold text-white text-xl uppercase tracking-tight block mb-3">BOREALGRIT</span>
            <p className="text-sm text-white/80 leading-relaxed mb-4">Chainsaw chain manufacturer. B2B only. North American distributors and OEM.</p>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:logan@borealgrit.com" className="text-white/90 hover:text-white hover:underline transition">
                  logan@borealgrit.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+8613675899493" className="text-white/90 hover:text-white hover:underline transition">
                    (+86) 13675899493
                  </a>
                  <span className="text-white/60 text-xs block">Phone / WeChat</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/90">Guangzhou, China</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-white text-sm font-semibold uppercase tracking-wide">Products</span>
              <Link href="/products" className="text-white/90 hover:text-white text-sm transition">
                All Products
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white text-sm font-semibold uppercase tracking-wide">Tools</span>
              <Link href="/fitment-finder" className="text-white/90 hover:text-white text-sm transition">
                Fitment Finder
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white text-sm font-semibold uppercase tracking-wide">Partnership</span>
              <Link href="/oem-private-label" className="text-white/90 hover:text-white text-sm transition">
                OEM & Private Label
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white text-sm font-semibold uppercase tracking-wide">Resources</span>
              <Link href="/resources" className="text-white/90 hover:text-white text-sm transition">
                Catalogs & Downloads
              </Link>
              <Link href="/quality" className="text-white/90 hover:text-white text-sm transition">
                Quality & Certifications
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white text-sm font-semibold uppercase tracking-wide">Company</span>
              <Link href="/about" className="text-white/90 hover:text-white text-sm transition">
                About Us
              </Link>
              <Link href="/contact" className="text-white/90 hover:text-white text-sm transition">
                Contact
              </Link>
              <Link href="/request-quote" className="text-white/90 hover:text-white hover:bg-white hover:text-forest-brand hover:px-2 hover:py-1 hover:-mx-2 hover:-my-1 border-2 border-transparent hover:border-forest-brand text-sm font-semibold text-forest-brand transition">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
        <p className="text-xs text-white/60 mt-10 pt-6 border-t border-white/10">© Borealgrit. All rights reserved.</p>
      </div>
    </footer>
  )
}
