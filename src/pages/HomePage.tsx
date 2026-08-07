import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'
import { Contact } from '@/sections/Contact'
import type { SectionId } from '@/types'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: SectionId } | null)?.scrollTo
    if (!scrollTo) return

    requestAnimationFrame(() => {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [location.state])

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
