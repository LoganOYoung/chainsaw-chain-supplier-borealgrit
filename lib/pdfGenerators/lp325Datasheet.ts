'use client'

import jsPDF from 'jspdf'
import { addHeaderToPDF, addSectionToPDF, addParagraphToPDF, addTableRowToPDF, addFooterToPDF, downloadPDF } from '../clientPdfGenerator'

export function generateLP325Datasheet() {
  const doc = new jsPDF()
  let y = addHeaderToPDF(doc, 'LP-325 Technical Datasheet', 'Low Profile .325" Pitch Chainsaw Chain')
  
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('Borealgrit', 190, 20, { align: 'right' })
  doc.text('Professional Chainsaw Chain Supplier', 190, 26, { align: 'right' })
  
  y = addSectionToPDF(doc, y, 'Product Overview')
  y = addParagraphToPDF(doc, y, 'The LP-325 is a low-profile chainsaw chain designed for safety and ease of use. Featuring reduced kickback design and narrow kerf, this chain is ideal for consumer saws, battery-powered saws, and applications requiring enhanced safety features.')
  
  y = addSectionToPDF(doc, y, 'Technical Specifications')
  y = addTableRowToPDF(doc, y, 'MDM Number', 'CSC-STD-325-043-[DL]-LP-SC')
  y = addTableRowToPDF(doc, y, 'Pitch', '.325" (8.25mm)')
  y = addTableRowToPDF(doc, y, 'Gauge', '.043" (1.1mm)')
  y = addTableRowToPDF(doc, y, 'Drive Links', '48DL, 50DL, 52DL, 56DL')
  y = addTableRowToPDF(doc, y, 'Chain Type', 'Low Profile')
  y = addTableRowToPDF(doc, y, 'Cutter Profile', 'Semi-Chisel (Round-Corner)')
  y = addTableRowToPDF(doc, y, 'Steel Grade', '65Mn')
  y = addTableRowToPDF(doc, y, 'Hardness', 'HRC 58-62')
  y = addTableRowToPDF(doc, y, 'Finish', 'Chrome Plated')
  y = addTableRowToPDF(doc, y, 'Kickback Reduction', 'ANSI Low-Kickback Certified')
  
  y = addSectionToPDF(doc, y, 'Performance Features')
  y = addParagraphToPDF(doc, y, '• Low-kickback design for enhanced safety')
  y = addParagraphToPDF(doc, y, '• Narrow kerf reduces cutting resistance')
  y = addParagraphToPDF(doc, y, '• Optimized for battery-powered saws')
  y = addParagraphToPDF(doc, y, '• Smooth cutting performance')
  y = addParagraphToPDF(doc, y, '• Excellent for homeowner applications')
  
  y = addSectionToPDF(doc, y, 'Compatibility')
  y = addParagraphToPDF(doc, y, 'Compatible with chainsaw models requiring .325" pitch and .043" gauge, including:')
  y = addParagraphToPDF(doc, y, '• Stihl MSA 120, MSA 140, MSA 200')
  y = addParagraphToPDF(doc, y, '• Husqvarna T435, T540')
  y = addParagraphToPDF(doc, y, '• Echo CS-310, CS-400')
  y = addParagraphToPDF(doc, y, '• Consumer-grade gas saws')
  y = addParagraphToPDF(doc, y, '• Battery-powered chainsaws')
  y = addParagraphToPDF(doc, y, 'Note: Always verify bar groove specifications before installation.')
  
  y = addSectionToPDF(doc, y, 'Recommended Applications')
  y = addParagraphToPDF(doc, y, '• Homeowner and DIY projects')
  y = addParagraphToPDF(doc, y, '• Light-duty cutting tasks')
  y = addParagraphToPDF(doc, y, '• Battery-powered saw applications')
  y = addParagraphToPDF(doc, y, '• Pruning and trimming')
  y = addParagraphToPDF(doc, y, '• Small firewood processing')
  
  y = addSectionToPDF(doc, y, 'Safety Features')
  y = addTableRowToPDF(doc, y, 'Kickback Reduction', 'ANSI Low-Kickback Certified')
  y = addTableRowToPDF(doc, y, 'Guard Links', 'Reduced depth guard links')
  y = addTableRowToPDF(doc, y, 'Cutter Design', 'Optimized for safety')
  y = addTableRowToPDF(doc, y, 'ANSI Standard', 'ANSI B175.1 Compliant')
  
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
  y = addParagraphToPDF(doc, y, '• Clean chain after use')
  y = addParagraphToPDF(doc, y, '• Store in dry environment to prevent rust')
  
  doc.addPage()
  y = 20
  y = addSectionToPDF(doc, y, 'Contact Information')
  y = addParagraphToPDF(doc, y, 'For technical support, ordering, or custom specifications:')
  y = addParagraphToPDF(doc, y, 'Email: sales@borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Website: www.borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Response Time: Within 24 hours during business days')
  
  addFooterToPDF(doc)
  downloadPDF(doc, 'lp-325-datasheet.pdf')
}
