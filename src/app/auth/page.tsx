'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Auth() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/auth/sign-in')
  }, [router])

  return null
}
