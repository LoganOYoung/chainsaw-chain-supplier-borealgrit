import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Contact information
const CONTACT_EMAIL = 'logan@borealgrit.com'
const CONTACT_PHONE = '(+86) 13675899493'
const CONTACT_WECHAT = '(+86) 13675899493'
const CONTACT_ADDRESS = 'Guangzhou, China'
const BUSINESS_HOURS = 'Monday - Friday: 9:00 AM - 6:00 PM CST (China Standard Time)'
const RESPONSE_TIME = 'We respond to all inquiries within 24 hours during business days.'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-main mb-2">Contact Us</h1>
          <p className="text-text-body text-sm">
            Professional B2B chainsaw chain supplier. Get in touch for quotes, technical support, or partnership inquiries.
          </p>
        </div>

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
