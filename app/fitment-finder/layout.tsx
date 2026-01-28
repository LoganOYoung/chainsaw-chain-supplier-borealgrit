import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chainsaw Chain Fitment & Compatibility Finder | ChainPro',
  description: 'Find compatible chainsaw chains by brand, pitch, gauge, drive links, chain type. Match your saw and bar. Cross-reference Oregon, Stihl, Husqvarna models. Always verify bar and chain specs before ordering.',
  keywords: 'chainsaw chain fitment, chainsaw compatibility, chain fitment finder, Oregon chain replacement, Stihl chain replacement, Husqvarna chain replacement, chainsaw chain compatibility tool, find chainsaw chain',
  openGraph: {
    title: 'Chainsaw Chain Fitment & Compatibility Finder',
    description: 'Find compatible chainsaw chains by brand and specifications. Cross-reference with Oregon, Stihl, Husqvarna models.',
    type: 'website',
  },
  alternates: {
    canonical: '/fitment-finder',
  },
}

export default function FitmentFinderLayout({ children }: { children: React.ReactNode }) {
  return children
}
