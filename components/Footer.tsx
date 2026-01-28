import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-forest-brand/20 bg-[#1A3922] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:max-w-xs">
            <span className="font-heading font-bold text-white text-lg uppercase tracking-tight block mb-2">CHAINPRO</span>
            <p className="text-sm text-white/80 leading-relaxed">Chainsaw chain manufacturer. B2B only. North American distributors and OEM.</p>
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
              <Link href="/request-quote" className="text-white/90 hover:text-white text-sm font-semibold text-safety-orange hover:text-safety-orange/90 transition">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
        <p className="text-xs text-white/60 mt-10 pt-6 border-t border-white/10">© ChainPro. All rights reserved.</p>
      </div>
    </footer>
  )
}
