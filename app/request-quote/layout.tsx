import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request for Quote | Professional RFQ Template | Borealgrit',
  description: 'Download professional RFQ template for chainsaw chains. Designed for North American forestry standards (ANSI/CSA). Streamline your procurement process. We respond as soon as possible.',
  keywords: 'chainsaw chain RFQ, request for quote chainsaw chain, RFQ template chainsaw chain, chainsaw chain quote, B2B chainsaw chain RFQ, procurement template chainsaw chain',
  openGraph: {
    title: 'Request for Quote | Professional RFQ Template',
    description: 'Download our Professional RFQ Template designed for North American forestry standards. Streamline your procurement process.',
    type: 'website',
  },
  alternates: {
    canonical: '/request-quote',
  },
}

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}
