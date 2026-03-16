import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import pt from './locales/pt.json'

const STORAGE_KEY = 'portfolio-lang'

// i18next expects resources by language and namespace; default namespace is "translation"
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: typeof window !== 'undefined' ? (localStorage.getItem(STORAGE_KEY) ?? 'en') : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng)
})

export default i18n
