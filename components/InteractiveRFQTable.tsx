'use client'

import { useState, useMemo } from 'react'
import { Download, Info, Search } from 'lucide-react'

interface Product {
  'No.': string
  'MDM NO.': string
  'MDM Specification': string
  'Centralized Procurement Commodity Description': string
  Qty: string
  Unit: string
  'USD Price': string
  'USD Amount': string
  Note: string
}

interface ParsedProduct extends Product {
  pitch?: string
  gauge?: string
  driveLinks?: string
  cutterType?: string
  compatibleModels?: string[]
  isCSACertified?: boolean
}

const RFQ_DATA: Product[] = [
  {
    'No.': '1',
    'MDM NO.': 'CSC3065',
    'MDM Specification': '16" / 3/8" LP /.050" / 56DL',
    'Centralized Procurement Commodity Description': 'Saw Chain: 3/8" Low Profile Pitch,.050"(1.3mm) Gauge, 56 Drive Links. Semi-Chisel, Low-Kickback (CSA Z62.3 compliant).',
    Qty: '4000',
    Unit: 'EA',
    'USD Price': '',
    'USD Amount': '',
    Note: 'Canadian Tire & Home Depot Canada Top Seller (Ref: Oregon S56).'
  },
  {
    'No.': '2',
    'MDM NO.': 'CSC3071',
    'MDM Specification': '18" / 3/8" LP /.050" / 62DL',
    'Centralized Procurement Commodity Description': 'Saw Chain: 3/8" Low Profile Pitch,.050"(1.3mm) Gauge, 62 Drive Links. Semi-Chisel, Low-Kickback (CSA Z62.3 compliant).',
    Qty: '3000',
    Unit: 'EA',
    'USD Price': '',
    'USD Amount': '',
    Note: 'Mainstream DIY loop for 18-inch gas saws.'
  },
  {
    'No.': '3',
    'MDM NO.': 'CSC3085',
    'MDM Specification': '20" / 3/8" Std /.058" / 72DL',
    'Centralized Procurement Commodity Description': 'Saw Chain: 3/8" Standard Pitch,.058"(1.5mm) Gauge, 72 Drive Links. Semi-Chisel/Full-Chisel. High strength for Canadian woods.',
    Qty: '2000',
    Unit: 'EA',
    'USD Price': '',
    'USD Amount': '',
    Note: 'Matches Husqvarna 455/460 Rancher (Very popular in Canada).'
  },
  {
    'No.': '4',
    'MDM NO.': 'CSC3092',
    'MDM Specification': '16" / 3/8" LP /.043" / 56DL',
    'Centralized Procurement Commodity Description': 'Saw Chain: 3/8" Low Profile Pitch,.043"(1.1mm) Gauge (Narrow Kerf), 56 Drive Links. For high-efficiency cutting.',
    Qty: '2500',
    Unit: 'EA',
    'USD Price': '',
    'USD Amount': '',
    Note: 'Fits EGO & Milwaukee battery saws (Fastest growth segment).'
  },
  {
    'No.': '5',
    'MDM NO.': 'CSC3021',
    'MDM Specification': '18" /.325" /.058" / 72DL',
    'Centralized Procurement Commodity Description': 'Saw Chain:.325" Pitch,.058"(1.5mm) Gauge, 72 Drive Links. Semi-Chisel. Regional Husqvarna dealer spec.',
    Qty: '1500',
    Unit: 'EA',
    'USD Price': '',
    'USD Amount': '',
    Note: 'Specific Canadian regional requirement for mid-size Husky saws.'
  },
  {
    'No.': '6',
    'MDM NO.': 'CSC3077',
    'MDM Specification': '20" / 3/8" Std /.050" / 72DL',
    'Centralized Procurement Commodity Description': 'Saw Chain: 3/8" Standard Pitch,.050"(1.3mm) Gauge, 72 Drive Links. Full-Chisel. For professional logging.',
    Qty: '1500',
    Unit: 'EA',
    'USD Price': '',
    'USD Amount': '',
    Note: 'Professional use (Ref: Oregon 72LPX / Stihl 33RS).'
  },
  {
    'No.': '7',
    'MDM NO.': 'CSC3054',
    'MDM Specification': '14" / 3/8" LP /.050" / 52DL',
    'Centralized Procurement Commodity Description': 'Saw Chain: 3/8" Low Profile Pitch,.050"(1.3mm) Gauge, 52 Drive Links. Semi-Chisel, Low-Kickback.',
    Qty: '1000',
    Unit: 'EA',
    'USD Price': '',
    'USD Amount': '',
    Note: 'Fits light-duty gas and electric saws (Ref: Oregon S52).'
  },
  {
    'No.': '8',
    'MDM NO.': 'CSC3009',
    'MDM Specification': '100ft Reel / 3/8" Std /.058"',
    'Centralized Procurement Commodity Description': 'Saw Chain Bulk Reel: 100ft length, 3/8" Standard Pitch,.058" Gauge, Full-Chisel. Professional Grade.',
    Qty: '40',
    Unit: 'RL',
    'USD Price': '',
    'USD Amount': '',
    Note: 'Crucial bulk roll for Canadian Husqvarna service centers.'
  },
  {
    'No.': '9',
    'MDM NO.': 'CSC3034',
    'MDM Specification': '100ft Reel / 3/8" LP /.050"',
    'Centralized Procurement Commodity Description': 'Saw Chain Bulk Reel: 100ft length, 3/8" Low Profile Pitch,.050" Gauge, Semi-Chisel.',
    Qty: '40',
    Unit: 'RL',
    'USD Price': '',
    'USD Amount': '',
    Note: 'Dealer workshops bulk roll for retail-saw repairs.'
  }
]

