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
  const [forBuyersMenuOpen, setForBuyersMenuOpen] = useState(false)
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false)
  
  const productsMenuRef = useRef<HTMLLIElement>(null)
  const resourcesMenuRef = useRef<HTMLLIElement>(null)
  const aboutContactMenuRef = useRef<HTMLLIElement>(null)
  const forBuyersMenuRef = useRef<HTMLLIElement>(null)
  const toolsMenuRef = useRef<HTMLLIElement>(null)

  const isActive = (path: string) => pathname === path
  const isProductsActive = pathname?.startsWith('/products')
  const isResourcesActive = pathname?.startsWith('/resources') || pathname?.startsWith('/quality')
  const isAboutContactActive = pathname?.startsWith('/about') || pathname?.startsWith('/contact') || pathname?.startsWith('/request-quote')
  const isForBuyersActive = pathname?.startsWith('/for-buyers') || pathname?.startsWith('/oem-private-label')
  const isToolsActive = pathname?.startsWith('/fitment-finder') || pathname?.startsWith('/tools')

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
      if (forBuyersMenuRef.current && !forBuyersMenuRef.current.contains(event.target as Node)) {
        setForBuyersMenuOpen(false)
      }
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(event.target as Node)) {
        setToolsMenuOpen(false)
      }
    }
    if (productsMenuOpen || resourcesMenuOpen || aboutContactMenuOpen || forBuyersMenuOpen || toolsMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [productsMenuOpen, resourcesMenuOpen, aboutContactMenuOpen, forBuyersMenuOpen, toolsMenuOpen])

  return (
    <header className="bg-[#547950] sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-heading font-extrabold text-white text-xl md:text-2xl tracking-tight uppercase italic">
            BOREALGRIT
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-base font-semibold text-white">
            <li>
              <Link
                href="/"
                className={isActive('/') ? 'text-white border-b-2 border-white pb-0.5' : 'text-white hover:text-white/80'}
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
                  setForBuyersMenuOpen(false)
                  setToolsMenuOpen(false)
                }}
                className={`flex items-center gap-1 ${isProductsActive ? 'text-white border-b-2 border-white pb-0.5' : 'text-white hover:text-white/80'}`}
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
                <div className="absolute top-full left-0 mt-2 w-[780px] bg-white border border-forest-brand/30 rounded-none shadow-xl py-3 z-50 opacity-0 animate-[fadeIn_0.2s_ease-in-out_forwards]">
                  <Link
                    href="/products"
                    className={`block px-4 py-2.5 mx-2 mb-2 text-sm font-semibold text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline rounded-none transition ${isActive('/products') && !pathname?.includes('/series-') && !pathname?.includes('/full-chisel') && !pathname?.includes('/low-profile') && !pathname?.includes('/semi-chisel') ? 'text-forest-brand bg-forest-light' : ''}`}
                    onClick={() => setProductsMenuOpen(false)}
                  >
                    All Products
                  </Link>
                  <div className="border-t border-forest-brand/20 my-3"></div>
                  <div className="grid grid-cols-3 gap-6 px-4 pb-2">
                    <div>
                      <div className="px-2 py-2 mb-2 text-xs font-bold uppercase tracking-wide text-forest-brand border-b border-forest-brand/30">By Series</div>
                      <div className="space-y-1">
                        <Link
                          href="/products/series-e"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/series-e') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          Series E
                        </Link>
                        <Link
                          href="/products/series-w"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/series-w') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          Series W
                        </Link>
                        <Link
                          href="/products/series-p"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/series-p') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          Series P
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="px-2 py-2 mb-2 text-xs font-bold uppercase tracking-wide text-forest-brand border-b border-forest-brand/30">By Chain Type</div>
                      <div className="space-y-1">
                        <Link
                          href="/products/full-chisel-325"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/full-chisel-325') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          Full Chisel .325&quot;
                        </Link>
                        <Link
                          href="/products/low-profile-325"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/low-profile-325') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          Low Profile .325&quot;
                        </Link>
                        <Link
                          href="/products/semi-chisel-38"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/semi-chisel-38') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          Semi Chisel 3/8&quot;
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="px-2 py-2 mb-2 text-xs font-bold uppercase tracking-wide text-forest-brand border-b border-forest-brand/30">By Solution</div>
                      <div className="space-y-1">
                        <Link
                          href="/products/applications/battery-saws"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/applications/battery-saws') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          For Battery Saws
                        </Link>
                        <Link
                          href="/products/applications/cold-climate"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/applications/cold-climate') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          For Cold Climate
                        </Link>
                        <Link
                          href="/products/applications/professional-loggers"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/applications/professional-loggers') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          For Professional Loggers
                        </Link>
                        <Link
                          href="/products/applications/retail-consumer"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/applications/retail-consumer') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          For Retail/Consumer
                        </Link>
                        <Link
                          href="/products/applications/challenging-conditions"
                          className={`block px-3 py-2 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition rounded-none ${isActive('/products/applications/challenging-conditions') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          For Challenging Conditions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li ref={toolsMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setToolsMenuOpen(!toolsMenuOpen)
                  setProductsMenuOpen(false)
                  setResourcesMenuOpen(false)
                  setAboutContactMenuOpen(false)
                  setForBuyersMenuOpen(false)
                }}
                className={`flex items-center gap-1 ${isToolsActive ? 'text-white border-b-2 border-white pb-0.5' : 'text-white hover:text-white/80'}`}
              >
                Tools
                <svg
                  className={`w-4 h-4 transition-transform ${toolsMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {toolsMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-forest-brand/30 rounded-none shadow-xl py-2 z-50 opacity-0 animate-[fadeIn_0.2s_ease-in-out_forwards]">
                  <Link
                    href="/fitment-finder"
                    className={`block px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/fitment-finder') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setToolsMenuOpen(false)}
                  >
                    Fitment Finder
                  </Link>
                  <Link
                    href="/tools"
                    className={`block whitespace-nowrap px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${pathname === '/tools' ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setToolsMenuOpen(false)}
                  >
                    Cross Reference & Calculators
                  </Link>
                </div>
              )}
            </li>
            <li ref={forBuyersMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setForBuyersMenuOpen(!forBuyersMenuOpen)
                  setProductsMenuOpen(false)
                  setResourcesMenuOpen(false)
                  setAboutContactMenuOpen(false)
                  setToolsMenuOpen(false)
                }}
                className={`flex items-center gap-1 ${isForBuyersActive ? 'text-white border-b-2 border-white pb-0.5' : 'text-white hover:text-white/80'}`}
              >
                For Buyers
                <svg
                  className={`w-4 h-4 transition-transform ${forBuyersMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {forBuyersMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-forest-brand/30 rounded-none shadow-xl py-2 z-50 opacity-0 animate-[fadeIn_0.2s_ease-in-out_forwards]">
                  <Link
                    href="/for-buyers/distributors"
                    className={`block px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${pathname?.startsWith('/for-buyers/distributors') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setForBuyersMenuOpen(false)}
                  >
                    Distributors & Forestry
                  </Link>
                  <Link
                    href="/oem-private-label"
                    className={`block px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/oem-private-label') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setForBuyersMenuOpen(false)}
                  >
                    OEM & Private Label
                  </Link>
                </div>
              )}
            </li>
            <li ref={resourcesMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setResourcesMenuOpen(!resourcesMenuOpen)
                  setProductsMenuOpen(false)
                  setAboutContactMenuOpen(false)
                  setForBuyersMenuOpen(false)
                  setToolsMenuOpen(false)
                }}
                className={`flex items-center gap-1 ${isResourcesActive ? 'text-white border-b-2 border-white pb-0.5' : 'text-white hover:text-white/80'}`}
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-forest-brand/30 rounded-none shadow-xl py-2 z-50 opacity-0 animate-[fadeIn_0.2s_ease-in-out_forwards]">
                  <Link
                    href="/resources#catalogs"
                    className={`block px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/resources') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    Catalogs & Datasheets
                  </Link>
                  <Link
                    href="/resources#fitment-guides"
                    className="block px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition"
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    Fitment Guides
                  </Link>
                  <Link
                    href="/quality"
                    className={`block px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/quality') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    Quality & Certifications
                  </Link>
                  <Link
                    href="/resources#packaging"
                    className="block px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition"
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
                  setForBuyersMenuOpen(false)
                  setToolsMenuOpen(false)
                }}
                className={`flex items-center gap-1 ${isAboutContactActive ? 'text-white border-b-2 border-white pb-0.5' : 'text-white hover:text-white/80'}`}
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-forest-brand/30 rounded-none shadow-xl py-2 z-50 opacity-0 animate-[fadeIn_0.2s_ease-in-out_forwards]">
                  <Link
                    href="/about"
                    className={`block px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/about') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setAboutContactMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className={`block px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/contact') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setAboutContactMenuOpen(false)}
                  >
                    Contact Information
                  </Link>
                  <div className="border-t border-forest-brand/20 my-2"></div>
                  <Link
                    href="/request-quote"
                    className={`block px-4 py-2.5 text-sm font-semibold hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand bg-forest-brand/10 text-forest-brand transition ${isActive('/request-quote') ? 'bg-forest-brand/15' : ''}`}
                    onClick={() => setAboutContactMenuOpen(false)}
                  >
                    Request for Quote
                  </Link>
                </div>
              )}
            </li>
          </ul>
          <div className="md:hidden flex items-center gap-2">
            <Link href="/request-quote" className="px-3 py-1.5 bg-forest-brand text-white text-sm font-semibold rounded-none hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition">
              RFQ
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-none text-white hover:bg-[#426B3D]"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden py-3 border-t border-white/20 bg-[#547950]`}>
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
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/low-profile-325') ? 'text-white font-medium' : 'hover:text-[#547950]'}`}
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
                      className={`block py-2 text-sm pl-4 text-white/90 ${isActive('/products/applications/challenging-conditions') ? 'text-white font-medium' : 'hover:text-[#547950]'}`}
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
              <button
                type="button"
                onClick={() => setToolsMenuOpen(!toolsMenuOpen)}
                className={`flex items-center justify-between w-full py-2 text-white/90 ${isToolsActive ? 'text-white font-medium' : 'hover:text-[#547950]'}`}
              >
                Tools
                <svg
                  className={`w-4 h-4 transition-transform ${toolsMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {toolsMenuOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link
                      href="/fitment-finder"
                      className={`block py-2 text-sm text-white/90 ${isActive('/fitment-finder') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setToolsMenuOpen(false)
                      }}
                    >
                      Fitment Finder
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools"
                      className={`block whitespace-nowrap py-2 text-sm text-white/90 ${pathname === '/tools' ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setToolsMenuOpen(false)
                      }}
                    >
                      Cross Reference & Calculators
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                type="button"
                onClick={() => setForBuyersMenuOpen(!forBuyersMenuOpen)}
                className={`flex items-center justify-between w-full py-2 text-white/90 ${isForBuyersActive ? 'text-white font-medium' : 'hover:text-[#547950]'}`}
              >
                For Buyers
                <svg
                  className={`w-4 h-4 transition-transform ${forBuyersMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {forBuyersMenuOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link
                      href="/for-buyers/distributors"
                      className={`block py-2 text-sm text-white/90 ${pathname?.startsWith('/for-buyers/distributors') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setForBuyersMenuOpen(false)
                      }}
                    >
                      Distributors & Forestry
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/oem-private-label"
                      className={`block py-2 text-sm text-white/90 ${isActive('/oem-private-label') ? 'text-white font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setForBuyersMenuOpen(false)
                      }}
                    >
                      OEM & Private Label
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                type="button"
                onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                className={`flex items-center justify-between w-full py-2 text-white/90 ${isResourcesActive ? 'text-white font-medium' : 'hover:text-[#547950]'}`}
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
                className={`flex items-center justify-between w-full py-2 text-white/90 ${isAboutContactActive ? 'text-white font-medium' : 'hover:text-[#547950]'}`}
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
                      className={`block py-2 text-sm font-semibold text-forest-brand hover:text-white hover:bg-forest-brand hover:px-2 hover:py-2 hover:-mx-2 hover:-my-2 transition ${isActive('/request-quote') ? 'font-bold' : ''}`}
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
