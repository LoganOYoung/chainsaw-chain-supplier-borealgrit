import { NextResponse } from 'next/server'
import { PRODUCT_CATALOG } from '@/lib/productCatalog'

export async function GET() {
  try {
    // CSV headers
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

    // Convert products to CSV rows
    const csvRows = [
      headers.join(','),
      ...PRODUCT_CATALOG.map(product => {
        // Escape commas and quotes in CSV values
        const escapeCSV = (value: string) => {
          if (value.includes(',') || value.includes('"') || value.includes('\n')) {
            return `"${value.replace(/"/g, '""')}"`
          }
          return value
        }

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

    // Generate filename with current date
    const today = new Date().toISOString().split('T')[0]
    const filename = `Borealgrit_Product_Catalog_${today}.csv`

    // Return CSV file
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Error generating catalog:', error)
    return NextResponse.json(
      { error: 'Failed to generate catalog' },
      { status: 500 }
    )
  }
}
