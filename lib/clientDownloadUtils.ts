'use client'

import { PRODUCT_CATALOG } from './productCatalog'

/**
 * Download product catalog as CSV file (client-side)
 */
export function downloadCatalogCSV() {
  const headers = [
    'MDM No.',
    'Series',
    'Pitch',
    'Gauge',
    'Drive Links',
    'Chain Type',
    'Cutter Type',
    'Steel Grade',
    'Description'
  ]

  const escapeCSV = (value: string) => {
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`
    }
    return value
  }

  const csvRows = [
    headers.join(','),
    ...PRODUCT_CATALOG.map(product => {
      return [
        escapeCSV(product.id),
        escapeCSV(product.series),
        escapeCSV(product.pitch),
        escapeCSV(product.gauge),
        escapeCSV(product.driveLinks),
        escapeCSV(product.chainType),
        escapeCSV(product.cutterType),
        escapeCSV(product.steelGrade),
        escapeCSV(product.description)
      ].join(',')
    })
  ]

  const csvContent = csvRows.join('\n')
  const today = new Date().toISOString().split('T')[0]
  const filename = `Borealgrit_Product_Catalog_${today}.csv`
  
  // Create blob and download
  const BOM = '\uFEFF'
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
