import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chain Selection Matrix: Reference by Species, Equipment & Task | BorealGrit™',
  description: 'Professional reference: how wood species, power source, and application affect chainsaw chain choice. Hardwood, softwood, frozen timber; gas, electric, harvester; logging, arborist, firewood. Inform your decision with specs and Fitment Finder.',
  keywords: 'best chain for frozen oak, chainsaw chain Douglas fir, battery chainsaw chain replacement, electric saw chain, professional logging chain, arborist chainsaw chain, wildfire fuel reduction tools, chain selection reference',
  openGraph: {
    title: 'Chain Selection Matrix: Reference by Species, Equipment & Task | BorealGrit™',
    description: 'Information reference for chain selection by species, equipment, and task. North American forestry and arborist applications.',
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
