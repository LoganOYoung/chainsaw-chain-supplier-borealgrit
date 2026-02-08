'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RegionalGuideRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/for-buyers/regional-guide')
  }, [router])
  return (
    <div className="min-h-[40vh] flex items-center justify-center text-text-body">
      <p>Redirecting to Regional Application Guide…</p>
    </div>
  )
}
