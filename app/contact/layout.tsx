import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Chainsaw Chain Manufacturer | BorealGrit™',
  description: 'Contact professional chainsaw chain manufacturer. B2B only. Email, phone, address. Business hours and response time. Get in touch for quotes, technical support, or partnership inquiries.',
  keywords: 'chainsaw chain contact, chainsaw chain manufacturer contact, B2B chainsaw chain supplier contact, chainsaw chain sales contact',
  openGraph: {
    title: 'Contact Us | Chainsaw Chain Manufacturer',
    description: 'Get in touch for quotes, technical support, or partnership inquiries. B2B only.',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
