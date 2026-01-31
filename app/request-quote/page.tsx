'use client'

import { useState, useEffect, Suspense, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Clock, Download, CheckCircle2, Loader2, X, ShoppingCart, ArrowRight, Upload, FileText, CheckCircle, DollarSign } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Contact information
const CONTACT_EMAIL = 'logan@borealgrit.com'
const CONTACT_PHONE = '(+86) 13675899493'
const CONTACT_WECHAT = '(+86) 13675899493'
const CONTACT_ADDRESS = 'Guangzhou, China'
const BUSINESS_HOURS = 'Monday - Friday: 9:00 AM - 6:00 PM CST (China Standard Time)'
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
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploadedFileContent, setUploadedFileContent] = useState<string>('')
  const [isUploading, setIsUploading] = useState(false)
  
  // Resource request from URL
  const resourceRequest = searchParams.get('resource')
  const resourceType = searchParams.get('type')
  
  // Map resource codes to friendly names
  const resourceNames: Record<string, string> = {
    'product-catalog-pdf': 'Product Catalog PDF (with pricing)',
    'packaging-specs': 'Packaging Specifications',
    'labeling-standards': 'Labeling Standards',
    'ordering-guide': 'Ordering Guide',
    'shipping-logistics': 'Shipping & Logistics Information',
    'part-number-reference': 'Part Number Reference Guide',
    'iso-certificate': 'ISO Certificate',
    'ansi-compliance': 'ANSI Compliance Statement',
    'qc-process': 'Quality Control Process Document',
    'product-images': 'Product Images',
    'brand-assets': 'Logo & Brand Assets',
  }
  
  // Form data
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    message: resourceRequest ? `I would like to request: ${resourceNames[resourceRequest] || resourceRequest}` : '',
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
    } else if (resourceRequest) {
      // If resource request, show form immediately
      setShowForm(true)
    }
  }, [searchParams, resourceRequest])

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

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = [
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel.sheet.macroEnabled.12'
    ]
    
    if (!validTypes.includes(file.type) && !file.name.endsWith('.csv') && !file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      alert('Please upload a CSV or Excel file (.csv, .xlsx, .xls)')
      return
    }

    setIsUploading(true)
    setUploadedFile(file)

    try {
      // Read file content
      const text = await file.text()
      setUploadedFileContent(text)
      
      // Parse CSV if it's a CSV file
      if (file.name.endsWith('.csv') || file.type === 'text/csv') {
        // Parse CSV and extract product information
        const lines = text.split('\n').filter(line => line.trim())
        const products: CartProduct[] = []
        
        // Find line items section (Section 2)
        let inLineItemsSection = false
        let headerFound = false
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim()
          
          if (line.includes('SECTION 2: LINE ITEMS')) {
            inLineItemsSection = true
            continue
          }
          
          if (inLineItemsSection && line.includes('No.,MDM No.')) {
            headerFound = true
            continue
          }
          
          if (inLineItemsSection && headerFound && line && !line.includes('SECTION')) {
            // Parse CSV row
            const columns = line.split(',').map(col => col.trim().replace(/^"|"$/g, ''))
            if (columns.length >= 5 && columns[0] && !isNaN(parseInt(columns[0]))) {
              const mdmNo = columns[1] || ''
              const pitch = columns[2] || ''
              const gauge = columns[3] || ''
              const driveLinks = columns[4] || ''
              
              if (mdmNo || pitch || gauge || driveLinks) {
                products.push({
                  id: mdmNo,
                  pitch: pitch,
                  gauge: gauge,
                  driveLinks: driveLinks,
                  quantity: columns[14] ? parseInt(columns[14]) || 1 : 1,
                  packaging: columns[13] || undefined,
                  notes: columns[19] || undefined,
                })
              }
            }
          }
          
          if (inLineItemsSection && line.includes('SECTION 3')) {
            break
          }
        }
        
        if (products.length > 0) {
          setCartProducts(products)
        }
      }
      
      // Show form after file upload
      setShowForm(true)
      
      // Pre-fill message with file info
      setFormData(prev => ({
        ...prev,
        message: prev.message || `I have uploaded an RFQ file: ${file.name}. Please review and provide pricing.`
      }))
      
    } catch (error) {
      console.error('Error reading file:', error)
      alert('Error reading file. Please try again.')
      setUploadedFile(null)
      setUploadedFileContent('')
    } finally {
      setIsUploading(false)
    }
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

