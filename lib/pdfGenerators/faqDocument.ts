'use client'

import jsPDF from 'jspdf'
import { addHeaderToPDF, addSectionToPDF, addParagraphToPDF, addFooterToPDF, downloadPDF } from '../clientPdfGenerator'

export function generateFAQDocument() {
  const doc = new jsPDF()
  let y = addHeaderToPDF(doc, 'Frequently Asked Questions', 'Chainsaw Chain B2B Purchasing FAQ')
  
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('Borealgrit', 190, 20, { align: 'right' })
  doc.text('Professional Chainsaw Chain Supplier', 190, 26, { align: 'right' })
  
  y = addSectionToPDF(doc, y, 'General Questions')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: What is the minimum order quantity (MOQ)?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: MOQ varies by product specification. Standard products typically have MOQ of 100-500 pieces. Custom specifications may have higher MOQ. Contact us for specific MOQ requirements.')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: What are typical lead times?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Standard products: 4-6 weeks from order confirmation. Custom specifications: 6-8 weeks. Rush orders available with additional charges.')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: Do you offer OEM and private label options?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Yes, we offer full OEM and private label services including custom packaging, labeling, part numbers, and branding. MOQ and pricing vary by customization level.')
  
  y = addSectionToPDF(doc, y, 'Product Specifications')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: What specifications do I need to provide?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Pitch, gauge, drive link count, chain type (Full/Semi/Low Profile), cutter profile (Full-Chisel/Semi-Chisel), and steel grade. Use our fitment finder or contact us for assistance.')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: Can you manufacture custom specifications?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Yes, we can manufacture any ANSI B175.1 compliant specification. Custom configurations require appropriate MOQ and may have longer lead times.')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: What steel grades are available?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Standard grade: 65Mn carbon steel. Premium grade: 68CrNiMo alloy steel (enhanced impact toughness, ideal for cold weather and professional applications).')
  
  doc.addPage()
  y = 20
  y = addSectionToPDF(doc, y, 'Quality & Compliance')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: Are your products ANSI compliant?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Yes, all products meet ANSI B175.1 standards. Selected models are also CSA Z62.3 certified for Canadian market.')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: What quality certifications do you have?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: ISO 9001 quality management system certification. Full material traceability and batch testing protocols.')
  
  y = addSectionToPDF(doc, y, 'Pricing & Payment')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: How is pricing determined?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Pricing depends on specification, quantity, packaging, and customization level. Volume discounts available for larger orders. Contact us for detailed pricing.')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: What payment terms are available?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Standard terms: T/T (30% deposit, 70% before shipment) or L/C. Other terms negotiable for established customers.')
  
  y = addSectionToPDF(doc, y, 'Shipping & Logistics')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: What shipping options are available?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Sea freight (FCL/LCL), air freight, and express shipping available. We ship from major Chinese ports. Transit times and costs vary by method.')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: What Incoterms do you offer?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Standard: FOB China port. Other Incoterms (CIF, EXW, DDP) negotiable. Contact us for specific requirements.')
  
  doc.addPage()
  y = 20
  y = addSectionToPDF(doc, y, 'Contact & Support')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: How quickly do you respond to inquiries?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: We respond to all inquiries within 24 hours during business days. Urgent requests receive priority attention.')
  
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Q: Do you provide technical support?', 20, y)
  y += 6
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  y = addParagraphToPDF(doc, y, 'A: Yes, our engineering team provides technical support for specification selection, compatibility questions, and application guidance.')
  
  y = addSectionToPDF(doc, y, 'Contact Information')
  y = addParagraphToPDF(doc, y, 'For additional questions or specific inquiries:')
  y = addParagraphToPDF(doc, y, 'Email: sales@borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Website: www.borealgrit.com')
  y = addParagraphToPDF(doc, y, 'Response Time: Within 24 hours during business days')
  
  addFooterToPDF(doc)
  downloadPDF(doc, 'faq-document.pdf')
}
