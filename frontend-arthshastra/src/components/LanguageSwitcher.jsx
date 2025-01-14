// src/components/LanguageSwitcher.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change language when an option is selected
  };

  return (
    <div className="relative">
      <button
        className="text-white bg-blue-500 p-2 rounded"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Language
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
        <ul className="py-2">
          <li>
            <button
              onClick={() => handleLanguageChange('en')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              English
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLanguageChange('hi')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              हिंदी
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLanguageChange('ta')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              தமிழ்
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