// Parse specification string to extract components
function parseSpecification(spec: string): { pitch?: string; gauge?: string; driveLinks?: string; cutterType?: string } {
  const result: { pitch?: string; gauge?: string; driveLinks?: string; cutterType?: string } = {}
  
  // Extract Drive Links (e.g., 56DL, 72DL)
  const driveLinksMatch = spec.match(/(\d+)DL/i)
  if (driveLinksMatch) {
    result.driveLinks = driveLinksMatch[1] + 'DL'
  }
  
  // Extract Pitch (3/8" LP, 3/8" Std, .325", etc.)
  if (spec.includes('3/8" LP') || spec.includes('3/8"LP')) {
    result.pitch = '3/8" LP'
  } else if (spec.includes('3/8" Std') || spec.includes('3/8"Std') || spec.includes('3/8" Standard')) {
    result.pitch = '3/8" Std'
  } else if (spec.includes('.325"')) {
    result.pitch = '.325"'
  } else {
    const pitchMatch = spec.match(/(\d+\/\d+"?\s*(?:LP|Std|Standard)?|\.\d+")/i)
    if (pitchMatch) {
      result.pitch = pitchMatch[0].trim()
    }
  }
  
  // Extract Gauge (.050", .058", .043", etc.)
  const gaugeMatch = spec.match(/\.(\d{3})"/i)
  if (gaugeMatch) {
    result.gauge = '.' + gaugeMatch[1] + '"'
  }
  
  return result
}

// Extract compatible models from Note
function extractCompatibleModels(note: string, description: string): string[] {
  const models: string[] = []
  const text = (note + ' ' + description)
  
  // Extract Husqvarna models (including ranges like "455/460")
  const husqvarnaMatches = text.match(/Husqvarna\s+(\d+(?:\/\d+)?)/gi)
  if (husqvarnaMatches) {
    husqvarnaMatches.forEach(match => {
      // Split ranges like "Husqvarna 455/460" into individual models
      const numbers = match.match(/\d+/g)
      if (numbers) {
        numbers.forEach(num => {
          const model = `Husqvarna ${num}`
          if (!models.includes(model)) {
            models.push(model)
          }
        })
      }
    })
  }
  
  // Extract Stihl models
  const stihlMatches = text.match(/Stihl\s+(?:MS\s*)?(\d+)/gi)
  if (stihlMatches) {
    stihlMatches.forEach(match => {
      if (!models.includes(match.trim())) {
        models.push(match.trim())
      }
    })
  }
  
  // Extract Oregon models
  const oregonMatches = text.match(/Oregon\s+([A-Z0-9]+)/gi)
  if (oregonMatches) {
    oregonMatches.forEach(match => {
      if (!models.includes(match.trim())) {
        models.push(match.trim())
      }
    })
  }
  
  // Extract brand names
  const brands = ['EGO', 'Milwaukee', 'Makita', 'DeWalt']
  brands.forEach(brand => {
    if (text.includes(brand) && !models.includes(brand)) {
      models.push(brand)
    }
  })
  
  return models
}

// Check if CSA certified
function isCSACertified(description: string, note: string): boolean {
  const text = (description + ' ' + note).toLowerCase()
  return text.includes('csa') || text.includes('canada') || text.includes('canadian')
}

export default function InteractiveRFQTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [tableData, setTableData] = useState<ParsedProduct[]>(() => {
    return RFQ_DATA.map(product => {
      const parsed = parseSpecification(product['MDM Specification'])
      const compatibleModels = extractCompatibleModels(product.Note, product['Centralized Procurement Commodity Description'])
      const isCSA = isCSACertified(product['Centralized Procurement Commodity Description'], product.Note)
      
      return {
        ...product,
        ...parsed,
        compatibleModels,
        isCSACertified: isCSA,
        // Extract cutter type from description
        cutterType: product['Centralized Procurement Commodity Description'].includes('Full-Chisel') 
          ? 'Full-Chisel' 
          : product['Centralized Procurement Commodity Description'].includes('Semi-Chisel')
          ? 'Semi-Chisel'
          : undefined
      }
    })
  })

  // Filter and highlight based on search
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return tableData.map(item => ({ ...item, highlighted: false }))
    }
    
    const query = searchQuery.toLowerCase().trim()
    return tableData.map(item => {
      // Check if search matches compatible models
      const modelMatch = item.compatibleModels?.some(model => {
        const modelLower = model.toLowerCase()
        // Extract numbers from search query and model
        const queryNum = query.match(/\d+/)?.[0]
        const modelNum = modelLower.match(/\d+/)?.[0]
        
        // Match if model name contains query, or numbers match
        return modelLower.includes(query) || (queryNum && modelNum === queryNum)
      })
      
      // Check MDM NO match
      const mdmMatch = item['MDM NO.'].toLowerCase().includes(query)
      
      // Check if query appears in description or note
      const textMatch = (item['Centralized Procurement Commodity Description'] + ' ' + item.Note)
        .toLowerCase()
        .includes(query)
      
      const matches = modelMatch || mdmMatch || textMatch
      
      return { ...item, highlighted: matches }
    })
  }, [searchQuery, tableData])

  // Export to Excel (CSV format, Excel-compatible)
  const exportToExcel = () => {
    const headers = ['No.', 'MDM NO.', 'Pitch', 'Gauge', 'Drive Links', 'Cutter Type', 'Description', 'Qty', 'Unit', 'USD Price', 'USD Amount']
    
    const csvRows = [
      headers.join(',')
    ]
    
    filteredData.forEach(item => {
      const row = [
        item['No.'],
        item['MDM NO.'],
        `"${item.pitch || ''}"`,
        `"${item.gauge || ''}"`,
        `"${item.driveLinks || ''}"`,
        `"${item.cutterType || ''}"`,
        `"${item['Centralized Procurement Commodity Description'].replace(/"/g, '""')}"`,
        item.Qty,
        item.Unit,
        item['USD Price'],
        item['USD Amount']
      ]
      csvRows.push(row.join(','))
    })
    
    const csvContent = csvRows.join('\n')
    const BOM = '\uFEFF' // UTF-8 BOM for Excel
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `RFQ_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by saw model (e.g., Husqvarna 455) or MDM NO..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-forest-brand/30 rounded-none focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
          />
        </div>
        <button
          onClick={exportToExcel}
          className="inline-flex items-center gap-2 px-6 py-2 bg-accent hover:bg-white hover:text-forest-brand border-2 border-transparent hover:border-forest-brand text-white font-semibold text-sm transition rounded-none"
        >
          <Download className="w-4 h-4" />
          Export My RFQ to Excel
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-none border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">No.</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">MDM NO.</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">Pitch</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">Gauge</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">Drive Links</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">Cutter Type</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">Description</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">Qty</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">Unit</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">USD Price</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-main uppercase">USD Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((item, idx) => (
              <tr
                key={idx}
                className={`hover:bg-gray-50 transition ${
                  item.highlighted ? 'bg-yellow-50 border-l-4 border-yellow-400' : ''
                }`}
              >
                <td className="px-4 py-3 text-sm text-industrial">{item['No.']}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-text-main">{item['MDM NO.']}</span>
                    {item.isCSACertified && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        CSA Compliant
                      </span>
                    )}
                    {item.Note && (
                      <div className="group relative inline-block">
                        <Info className="w-4 h-4 text-gray-400 cursor-help hover:text-forest-brand/80 transition" />
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-72 p-3 bg-green-800 text-white text-xs rounded-none shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                          <div className="font-semibold mb-1 text-green-300">Compatibility Note:</div>
                          <div>{item.Note}</div>
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-800"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-industrial">{item.pitch || '-'}</td>
                <td className="px-4 py-3 text-sm text-industrial">{item.gauge || '-'}</td>
                <td className="px-4 py-3 text-sm text-industrial">{item.driveLinks || '-'}</td>
                <td className="px-4 py-3 text-sm text-industrial">{item.cutterType || '-'}</td>
                <td className="px-4 py-3 text-sm text-text-body max-w-xs">{item['Centralized Procurement Commodity Description']}</td>
                <td className="px-4 py-3 text-sm">
                  <input
                    type="text"
                    value={item.Qty}
                    onChange={(e) => {
                      const newData = [...tableData]
                      const originalIdx = tableData.findIndex(d => d['MDM NO.'] === item['MDM NO.'])
                      if (originalIdx !== -1) {
                        newData[originalIdx].Qty = e.target.value
                        setTableData(newData)
                      }
                    }}
                    className="w-20 px-2 py-1 border border-forest-brand/30 rounded-none text-sm focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-industrial">{item.Unit}</td>
                <td className="px-4 py-3 text-sm">
                  <input
                    type="text"
                    value={item['USD Price']}
                    onChange={(e) => {
                      const newData = [...tableData]
                      const originalIdx = tableData.findIndex(d => d['MDM NO.'] === item['MDM NO.'])
                      if (originalIdx !== -1) {
                        newData[originalIdx]['USD Price'] = e.target.value
                        // Auto-calculate amount if both Qty and Price are filled
                        const qty = parseFloat(newData[originalIdx].Qty) || 0
                        const price = parseFloat(e.target.value) || 0
                        if (qty > 0 && price > 0) {
                          newData[originalIdx]['USD Amount'] = (qty * price).toFixed(2)
                        }
                        setTableData(newData)
                      }
                    }}
                    className="w-24 px-2 py-1 border border-forest-brand/30 rounded-none text-sm focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-text-bodyfont-semibold">{item['USD Amount'] || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
