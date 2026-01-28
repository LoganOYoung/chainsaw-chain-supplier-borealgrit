'use client'

import jsPDF from 'jspdf'
import { addHeaderToPDF, addSectionToPDF, addParagraphToPDF, addTableRowToPDF, addFooterToPDF, downloadPDF } from '../clientPdfGenerator'

export function generateBuyersGuide() {
  const doc = new jsPDF()
  let y = addHeaderToPDF(doc, 'Chainsaw Chain Buyer\'s Guide', 'How to Specify Chainsaw Chains for B2B Purchasing')
  
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('Borealgrit', 190, 20, { align: 'right' })
  doc.text('Professional Chainsaw Chain Supplier', 190, 26, { align: 'right' })
  
  y = addSectionToPDF(doc, y, 'Introduction')
  y = addParagraphToPDF(doc, y, 'This guide helps B2B buyers, distributors, and importers understand how to properly specify chainsaw chains for procurement. Accurate specification ensures compatibility and customer satisfaction.')
  
  y = addSectionToPDF(doc, y, 'Key Specifications to Specify')
  y = addParagraphToPDF(doc, y, 'When ordering chainsaw chains, always provide:')
  y = addTableRowToPDF(doc, y, '1. Pitch', 'Distance between drive links (.325", 3/8", .404")')
  y = addTableRowToPDF(doc, y, '2. Gauge', 'Drive link thickness (.043", .050", .058", .063")')
  y = addTableRowToPDF(doc, y, '3. Drive Links', 'Number of drive links (48DL, 56DL, 72DL, etc.)')
  y = addTableRowToPDF(doc, y, '4. Chain Type', 'Full, Semi, or Low Profile')
  y = addTableRowToPDF(doc, y, '5. Cutter Profile', 'Full-Chisel or Semi-Chisel')
  y = addTableRowToPDF(doc, y, '6. Steel Grade', '65Mn (standard) or 68CrNiMo (premium)')
  
  y = addSectionToPDF(doc, y, 'Understanding Chain Types')
  y = addParagraphToPDF(doc, y, 'Full Chain:', { bold: true })
  y = addParagraphToPDF(doc, y, '• Standard depth cutters')
  y = addParagraphToPDF(doc, y, '• Maximum cutting performance')
  y = addParagraphToPDF(doc, y, '• Professional applications')
  
  y = addParagraphToPDF(doc, y, 'Low Profile:', { bold: true })
  y = addParagraphToPDF(doc, y, '• Reduced depth cutters')
  y = addParagraphToPDF(doc, y, '• Low-kickback design')
  y = addParagraphToPDF(doc, y, '• Consumer and battery saws')
  
  y = addSectionToPDF(doc, y, 'Understanding Cutter Profiles')
  y = addParagraphToPDF(doc, y, 'Full-Chisel (Square-Corner):', { bold: true })
  y = addParagraphToPDF(doc, y, '• Maximum cutting speed')
  y = addParagraphToPDF(doc, y, '• Best for clean wood')
  y = addParagraphToPDF(doc, y, '• Requires more frequent sharpening')
  y = addParagraphToPDF(doc, y, '• Professional logging applications')
  
  y = addParagraphToPDF(doc, y, 'Semi-Chisel (Round-Corner):', { bold: true })
  y = addParagraphToPDF(doc, y, '• Better durability')
  y = addParagraphToPDF(doc, y, '• Performs well in dirty conditions')
  y = addParagraphToPDF(doc, y, '• Stays sharp longer')
  y = addParagraphToPDF(doc, y, '• General purpose applications')
  
  y = addSectionToPDF(doc, y, 'Common Mistakes to Avoid')
  y = addParagraphToPDF(doc, y, '1. Confusing pitch measurements (.325" vs 3/8")')
  y = addParagraphToPDF(doc, y, '2. Not verifying gauge matches bar groove')
  y = addParagraphToPDF(doc, y, '3. Incorrect drive link count')
  y = addParagraphToPDF(doc, y, '4. Ordering wrong chain type for application')
  y = addParagraphToPDF(doc, y, '5. Not considering steel grade for application')
  y = addParagraphToPDF(doc, y, '6. Assuming all brands use same specifications')
  
  doc.addPage()
  y = 20
  y = addSectionToPDF(doc, y, 'Application-Based Selection')
  y = addParagraphToPDF(doc, y, 'Battery-Powered Saws:', { bold: true })
  y = addParagraphToPDF(doc, y, '• Use Low Profile chains')
  y = addParagraphToPDF(doc, y, '• .043" gauge for narrow kerf')
  y = addParagraphToPDF(doc, y, '• Semi-chisel for durability')
  
  y = addParagraphToPDF(doc, y, 'Professional Logging:', { bold: true })
  y = addParagraphToPDF(doc, y, '• Full chain with full-chisel cutters')
  y = addParagraphToPDF(doc, y, '• Premium steel grade (68CrNiMo)')
  y = addParagraphToPDF(doc, y, '• Larger pitch (.404" for big saws)')
  
  y = addParagraphToPDF(doc, y, 'Cold Weather Applications:', { bold: true })
  y = addParagraphToPDF(doc, y, '• Premium steel grade (68CrNiMo)')
  y = addParagraphToPDF(doc, y, '• Semi-chisel for durability')
  y = addParagraphToPDF(doc, y, '• Standard or full chain type')
  
  y = addSectionToPDF(doc, y, 'Packaging Considerations')
  y = addParagraphToPDF(doc, y, 'Retail Packaging:', { bold: true })
  y = addParagraphToPDF(doc, y, '• Individual chain boxes')
  y = addParagraphToPDF(doc, y, '• Consumer-friendly labeling')
  y = addParagraphToPDF(doc, y, '• UPC/barcode included')
  
  y = addParagraphToPDF(doc, y, 'Bulk Packaging:', { bold: true })
  y = addParagraphToPDF(doc, y, '• Multiple chains per carton')
  y = addParagraphToPDF(doc, y, '• Cost-effective for distributors')
  y = addParagraphToPDF(doc, y, '• Custom carton configurations available')
  
  y = addParagraphToPDF(doc, y, 'OEM Packaging:', { bold: true })
  y = addParagraphToPDF(doc, y, '• Custom branding')
  y = addParagraphToPDF(doc, y, '• Private label options')
  y = addParagraphToPDF(doc, y, '• Custom part numbers')
  
  y = addSectionToPDF(doc, y, 'Quality Standards')
  y = addTableRowToPDF(doc, y, 'ANSI B175.1', 'Required for all products')
  y = addTableRowToPDF(doc, y, 'CSA Z62.3', 'Selected models for Canadian market')
  y = addTableRowToPDF(doc, y, 'ISO 9001', 'Quality management system')
  y = addTableRowToPDF(doc, y, 'Material Traceability', 'Full batch tracking')
  
  y = addSectionToPDF(doc, y, 'Ordering Best Practices')
  y = addParagraphToPDF(doc, y, '1. Provide complete specifications')
  y = addParagraphToPDF(doc, y, '2. Specify quantity and packaging needs')
  y = addParagraphToPDF(doc, y, '3. Indicate target market (USA/Canada)')
  y = addParagraphToPDF(doc, y, '4. Request samples for new specifications')
  y = addParagraphToPDF(doc, y, '5. Plan lead times (typically 4-6 weeks)')
  y = addParagraphToPDF(doc, y, '6. Consider MOQ requirements')
  
  y = addSectionToPDF(doc, y, 'Contact Information')
  y = addParagraphToPDF(doc, y, 'For purchasing assistance or custom specifications:')
  y = addParagraphToPDF(doc, y, 'Email: sales@borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Website: www.borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Response Time: Within 24 hours during business days')
  
  addFooterToPDF(doc)
  downloadPDF(doc, 'buyers-guide.pdf')
}
