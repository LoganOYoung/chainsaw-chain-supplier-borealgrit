'use client'

import jsPDF from 'jspdf'
import { addHeaderToPDF, addSectionToPDF, addParagraphToPDF, addTableRowToPDF, addFooterToPDF, downloadPDF } from '../clientPdfGenerator'

export function generatePitchGaugeGuide() {
  const doc = new jsPDF()
  let y = addHeaderToPDF(doc, 'Pitch & Gauge Identification Guide', 'How to Measure Chainsaw Chain Specifications')
  
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('Borealgrit', 190, 20, { align: 'right' })
  doc.text('Professional Chainsaw Chain Supplier', 190, 26, { align: 'right' })
  
  y = addSectionToPDF(doc, y, 'Introduction')
  y = addParagraphToPDF(doc, y, 'This guide explains how to identify pitch and gauge measurements for chainsaw chains. Accurate measurement is essential for selecting the correct replacement chain.')
  
  y = addSectionToPDF(doc, y, 'What is Pitch?')
  y = addParagraphToPDF(doc, y, 'Pitch is the distance between three consecutive rivets, divided by two. It determines how the chain fits on the sprocket.')
  y = addParagraphToPDF(doc, y, 'Common pitches:')
  y = addTableRowToPDF(doc, y, '.325"', '8.25mm - Common for mid-size saws')
  y = addTableRowToPDF(doc, y, '3/8" LP', '9.3mm - Low profile, consumer saws')
  y = addTableRowToPDF(doc, y, '3/8"', '9.5mm - Most common professional pitch')
  y = addTableRowToPDF(doc, y, '.404"', '10.3mm - Large professional saws')
  
  y = addSectionToPDF(doc, y, 'How to Measure Pitch')
  y = addParagraphToPDF(doc, y, '1. Locate three consecutive rivets on the chain')
  y = addParagraphToPDF(doc, y, '2. Measure the distance from the center of the first rivet to the center of the third rivet')
  y = addParagraphToPDF(doc, y, '3. Divide this measurement by 2')
  y = addParagraphToPDF(doc, y, '4. Compare to standard pitches listed above')
  y = addParagraphToPDF(doc, y, 'Alternative: Measure distance between two drive links')
  
  y = addSectionToPDF(doc, y, 'What is Gauge?')
  y = addParagraphToPDF(doc, y, 'Gauge is the thickness of the drive link that fits into the bar groove. It must match exactly.')
  y = addParagraphToPDF(doc, y, 'Common gauges:')
  y = addTableRowToPDF(doc, y, '.043"', '1.1mm - Battery saws, narrow kerf')
  y = addTableRowToPDF(doc, y, '.050"', '1.3mm - Most common gauge')
  y = addTableRowToPDF(doc, y, '.058"', '1.5mm - Professional saws')
  y = addTableRowToPDF(doc, y, '.063"', '1.6mm - Large professional saws')
  
  y = addSectionToPDF(doc, y, 'How to Measure Gauge')
  y = addParagraphToPDF(doc, y, 'Method 1: Measure Drive Link Thickness')
  y = addParagraphToPDF(doc, y, '1. Remove chain from bar')
  y = addParagraphToPDF(doc, y, '2. Use calipers to measure drive link thickness')
  y = addParagraphToPDF(doc, y, '3. Compare to standard gauges')
  
  y = addParagraphToPDF(doc, y, 'Method 2: Measure Bar Groove')
  y = addParagraphToPDF(doc, y, '1. Measure the width of the bar groove')
  y = addParagraphToPDF(doc, y, '2. Gauge matches groove width exactly')
  y = addParagraphToPDF(doc, y, '3. Use feeler gauges for accurate measurement')
  
  y = addSectionToPDF(doc, y, 'Drive Link Count')
  y = addParagraphToPDF(doc, y, 'Drive links are the bottom links that engage with the sprocket.')
  y = addParagraphToPDF(doc, y, 'To count drive links:')
  y = addParagraphToPDF(doc, y, '1. Count all links with drive tangs (bottom of chain)')
  y = addParagraphToPDF(doc, y, '2. Count only complete links')
  y = addParagraphToPDF(doc, y, '3. This number determines chain length')
  
  doc.addPage()
  y = 20
  y = addSectionToPDF(doc, y, 'Common Specification Combinations')
  y = addTableRowToPDF(doc, y, 'Consumer Saws', '.325" / .043" / 48-56DL')
  y = addTableRowToPDF(doc, y, 'Mid-Size Professional', '.325" / .050" / 50-60DL')
  y = addTableRowToPDF(doc, y, 'Professional', '3/8" / .050" / 56-72DL')
  y = addTableRowToPDF(doc, y, 'Large Professional', '.404" / .063" / 72-84DL')
  
  y = addSectionToPDF(doc, y, 'Measurement Tools')
  y = addParagraphToPDF(doc, y, 'Recommended tools:')
  y = addParagraphToPDF(doc, y, '• Digital calipers (most accurate)')
  y = addParagraphToPDF(doc, y, '• Feeler gauges (for bar groove)')
  y = addParagraphToPDF(doc, y, '• Ruler or tape measure (for pitch)')
  y = addParagraphToPDF(doc, y, '• Chain pitch gauge (specialized tool)')
  
  y = addSectionToPDF(doc, y, 'Troubleshooting')
  y = addParagraphToPDF(doc, y, 'If measurements don\'t match standard sizes:')
  y = addParagraphToPDF(doc, y, '• Re-measure carefully')
  y = addParagraphToPDF(doc, y, '• Check for metric vs. imperial confusion')
  y = addParagraphToPDF(doc, y, '• Verify bar and sprocket compatibility')
  y = addParagraphToPDF(doc, y, '• Contact us with measurements for assistance')
  
  y = addSectionToPDF(doc, y, 'Safety Reminder')
  y = addParagraphToPDF(doc, y, 'Always ensure chain specifications match your saw exactly. Using incorrect pitch or gauge can cause:')
  y = addParagraphToPDF(doc, y, '• Chain derailment')
  y = addParagraphToPDF(doc, y, '• Bar damage')
  y = addParagraphToPDF(doc, y, '• Safety hazards')
  y = addParagraphToPDF(doc, y, '• Premature wear')
  
  y = addSectionToPDF(doc, y, 'Contact Information')
  y = addParagraphToPDF(doc, y, 'Need help identifying your chain specifications?')
  y = addParagraphToPDF(doc, y, 'Email: sales@borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Website: www.borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Response Time: Within 24 hours during business days')
  
  addFooterToPDF(doc)
  downloadPDF(doc, 'pitch-gauge-guide.pdf')
}
