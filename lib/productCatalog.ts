// Helper function to generate professional MDM No. (Manufacturing Data Model Number)
// Format: CSC-{Series}-{Pitch}-{Gauge}-{DriveLinks}-{ChainType}-{CutterType}
export function generateProductID(series: string, pitch: string, gauge: string, driveLinks: string, chainType: string, cutterType: string): string {
  const seriesCode = series === 'Series E' ? 'E' : series === 'Series W' ? 'W' : series === 'Series P' ? 'P' : 'STD'
  // Process pitch: remove quotes/spaces, replace 3/8 with 38, handle .325/.404 by removing leading dot
  let pitchCode = pitch.replace(/["\s]/g, '').replace('3/8', '38')
  if (pitchCode.startsWith('.')) {
    pitchCode = pitchCode.substring(1) // Remove leading dot for .325, .404, etc.
  }
  // Process gauge: remove quotes/spaces and leading dot
  let gaugeCode = gauge.replace(/["\s]/g, '')
  if (gaugeCode.startsWith('.')) {
    gaugeCode = gaugeCode.substring(1) // Remove leading dot
  }
  const chainTypeCode = chainType === 'Low Profile' ? 'LP' : chainType === 'Full' ? 'F' : 'S'
  const cutterCode = cutterType === 'Full-Chisel' ? 'FC' : 'SC'
  return `CSC-${seriesCode}-${pitchCode}-${gaugeCode}-${driveLinks}-${chainTypeCode}-${cutterCode}`
}

export type Product = {
  id: string
  series: string
  pitch: string
  gauge: string
  driveLinks: string
  chainType: string
  cutterType: string
  steelGrade: string
  description: string
}

// Comprehensive product catalog - Expanded with more products
export const PRODUCT_CATALOG: Product[] = [
  // Series E - Battery Saws (.043" Narrow Kerf)
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '48DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '50DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '52DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '56DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '3/8" LP', gauge: '.043"', driveLinks: '56DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '3/8" LP', gauge: '.043"', driveLinks: '62DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  
  // Series W - Cold Weather (68CrNiMo, Semi-Chisel)
  { series: 'Series W', pitch: '.325"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '.325"', gauge: '.050"', driveLinks: '52DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '.325"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.058"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  
  // Series P - Professional (Full-Chisel, 68CrNiMo)
  { series: 'Series P', pitch: '3/8"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '3/8"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '3/8"', gauge: '.058"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '3/8"', gauge: '.058"', driveLinks: '64DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '.404"', gauge: '.063"', driveLinks: '72DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '.404"', gauge: '.063"', driveLinks: '84DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  
  // Standard Products - .325" Pitch
  { series: 'Standard', pitch: '.325"', gauge: '.043"', driveLinks: '48DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.043"', driveLinks: '50DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '52DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  
  // Standard Products - 3/8" Pitch
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '64DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.058"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.058"', driveLinks: '64DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.058"', driveLinks: '72DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  
  // Standard Products - .404" Pitch
  { series: 'Standard', pitch: '.404"', gauge: '.063"', driveLinks: '72DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.404"', gauge: '.063"', driveLinks: '84DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  
  // Standard Products - 3/8" LP
  { series: 'Standard', pitch: '3/8" LP', gauge: '.043"', driveLinks: '56DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8" LP', gauge: '.043"', driveLinks: '62DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
].map(product => ({
  ...product,
  id: generateProductID(product.series, product.pitch, product.gauge, product.driveLinks, product.chainType, product.cutterType)
}))
