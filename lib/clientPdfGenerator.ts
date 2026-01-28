'use client'

import jsPDF from 'jspdf'

export function addHeaderToPDF(doc: jsPDF, title: string, subtitle?: string) {
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  const pageWidth = doc.internal.pageSize.getWidth()
  const titleX = pageWidth / 2
  doc.text(title, titleX, 20, { align: 'center' })
  
  if (subtitle) {
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.text(subtitle, titleX, 28, { align: 'center' })
  }
  
  // Draw line
  doc.setLineWidth(0.5)
  doc.line(20, 35, pageWidth - 20, 35)
  
  return 40 // Return Y position after header
}

export function addSectionToPDF(doc: jsPDF, y: number, title: string): number {
  let currentY = y + 10
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text(title, 20, currentY)
  doc.setLineWidth(0.3)
  doc.line(20, currentY + 2, 190, currentY + 2)
  return currentY + 8
}

export function addParagraphToPDF(doc: jsPDF, y: number, text: string, options?: { fontSize?: number; bold?: boolean }): number {
  const fontSize = options?.fontSize || 10
  const font = options?.bold ? 'bold' : 'normal'
  doc.setFontSize(fontSize)
  doc.setFont('helvetica', font)
  
  const pageWidth = doc.internal.pageSize.getWidth()
  const maxWidth = pageWidth - 40
  const lines = doc.splitTextToSize(text, maxWidth)
  
  let currentY = y
  lines.forEach((line: string) => {
    if (currentY > doc.internal.pageSize.getHeight() - 30) {
      doc.addPage()
      currentY = 20
    }
    doc.text(line, 20, currentY)
    currentY += fontSize * 0.5
  })
  
  return currentY + 3
}

export function addTableRowToPDF(doc: jsPDF, y: number, label: string, value: string): number {
  if (y > doc.internal.pageSize.getHeight() - 30) {
    doc.addPage()
    y = 20
  }
  
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text(label + ':', 20, y)
  doc.setFont('helvetica', 'normal')
  
  const pageWidth = doc.internal.pageSize.getWidth()
  const valueLines = doc.splitTextToSize(value, pageWidth - 120)
  doc.text(valueLines, 80, y)
  
  return y + Math.max(10, valueLines.length * 5) + 2
}

export function addFooterToPDF(doc: jsPDF) {
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    doc.text(
      `Borealgrit - Professional Chainsaw Chain Supplier | Page ${i} of ${pageCount}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    )
  }
}

export function downloadPDF(doc: jsPDF, filename: string) {
  doc.save(filename)
}
