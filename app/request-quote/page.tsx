'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Clock, Download, CheckCircle2, Loader2, X, ShoppingCart, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Contact information - Update these with your actual contact details
const CONTACT_EMAIL = 'sales@example.com'
const CONTACT_PHONE = '+1 (555) 123-4567'
const CONTACT_ADDRESS = 'Your Company Address, City, State, ZIP Code'
const BUSINESS_HOURS = 'Monday - Friday: 8:00 AM - 5:00 PM EST'
const RESPONSE_TIME = 'We respond to all inquiries within 24 hours during business days.'

// EmailJS Configuration - Replace with your actual EmailJS credentials
// Get these from: https://dashboard.emailjs.com/admin
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key

interface CartProduct {
  id: string
  pitch: string
  gauge: string
  driveLinks: string
  quantity?: number
  packaging?: string
  notes?: string
}

function RequestQuoteForm() {
  const searchParams = useSearchParams()
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  // Form data
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    message: '',
    expectedQuantity: '',
    annualVolume: '',
    targetMarket: 'USA / Canada',
    incoterms: 'FOB China',
    currency: 'USD',
  })

  // Parse cart products from URL parameters
  useEffect(() => {
    const bulk = searchParams.get('bulk')
    if (bulk === 'true') {
      const products: CartProduct[] = []
      let index = 0
      
      while (searchParams.get(`product_${index}`)) {
        products.push({
          id: searchParams.get(`product_${index}`) || '',
          pitch: searchParams.get(`pitch_${index}`) || '',
          gauge: searchParams.get(`gauge_${index}`) || '',
          driveLinks: searchParams.get(`driveLinks_${index}`) || '',
          quantity: parseInt(searchParams.get(`quantity_${index}`) || '1'),
          packaging: searchParams.get(`packaging_${index}`) || undefined,
          notes: searchParams.get(`notes_${index}`) || undefined,
        })
        index++
      }
      
      if (products.length > 0) {
        setCartProducts(products)
        setShowForm(true)
      }
    }
  }, [searchParams])

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(EMAILJS_PUBLIC_KEY)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
      // Fallback: Generate mailto link
      const subject = encodeURIComponent(`RFQ Request - ${formData.companyName}`)
      const body = encodeURIComponent(`
Company: ${formData.companyName}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
City: ${formData.city}

Products Requested:
${cartProducts.map((p, i) => {
  let productInfo = `${i + 1}. ${p.id} - ${p.pitch} / ${p.gauge} / ${p.driveLinks} (Qty: ${p.quantity || 1})`
  if (p.packaging) productInfo += `\n   Packaging: ${p.packaging}`
  if (p.notes) productInfo += `\n   Notes: ${p.notes}`
  return productInfo
}).join('\n\n')}

Expected Quantity: ${formData.expectedQuantity}
Annual Volume: ${formData.annualVolume}
Target Market: ${formData.targetMarket}
Incoterms: ${formData.incoterms}
Currency: ${formData.currency}

Message:
${formData.message}
      `)
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      setIsSubmitting(false)
      setSubmitStatus('success')
      return
    }

    try {
      // Prepare email template parameters
      const templateParams = {
        company_name: formData.companyName,
        contact_name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        city: formData.city,
        message: formData.message,
        expected_quantity: formData.expectedQuantity,
        annual_volume: formData.annualVolume,
        target_market: formData.targetMarket,
        incoterms: formData.incoterms,
        currency: formData.currency,
        products: cartProducts.map((p, i) => {
          let productInfo = `${i + 1}. ${p.id} - ${p.pitch} / ${p.gauge} / ${p.driveLinks} (Qty: ${p.quantity || 1})`
          if (p.packaging) productInfo += `\n   Packaging: ${p.packaging}`
          if (p.notes) productInfo += `\n   Notes: ${p.notes}`
          return productInfo
        }).join('\n\n'),
        product_count: cartProducts.length.toString(),
        submission_date: new Date().toLocaleString(),
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      
      setSubmitStatus('success')
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          country: '',
          city: '',
          message: '',
          expectedQuantity: '',
          annualVolume: '',
          targetMarket: 'USA / Canada',
          incoterms: 'FOB China',
          currency: 'USD',
        })
        setCartProducts([])
        setShowForm(false)
      }, 3000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  // Generate RFQ template as CSV format for Excel
  const generateRFQTemplate = () => {
    const csvRows = []
    
    // SECTION 1: RFQ HEADER
    csvRows.push('RFQ TEMPLATE - CHAINSAW CHAIN')
    csvRows.push('')
    csvRows.push('SECTION 1: RFQ HEADER')
    csvRows.push('')
    csvRows.push('Field,Value')
    csvRows.push('RFQ No.,')
    csvRows.push('Destination Market,USA / Canada')
    csvRows.push('Incoterms,FOB China')
    csvRows.push('Currency,USD')
    csvRows.push('OEM / Private Label,Yes / No')
    csvRows.push('Expected First Order Quantity,')
    csvRows.push('Estimated Annual Volume,')
    csvRows.push('Target Lead Time,')
    csvRows.push('')
    csvRows.push('')
    
    // SECTION 2: LINE ITEMS TABLE
    csvRows.push('SECTION 2: LINE ITEMS')
    csvRows.push('')
    csvRows.push('No.,MDM No.,Pitch,Gauge,Drive Links,Cutter Profile,Chain Type,Steel Grade / Material,Description,Target Market,Compatible Brands / Models,Compliance,Finish,Packaging Reference,Sample Needed (Y/N),Quantity,Unit,Unit Price (USD FOB),Amount (USD),Notes')
    csvRows.push('1,,,,,,,,,,,,,,,,,,')
    csvRows.push('2,,,,,,,,,,,,,,,,,,')
    csvRows.push('3,,,,,,,,,,,,,,,,,,')
    csvRows.push('4,,,,,,,,,,,,,,,,,,')
    csvRows.push('5,,,,,,,,,,,,,,,,,,')
    csvRows.push('')
    csvRows.push('')
    
    // SECTION 3: FOOTER
    csvRows.push('SECTION 3: FOOTER')
    csvRows.push('')
    csvRows.push('Field,Value')
    csvRows.push('Validity of Quotation,')
    csvRows.push('Remarks from Supplier,')
    csvRows.push('Supplier Company Name,')
    csvRows.push('Contact Person,')
    csvRows.push('Date,')
    
    return csvRows.join('\n')
  }

  // Download RFQ template as CSV file (Excel-compatible)
  const downloadRFQTemplate = () => {
    const csvContent = generateRFQTemplate()
    // Add BOM for Excel UTF-8 compatibility
    const BOM = '\uFEFF'
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `RFQ_Template_Chainsaw_Chain_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-main mb-2">Request for Quote</h1>
          <p className="text-text-body text-sm">
            {showForm && cartProducts.length > 0 
              ? 'Please fill in your contact information to receive a quote for the selected products.'
              : 'Download our RFQ template, fill in your requirements, and send it to us for a quick quote.'}
          </p>
        </div>

        {/* Bulk Quote Form */}
        {showForm && cartProducts.length > 0 && (
          <section className="mb-8 bg-white rounded-none border-2 border-forest-brand shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-main flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                Bulk Quote Request ({cartProducts.length} {cartProducts.length === 1 ? 'Product' : 'Products'})
              </h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  setCartProducts([])
                }}
                className="text-text-body hover:text-text-main"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Products Summary */}
            <div className="mb-6 bg-gray-50 border border-forest-brand/30 rounded-none p-4">
              <h3 className="text-sm font-semibold text-text-main mb-3">Selected Products:</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {cartProducts.map((product, index) => (
                  <div key={index} className="bg-white p-3 rounded-none border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <span className="font-mono font-semibold text-text-main text-sm">{product.id}</span>
                        <span className="text-text-body text-xs ml-2">
                          {product.pitch} / {product.gauge} / {product.driveLinks}
                        </span>
                      </div>
                      <span className="text-text-body text-sm font-medium">Qty: {product.quantity || 1}</span>
                    </div>
                    {product.packaging && (
                      <div className="text-xs text-text-body mb-1">
                        <span className="font-semibold">Packaging:</span> {product.packaging}
                      </div>
                    )}
                    {product.notes && (
                      <div className="text-xs text-text-body mt-2 pt-2 border-t border-gray-200">
                        <span className="font-semibold">Notes:</span> {product.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-text-main mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-text-main mb-1">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-main mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-text-main mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-text-main mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-text-main mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </div>

                {/* Expected Quantity */}
                <div>
                  <label htmlFor="expectedQuantity" className="block text-sm font-semibold text-text-main mb-1">
                    Expected First Order Quantity
                  </label>
                  <input
                    type="text"
                    id="expectedQuantity"
                    name="expectedQuantity"
                    placeholder="e.g., 1000 units"
                    value={formData.expectedQuantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </div>

                {/* Annual Volume */}
                <div>
                  <label htmlFor="annualVolume" className="block text-sm font-semibold text-text-main mb-1">
                    Estimated Annual Volume
                  </label>
                  <input
                    type="text"
                    id="annualVolume"
                    name="annualVolume"
                    placeholder="e.g., 10000 units/year"
                    value={formData.annualVolume}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text-main mb-1">
                  Additional Message or Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  placeholder="Any specific requirements, packaging preferences, or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-safety-orange text-white font-semibold hover:bg-safety-orange/90 transition disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit RFQ Request
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Request submitted successfully! We'll contact you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600">
                    <X className="w-5 h-5" />
                    <span className="text-sm font-medium">Error submitting request. Please try again or contact us directly.</span>
                  </div>
                )}
              </div>
            </form>
          </section>
        )}

        {/* RFQ Template Download */}
        <section className="mb-8 bg-white rounded-none border border-forest-brand/30 shadow-sm p-6">
          <h2 className="text-2xl font-bold text-text-main mb-4">Ready for a Batch Quote?</h2>
          <p className="text-text-body text-sm mb-6 leading-relaxed">
            Download our Professional RFQ Template to streamline your procurement process. This template is designed specifically for North American forestry standards (ANSI/CSA). Once filled, upload it via our contact form, and our lead engineer will provide a comprehensive pricing analysis as soon as possible.
          </p>
          
          {/* RFQ Template Preview */}
          <div className="mb-6 bg-gray-50 border-2 border-forest-brand/30 rounded-none p-4 overflow-x-auto">
            <div className="relative w-full min-w-[600px] bg-white border border-gray-300 rounded-none overflow-hidden">
              <Image
                src="/images/contact/rfq-template-preview.jpg"
                alt="RFQ Template preview showing table structure with Pitch, Gauge, Drive Links, Cutter Profile columns"
                width={800}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="text-xs text-text-body mt-2 text-center">RFQ Template Structure Preview</p>
          </div>
          
          <button
            onClick={downloadRFQTemplate}
            className="inline-flex items-center gap-2 px-6 py-3 bg-safety-orange text-white font-semibold text-sm hover:bg-safety-orange/90 transition shadow-sm hover:shadow-md"
          >
            <Download className="w-5 h-5" />
            Download Professional RFQ Template
          </button>
          <div className="mt-6 pt-6 border-t border-forest-brand/30">
            <p className="text-xs text-text-body mb-3 font-semibold">Template Features:</p>
            <ul className="text-xs text-text-body space-y-1">
              <li>• Granular specification fields (Pitch, Gauge, Drive Links, Cutter Profile)</li>
              <li>• Steel grade selection (68CrNiMo premium alloy / 65Mn standard)</li>
              <li>• Sample request tracking per line item</li>
              <li>• ANSI/CSA compliance fields</li>
              <li>• Excel-compatible CSV format</li>
            </ul>
          </div>
        </section>

        {/* Contact Information Grid */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-text-main mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="bg-white rounded-none border border-forest-brand/30 p-5 hover:border-forest-brand transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <Mail className="w-6 h-6 text-forest-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-text-main mb-1">Email</h3>
                  <a 
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-forest-brand hover:underline font-medium text-sm block mb-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="text-xs text-text-body">{RESPONSE_TIME}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-none border border-forest-brand/30 p-5 hover:border-forest-brand transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <Phone className="w-6 h-6 text-forest-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-text-main mb-1">Phone</h3>
                  <a 
                    href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
                    className="text-text-bodyhover:text-forest-brand/80 font-medium text-sm block"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-none border border-forest-brand/30 p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <Clock className="w-6 h-6 text-forest-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-text-main mb-1">Business Hours</h3>
                  <p className="text-text-body text-sm">
                    {BUSINESS_HOURS}
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-none border border-forest-brand/30 p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-forest-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-text-main mb-1">Address</h3>
                  <p className="text-text-body text-sm">
                    {CONTACT_ADDRESS}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-forest-brand" />
      </div>
    }>
      <RequestQuoteForm />
    </Suspense>
  )
}
