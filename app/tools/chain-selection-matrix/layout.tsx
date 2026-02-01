import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chainsaw Chain Selection Matrix: By Species, Equipment & Task | BorealGrit™',
  description: 'Find the right chainsaw chain by wood species, power source, and task. Best chain for hardwood, battery saw replacement, commercial logging. Series W, P, E recommendations.',
  keywords: 'best chain for frozen oak, chainsaw chain Douglas fir, battery chainsaw chain replacement, electric saw chain, professional logging chain, arborist chainsaw chain, wildfire fuel reduction tools',
  openGraph: {
    title: 'Chainsaw Chain Selection Matrix | BorealGrit™',
    description: 'Select chain by species, equipment, and task. Series W, P, E for North American forestry.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/chain-selection-matrix',
  },
}

export default function ChainSelectionMatrixLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
