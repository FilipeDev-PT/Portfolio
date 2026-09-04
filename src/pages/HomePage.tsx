import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import type { SectionId } from '@/types'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: SectionId } | null)?.scrollTo
    if (!scrollTo) return

    requestAnimationFrame(() => {
      document.getElementById(scrollTo)?.scrollIntoView()
    })
  }, [location.state])

  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  )
}
