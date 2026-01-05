import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'cookie', 'localStorage'],
      caches: ['cookie', 'localStorage'],
    },
    fallbackNS: 'basic',
    ns: ['basic'],
    defaultNS: 'basic',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    missingKeyHandler: (lng, ns, key) => {
      console.warn(`Missing translation: ${lng}:${ns}:${key}`);
    },
  });

document.documentElement.lang = i18n.language;

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
