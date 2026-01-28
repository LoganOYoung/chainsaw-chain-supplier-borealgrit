'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, Download, ArrowRight, ChevronDown, ShoppingCart, X } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Helper function to generate professional MDM No. (Manufacturing Data Model Number)
// Format: CSC-{Series}-{Pitch}-{Gauge}-{DriveLinks}-{ChainType}-{CutterType}
function generateProductID(series: string, pitch: string, gauge: string, driveLinks: string, chainType: string, cutterType: string): string {
  const seriesCode = series === 'Series E' ? 'E' : series === 'Series W' ? 'W' : series === 'Series P' ? 'P' : 'STD'
  // Process pitch: remove quotes/spaces, replace 3/8 with 38, handle .325/.404 by removing leading dot
  let pitchCode = pitch.replace(/["\s]/g, '').replace('3/8', '38')
  if (pitchCode.startsWith('.')) {
    pitchCode = pitchCode.substring(1) // Remove leading dot for .325, .404, etc.
  }
  // Process gauge: remove quotes/spaces and leading dot
  let gaugeCode = gauge.replace(/["\s]/g, '')
  if (gaugeCode.startsWith('.')) {
    gaugeCode = gaugeCode.substring(1) // Remove leading dot
  }
  const chainTypeCode = chainType === 'Low Profile' ? 'LP' : chainType === 'Full' ? 'F' : 'S'
  const cutterCode = cutterType === 'Full-Chisel' ? 'FC' : 'SC'
  return `CSC-${seriesCode}-${pitchCode}-${gaugeCode}-${driveLinks}-${chainTypeCode}-${cutterCode}`
}

// Comprehensive product catalog - Expanded with more products
const PRODUCT_CATALOG = [
  // Series E - Battery Saws (.043" Narrow Kerf)
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '48DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '50DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '52DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '56DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '3/8" LP', gauge: '.043"', driveLinks: '56DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '3/8" LP', gauge: '.043"', driveLinks: '62DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  
  // Series W - Cold Weather (68CrNiMo, Semi-Chisel)
  { series: 'Series W', pitch: '.325"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '.325"', gauge: '.050"', driveLinks: '52DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '.325"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.058"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  
  // Series P - Professional (Full-Chisel, 68CrNiMo)
  { series: 'Series P', pitch: '3/8"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '3/8"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '3/8"', gauge: '.058"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '3/8"', gauge: '.058"', driveLinks: '64DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '.404"', gauge: '.063"', driveLinks: '72DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '.404"', gauge: '.063"', driveLinks: '84DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  
  // Standard Products - .325" Pitch
  { series: 'Standard', pitch: '.325"', gauge: '.043"', driveLinks: '48DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.043"', driveLinks: '50DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '52DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  
  // Standard Products - 3/8" Pitch
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '64DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.058"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.058"', driveLinks: '64DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.058"', driveLinks: '72DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  
  // Standard Products - .404" Pitch
  { series: 'Standard', pitch: '.404"', gauge: '.063"', driveLinks: '72DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.404"', gauge: '.063"', driveLinks: '84DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  
  // Standard Products - 3/8" LP
  { series: 'Standard', pitch: '3/8" LP', gauge: '.043"', driveLinks: '56DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8" LP', gauge: '.043"', driveLinks: '62DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
].map(product => ({
  ...product,
  id: generateProductID(product.series, product.pitch, product.gauge, product.driveLinks, product.chainType, product.cutterType)
}))

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    pitch: '',
    gauge: '',
    chainType: '',
    cutterType: '',
    steelGrade: '',
    series: ''
  })
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const [rfqCart, setRfqCart] = useState<Array<typeof PRODUCT_CATALOG[0] & { quantity?: number }>>([])
  const [showCart, setShowCart] = useState(false)

  // Add product to RFQ cart
  const addToCart = (product: typeof PRODUCT_CATALOG[0]) => {
    const existingIndex = rfqCart.findIndex(item => item.id === product.id)
    if (existingIndex >= 0) {
      // Update quantity if already in cart
      const updatedCart = [...rfqCart]
      updatedCart[existingIndex] = { ...updatedCart[existingIndex], quantity: (updatedCart[existingIndex].quantity || 1) + 1 }
      setRfqCart(updatedCart)
    } else {
      // Add new product
      setRfqCart([...rfqCart, { ...product, quantity: 1 }])
    }
    setShowCart(true)
  }

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setRfqCart(rfqCart.filter(item => item.id !== productId))
  }

  // Build bulk RFQ URL
  const buildBulkRFQUrl = () => {
    const params = new URLSearchParams()
    rfqCart.forEach((item, index) => {
      params.append(`product_${index}`, item.id)
      params.append(`pitch_${index}`, item.pitch)
      params.append(`gauge_${index}`, item.gauge)
      params.append(`driveLinks_${index}`, item.driveLinks)
      if (item.quantity) {
        params.append(`quantity_${index}`, item.quantity.toString())
      }
    })
    return `/request-quote?${params.toString()}&bulk=true`
  }

  // Clear cart
  const clearCart = () => {
    setRfqCart([])
    setShowCart(false)
  }

  // Get unique values for filter options
  const uniquePitches = useMemo(() => [...new Set(PRODUCT_CATALOG.map(p => p.pitch))].sort(), [])
  const uniqueGauges = useMemo(() => [...new Set(PRODUCT_CATALOG.map(p => p.gauge))].sort(), [])
  const uniqueChainTypes = useMemo(() => [...new Set(PRODUCT_CATALOG.map(p => p.chainType))].sort(), [])
  const uniqueCutterTypes = useMemo(() => [...new Set(PRODUCT_CATALOG.map(p => p.cutterType))].sort(), [])
  const uniqueSteelGrades = useMemo(() => [...new Set(PRODUCT_CATALOG.map(p => p.steelGrade))].sort(), [])
  const uniqueSeries = useMemo(() => [...new Set(PRODUCT_CATALOG.map(p => p.series))].sort(), [])

  // Category definitions
  const categories = [
    { id: 'all', label: 'All Products', count: PRODUCT_CATALOG.length },
    { id: 'series-e', label: 'Series E', count: PRODUCT_CATALOG.filter(p => p.series === 'Series E').length },
    { id: 'series-w', label: 'Series W', count: PRODUCT_CATALOG.filter(p => p.series === 'Series W').length },
    { id: 'series-p', label: 'Series P', count: PRODUCT_CATALOG.filter(p => p.series === 'Series P').length },
    { id: 'standard', label: 'Standard', count: PRODUCT_CATALOG.filter(p => p.series === 'Standard').length },
    { id: 'pitch-325', label: '.325" Pitch', count: PRODUCT_CATALOG.filter(p => p.pitch === '.325"').length },
    { id: 'pitch-38', label: '3/8" Pitch', count: PRODUCT_CATALOG.filter(p => p.pitch === '3/8"').length },
    { id: 'pitch-404', label: '.404" Pitch', count: PRODUCT_CATALOG.filter(p => p.pitch === '.404"').length },
    { id: 'low-profile', label: 'Low Profile', count: PRODUCT_CATALOG.filter(p => p.chainType === 'Low Profile').length },
    { id: 'full-chisel', label: 'Full-Chisel', count: PRODUCT_CATALOG.filter(p => p.cutterType === 'Full-Chisel').length },
  ]

  // Filter products
  const filteredProducts = useMemo(() => {
    let products = PRODUCT_CATALOG

    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'series-e') products = products.filter(p => p.series === 'Series E')
      else if (selectedCategory === 'series-w') products = products.filter(p => p.series === 'Series W')
      else if (selectedCategory === 'series-p') products = products.filter(p => p.series === 'Series P')
      else if (selectedCategory === 'standard') products = products.filter(p => p.series === 'Standard')
      else if (selectedCategory === 'pitch-325') products = products.filter(p => p.pitch === '.325"')
      else if (selectedCategory === 'pitch-38') products = products.filter(p => p.pitch === '3/8"')
      else if (selectedCategory === 'pitch-404') products = products.filter(p => p.pitch === '.404"')
      else if (selectedCategory === 'low-profile') products = products.filter(p => p.chainType === 'Low Profile')
      else if (selectedCategory === 'full-chisel') products = products.filter(p => p.cutterType === 'Full-Chisel')
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      products = products.filter(product => {
        const searchableText = `${product.id} ${product.series} ${product.pitch} ${product.gauge} ${product.driveLinks} ${product.chainType} ${product.cutterType} ${product.steelGrade} ${product.description}`.toLowerCase()
        return searchableText.includes(query)
      })
    }

    // Parameter filters
    if (filters.pitch) products = products.filter(p => p.pitch === filters.pitch)
    if (filters.gauge) products = products.filter(p => p.gauge === filters.gauge)
    if (filters.chainType) products = products.filter(p => p.chainType === filters.chainType)
    if (filters.cutterType) products = products.filter(p => p.cutterType === filters.cutterType)
    if (filters.steelGrade) products = products.filter(p => p.steelGrade === filters.steelGrade)
    if (filters.series) products = products.filter(p => p.series === filters.series)

    return products
  }, [searchQuery, filters, selectedCategory])

  // Pagination
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, itemsPerPage)
  }, [filteredProducts, itemsPerPage])

  const hasMore = filteredProducts.length > itemsPerPage

  const clearFilters = () => {
    setFilters({
      pitch: '',
      gauge: '',
      chainType: '',
      cutterType: '',
      steelGrade: '',
      series: ''
    })
    setSearchQuery('')
  }

  const activeFilterCount = Object.values(filters).filter(v => v).length

  return (
    <>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Chainsaw Chain Product Catalog
          </h1>
          <p className="text-text-body text-base leading-relaxed max-w-4xl">
            Complete technical specifications for all chainsaw chain products. Filter by pitch, gauge, drive links, chain type, cutter profile, and steel grade. All products meet <strong>ANSI B175.1</strong> standards. Selected models certified for <strong>CSA Z62.3</strong> (Canadian market). OEM and private label configurations available.
          </p>
        </header>

        {/* Product Range Summary */}
        <section className="mb-10 bg-white border border-forest-brand/30 rounded-none p-6">
          <h2 className="text-lg font-bold text-text-main mb-4">Complete Product Range</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-forest-brand/30">
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main bg-gray-50">Parameter</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main bg-gray-50">Available Options</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main bg-gray-50">Specifications</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-semibold text-text-main">Pitch</td>
                  <td className="px-4 py-3 text-industrial">.325&quot;, 3/8&quot; LP, 3/8&quot;, .404&quot;</td>
                  <td className="px-4 py-3 text-text-body">.325&quot; (8.25mm), 3/8&quot; LP (9.3mm), 3/8&quot; (9.5mm), .404&quot; (10.3mm)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-semibold text-text-main">Gauge</td>
                  <td className="px-4 py-3 text-industrial">.043&quot;, .050&quot;, .058&quot;, .063&quot;</td>
                  <td className="px-4 py-3 text-text-body">.043&quot; (1.1mm), .050&quot; (1.3mm), .058&quot; (1.5mm), .063&quot; (1.6mm)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-semibold text-text-main">Drive Links</td>
                  <td className="px-4 py-3 text-industrial">48DL - 84DL</td>
                  <td className="px-4 py-3 text-text-body">Standard range: 48DL - 84DL. Custom configurations available for OEM orders.</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-semibold text-text-main">Chain Type</td>
                  <td className="px-4 py-3 text-industrial">Full Chain, Semi Chain, Low Profile</td>
                  <td className="px-4 py-3 text-text-body">Full Chain, Semi Chain, Low Profile. Full-Chisel and Semi-Chisel cutter profiles.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-text-main">Cutter Profile</td>
                  <td className="px-4 py-3 text-industrial">Full-Chisel, Semi-Chisel</td>
                  <td className="px-4 py-3 text-text-body">Full-Chisel (square-corner) for maximum cutting speed. Semi-Chisel (round-corner) for durability in dirty conditions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Featured Series - Quick Access */}
        <section className="mb-10 bg-gray-50 rounded-none p-6 border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Featured Application-Specific Series</h2>
          <p className="text-sm text-text-body mb-4">
            Purpose-built chains optimized for specific applications and environmental conditions.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/products/series-e"
              className="block p-4 bg-white border border-forest-brand/30 rounded-none hover:border-forest-brand hover:shadow-md transition"
            >
              <h3 className="font-semibold text-text-main mb-1">Series E</h3>
              <p className="text-xs text-text-body mb-2">Electric Era - Narrow Kerf</p>
              <p className="text-xs text-industrial">.043&quot; gauge optimized for battery-powered saws</p>
            </Link>
            <Link
              href="/products/series-w"
              className="block p-4 bg-white border border-forest-brand/30 rounded-none hover:border-forest-brand hover:shadow-md transition"
            >
              <h3 className="font-semibold text-text-main mb-1">Series W</h3>
              <p className="text-xs text-text-body mb-2">Arctic Edge - Cold Weather</p>
              <p className="text-xs text-industrial">68CrNiMo alloy for sub-zero conditions</p>
            </Link>
            <Link
              href="/products/series-p"
              className="block p-4 bg-white border border-forest-brand/30 rounded-none hover:border-forest-brand hover:shadow-md transition"
            >
              <h3 className="font-semibold text-text-main mb-1">Series P</h3>
              <p className="text-xs text-text-body mb-2">Professional Logging</p>
              <p className="text-xs text-industrial">Full-chisel design for maximum output</p>
            </Link>
          </div>
        </section>

        {/* Common Specification Combinations */}
        <section className="mb-10 bg-white border border-forest-brand/30 rounded-none p-6">
          <h2 className="text-lg font-bold text-text-main mb-4">Common Specification Combinations</h2>
          <p className="text-sm text-text-body mb-4">
            Quick access to the most frequently ordered pitch/gauge/drive link combinations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => {
                setFilters({ ...filters, pitch: '.325"', gauge: '.050"', chainType: 'Full' })
                setShowFilters(true)
                setSelectedCategory('all')
              }}
              className="text-left p-3 bg-gray-50 border border-forest-brand/30 rounded-none hover:border-forest-brand hover:bg-accent/5 transition"
            >
              <div className="font-semibold text-text-main text-sm mb-1">.325" / .050"</div>
              <div className="text-xs text-text-body">Mid-size professional</div>
            </button>
            <button
              onClick={() => {
                setFilters({ ...filters, pitch: '3/8"', gauge: '.050"', chainType: 'Full' })
                setShowFilters(true)
                setSelectedCategory('all')
              }}
              className="text-left p-3 bg-gray-50 border border-forest-brand/30 rounded-none hover:border-forest-brand hover:bg-accent/5 transition"
            >
              <div className="font-semibold text-text-main text-sm mb-1">3/8" / .050"</div>
              <div className="text-xs text-text-body">Professional logging</div>
            </button>
            <button
              onClick={() => {
                setFilters({ ...filters, pitch: '.325"', gauge: '.043"', chainType: 'Low Profile' })
                setShowFilters(true)
                setSelectedCategory('all')
              }}
              className="text-left p-3 bg-gray-50 border border-forest-brand/30 rounded-none hover:border-forest-brand hover:bg-accent/5 transition"
            >
              <div className="font-semibold text-text-main text-sm mb-1">.325" LP / .043"</div>
              <div className="text-xs text-text-body">Battery saws</div>
            </button>
            <button
              onClick={() => {
                setFilters({ ...filters, pitch: '3/8"', gauge: '.050"', chainType: 'Semi' })
                setShowFilters(true)
                setSelectedCategory('all')
              }}
              className="text-left p-3 bg-gray-50 border border-forest-brand/30 rounded-none hover:border-forest-brand hover:bg-accent/5 transition"
            >
              <div className="font-semibold text-text-main text-sm mb-1">3/8" / .050"</div>
              <div className="text-xs text-text-body">General purpose</div>
            </button>
            <button
              onClick={() => {
                setFilters({ ...filters, pitch: '.404"', gauge: '.063"', chainType: 'Full' })
                setShowFilters(true)
                setSelectedCategory('all')
              }}
              className="text-left p-3 bg-gray-50 border border-forest-brand/30 rounded-none hover:border-forest-brand hover:bg-accent/5 transition"
            >
              <div className="font-semibold text-text-main text-sm mb-1">.404" / .063"</div>
              <div className="text-xs text-text-body">Large professional</div>
            </button>
            <button
              onClick={() => {
                setFilters({ ...filters, pitch: '.325"', gauge: '.058"', chainType: 'Full' })
                setShowFilters(true)
                setSelectedCategory('all')
              }}
              className="text-left p-3 bg-gray-50 border border-forest-brand/30 rounded-none hover:border-forest-brand hover:bg-accent/5 transition"
            >
              <div className="font-semibold text-text-main text-sm mb-1">.325" / .058"</div>
              <div className="text-xs text-text-body">Stihl compatible</div>
            </button>
            <button
              onClick={() => {
                setFilters({ ...filters, pitch: '3/8" LP', gauge: '.043"', chainType: 'Low Profile' })
                setShowFilters(true)
                setSelectedCategory('all')
              }}
              className="text-left p-3 bg-gray-50 border border-forest-brand/30 rounded-none hover:border-forest-brand hover:bg-accent/5 transition"
            >
              <div className="font-semibold text-text-main text-sm mb-1">3/8" LP / .043"</div>
              <div className="text-xs text-text-body">Consumer saws</div>
            </button>
            <button
              onClick={() => {
                setFilters({ ...filters, pitch: '3/8"', gauge: '.063"', chainType: 'Full' })
                setShowFilters(true)
                setSelectedCategory('all')
              }}
              className="text-left p-3 bg-gray-50 border border-forest-brand/30 rounded-none hover:border-forest-brand hover:bg-accent/5 transition"
            >
              <div className="font-semibold text-text-main text-sm mb-1">3/8" / .063"</div>
              <div className="text-xs text-text-body">Heavy-duty pro</div>
            </button>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-8" aria-label="Product search and filter tools">
          <div className="bg-white border border-forest-brand/30 rounded-none p-6 mb-4">
            <h2 className="text-lg font-bold text-text-main mb-4">Search & Filter Products</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <label htmlFor="product-search" className="sr-only">Search products by specifications</label>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-body" />
                <input
                  id="product-search"
                  type="text"
                  placeholder="Search by MDM No., pitch, gauge, drive links, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
                  aria-label="Search products by technical specifications"
                />
              </div>
              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 bg-white text-text-body text-sm font-semibold hover:bg-gray-50 transition rounded"
                aria-expanded={showFilters}
                aria-controls="filter-panel"
              >
                <Filter className="w-4 h-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-forest-brand text-white text-xs px-2 py-0.5 rounded-none" aria-label={`${activeFilterCount} active filters`}>
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
            
            {/* Category Tabs - Integrated */}
            <div className="border-t border-forest-brand/30 pt-4 mt-4">
              <h3 className="text-sm font-semibold text-text-main mb-3">Browse by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      setItemsPerPage(20) // Reset pagination when category changes
                    }}
                    className={`px-4 py-2 text-sm font-semibold rounded-none transition ${
                      selectedCategory === category.id
                        ? 'bg-forest-brand text-white'
                        : 'bg-gray-50 border border-gray-300 text-text-bodyhover:border-forest-brand hover:bg-gray-100'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div id="filter-panel" className="bg-gray-50 border border-forest-brand/30 rounded-none p-6 mb-4">
              <h3 className="text-sm font-semibold text-text-main mb-4">Filter by Technical Parameters</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* Pitch Filter */}
                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">Pitch</label>
                  <select
                    value={filters.pitch}
                    onChange={(e) => setFilters({ ...filters, pitch: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
                  >
                    <option value="">All</option>
                    {uniquePitches.map(pitch => (
                      <option key={pitch} value={pitch}>{pitch}</option>
                    ))}
                  </select>
                </div>

                {/* Gauge Filter */}
                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">Gauge</label>
                  <select
                    value={filters.gauge}
                    onChange={(e) => setFilters({ ...filters, gauge: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
                  >
                    <option value="">All</option>
                    {uniqueGauges.map(gauge => (
                      <option key={gauge} value={gauge}>{gauge}</option>
                    ))}
                  </select>
                </div>

                {/* Chain Type Filter */}
                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">Chain Type</label>
                  <select
                    value={filters.chainType}
                    onChange={(e) => setFilters({ ...filters, chainType: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
                  >
                    <option value="">All</option>
                    {uniqueChainTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Cutter Type Filter */}
                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">Cutter Type</label>
                  <select
                    value={filters.cutterType}
                    onChange={(e) => setFilters({ ...filters, cutterType: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
                  >
                    <option value="">All</option>
                    {uniqueCutterTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Steel Grade Filter */}
                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">Steel Grade</label>
                  <select
                    value={filters.steelGrade}
                    onChange={(e) => setFilters({ ...filters, steelGrade: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
                  >
                    <option value="">All</option>
                    {uniqueSteelGrades.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>

                {/* Series Filter */}
                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1">Series</label>
                  <select
                    value={filters.series}
                    onChange={(e) => setFilters({ ...filters, series: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 text-text-body text-sm focus:ring-2 focus:ring-accent focus:border-forest-brand outline-none rounded"
                  >
                    <option value="">All</option>
                    {uniqueSeries.map(series => (
                      <option key={series} value={series}>{series}</option>
                    ))}
                  </select>
                </div>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-forest-brand font-medium hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}

          {/* Results Count */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-sm text-industrial">
                Showing <strong className="font-semibold text-text-main">{displayedProducts.length}</strong> of <strong className="font-semibold text-text-main">{filteredProducts.length}</strong> product{filteredProducts.length !== 1 ? 's' : ''}
                {selectedCategory !== 'all' && (
                  <span className="text-text-body ml-2">
                    (category: {categories.find(c => c.id === selectedCategory)?.label})
                  </span>
                )}
                {activeFilterCount > 0 && (
                  <span className="text-text-body ml-2">
                    (filtered by {activeFilterCount} parameter{activeFilterCount > 1 ? 's' : ''})
                  </span>
                )}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {rfqCart.length > 0 && (
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-forest-brand text-white text-sm font-semibold hover:bg-forest-brand/90 transition rounded-none relative"
                >
                  <ShoppingCart className="w-4 h-4" />
                  RFQ Cart ({rfqCart.length})
                  {rfqCart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-safety-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {rfqCart.length}
                    </span>
                  )}
                </button>
              )}
              <Link
                href={rfqCart.length > 0 ? buildBulkRFQUrl() : "/request-quote"}
                className="inline-flex items-center gap-2 px-4 py-2 bg-safety-orange text-white text-sm font-semibold hover:bg-safety-orange/90 transition rounded-none"
              >
                {rfqCart.length > 0 ? `Request Quote (${rfqCart.length} items)` : 'Request Bulk Quote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RFQ Cart Panel */}
          {showCart && rfqCart.length > 0 && (
            <div className="mb-4 bg-white border-2 border-forest-brand rounded-none p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  RFQ Cart ({rfqCart.length} {rfqCart.length === 1 ? 'item' : 'items'})
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={clearCart}
                    className="text-xs text-text-body hover:text-text-main underline"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-text-body hover:text-text-main"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="max-h-60 overflow-y-auto mb-3">
                <div className="space-y-2">
                  {rfqCart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded-none">
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-text-main">{item.id}</div>
                        <div className="text-xs text-text-body">
                          {item.pitch} / {item.gauge} / {item.driveLinks} - {item.chainType} {item.cutterType}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                        aria-label={`Remove ${item.id} from cart`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={buildBulkRFQUrl()}
                className="block w-full text-center px-4 py-2 bg-safety-orange text-white font-semibold hover:bg-safety-orange/90 transition rounded-none"
              >
                Request Quote for {rfqCart.length} {rfqCart.length === 1 ? 'Item' : 'Items'}
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </Link>
            </div>
          )}
        </section>

        {/* Product Table */}
        <section className="bg-white rounded-none border border-forest-brand/30 overflow-hidden" aria-label="Product specifications table">
          <div className="px-4 sm:px-6 py-4 border-b border-forest-brand/30 bg-gray-50">
            <h2 className="text-lg font-bold text-text-main">Product Specifications</h2>
            <p className="text-xs text-text-body mt-1">
              Complete technical specifications for all available chainsaw chain products. Click on Series links for detailed information.
            </p>
          </div>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm min-w-[1000px]" role="table" aria-label="Chainsaw chain product catalog">
              <thead className="bg-gray-50 border-b border-forest-brand/30">
                <tr>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">MDM No.</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">Series</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">Pitch</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">Gauge</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">Drive Links</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">Chain Type</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">Cutter Type</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">Steel Grade</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">Description</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-text-main">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts.length > 0 ? (
                  displayedProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                      <td className="px-4 py-3 font-medium text-text-main">
                        <span className="font-mono text-xs font-semibold">{product.id}</span>
                      </td>
                      <td className="px-4 py-3 text-industrial">
                        {product.series === 'Series E' && <Link href="/products/series-e" className="text-forest-brand hover:underline font-medium">{product.series}</Link>}
                        {product.series === 'Series W' && <Link href="/products/series-w" className="text-forest-brand hover:underline font-medium">{product.series}</Link>}
                        {product.series === 'Series P' && <Link href="/products/series-p" className="text-forest-brand hover:underline font-medium">{product.series}</Link>}
                        {!['Series E', 'Series W', 'Series P'].includes(product.series) && <span className="text-industrial">{product.series}</span>}
                      </td>
                      <td className="px-4 py-3 text-text-bodyfont-medium">{product.pitch}</td>
                      <td className="px-4 py-3 text-text-bodyfont-medium">{product.gauge}</td>
                      <td className="px-4 py-3 text-industrial">{product.driveLinks}</td>
                      <td className="px-4 py-3 text-industrial">{product.chainType}</td>
                      <td className="px-4 py-3 text-industrial">{product.cutterType}</td>
                      <td className="px-4 py-3 text-industrial">
                        <span className={product.steelGrade === '68CrNiMo' ? 'font-medium text-text-main' : ''}>{product.steelGrade}</span>
                      </td>
                      <td className="px-4 py-3 text-text-body text-xs">{product.description}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => addToCart(product)}
                          className="text-xs px-3 py-1.5 bg-forest-brand text-white font-semibold hover:bg-forest-brand/90 transition rounded-none text-center"
                          aria-label={`Add ${product.id} to RFQ cart`}
                        >
                          Add to RFQ
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={10} className="px-4 py-8 text-center text-industrial">
                      <p>No products found matching your criteria.</p>
                      <p className="text-sm text-text-body mt-2">
                        Try adjusting your filters or search query, or <Link href="/contact" className="text-forest-brand hover:underline">contact us</Link> for custom specifications.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Load More Button */}
          {hasMore && (
            <div className="px-4 sm:px-6 py-4 border-t border-forest-brand/30 bg-gray-50 text-center">
              <button
                onClick={() => setItemsPerPage(prev => prev + 20)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-300 text-text-body text-sm font-semibold hover:bg-gray-50 hover:border-forest-brand transition rounded"
              >
                Load More Products
                <ChevronDown className="w-4 h-4" />
              </button>
              <p className="text-xs text-text-body mt-2">
                Showing {displayedProducts.length} of {filteredProducts.length} products
              </p>
            </div>
          )}
        </section>

        {/* MDM No. Format Explanation */}
        <section className="mt-10 p-6 bg-white rounded-none border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">MDM No. Format</h2>
          <p className="text-sm text-text-body mb-4">
            Our MDM (Manufacturing Data Model) numbers follow a standardized format that encodes all key technical specifications:
          </p>
          <div className="bg-gray-50 border border-forest-brand/30 rounded-none p-4 mb-4">
            <p className="font-mono text-sm font-semibold text-text-main mb-3">
              Format: CSC-{'{Series}'}-{'{Pitch}'}-{'{Gauge}'}-{'{DriveLinks}'}-{'{ChainType}'}-{'{CutterType}'}
            </p>
            <div className="space-y-2 text-sm text-industrial">
              <div>
                <span className="font-semibold text-text-main">CSC:</span> Chainsaw Chain prefix
              </div>
              <div>
                <span className="font-semibold text-text-main">Series:</span> E (Series E), W (Series W), P (Series P), STD (Standard)
              </div>
              <div>
                <span className="font-semibold text-text-main">Pitch:</span> 325 (.325&quot;), 38 (3/8&quot;), 38LP (3/8&quot; LP), 404 (.404&quot;)
              </div>
              <div>
                <span className="font-semibold text-text-main">Gauge:</span> 043 (.043&quot;), 050 (.050&quot;), 058 (.058&quot;), 063 (.063&quot;)
              </div>
              <div>
                <span className="font-semibold text-text-main">DriveLinks:</span> e.g., 50DL, 56DL, 72DL
              </div>
              <div>
                <span className="font-semibold text-text-main">ChainType:</span> LP (Low Profile), F (Full), S (Semi)
              </div>
              <div>
                <span className="font-semibold text-text-main">CutterType:</span> FC (Full-Chisel), SC (Semi-Chisel)
              </div>
            </div>
          </div>
          <p className="text-xs text-text-body italic">
            Example: <span className="font-mono font-semibold text-text-main">CSC-E-325-043-50DL-LP-SC</span> = Series E, .325&quot; pitch, .043&quot; gauge, 50 drive links, Low Profile, Semi-Chisel
          </p>
        </section>

        {/* Technical Reference & Standards */}
        <section className="mt-10 p-6 bg-gray-50 rounded-none border border-forest-brand/30">
          <h2 className="text-lg font-bold text-text-main mb-4">Technical Reference & Standards</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-industrial">
            <div>
              <h3 className="font-semibold text-text-main mb-3">Available Specifications</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-text-main mb-1">Pitch:</p>
                  <p className="text-text-body">.325&quot; (8.25mm), 3/8&quot; LP (9.3mm Low Profile), 3/8&quot; (9.5mm), .404&quot; (10.3mm)</p>
                </div>
                <div>
                  <p className="font-medium text-text-main mb-1">Gauge:</p>
                  <p className="text-text-body">.043&quot; (1.1mm), .050&quot; (1.3mm), .058&quot; (1.5mm), .063&quot; (1.6mm)</p>
                </div>
                <div>
                  <p className="font-medium text-text-main mb-1">Drive Links:</p>
                  <p className="text-text-body">48DL - 84DL standard range. Custom drive link counts available for OEM orders.</p>
                </div>
                <div>
                  <p className="font-medium text-text-main mb-1">Chain Type:</p>
                  <p className="text-text-body">Full Chain, Semi Chain, Low Profile</p>
                </div>
                <div>
                  <p className="font-medium text-text-main mb-1">Cutter Profile:</p>
                  <p className="text-text-body">Full-Chisel (square-corner), Semi-Chisel (round-corner)</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-3">Materials & Compliance</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-text-main mb-1">Steel Grades:</p>
                  <p className="text-text-body">65Mn (standard carbon steel), 68CrNiMo (premium alloy steel with enhanced impact toughness)</p>
                </div>
                <div>
                  <p className="font-medium text-text-main mb-1">Safety Standards:</p>
                  <p className="text-text-body">ANSI B175.1 compliant (all products). CSA Z62.3 compliant (selected models for Canadian market).</p>
                </div>
                <div>
                  <p className="font-medium text-text-main mb-1">Quality Management:</p>
                  <p className="text-text-body">ISO 9001 certified production. Material traceability. Batch testing protocols.</p>
                </div>
                <div>
                  <p className="font-medium text-text-main mb-1">Customization:</p>
                  <p className="text-text-body">OEM and private label configurations available. Custom packaging, labeling, and part numbers. MOQ and lead time per project.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-forest-brand/30 flex flex-wrap items-center gap-4">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm text-forest-brand font-semibold hover:underline"
            >
              <Download className="w-4 h-4" />
              Download Complete Product Catalog (PDF)
            </Link>
            <Link
              href="/fitment-finder"
              className="inline-flex items-center gap-2 text-sm text-forest-brand font-semibold hover:underline"
            >
              Find Compatible Chain by Saw Model
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Chainsaw Chain",
              "description": "Complete chainsaw chain product catalog with technical specifications. ANSI B175.1 and CSA Z62.3 compliant.",
              "brand": {
                "@type": "Brand",
                "name": "Borealgrit"
              },
              "category": "Industrial Equipment",
              "offers": {
                "@type": "AggregateOffer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  )
}
