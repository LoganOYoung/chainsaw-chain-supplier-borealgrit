'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ChainSelectionMatrixRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/for-buyers/chain-selection-matrix')
  }, [router])
  return (
    <div className="min-h-[40vh] flex items-center justify-center text-text-body">
      <p>Redirecting to Chain Selection Matrix…</p>
    </div>
  )
}
