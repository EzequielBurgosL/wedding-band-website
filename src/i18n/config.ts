import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationCA from './locales/ca.json';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

// Initialize i18next
i18n
  .use(initReactI18next) // Connects i18next with React
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
      ca: { translation: translationCA },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language when the key isn't found in the selected language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
