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

/**
 * PRODUCT CATALOG - Product Selection Strategy
 * 
 * This catalog contains 36 standard products covering the most common market segments
 * and specification combinations for North American B2B customers.
 * 
 * SELECTION CRITERIA:
 * 1. Market Coverage: Covers 4 major market segments:
 *    - Battery-powered saws (Series E - 6 products)
 *    - Cold-weather applications (Series W - 7 products)
 *    - Professional logging (Series P - 6 products)
 *    - Standard duty applications (Standard - 17 products)
 * 
 * 2. Common Specifications: Focuses on the most frequently ordered combinations:
 *    - Pitch: .325", 3/8", 3/8" LP, .404" (covers 95%+ of market demand)
 *    - Gauge: .043", .050", .058", .063" (standard ANSI sizes)
 *    - Drive Links: 48DL-84DL (covers most common bar lengths)
 * 
 * 3. OEM Compatibility: Selected to match compatibility with major OEM brands:
 *    - Stihl, Husqvarna, Oregon, Echo compatibility
 *    - ANSI B175.1 compliant (all products)
 *    - CSA Z62.3 compliant (selected models)
 * 
 * 4. Business Strategy:
 *    - These 36 products represent our "standard catalog" - ready for immediate order
 *    - Other specifications available on request (custom orders, OEM configurations)
 *    - MOQ and lead times vary by specification
 * 
 * NOTE: Chainsaw chains have hundreds of possible specification combinations.
 * This catalog represents the most common configurations based on:
 * - Historical order data
 * - Market research
 * - OEM compatibility requirements
 * - North American market preferences
 * 
 * For custom specifications not listed here, please contact us via RFQ form.
 * We can manufacture any ANSI-compliant specification with appropriate MOQ.
 */

// Comprehensive product catalog - Expanded with more products
export const PRODUCT_CATALOG: Product[] = [
  // Series E - Battery Saws (.043" Narrow Kerf)
  // Target: Battery-powered chainsaw market (growing segment)
  // Covers: Consumer and professional battery saws (Stihl MSA, Husqvarna T540, etc.)
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '48DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '50DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '52DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '.325"', gauge: '.043"', driveLinks: '56DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '3/8" LP', gauge: '.043"', driveLinks: '56DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  { series: 'Series E', pitch: '3/8" LP', gauge: '.043"', driveLinks: '62DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Narrow Kerf for battery saws' },
  
  // Series W - Cold Weather (68CrNiMo, Semi-Chisel)
  // Target: Northern US, Canada, Alaska markets
  // Covers: Sub-zero temperature applications, forestry in cold climates
  { series: 'Series W', pitch: '.325"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '.325"', gauge: '.050"', driveLinks: '52DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '.325"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  { series: 'Series W', pitch: '3/8"', gauge: '.058"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '68CrNiMo', description: 'Cold-weather optimized' },
  
  // Series P - Professional (Full-Chisel, 68CrNiMo)
  // Target: Professional loggers, commercial forestry operations
  // Covers: High-performance chains for maximum cutting speed
  { series: 'Series P', pitch: '3/8"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '3/8"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '3/8"', gauge: '.058"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '3/8"', gauge: '.058"', driveLinks: '64DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '.404"', gauge: '.063"', driveLinks: '72DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  { series: 'Series P', pitch: '.404"', gauge: '.063"', driveLinks: '84DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '68CrNiMo', description: 'Professional logging' },
  
  // Standard Products - .325" Pitch
  // Target: General purpose, mid-size saws (most common market segment)
  // Covers: Consumer saws, homeowner applications, general forestry
  { series: 'Standard', pitch: '.325"', gauge: '.043"', driveLinks: '48DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.043"', driveLinks: '50DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '52DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.325"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  
  // Standard Products - 3/8" Pitch
  // Target: Professional and semi-professional saws (largest market segment)
  // Covers: Most common pitch for professional applications
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '50DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '56DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.050"', driveLinks: '64DL', chainType: 'Full', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.058"', driveLinks: '60DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.058"', driveLinks: '64DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8"', gauge: '.058"', driveLinks: '72DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  
  // Standard Products - .404" Pitch
  // Target: Large professional saws, high-power applications
  // Covers: Large bar saws (20"+, professional logging)
  { series: 'Standard', pitch: '.404"', gauge: '.063"', driveLinks: '72DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '.404"', gauge: '.063"', driveLinks: '84DL', chainType: 'Full', cutterType: 'Full-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  
  // Standard Products - 3/8" LP
  // Target: Consumer saws, low-kickback safety chains
  // Covers: Homeowner saws, safety-focused applications
  { series: 'Standard', pitch: '3/8" LP', gauge: '.043"', driveLinks: '56DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
  { series: 'Standard', pitch: '3/8" LP', gauge: '.043"', driveLinks: '62DL', chainType: 'Low Profile', cutterType: 'Semi-Chisel', steelGrade: '65Mn', description: 'Standard duty' },
].map(product => ({
  ...product,
  id: generateProductID(product.series, product.pitch, product.gauge, product.driveLinks, product.chainType, product.cutterType)
}))
