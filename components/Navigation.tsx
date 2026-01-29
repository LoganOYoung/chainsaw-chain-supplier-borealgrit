'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false)
  const [aboutContactMenuOpen, setAboutContactMenuOpen] = useState(false)
  
  const productsMenuRef = useRef<HTMLLIElement>(null)
  const resourcesMenuRef = useRef<HTMLLIElement>(null)
  const aboutContactMenuRef = useRef<HTMLLIElement>(null)

  const isActive = (path: string) => pathname === path
  const isProductsActive = pathname?.startsWith('/products')
  const isResourcesActive = pathname?.startsWith('/resources') || pathname?.startsWith('/quality')
  const isAboutContactActive = pathname?.startsWith('/about') || pathname?.startsWith('/contact') || pathname?.startsWith('/request-quote')

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target as Node)) {
        setProductsMenuOpen(false)
      }
      if (resourcesMenuRef.current && !resourcesMenuRef.current.contains(event.target as Node)) {
        setResourcesMenuOpen(false)
      }
      if (aboutContactMenuRef.current && !aboutContactMenuRef.current.contains(event.target as Node)) {
        setAboutContactMenuOpen(false)
      }
    }
    if (productsMenuOpen || resourcesMenuOpen || aboutContactMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [productsMenuOpen, resourcesMenuOpen, aboutContactMenuOpen])

  return (
    <header className="border-b border-forest-dark/50 bg-[#547950] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-heading font-bold text-white text-base md:text-lg tracking-tight uppercase">
            BOREALGRIT
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-white">
            <li>
              <Link
                href="/"
                className={isActive('/') ? 'text-white border-b-2 border-white pb-0.5' : 'hover:text-white/80'}
              >
                Home
              </Link>
            </li>
            <li ref={productsMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setProductsMenuOpen(!productsMenuOpen)
                  setResourcesMenuOpen(false)
                  setAboutContactMenuOpen(false)
                }}
                className={`flex items-center gap-1 ${isProductsActive ? 'text-white border-b-2 border-white pb-0.5' : 'hover:text-white/80'}`}
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform ${productsMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-[780px] bg-white border border-forest-brand/30 rounded-none shadow-lg py-2 z-50">
                  <Link
                    href="/products"
                    className={`block px-4 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition ${isActive('/products') && !pathname?.includes('/series-') && !pathname?.includes('/full-chisel') && !pathname?.includes('/low-profile') && !pathname?.includes('/semi-chisel') ? 'text-forest-brand font-medium' : ''}`}
                    onClick={() => setProductsMenuOpen(false)}
                  >
                    All Products
                  </Link>
                  <div className="border-t border-forest-brand/20 my-2"></div>
                  <div className="grid grid-cols-3 gap-4 px-2">
                    <div>
                      <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-text-body">By Series</div>
                      <Link
                        href="/products/series-e"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/series-e') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        Series E
                      </Link>
                      <Link
                        href="/products/series-w"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/series-w') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        Series W
                      </Link>
                      <Link
                        href="/products/series-p"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/series-p') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        Series P
                      </Link>
                    </div>
                    <div>
                      <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-text-body">By Chain Type</div>
                      <Link
                        href="/products/full-chisel-325"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/full-chisel-325') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        Full Chisel .325&quot;
                      </Link>
                      <Link
                        href="/products/low-profile-325"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/low-profile-325') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        Low Profile .325&quot;
                      </Link>
                      <Link
                        href="/products/semi-chisel-38"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/semi-chisel-38') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        Semi Chisel 3/8&quot;
                      </Link>
                    </div>
                    <div>
                      <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-text-body">By Solution</div>
                      <Link
                        href="/products/applications/battery-saws"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/applications/battery-saws') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        For Battery Saws
                      </Link>
                      <Link
                        href="/products/applications/cold-climate"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/applications/cold-climate') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        For Cold Climate
                      </Link>
                      <Link
                        href="/products/applications/professional-loggers"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/applications/professional-loggers') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        For Professional Loggers
                      </Link>
                      <Link
                        href="/products/applications/retail-consumer"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/applications/retail-consumer') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        For Retail/Consumer
                      </Link>
                      <Link
                        href="/products/applications/challenging-conditions"
                        className={`block px-2 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition rounded-none ${isActive('/products/applications/challenging-conditions') ? 'text-forest-brand font-medium' : ''}`}
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        For Challenging Conditions
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/fitment-finder"
                className={isActive('/fitment-finder') ? 'text-white border-b-2 border-white pb-0.5' : 'text-white hover:text-white/80'}
              >
                Fitment Finder
              </Link>
            </li>
            <li>
              <Link
                href="/oem-private-label"
                className={isActive('/oem-private-label') ? 'text-white border-b-2 border-white pb-0.5' : 'text-white hover:text-white/80'}
              >
                OEM & Private Label
              </Link>
            </li>
            <li ref={resourcesMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setResourcesMenuOpen(!resourcesMenuOpen)
                  setProductsMenuOpen(false)
                  setAboutContactMenuOpen(false)
                }}
                className={`flex items-center gap-1 text-white ${isResourcesActive ? 'border-b-2 border-white pb-0.5' : 'hover:text-white/80'}`}
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform ${resourcesMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-forest-brand/30 rounded-none shadow-lg py-2 z-50">
                  <Link
                    href="/resources#catalogs"
                    className={`block px-4 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition ${isActive('/resources') ? 'text-forest-brand font-medium' : ''}`}
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    Catalogs & Datasheets
                  </Link>
                  <Link
                    href="/resources#fitment-guides"
                    className="block px-4 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition"
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    Fitment Guides
                  </Link>
                  <Link
                    href="/quality"
                    className={`block px-4 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition ${isActive('/quality') ? 'text-forest-brand font-medium' : ''}`}
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    Quality & Certifications
                  </Link>
                  <Link
                    href="/resources#packaging"
                    className="block px-4 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition"
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    Packaging Standards
                  </Link>
                </div>
              )}
            </li>
            <li ref={aboutContactMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setAboutContactMenuOpen(!aboutContactMenuOpen)
                  setProductsMenuOpen(false)
                  setResourcesMenuOpen(false)
                }}
                className={`flex items-center gap-1 text-white ${isAboutContactActive ? 'border-b-2 border-white pb-0.5' : 'hover:text-white/80'}`}
              >
                About & Contact
                <svg
                  className={`w-4 h-4 transition-transform ${aboutContactMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutContactMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-forest-brand/30 rounded-none shadow-lg py-2 z-50">
                  <Link
                    href="/about"
                    className={`block px-4 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition ${isActive('/about') ? 'text-forest-brand font-medium' : ''}`}
                    onClick={() => setAboutContactMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className={`block px-4 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand transition ${isActive('/contact') ? 'text-forest-brand font-medium' : ''}`}
                    onClick={() => setAboutContactMenuOpen(false)}
                  >
                    Contact Information
                  </Link>
                  <div className="border-t border-forest-brand/20 my-1"></div>
                  <Link
                    href="/request-quote"
                    className={`block px-4 py-2 text-sm hover:bg-forest-light bg-safety-orange/10 ${isActive('/request-quote') ? 'text-safety-orange font-medium' : 'text-safety-orange'}`}
                    onClick={() => setAboutContactMenuOpen(false)}
                  >
                    Request for Quote
                  </Link>
                </div>
              )}
            </li>
          </ul>
          <div className="md:hidden flex items-center gap-2">
            <Link href="/request-quote" className="px-3 py-1.5 bg-safety-orange text-white text-sm font-semibold rounded-none hover:bg-safety-orange/90 transition">
              RFQ
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-none text-white hover:bg-forest-brand/20"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden py-3 border-t border-forest-brand/20`}>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link href="/" className={`block py-2 ${isActive('/') ? 'text-white font-medium' : 'text-white/90'}`} onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setProductsMenuOpen(!productsMenuOpen)}
                className={`flex items-center justify-between w-full py-2 ${isProductsActive ? 'text-white font-medium' : 'text-white/90'}`}
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform ${productsMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsMenuOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link
                      href="/products"
                      className={`block py-2 text-sm text-white/90 ${isActive('/products') && !pathname?.includes('/series-') && !pathname?.includes('/full-chisel') && !pathname?.includes('/low-profile') && !pathname?.includes('/semi-chisel') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      All Products
                    </Link>
                  </li>
                  <li className="pt-2">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wide">By Series</span>
                  </li>
                  <li>
                    <Link
                      href="/products/series-e"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/series-e') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      Series E
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/series-w"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/series-w') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      Series W
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/series-p"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/series-p') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      Series P
                    </Link>
                  </li>
                  <li className="pt-2">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wide">By Chain Type</span>
                  </li>
                  <li>
                    <Link
                      href="/products/full-chisel-325"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/full-chisel-325') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      Full Chisel .325&quot;
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/low-profile-325"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/low-profile-325') ? 'text-white font-medium' : 'hover:text-white'}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      Low Profile .325&quot;
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/semi-chisel-38"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/semi-chisel-38') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      Semi Chisel 3/8&quot;
                    </Link>
                  </li>
                  <li className="pt-2">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wide">By Solution</span>
                  </li>
                  <li>
                    <Link
                      href="/products/applications/battery-saws"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/applications/battery-saws') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      For Battery Saws
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/applications/cold-climate"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/applications/cold-climate') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      For Cold Climate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/applications/professional-loggers"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/applications/professional-loggers') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      For Professional Loggers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/applications/retail-consumer"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/applications/retail-consumer') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      For Retail/Consumer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/applications/challenging-conditions"
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/applications/challenging-conditions') ? 'text-white font-medium' : 'hover:text-white'}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      For Challenging Conditions
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/fitment-finder" className={`block py-2 ${isActive('/fitment-finder') ? 'text-white font-medium' : 'text-white/90'}`} onClick={() => setMobileMenuOpen(false)}>
                Fitment Finder
              </Link>
            </li>
            <li>
              <Link href="/oem-private-label" className={`block py-2 ${isActive('/oem-private-label') ? 'text-white font-medium' : 'text-white/90'}`} onClick={() => setMobileMenuOpen(false)}>
                OEM & Private Label
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                className={`flex items-center justify-between w-full py-2 text-white/90 ${isResourcesActive ? 'text-white font-medium' : 'hover:text-white'}`}
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform ${resourcesMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesMenuOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link
                      href="/resources#catalogs"
                      className={`block py-2 text-sm text-white/90 ${isActive('/resources') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setResourcesMenuOpen(false)
                      }}
                    >
                      Catalogs & Datasheets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources#fitment-guides"
                      className="block py-2 text-sm text-white/90"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setResourcesMenuOpen(false)
                      }}
                    >
                      Fitment Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quality"
                      className={`block py-2 text-sm text-white/90 ${isActive('/quality') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setResourcesMenuOpen(false)
                      }}
                    >
                      Quality & Certifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources#packaging"
                      className="block py-2 text-sm text-white/90"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setResourcesMenuOpen(false)
                      }}
                    >
                      Packaging Standards
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                type="button"
                onClick={() => setAboutContactMenuOpen(!aboutContactMenuOpen)}
                className={`flex items-center justify-between w-full py-2 text-white/90 ${isAboutContactActive ? 'text-white font-medium' : 'hover:text-white'}`}
              >
                About & Contact
                <svg
                  className={`w-4 h-4 transition-transform ${aboutContactMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutContactMenuOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link
                      href="/about"
                      className={`block py-2 text-sm text-white/90 ${isActive('/about') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setAboutContactMenuOpen(false)
                      }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className={`block py-2 text-sm text-white/90 ${isActive('/contact') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setAboutContactMenuOpen(false)
                      }}
                    >
                      Contact Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/request-quote"
                      className={`block py-2 text-sm font-semibold text-safety-orange ${isActive('/request-quote') ? 'font-bold' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setAboutContactMenuOpen(false)
                      }}
                    >
                      Request for Quote
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
