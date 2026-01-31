import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Home, Search, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-6xl md:text-8xl font-heading font-bold text-forest-brand/20 mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-text-main mb-3 uppercase tracking-tight">
            Page Not Found
          </h1>
          <p className="text-text-body mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest-brand text-white font-bold text-sm uppercase tracking-wide rounded-none hover:bg-forest-dark transition w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-forest-brand font-bold text-sm uppercase tracking-wide rounded-none border-2 border-forest-brand hover:bg-forest-light transition w-full sm:w-auto justify-center"
            >
              <Search className="w-5 h-5" />
              View Products
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-forest-brand/20">
            <p className="text-sm text-text-body mb-4">Quick links</p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <li>
                <Link href="/fitment-finder" className="text-forest-brand hover:underline inline-flex items-center gap-1">
                  Fitment Finder <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="text-forest-brand hover:underline inline-flex items-center gap-1">
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-forest-brand hover:underline inline-flex items-center gap-1">
                  Contact <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
