import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { SectionId } from '@/types'

export function ScrollToTop() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    const scrollTo = (state as { scrollTo?: SectionId } | null)?.scrollTo
    if (scrollTo) return
    window.scrollTo(0, 0)
  }, [pathname, state])

  return null
}
