import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import pt from './locales/pt.json'

const STORAGE_KEY = 'portfolio-lang'

function readStoredLanguage() {
  if (typeof window === 'undefined') return 'en'
  return localStorage.getItem(STORAGE_KEY) ?? 'en'
}

function syncDocumentLanguage(lng: string) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = lng.startsWith('pt') ? 'pt' : 'en'
}

const initialLng = readStoredLanguage()

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: initialLng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

syncDocumentLanguage(initialLng)

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng)
  syncDocumentLanguage(lng)
})

export default i18n
