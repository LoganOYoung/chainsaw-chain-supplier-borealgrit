import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-forest-brand/20 bg-[#547950] text-white py-12 pb-[max(3rem,env(safe-area-inset-bottom))] px-4 sm:px-6 lg:px-8 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
      <div className="max-w-6xl mx-auto">
        {/* Four Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8">
          
          {/* Column 1: About / Brand */}
          <div>
            <h3 className="font-heading font-black text-white text-2xl uppercase tracking-tight mb-3 italic">BOREALGRIT</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Professional Grade Chainsaw Chains for North American Forestry
            </p>
          </div>

          {/* Column 2: Products & Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-4">Products & Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products" className="text-white/90 hover:text-white text-sm transition hover:underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/fitment-finder" className="text-white/90 hover:text-white text-sm transition hover:underline">
                  Fitment Finder
                </Link>
              </li>
              <li>
                <Link href="/oem-private-label" className="text-white/90 hover:text-white text-sm transition hover:underline">
                  OEM & Private Label
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/resources" className="text-white/90 hover:text-white text-sm transition hover:underline">
                  Catalogs & Downloads
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-white/90 hover:text-white text-sm transition hover:underline">
                  Quality & Certifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-white text-sm transition hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white text-sm transition hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:logan@borealgrit.com" className="text-white/90 hover:text-white hover:underline transition break-all">
                  logan@borealgrit.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+8613675899493" className="text-white/90 hover:text-white hover:underline transition">
                    (+86) 13675899493
                  </a>
                  <span className="text-white/60 text-xs block mt-0.5">Phone / WeChat</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/90">Room 636-D548, Lianyue Banshan Plaza, Nansha, Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Request Quote CTA - Full Width */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <Link 
            href="/request-quote" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-forest-brand font-bold text-sm uppercase tracking-wide rounded-none hover:bg-white/90 transition shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Request Quote
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/60 text-center">
          © {new Date().getFullYear()} Borealgrit. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
