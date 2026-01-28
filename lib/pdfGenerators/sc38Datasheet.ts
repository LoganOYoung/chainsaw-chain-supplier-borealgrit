'use client'

import jsPDF from 'jspdf'
import { addHeaderToPDF, addSectionToPDF, addParagraphToPDF, addTableRowToPDF, addFooterToPDF, downloadPDF } from '../clientPdfGenerator'

export function generateSC38Datasheet() {
  const doc = new jsPDF()
  let y = addHeaderToPDF(doc, 'SC-38 Technical Datasheet', 'Semi-Chisel 3/8" Pitch Chainsaw Chain')
  
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('Borealgrit', 190, 20, { align: 'right' })
  doc.text('Professional Chainsaw Chain Supplier', 190, 26, { align: 'right' })
  
  y = addSectionToPDF(doc, y, 'Product Overview')
  y = addParagraphToPDF(doc, y, 'The SC-38 is a versatile semi-chisel chainsaw chain designed for durability and consistent performance. Featuring round-corner cutters, this chain excels in dirty conditions and provides excellent cutting performance across a wide range of applications.')
  
  y = addSectionToPDF(doc, y, 'Technical Specifications')
  y = addTableRowToPDF(doc, y, 'MDM Number', 'CSC-STD-38-050-[DL]-F-SC')
  y = addTableRowToPDF(doc, y, 'Pitch', '3/8" (9.5mm)')
  y = addTableRowToPDF(doc, y, 'Gauge', '.050" (1.3mm)')
  y = addTableRowToPDF(doc, y, 'Drive Links', '50DL, 56DL, 60DL, 64DL')
  y = addTableRowToPDF(doc, y, 'Chain Type', 'Full Chain')
  y = addTableRowToPDF(doc, y, 'Cutter Profile', 'Semi-Chisel (Round-Corner)')
  y = addTableRowToPDF(doc, y, 'Steel Grade', '65Mn (Standard) or 68CrNiMo (Premium)')
  y = addTableRowToPDF(doc, y, 'Hardness', 'HRC 58-62')
  y = addTableRowToPDF(doc, y, 'Finish', 'Chrome Plated')
  
  y = addSectionToPDF(doc, y, 'Performance Features')
  y = addParagraphToPDF(doc, y, '• Excellent durability in dirty and abrasive conditions')
  y = addParagraphToPDF(doc, y, '• Maintains sharpness longer than full-chisel chains')
  y = addParagraphToPDF(doc, y, '• Smooth cutting performance')
  y = addParagraphToPDF(doc, y, '• Reduced kickback risk')
  y = addParagraphToPDF(doc, y, '• Versatile for various wood types')
  
  y = addSectionToPDF(doc, y, 'Compatibility')
  y = addParagraphToPDF(doc, y, 'Compatible with chainsaw models requiring 3/8" pitch and .050" gauge, including:')
  y = addParagraphToPDF(doc, y, '• Stihl MS 271, MS 291, MS 311, MS 362')
  y = addParagraphToPDF(doc, y, '• Husqvarna 455, 460, 572')
  y = addParagraphToPDF(doc, y, '• Echo CS-590, CS-600, CS-680')
  y = addParagraphToPDF(doc, y, '• Other brands with compatible bar specifications')
  y = addParagraphToPDF(doc, y, 'Note: Always verify bar groove specifications before installation.')
  
  y = addSectionToPDF(doc, y, 'Recommended Applications')
  y = addParagraphToPDF(doc, y, '• General purpose cutting')
  y = addParagraphToPDF(doc, y, '• Firewood processing')
  y = addParagraphToPDF(doc, y, '• Tree removal and cleanup')
  y = addParagraphToPDF(doc, y, '• Cutting dirty or frozen wood')
  y = addParagraphToPDF(doc, y, '• Homeowner and professional use')
  
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
  downloadPDF(doc, 'sc-38-datasheet.pdf')
}
