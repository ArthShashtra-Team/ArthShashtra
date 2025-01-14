import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English
  const [translations, setTranslations] = useState(null);

  const fetchTranslations = async (lang) => {
    try {
      // Fetch translations from LibreTranslate API or use local translations
      const response = await fetch(`https://libretranslate.com/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: 'Welcome to ArthShastra',
          source: 'en',
          target: lang,
        }),
      });
      const data = await response.json();
      setTranslations(data.translatedText);
    } catch (error) {
      console.error('Error fetching translations:', error);
    }
  };

  useEffect(() => {
    fetchTranslations(language); // Fetch translations when language changes
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };
