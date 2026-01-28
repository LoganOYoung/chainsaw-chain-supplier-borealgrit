'use client'

import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Download } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Contact information - Update these with your actual contact details
const CONTACT_EMAIL = 'sales@example.com'
const CONTACT_PHONE = '+1 (555) 123-4567'
const CONTACT_ADDRESS = 'Your Company Address, City, State, ZIP Code'
const BUSINESS_HOURS = 'Monday - Friday: 8:00 AM - 5:00 PM EST'
const RESPONSE_TIME = 'We respond to all inquiries within 24 hours during business days.'

export default function RequestQuotePage() {
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
            Download our RFQ template, fill in your requirements, and send it to us for a quick quote.
          </p>
        </div>

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
