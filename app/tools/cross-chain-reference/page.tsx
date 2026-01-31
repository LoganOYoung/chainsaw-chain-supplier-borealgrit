'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CrossChainReferenceRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/tools#cross-chain-reference')
  }, [router])
  return (
    <div className="min-h-[40vh] flex items-center justify-center text-text-body">
      <p>Redirecting to Tools…</p>
    </div>
  )
}
