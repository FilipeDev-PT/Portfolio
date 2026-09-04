import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ptBR from './locales/pt-BR.json'

const STORAGE_KEY = 'portfolio-lang'

function normalizeLanguage(lng: string | null | undefined) {
  if (!lng) return 'en'
  return lng.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en'
}

function readStoredLanguage() {
  if (typeof window === 'undefined') return 'en'
  return normalizeLanguage(localStorage.getItem(STORAGE_KEY))
}

function syncDocumentLanguage(lng: string) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = normalizeLanguage(lng)
}

function applyBundles() {
  i18n.addResourceBundle('en', 'translation', en, true, true)
  i18n.addResourceBundle('pt-BR', 'translation', ptBR, true, true)
  i18n.addResourceBundle('pt', 'translation', ptBR, true, true)
}

const initialLng = readStoredLanguage()

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      'pt-BR': { translation: ptBR },
      pt: { translation: ptBR },
    },
    lng: initialLng,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt-BR', 'pt'],
    nonExplicitSupportedLngs: false,
    load: 'currentOnly',
    interpolation: { escapeValue: false },
  })
} else {
  applyBundles()
  void i18n.changeLanguage(normalizeLanguage(i18n.language))
}

syncDocumentLanguage(initialLng)

function onLanguageChanged(lng: string) {
  const normalized = normalizeLanguage(lng)
  if (normalized !== lng) {
    void i18n.changeLanguage(normalized)
    return
  }
  localStorage.setItem(STORAGE_KEY, normalized)
  syncDocumentLanguage(normalized)
}

i18n.off('languageChanged', onLanguageChanged)
i18n.on('languageChanged', onLanguageChanged)

if (import.meta.hot) {
  import.meta.hot.accept('./locales/en.json', (mod) => {
    if (mod?.default) i18n.addResourceBundle('en', 'translation', mod.default, true, true)
    void i18n.changeLanguage(i18n.language)
  })
  import.meta.hot.accept('./locales/pt-BR.json', (mod) => {
    if (!mod?.default) return
    i18n.addResourceBundle('pt-BR', 'translation', mod.default, true, true)
    i18n.addResourceBundle('pt', 'translation', mod.default, true, true)
    void i18n.changeLanguage(i18n.language)
  })
}

export default i18n
