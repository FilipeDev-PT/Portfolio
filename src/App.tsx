import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { SkipLink } from '@/components/SkipLink'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Toaster } from '@/components/ui/sonner'
import { HomePage } from '@/pages/HomePage'

const ProjectDetail = lazy(() =>
  import('@/pages/ProjectDetail').then((module) => ({ default: module.ProjectDetail })),
)

function PageFallback() {
  return (
    <div className="min-h-[60vh]" aria-busy="true">
      <p className="sr-only">Loading</p>
    </div>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground">
        <SkipLink />
        <ScrollToTop />
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Toaster />
      </div>
    </MotionConfig>
  )
}

export default App
