import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: 'en',
        detection: {
            order: ['localStorage', 'navigator'],
        },
        backend: {
            loadPath: '/assets/lang/{{lng}}/translation.json',
        },
        react: {
            useSuspense: false,
        },
    })

export default i18n
