// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Optional: Use Language Detector and Backend for dynamic loading
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(LanguageDetector)        // Detects user's language
  .use(HttpBackend)              // Backend plugin for loading translations
  .use(initReactI18next)         // Initializes React i18next
  .init({
    fallbackLng: 'en',           // Default language if user's language is not available
    debug: true,                 // Optional: for debugging
    interpolation: {
      escapeValue: false,        // React automatically escapes variables
    },
    react: {
      useSuspense: false,        // Disables React Suspense for simplicity
    },
  });

export default i18n;
