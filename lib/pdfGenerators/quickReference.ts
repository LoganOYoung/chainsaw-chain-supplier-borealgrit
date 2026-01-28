'use client'

import jsPDF from 'jspdf'
import { addHeaderToPDF, addSectionToPDF, addParagraphToPDF, addTableRowToPDF, addFooterToPDF, downloadPDF } from '../clientPdfGenerator'
import { PRODUCT_CATALOG } from '../productCatalog'

export function generateQuickReferenceGuide() {
  const doc = new jsPDF()
  let y = addHeaderToPDF(doc, 'Quick Reference Guide', 'Chainsaw Chain Product Matrix')
  
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('Borealgrit', 190, 20, { align: 'right' })
  doc.text('Professional Chainsaw Chain Supplier', 190, 26, { align: 'right' })
  
  y = addSectionToPDF(doc, y, 'Product Series Overview')
  y = addTableRowToPDF(doc, y, 'Series E', 'Battery Saws - Narrow Kerf (.043" gauge)')
  y = addTableRowToPDF(doc, y, 'Series W', 'Cold Weather - Premium Steel (68CrNiMo)')
  y = addTableRowToPDF(doc, y, 'Series P', 'Professional Logging - Full-Chisel')
  y = addTableRowToPDF(doc, y, 'Standard', 'General Purpose - Standard Duty')
  
  y = addSectionToPDF(doc, y, 'Available Pitches')
  y = addTableRowToPDF(doc, y, '.325"', '8.25mm - Mid-size professional')
  y = addTableRowToPDF(doc, y, '3/8" LP', '9.3mm - Low profile, consumer')
  y = addTableRowToPDF(doc, y, '3/8"', '9.5mm - Most common professional')
  y = addTableRowToPDF(doc, y, '.404"', '10.3mm - Large professional')
  
  y = addSectionToPDF(doc, y, 'Available Gauges')
  y = addTableRowToPDF(doc, y, '.043"', '1.1mm - Battery saws, narrow kerf')
  y = addTableRowToPDF(doc, y, '.050"', '1.3mm - Most common')
  y = addTableRowToPDF(doc, y, '.058"', '1.5mm - Professional saws')
  y = addTableRowToPDF(doc, y, '.063"', '1.6mm - Large professional')
  
  y = addSectionToPDF(doc, y, 'Drive Link Range')
  y = addParagraphToPDF(doc, y, 'Standard range: 48DL - 84DL')
  y = addParagraphToPDF(doc, y, 'Custom configurations available for OEM orders')
  
  y = addSectionToPDF(doc, y, 'Chain Types')
  y = addTableRowToPDF(doc, y, 'Low Profile', 'Reduced kickback, consumer saws')
  y = addTableRowToPDF(doc, y, 'Full Chain', 'Standard depth, professional use')
  y = addTableRowToPDF(doc, y, 'Semi Chain', 'Standard depth, general purpose')
  
  y = addSectionToPDF(doc, y, 'Cutter Profiles')
  y = addTableRowToPDF(doc, y, 'Full-Chisel', 'Square-corner, maximum speed')
  y = addTableRowToPDF(doc, y, 'Semi-Chisel', 'Round-corner, better durability')
  
  y = addSectionToPDF(doc, y, 'Steel Grades')
  y = addTableRowToPDF(doc, y, '65Mn', 'Standard carbon steel')
  y = addTableRowToPDF(doc, y, '68CrNiMo', 'Premium alloy, cold weather')
  
  doc.addPage()
  y = 20
  y = addSectionToPDF(doc, y, 'Common Applications')
  y = addTableRowToPDF(doc, y, 'Battery Saws', 'Series E, .043" gauge, Low Profile')
  y = addTableRowToPDF(doc, y, 'Cold Weather', 'Series W, 68CrNiMo steel')
  y = addTableRowToPDF(doc, y, 'Professional Logging', 'Series P, Full-Chisel, .404"')
  y = addTableRowToPDF(doc, y, 'General Purpose', 'Standard Series, Semi-Chisel')
  
  y = addSectionToPDF(doc, y, 'Compatibility Quick Reference')
  y = addParagraphToPDF(doc, y, 'Stihl MS 170-261: .325" / .050"')
  y = addParagraphToPDF(doc, y, 'Stihl MS 271-362: 3/8" / .050"')
  y = addParagraphToPDF(doc, y, 'Husqvarna 240-460: .325" / .050" or 3/8" / .050"')
  y = addParagraphToPDF(doc, y, 'Battery Saws: .325" / .043" or 3/8" LP / .043"')
  
  y = addSectionToPDF(doc, y, 'MDM Number Format')
  y = addParagraphToPDF(doc, y, 'CSC-[Series]-[Pitch]-[Gauge]-[DL]-[ChainType]-[CutterType]')
  y = addParagraphToPDF(doc, y, 'Example: CSC-E-325-043-50DL-LP-SC')
  y = addParagraphToPDF(doc, y, 'Series: E, W, P, STD')
  y = addParagraphToPDF(doc, y, 'ChainType: LP, F, S')
  y = addParagraphToPDF(doc, y, 'CutterType: FC, SC')
  
  y = addSectionToPDF(doc, y, 'Product Count Summary')
  y = addTableRowToPDF(doc, y, 'Total Products', `${PRODUCT_CATALOG.length} models`)
  y = addTableRowToPDF(doc, y, 'Series E', `${PRODUCT_CATALOG.filter(p => p.series === 'Series E').length} models`)
  y = addTableRowToPDF(doc, y, 'Series W', `${PRODUCT_CATALOG.filter(p => p.series === 'Series W').length} models`)
  y = addTableRowToPDF(doc, y, 'Series P', `${PRODUCT_CATALOG.filter(p => p.series === 'Series P').length} models`)
  y = addTableRowToPDF(doc, y, 'Standard', `${PRODUCT_CATALOG.filter(p => p.series === 'Standard').length} models`)
  
  y = addSectionToPDF(doc, y, 'Contact Information')
  y = addParagraphToPDF(doc, y, 'For complete product catalog or custom specifications:')
  y = addParagraphToPDF(doc, y, 'Email: sales@borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Website: www.borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Download full catalog: www.borealgrit.com/products')
  
  addFooterToPDF(doc)
  downloadPDF(doc, 'quick-reference-guide.pdf')
}
