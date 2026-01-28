import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chainsaw Chain Product Catalog | Complete Specifications | Borealgrit',
  description: 'Complete chainsaw chain product catalog with technical specifications. Filter by pitch (.325", 3/8", .404"), gauge (.043", .050", .058", .063"), chain type, cutter profile, and steel grade. ANSI B175.1 and CSA Z62.3 compliant. B2B wholesale and OEM available.',
  keywords: 'chainsaw chain catalog, chainsaw chain specifications, .325 pitch chain, 3/8 pitch chain, .404 pitch chain, ANSI compliant chainsaw chain, CSA compliant chain, OEM chainsaw chain, wholesale chainsaw chain, chainsaw chain manufacturer',
  openGraph: {
    title: 'Chainsaw Chain Product Catalog | Borealgrit',
    description: 'Complete chainsaw chain specifications. Filter by technical parameters. ANSI/CSA compliant. B2B wholesale.',
    type: 'website',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
