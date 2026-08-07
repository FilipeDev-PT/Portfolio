import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar'
import { ScrollToTop } from '@/components/ScrollToTop'
import { HomePage } from '@/pages/HomePage'
import { ProjectDetail } from '@/pages/ProjectDetail'

function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500 sm:py-6 sm:text-sm">
        © {new Date().getFullYear()} Filipe Cristovam. {t('footer.rights')}
      </footer>
    </div>
  )
}

export default App
