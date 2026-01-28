'use client'

import jsPDF from 'jspdf'
import { addHeaderToPDF, addSectionToPDF, addParagraphToPDF, addTableRowToPDF, addFooterToPDF, downloadPDF } from '../clientPdfGenerator'

export function generateFC325Datasheet() {
  const doc = new jsPDF()
  let y = addHeaderToPDF(doc, 'FC-325 Technical Datasheet', 'Full Chisel .325" Pitch Chainsaw Chain')
  
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('Borealgrit', 190, 20, { align: 'right' })
  doc.text('Professional Chainsaw Chain Supplier', 190, 26, { align: 'right' })
  
  y = addSectionToPDF(doc, y, 'Product Overview')
  y = addParagraphToPDF(doc, y, 'The FC-325 is a professional-grade full chisel chainsaw chain designed for maximum cutting performance. Featuring square-corner cutters, this chain delivers superior cutting speed and efficiency for professional logging and forestry applications.')
  
  y = addSectionToPDF(doc, y, 'Technical Specifications')
  y = addTableRowToPDF(doc, y, 'MDM Number', 'CSC-STD-325-050-[DL]-F-FC')
  y = addTableRowToPDF(doc, y, 'Pitch', '.325" (8.25mm)')
  y = addTableRowToPDF(doc, y, 'Gauge', '.050" (1.3mm)')
  y = addTableRowToPDF(doc, y, 'Drive Links', '50DL, 52DL, 56DL, 60DL')
  y = addTableRowToPDF(doc, y, 'Chain Type', 'Full Chain')
  y = addTableRowToPDF(doc, y, 'Cutter Profile', 'Full-Chisel (Square-Corner)')
  y = addTableRowToPDF(doc, y, 'Steel Grade', '65Mn (Standard) or 68CrNiMo (Premium)')
  y = addTableRowToPDF(doc, y, 'Hardness', 'HRC 58-62')
  y = addTableRowToPDF(doc, y, 'Finish', 'Chrome Plated')
  
  y = addSectionToPDF(doc, y, 'Performance Features')
  y = addParagraphToPDF(doc, y, '• Maximum cutting speed with square-corner cutters')
  y = addParagraphToPDF(doc, y, '• Excellent chip ejection for reduced binding')
  y = addParagraphToPDF(doc, y, '• Optimized for clean wood cutting')
  y = addParagraphToPDF(doc, y, '• Professional-grade durability')
  y = addParagraphToPDF(doc, y, '• Compatible with major OEM brands')
  
  y = addSectionToPDF(doc, y, 'Compatibility')
  y = addParagraphToPDF(doc, y, 'Compatible with chainsaw models requiring .325" pitch and .050" gauge, including:')
  y = addParagraphToPDF(doc, y, '• Stihl MS 170, MS 180, MS 250, MS 251, MS 261')
  y = addParagraphToPDF(doc, y, '• Husqvarna 240, 440, 450, 460')
  y = addParagraphToPDF(doc, y, '• Echo CS-310, CS-400, CS-450')
  y = addParagraphToPDF(doc, y, '• Other brands with compatible bar specifications')
  y = addParagraphToPDF(doc, y, 'Note: Always verify bar groove specifications before installation.')
  
  y = addSectionToPDF(doc, y, 'Recommended Applications')
  y = addParagraphToPDF(doc, y, '• Professional logging and felling')
  y = addParagraphToPDF(doc, y, '• Forestry operations')
  y = addParagraphToPDF(doc, y, '• Tree service and arboriculture')
  y = addParagraphToPDF(doc, y, '• Firewood processing')
  y = addParagraphToPDF(doc, y, '• General professional cutting tasks')
  
  y = addSectionToPDF(doc, y, 'Quality & Compliance')
  y = addTableRowToPDF(doc, y, 'ANSI Standard', 'ANSI B175.1 Compliant')
  y = addTableRowToPDF(doc, y, 'CSA Certification', 'CSA Z62.3 (Selected models)')
  y = addTableRowToPDF(doc, y, 'Quality System', 'ISO 9001 Certified')
  y = addTableRowToPDF(doc, y, 'Material Traceability', 'Full batch traceability')
  
  y = addSectionToPDF(doc, y, 'Packaging Options')
  y = addParagraphToPDF(doc, y, '• Standard retail box (individual chain)')
  y = addParagraphToPDF(doc, y, '• Bulk packaging (multiple chains per carton)')
  y = addParagraphToPDF(doc, y, '• OEM packaging available')
  y = addParagraphToPDF(doc, y, '• Private label options available')
  
  y = addSectionToPDF(doc, y, 'Maintenance Recommendations')
  y = addParagraphToPDF(doc, y, '• Keep chain properly tensioned')
  y = addParagraphToPDF(doc, y, '• Maintain adequate chain lubrication')
  y = addParagraphToPDF(doc, y, '• Sharpen regularly with appropriate file size')
  y = addParagraphToPDF(doc, y, '• Clean chain after use in dirty conditions')
  y = addParagraphToPDF(doc, y, '• Store in dry environment to prevent rust')
  
  doc.addPage()
  y = 20
  y = addSectionToPDF(doc, y, 'Contact Information')
  y = addParagraphToPDF(doc, y, 'For technical support, ordering, or custom specifications:')
  y = addParagraphToPDF(doc, y, 'Email: sales@borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Website: www.borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Response Time: Within 24 hours during business days')
  
  addFooterToPDF(doc)
  downloadPDF(doc, 'fc-325-datasheet.pdf')
}
