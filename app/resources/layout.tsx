import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Specifications & Forestry ROI Analysis | BorealGrit™',
  description: 'Deep dive into the metallurgy of BorealGrit™ chains. Access our 68CrNiMo performance reports and use our Downtime Calculator to see how much your operation can save.',
  keywords: 'chainsaw chain material specs, 68CrNiMo steel properties, forestry ROI calculator, chain hardness test, BorealGrit technical specifications, industrial chainsaw chain metallurgy',
  openGraph: {
    title: 'Technical Specifications & Forestry ROI Analysis | BorealGrit™',
    description: 'Deep dive into the metallurgy of BorealGrit™ chains. 68CrNiMo performance reports and Downtime Calculator for your operation.',
    type: 'website',
  },
  alternates: {
    canonical: '/resources',
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
