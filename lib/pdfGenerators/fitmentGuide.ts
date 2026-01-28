'use client'

import jsPDF from 'jspdf'
import { addHeaderToPDF, addSectionToPDF, addParagraphToPDF, addTableRowToPDF, addFooterToPDF, downloadPDF } from '../clientPdfGenerator'

export function generateFitmentGuide() {
  const doc = new jsPDF()
  let y = addHeaderToPDF(doc, 'Fitment Reference Guide', 'Chainsaw Chain Compatibility Guide')
  
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('Borealgrit', 190, 20, { align: 'right' })
  doc.text('Professional Chainsaw Chain Supplier', 190, 26, { align: 'right' })
  
  y = addSectionToPDF(doc, y, 'Introduction')
  y = addParagraphToPDF(doc, y, 'This guide provides compatibility information for selecting the correct chainsaw chain based on your saw model. Always verify bar specifications before ordering.')
  
  y = addSectionToPDF(doc, y, 'How to Use This Guide')
  y = addParagraphToPDF(doc, y, '1. Identify your chainsaw brand and model')
  y = addParagraphToPDF(doc, y, '2. Find the corresponding entry in the compatibility table')
  y = addParagraphToPDF(doc, y, '3. Note the required pitch, gauge, and drive link count')
  y = addParagraphToPDF(doc, y, '4. Verify bar length matches your saw')
  y = addParagraphToPDF(doc, y, '5. Order the corresponding chain from our catalog')
  
  y = addSectionToPDF(doc, y, 'Stihl Chainsaw Compatibility')
  y = addTableRowToPDF(doc, y, 'MS 170 / MS 180', '.325" / .050" / 52DL-56DL')
  y = addTableRowToPDF(doc, y, 'MS 250 / MS 251', '.325" / .050" / 56DL-60DL')
  y = addTableRowToPDF(doc, y, 'MS 261', '3/8" / .050" / 56DL-60DL')
  y = addTableRowToPDF(doc, y, 'MS 271 / MS 291', '3/8" / .050" / 56DL-64DL')
  y = addTableRowToPDF(doc, y, 'MS 311 / MS 362', '3/8" / .050" / 60DL-72DL')
  y = addTableRowToPDF(doc, y, 'MS 661', '.404" / .063" / 72DL-84DL')
  y = addTableRowToPDF(doc, y, 'MSA 120 / MSA 140', '.325" / .043" / 48DL-52DL')
  y = addTableRowToPDF(doc, y, 'MSA 200', '.325" / .043" / 56DL')
  
  y = addSectionToPDF(doc, y, 'Husqvarna Chainsaw Compatibility')
  y = addTableRowToPDF(doc, y, '240 / 440', '.325" / .050" / 52DL-56DL')
  y = addTableRowToPDF(doc, y, '450 / 455', '3/8" / .050" / 56DL-60DL')
  y = addTableRowToPDF(doc, y, '460', '3/8" / .050" / 60DL-64DL')
  y = addTableRowToPDF(doc, y, '572', '3/8" / .050" / 60DL-72DL')
  y = addTableRowToPDF(doc, y, 'T435 / T540', '.325" / .043" / 50DL-56DL')
  
  y = addSectionToPDF(doc, y, 'Echo Chainsaw Compatibility')
  y = addTableRowToPDF(doc, y, 'CS-310 / CS-400', '.325" / .050" / 52DL-56DL')
  y = addTableRowToPDF(doc, y, 'CS-450', '3/8" / .050" / 56DL-60DL')
  y = addTableRowToPDF(doc, y, 'CS-590 / CS-600', '3/8" / .050" / 60DL-64DL')
  y = addTableRowToPDF(doc, y, 'CS-680', '3/8" / .058" / 64DL-72DL')
  
  y = addSectionToPDF(doc, y, 'Important Notes')
  y = addParagraphToPDF(doc, y, '• Bar length determines drive link count')
  y = addParagraphToPDF(doc, y, '• Always measure bar groove to confirm gauge')
  y = addParagraphToPDF(doc, y, '• Pitch must match sprocket type')
  y = addParagraphToPDF(doc, y, '• Some models support multiple configurations')
  y = addParagraphToPDF(doc, y, '• When in doubt, contact us for assistance')
  
  doc.addPage()
  y = 20
  y = addSectionToPDF(doc, y, 'Drive Link Count Calculation')
  y = addParagraphToPDF(doc, y, 'To calculate drive links needed:')
  y = addParagraphToPDF(doc, y, '1. Measure bar length from tip to mounting point')
  y = addParagraphToPDF(doc, y, '2. Count existing drive links (if replacing)')
  y = addParagraphToPDF(doc, y, '3. Use our fitment finder tool on the website')
  y = addParagraphToPDF(doc, y, '4. Contact us for custom configurations')
  
  y = addSectionToPDF(doc, y, 'Common Bar Lengths and Drive Links')
  y = addTableRowToPDF(doc, y, '12" Bar', '40-44DL')
  y = addTableRowToPDF(doc, y, '14" Bar', '48-52DL')
  y = addTableRowToPDF(doc, y, '16" Bar', '52-56DL')
  y = addTableRowToPDF(doc, y, '18" Bar', '56-60DL')
  y = addTableRowToPDF(doc, y, '20" Bar', '60-64DL')
  y = addTableRowToPDF(doc, y, '24" Bar', '72-84DL')
  
  y = addSectionToPDF(doc, y, 'Troubleshooting')
  y = addParagraphToPDF(doc, y, 'If chain doesn\'t fit:')
  y = addParagraphToPDF(doc, y, '• Verify pitch matches sprocket')
  y = addParagraphToPDF(doc, y, '• Check gauge matches bar groove')
  y = addParagraphToPDF(doc, y, '• Count drive links accurately')
  y = addParagraphToPDF(doc, y, '• Ensure bar is properly installed')
  y = addParagraphToPDF(doc, y, '• Contact technical support if issues persist')
  
  y = addSectionToPDF(doc, y, 'Contact Information')
  y = addParagraphToPDF(doc, y, 'For fitment assistance or custom configurations:')
  y = addParagraphToPDF(doc, y, 'Email: sales@borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Website: www.borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Response Time: Within 24 hours during business days')
  
  addFooterToPDF(doc)
  downloadPDF(doc, 'fitment-reference-guide.pdf')
}
