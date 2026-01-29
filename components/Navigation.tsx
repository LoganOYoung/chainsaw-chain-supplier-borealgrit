'use client'

import Link from 'next/link'
import Image from 'next/image'
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
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo-borealgrit-champagne.svg" 
              alt="Borealgrit Logo" 
              width={240} 
              height={75}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-base font-semibold text-[#547950]">
            <li>
              <Link
                href="/"
                className={isActive('/') ? 'text-[#547950] border-b-2 border-[#547950] pb-0.5' : 'hover:text-[#547950]/80'}
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
                className={`flex items-center gap-1 ${isProductsActive ? 'text-[#547950] border-b-2 border-[#547950] pb-0.5' : 'hover:text-[#547950]/80'}`}
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
                    className={`flex items-center gap-2 px-4 py-2.5 mx-2 mb-2 text-sm font-semibold text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline rounded-none transition ${isActive('/products') && !pathname?.includes('/series-') && !pathname?.includes('/full-chisel') && !pathname?.includes('/low-profile') && !pathname?.includes('/semi-chisel') ? 'text-forest-brand bg-forest-light' : ''}`}
                    onClick={() => setProductsMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
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
            <li>
              <Link
                href="/fitment-finder"
                className={isActive('/fitment-finder') ? 'text-[#547950] border-b-2 border-[#547950] pb-0.5' : 'text-[#547950] hover:text-[#547950]/80'}
              >
                Fitment Finder
              </Link>
            </li>
            <li>
              <Link
                href="/oem-private-label"
                className={isActive('/oem-private-label') ? 'text-[#547950] border-b-2 border-[#547950] pb-0.5' : 'text-[#547950] hover:text-[#547950]/80'}
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
                className={`flex items-center gap-1 text-[#547950] ${isResourcesActive ? 'border-b-2 border-[#547950] pb-0.5' : 'hover:text-[#547950]/80'}`}
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
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/resources') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Catalogs & Datasheets
                  </Link>
                  <Link
                    href="/resources#fitment-guides"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition"
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Fitment Guides
                  </Link>
                  <Link
                    href="/quality"
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/quality') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Quality & Certifications
                  </Link>
                  <Link
                    href="/resources#packaging"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition"
                    onClick={() => setResourcesMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
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
                className={`flex items-center gap-1 text-[#547950] ${isAboutContactActive ? 'border-b-2 border-[#547950] pb-0.5' : 'hover:text-[#547950]/80'}`}
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
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/about') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setAboutContactMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm text-text-main hover:bg-forest-light hover:text-forest-brand hover:underline transition ${isActive('/contact') ? 'text-forest-brand font-medium bg-forest-light/50' : ''}`}
                    onClick={() => setAboutContactMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Information
                  </Link>
                  <div className="border-t border-forest-brand/20 my-2"></div>
                  <Link
                    href="/request-quote"
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold hover:bg-safety-orange/20 bg-safety-orange/10 hover:underline transition ${isActive('/request-quote') ? 'text-safety-orange bg-safety-orange/15' : 'text-safety-orange'}`}
                    onClick={() => setAboutContactMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Request for Quote
                  </Link>
                </div>
              )}
            </li>
          </ul>
          <div className="md:hidden flex items-center gap-2">
            <Link href="/request-quote" className="px-3 py-1.5 bg-safety-orange text-[#547950] text-sm font-semibold rounded-none hover:bg-safety-orange/90 transition">
              RFQ
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-none text-[#547950] hover:bg-gray-100"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden py-3 border-t border-gray-200`}>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link href="/" className={`block py-2 ${isActive('/') ? 'text-[#547950] font-medium' : 'text-[#547950]/90'}`} onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setProductsMenuOpen(!productsMenuOpen)}
                className={`flex items-center justify-between w-full py-2 ${isProductsActive ? 'text-[#547950] font-medium' : 'text-[#547950]/90'}`}
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
                      className={`block py-2 text-sm text-[#547950]/90 ${isActive('/products') && !pathname?.includes('/series-') && !pathname?.includes('/full-chisel') && !pathname?.includes('/low-profile') && !pathname?.includes('/semi-chisel') ? 'text-[#547950] font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      All Products
                    </Link>
                  </li>
                  <li className="pt-2">
                    <span className="text-xs font-semibold text-[#547950]/70 uppercase tracking-wide">By Series</span>
                  </li>
                  <li>
                    <Link
                      href="/products/series-e"
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/series-e') ? 'text-[#547950] font-medium' : ''}`}
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
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/series-w') ? 'text-[#547950] font-medium' : ''}`}
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
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/series-p') ? 'text-[#547950] font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      Series P
                    </Link>
                  </li>
                  <li className="pt-2">
                    <span className="text-xs font-semibold text-[#547950]/70 uppercase tracking-wide">By Chain Type</span>
                  </li>
                  <li>
                    <Link
                      href="/products/full-chisel-325"
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/full-chisel-325') ? 'text-[#547950] font-medium' : ''}`}
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
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/low-profile-325') ? 'text-[#547950] font-medium' : 'hover:text-[#547950]'}`}
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
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/semi-chisel-38') ? 'text-[#547950] font-medium' : ''}`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setProductsMenuOpen(false)
                      }}
                    >
                      Semi Chisel 3/8&quot;
                    </Link>
                  </li>
                  <li className="pt-2">
                    <span className="text-xs font-semibold text-[#547950]/70 uppercase tracking-wide">By Solution</span>
                  </li>
                  <li>
                    <Link
                      href="/products/applications/battery-saws"
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/applications/battery-saws') ? 'text-[#547950] font-medium' : ''}`}
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
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/applications/cold-climate') ? 'text-[#547950] font-medium' : ''}`}
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
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/applications/professional-loggers') ? 'text-[#547950] font-medium' : ''}`}
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
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/applications/retail-consumer') ? 'text-[#547950] font-medium' : ''}`}
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
                      className={`block py-2 text-sm pl-4 text-[#547950]/90 ${isActive('/products/applications/challenging-conditions') ? 'text-[#547950] font-medium' : 'hover:text-[#547950]'}`}
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
              <Link href="/fitment-finder" className={`block py-2 ${isActive('/fitment-finder') ? 'text-[#547950] font-medium' : 'text-[#547950]/90'}`} onClick={() => setMobileMenuOpen(false)}>
                Fitment Finder
              </Link>
            </li>
            <li>
              <Link href="/oem-private-label" className={`block py-2 ${isActive('/oem-private-label') ? 'text-[#547950] font-medium' : 'text-[#547950]/90'}`} onClick={() => setMobileMenuOpen(false)}>
                OEM & Private Label
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                className={`flex items-center justify-between w-full py-2 text-[#547950]/90 ${isResourcesActive ? 'text-[#547950] font-medium' : 'hover:text-[#547950]'}`}
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
                      className={`block py-2 text-sm text-[#547950]/90 ${isActive('/resources') ? 'text-[#547950] font-medium' : ''}`}
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
                      className="block py-2 text-sm text-[#547950]/90"
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
                      className={`block py-2 text-sm text-[#547950]/90 ${isActive('/quality') ? 'text-[#547950] font-medium' : ''}`}
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
                      className="block py-2 text-sm text-[#547950]/90"
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
                className={`flex items-center justify-between w-full py-2 text-[#547950]/90 ${isAboutContactActive ? 'text-[#547950] font-medium' : 'hover:text-[#547950]'}`}
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
                      className={`block py-2 text-sm text-[#547950]/90 ${isActive('/about') ? 'text-[#547950] font-medium' : ''}`}
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
                      className={`block py-2 text-sm text-[#547950]/90 ${isActive('/contact') ? 'text-[#547950] font-medium' : ''}`}
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