${uploadedFile ? `\n--- Uploaded RFQ File: ${uploadedFile.name} ---\n${uploadedFileContent.substring(0, 3000)}${uploadedFileContent.length > 3000 ? '\n... (file content truncated, please attach original file)' : ''}` : ''}
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
        uploaded_file_name: uploadedFile?.name || '',
        uploaded_file_content: uploadedFileContent ? `\n\n--- Uploaded RFQ File Content (${uploadedFile?.name}) ---\n${uploadedFileContent.substring(0, 5000)}${uploadedFileContent.length > 5000 ? '\n... (truncated)' : ''}` : '',
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
        setUploadedFile(null)
        setUploadedFileContent('')
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
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

  // Determine current step
  const getCurrentStep = () => {
    if (resourceRequest) return 3 // Resource request goes directly to form
    if (showForm && (cartProducts.length > 0 || uploadedFile)) return 4 // Form is showing
    if (uploadedFile && uploadedFileContent) return 3 // File uploaded and parsed, ready for form
    if (uploadedFile) return 2 // File uploaded but not parsed yet
    return 1 // Step 1: Download template
  }

  const currentStep = getCurrentStep()


  return (
    <>
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-main mb-2">
            {resourceRequest ? 'Resource Request' : 'Request for Quote'}
          </h1>
          <p className="text-text-body text-sm">
            {resourceRequest 
              ? `Please fill in your contact information to receive: ${resourceNames[resourceRequest] || resourceRequest}. We'll send it within 24 hours.`
              : 'Follow the steps below to request a quote for your chainsaw chain requirements.'}
          </p>
        </div>


        {/* Resource Request Notice */}
        {resourceRequest && (
          <section className="mb-6 bg-blue-50 border-2 border-blue-200 rounded-none p-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-text-main mb-1">Resource Request</h3>
                <p className="text-sm text-text-body">
                  You're requesting: <strong>{resourceNames[resourceRequest] || resourceRequest}</strong>
                </p>
                <p className="text-xs text-text-body mt-2">
                  We'll send this resource to your email within 24 hours during business days.
                </p>
              </div>
            </div>
          </section>
        )}

          {/* Step 3 & 4: Review Products & Submit Form */}
        {showForm && (cartProducts.length > 0 || resourceRequest || uploadedFile) && (
          <section className="mb-8 bg-white rounded-none border-2 border-forest-brand shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                  currentStep >= 3 ? 'bg-forest-brand text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {currentStep > 3 ? <CheckCircle className="w-5 h-5" /> : '3'}
                </div>
                <h2 className="text-2xl font-bold text-text-main flex items-center gap-2">
                  {resourceRequest ? (
                    <>
                      <Mail className="w-6 h-6" />
                      Resource Request Form
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-6 h-6" />
                      Review & Submit ({cartProducts.length > 0 ? `${cartProducts.length} ${cartProducts.length === 1 ? 'Product' : 'Products'}` : 'RFQ File'})
                    </>
                  )}
                </h2>
              </div>
              <button
                onClick={() => {
                  setShowForm(false)
                  setCartProducts([])
                }}
                className="text-text-body hover:text-forest-brand hover:bg-forest-brand hover:text-white border-2 border-transparent hover:border-forest-brand hover:px-1 hover:py-1 hover:-mx-1 hover:-my-1 transition"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Uploaded File Info - Enhanced */}
            {uploadedFile && (
              <div className="mb-4 md:mb-6 bg-gradient-to-r from-forest-light to-blue-50 border-2 border-forest-brand rounded-none p-4 sm:p-5 shadow-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-forest-brand rounded-none flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-text-main mb-2 text-base sm:text-lg">RFQ File Successfully Uploaded</h3>
                    <div className="bg-white border border-forest-brand/50 rounded-none p-2 sm:p-3 mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-forest-brand flex-shrink-0" />
                        <span className="font-semibold text-text-main text-xs sm:text-sm truncate">{uploadedFile.name}</span>
                      </div>
                      <p className="text-xs text-text-body">
                        Size: {Math.round(uploadedFile.size / 1024)} KB • Type: {uploadedFile.type || 'CSV/Excel'}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-text-body">
                      The file content will be included in your quote request. Please review the products below and complete your contact information.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Products Summary - Enhanced Card Design */}
            {cartProducts.length > 0 && (
            <div className="mb-4 md:mb-6 bg-gradient-to-br from-gray-50 to-white border-2 border-forest-brand/30 rounded-none p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-forest-brand" />
                <h3 className="text-base sm:text-lg font-bold text-text-main">
                  Products from RFQ File ({cartProducts.length} {cartProducts.length === 1 ? 'Product' : 'Products'})
                </h3>
              </div>
              <div className="space-y-2 sm:space-y-3 max-h-80 overflow-y-auto pr-1 sm:pr-2">
                {cartProducts.map((product, index) => (
                  <div key={index} className="bg-white p-3 sm:p-4 rounded-none border-2 border-gray-200 hover:border-forest-brand/50 transition shadow-sm">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-forest-brand/10 text-forest-brand font-bold text-xs rounded-none flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="font-mono font-bold text-text-main text-xs sm:text-sm truncate">{product.id}</span>
                        </div>
                        <div className="text-text-body text-xs ml-7 sm:ml-8 space-y-0.5 sm:space-y-1">
                          <div>
                            <span className="font-semibold">Specs:</span> {product.pitch} / {product.gauge} / {product.driveLinks}
                          </div>
                          <div>
                            <span className="font-semibold">Quantity:</span> {product.quantity || 1} units
                          </div>
                          <div>
                            <span className="font-semibold">Packaging:</span> {product.packaging || 'Standard'}
                          </div>
                        </div>
                      </div>
                    </div>
                    {product.notes && (
                      <div className="text-xs text-text-body mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200 ml-7 sm:ml-8">
                        <span className="font-semibold">Notes:</span> {product.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Group 1: Contact Information */}
              <div className="bg-gray-50 border border-forest-brand/20 rounded-none p-4 md:p-5">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-forest-brand" />
                  <h3 className="text-base sm:text-lg font-bold text-text-main">Contact Information</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-xs sm:text-sm font-semibold text-text-main mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none transition text-sm"
                    />
                  </div>

                  {/* Contact Name */}
                  <div>
                    <label htmlFor="contactName" className="block text-xs sm:text-sm font-semibold text-text-main mb-1.5">
                      Contact Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none transition text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-text-main mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none transition text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-text-main mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. (+86) 13812345678"
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none transition text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Group 2: Location Information */}
              <div className="bg-gray-50 border border-forest-brand/20 rounded-none p-4 md:p-5">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-forest-brand" />
                  <h3 className="text-base sm:text-lg font-bold text-text-main">Location Information</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-xs sm:text-sm font-semibold text-text-main mb-1.5">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g., United States"
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none transition text-sm"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-xs sm:text-sm font-semibold text-text-main mb-1.5">
                      City <span className="text-xs text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g., New York"
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none transition text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Group 3: Business Information */}
              <div className="bg-gray-50 border border-forest-brand/20 rounded-none p-4 md:p-5">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-forest-brand" />
                  <h3 className="text-base sm:text-lg font-bold text-text-main">Business Information</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  {/* Expected Quantity */}
                  <div>
                    <label htmlFor="expectedQuantity" className="block text-xs sm:text-sm font-semibold text-text-main mb-1.5">
                      Expected First Order Quantity
                    </label>
                    <input
                      type="text"
                      id="expectedQuantity"
                      name="expectedQuantity"
                      placeholder="e.g., 1000 units"
                      value={formData.expectedQuantity}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none transition text-sm"
                    />
                    <p className="text-xs text-text-body mt-1">Help us prepare accurate pricing</p>
                  </div>

                  {/* Annual Volume */}
                  <div>
                    <label htmlFor="annualVolume" className="block text-xs sm:text-sm font-semibold text-text-main mb-1.5">
                      Estimated Annual Volume
                    </label>
                    <input
                      type="text"
                      id="annualVolume"
                      name="annualVolume"
                      placeholder="e.g., 10000 units/year"
                      value={formData.annualVolume}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none transition text-sm"
                    />
                    <p className="text-xs text-text-body mt-1">For volume discount consideration</p>
                  </div>
                </div>
              </div>

              {/* Group 4: Additional Information */}
              <div className="bg-gray-50 border border-forest-brand/20 rounded-none p-4 md:p-5">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-forest-brand" />
                  <h3 className="text-base sm:text-lg font-bold text-text-main">Additional Information</h3>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-text-main mb-1.5">
                    Additional Message or Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-300 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none transition resize-y text-sm"
                    placeholder="Any specific requirements, packaging preferences, custom specifications, or questions..."
                  />
                  <p className="text-xs text-text-body mt-1">Please provide any additional details that will help us prepare your quote</p>
                </div>
              </div>

              {/* Step 4: Submit Section */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t-2 border-forest-brand/30">
                <div className="bg-gradient-to-r from-forest-brand/5 to-forest-light border-2 border-forest-brand/30 rounded-none p-4 sm:p-6 mb-4 md:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-forest-brand text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                      4
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-text-main">Submit Your Request</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-text-body ml-0 sm:ml-13">
                    <span className="hidden sm:inline">Review your information above and click submit. We'll respond within 24 hours during business days.</span>
                    <span className="sm:hidden">Review and submit. We'll respond within 24 hours.</span>
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-10 sm:py-4 bg-forest-brand text-white font-bold text-sm sm:text-lg hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit RFQ Request
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 bg-forest-light border-2 border-forest-brand rounded-none px-4 py-3 sm:px-6 sm:py-4 flex-1">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-forest-brand flex-shrink-0 mt-0.5 sm:mt-0" />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-forest-brand mb-1">Request Submitted Successfully!</p>
                        <p className="text-xs text-forest-brand/80">We'll contact you within 24 hours during business days.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 bg-red-50 border-2 border-red-400 rounded-none px-4 py-3 sm:px-6 sm:py-4 flex-1">
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-red-800 mb-1">Submission Failed</p>
                        <p className="text-xs text-red-700">Please try again or contact us directly at {CONTACT_EMAIL}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </section>
        )}

        {/* Step 1 & 2: RFQ Template Download & Upload */}
        {!showForm && !resourceRequest && (
        <section className="mb-8 bg-white rounded-none border border-forest-brand/30 shadow-sm p-6">
          {/* Step 1: Download Template */}
          <div className="mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 md:mb-4">
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm ${
                currentStep >= 1 ? 'bg-forest-brand text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {currentStep > 1 ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> : '1'}
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main">Download RFQ Template</h2>
            </div>
            
            <p className="text-text-body text-sm mb-4 leading-relaxed">
              Download our Professional RFQ Template to streamline your procurement process. This template is designed specifically for North American forestry standards (ANSI/CSA). Fill it out with your product requirements, then upload it in the next step.
            </p>

            {/* Quick Start Tip */}
            {currentStep === 1 && (
              <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-none">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-main text-xs sm:text-sm mb-1">Quick Start Guide</h3>
                    <p className="text-xs text-text-body">
                      <span className="hidden sm:inline"><strong>Step 1:</strong> Download the template below → <strong>Step 2:</strong> Fill in your requirements in Excel → <strong>Step 3:</strong> Upload the completed file → <strong>Step 4:</strong> Fill in your contact information and submit.</span>
                      <span className="sm:hidden"><strong>1.</strong> Download → <strong>2.</strong> Fill Excel → <strong>3.</strong> Upload → <strong>4.</strong> Submit</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Download Button */}
            <div className="mb-4 md:mb-6">
              <button
                onClick={downloadRFQTemplate}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-forest-brand text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition rounded-none w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4" />
                Download Professional RFQ Template
              </button>
            </div>

            {/* Template Features */}
            <div className="mb-4 md:mb-6 pt-3 md:pt-4 border-t border-forest-brand/30">
              <p className="text-xs text-text-body mb-2 md:mb-3 font-semibold">Template Features:</p>
              <ul className="text-xs text-text-body space-y-0.5 md:space-y-1">
                <li className="hidden sm:list-item">• Granular specification fields (Pitch, Gauge, Drive Links, Cutter Profile)</li>
                <li className="sm:hidden">• Spec fields: Pitch, Gauge, Drive Links, Cutter Profile</li>
                <li className="hidden sm:list-item">• Steel grade selection (68CrNiMo premium alloy / 65Mn standard)</li>
                <li className="sm:hidden">• Steel grades: 68CrNiMo premium / 65Mn standard</li>
                <li className="hidden sm:list-item">• Sample request tracking per line item</li>
                <li className="sm:hidden">• Sample request tracking</li>
                <li className="hidden sm:list-item">• ANSI/CSA compliance fields</li>
                <li className="sm:hidden">• ANSI/CSA compliance</li>
                <li className="hidden sm:list-item">• Excel-compatible CSV format</li>
                <li className="sm:hidden">• Excel CSV format</li>
              </ul>
            </div>
          </div>

          {/* Step 2: Upload Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 md:mb-4">
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm ${
                currentStep >= 2 ? 'bg-forest-brand text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {currentStep > 2 ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> : '2'}
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main">Upload Your Filled RFQ Template</h2>
            </div>
            
            <p className="text-text-body text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed">
              <span className="hidden sm:inline">Upload your completed RFQ template (CSV or Excel format). We'll parse the file and prepare a quote request form for you.</span>
              <span className="sm:hidden">Upload your completed RFQ template. We'll parse it and prepare your quote form.</span>
            </p>

            {/* Upload Area - Drag & Drop */}
            <div 
              className={`mb-4 md:mb-6 p-4 sm:p-6 border-2 rounded-none transition-all duration-300 ${
                currentStep >= 2 
                  ? 'bg-forest-light border-forest-brand shadow-md' 
                  : 'bg-gray-50 border-dashed border-forest-brand/40 hover:border-forest-brand/60'
              }`}
              onDragOver={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              onDragLeave={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              onDrop={async (e) => {
                e.preventDefault()
                e.stopPropagation()
                const files = e.dataTransfer.files
                if (files.length > 0) {
                  const file = files[0]
                  const validTypes = [
                    'text/csv',
                    'application/vnd.ms-excel',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'application/vnd.ms-excel.sheet.macroEnabled.12'
                  ]
                  
                  if (!validTypes.includes(file.type) && !file.name.endsWith('.csv') && !file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
                    alert('Please upload a CSV or Excel file (.csv, .xlsx, .xls)')
                    return
                  }

                  setIsUploading(true)
                  setUploadedFile(file)

                  try {
                    const text = await file.text()
                    setUploadedFileContent(text)
                    
                    if (file.name.endsWith('.csv') || file.type === 'text/csv') {
                      const lines = text.split('\n').filter(line => line.trim())
                      const products: CartProduct[] = []
                      
                      let inLineItemsSection = false
                      let headerFound = false
                      
                      for (let i = 0; i < lines.length; i++) {
                        const line = lines[i].trim()
                        
                        if (line.includes('SECTION 2: LINE ITEMS')) {
                          inLineItemsSection = true
                          continue
                        }
                        
                        if (inLineItemsSection && line.includes('No.,MDM No.')) {
                          headerFound = true
                          continue
                        }
                        
                        if (inLineItemsSection && headerFound && line && !line.includes('SECTION')) {
                          const columns = line.split(',').map(col => col.trim().replace(/^"|"$/g, ''))
                          if (columns.length >= 5 && columns[0] && !isNaN(parseInt(columns[0]))) {
                            const mdmNo = columns[1] || ''
                            const pitch = columns[2] || ''
                            const gauge = columns[3] || ''
                            const driveLinks = columns[4] || ''
                            
                            if (mdmNo || pitch || gauge || driveLinks) {
                              products.push({
                                id: mdmNo,
                                pitch: pitch,
                                gauge: gauge,
                                driveLinks: driveLinks,
                                quantity: columns[14] ? parseInt(columns[14]) || 1 : 1,
                                packaging: columns[13] || undefined,
                                notes: columns[19] || undefined,
                              })
                            }
                          }
                        }
                        
                        if (inLineItemsSection && line.includes('SECTION 3')) {
                          break
                        }
                      }
                      
                      if (products.length > 0) {
                        setCartProducts(products)
                      }
                    }
                    
                    setShowForm(true)
                    setFormData(prev => ({
                      ...prev,
                      message: prev.message || `I have uploaded an RFQ file: ${file.name}. Please review and provide pricing.`
                    }))
                    
                  } catch (error) {
                    console.error('Error reading file:', error)
                    alert('Error reading file. Please try again.')
                    setUploadedFile(null)
                    setUploadedFileContent('')
                  } finally {
                    setIsUploading(false)
                  }
                }
              }}
            >
              <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
                <div className="border-2 border-dashed border-forest-brand/40 rounded-none p-4 sm:p-6 text-center bg-white hover:bg-gray-50 transition cursor-pointer w-full"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-forest-brand mx-auto mb-2 sm:mb-3" />
                  <p className="text-xs sm:text-sm font-semibold text-text-main mb-1">
                    Drag & drop your file here
                  </p>
                  <p className="text-xs text-text-body mb-2 sm:mb-3">or</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,.xlsx,.xls,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="rfq-file-upload"
                  />
                  <label
                    htmlFor="rfq-file-upload"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-forest-brand text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand transition cursor-pointer rounded-none"
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                        Choose File to Upload
                      </>
                    )}
                  </label>
                  <p className="text-xs text-text-body mt-2 sm:mt-3">
                    Supported formats: CSV, XLS, XLSX
                  </p>
                </div>

                {/* Uploaded File Card */}
                {uploadedFile && (
                  <div className="w-full bg-white border-2 border-forest-brand rounded-none p-3 sm:p-4 shadow-md">
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-forest-brand/10 rounded-none flex items-center justify-center">
                          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-forest-brand" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-text-main text-xs sm:text-sm mb-1 truncate">{uploadedFile.name}</h4>
                          <p className="text-xs text-text-body">
                            {Math.round(uploadedFile.size / 1024)} KB • {uploadedFile.type || 'File'}
                          </p>
                          {cartProducts.length > 0 && (
                            <p className="text-xs text-forest-brand font-medium mt-1">
                              ✓ Found {cartProducts.length} product{cartProducts.length !== 1 ? 's' : ''}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setUploadedFile(null)
                          setUploadedFileContent('')
                          setCartProducts([])
                          if (fileInputRef.current) {
                            fileInputRef.current.value = ''
                          }
                        }}
                        className="flex-shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50 p-1 rounded-none transition"
                        aria-label="Remove file"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* RFQ Template Preview - Collapsible/Secondary */}
          <details className="mb-6 bg-gray-50 border-2 border-forest-brand/30 rounded-none overflow-hidden">
            <summary className="px-4 py-3 bg-gray-100 cursor-pointer text-sm font-semibold text-text-main hover:bg-forest-brand hover:text-white border-2 border-transparent hover:border-forest-brand transition">
              View Template Structure Preview
            </summary>
            <div className="p-4 overflow-x-auto">
            <div className="bg-white border border-gray-300 rounded-none overflow-hidden">
              {/* Section 1: RFQ Header */}
              <div className="border-b border-gray-300">
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                  <h3 className="text-sm font-bold text-text-main">SECTION 1: RFQ HEADER</h3>
                </div>
                <div className="p-4">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-text-main w-1/3">Field</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-text-main">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">RFQ No.</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Destination Market</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50">USA / Canada</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Incoterms</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50">FOB China</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Currency</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50">USD</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">OEM / Private Label</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50">Yes / No</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Expected First Order Quantity</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Estimated Annual Volume</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Target Lead Time</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 2: Line Items */}
              <div className="border-b border-gray-300">
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                  <h3 className="text-sm font-bold text-text-main">SECTION 2: LINE ITEMS</h3>
                </div>
                <div className="p-4 overflow-x-auto">
                  <table className="w-full text-xs border-collapse min-w-[1000px]">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">No.</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">MDM No.</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">Pitch</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">Gauge</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">Drive Links</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">Cutter Profile</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">Chain Type</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">Steel Grade</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">Quantity</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">Packaging</th>
                        <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-text-main">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((row) => (
                        <tr key={row}>
                          <td className="border border-gray-300 px-2 py-2 text-text-body bg-gray-50">{row}</td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body"></td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body bg-gray-50"></td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body"></td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body bg-gray-50"></td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body"></td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body bg-gray-50"></td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body"></td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body bg-gray-50"></td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body"></td>
                          <td className="border border-gray-300 px-2 py-2 text-text-body bg-gray-50"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 3: Footer */}
              <div>
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                  <h3 className="text-sm font-bold text-text-main">SECTION 3: FOOTER</h3>
                </div>
                <div className="p-4">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-text-main w-1/3">Field</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-text-main">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Validity of Quotation</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Remarks from Supplier</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Supplier Company Name</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Contact Person</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 text-text-body">Date</td>
                        <td className="border border-gray-300 px-3 py-2 text-text-body bg-gray-50"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p className="text-xs text-text-body mt-3 text-center">RFQ Template Structure Preview - Download CSV for Excel editing</p>
            </div>
          </details>
        </section>
        )}

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

            {/* Phone & WeChat */}
            <div className="bg-white rounded-none border border-forest-brand/30 p-5 hover:border-forest-brand transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-forest-brand/10 rounded-none flex items-center justify-center">
                  <Phone className="w-6 h-6 text-forest-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-text-main mb-1">Phone / WeChat</h3>
                  <a 
                    href={`tel:${CONTACT_PHONE.replace(/\s+/g, '').replace(/[()]/g, '')}`}
                    className="text-forest-brand hover:underline font-medium text-sm block"
                  >
                    {CONTACT_PHONE}
                  </a>
                  <p className="text-xs text-text-body mt-1">Same number for WeChat</p>
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
