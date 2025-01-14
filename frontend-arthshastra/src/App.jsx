// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook to handle translations
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import FinancialAdvisoryPage from './pages/FinancialAdvisoryPage';
import LoanEMICalculatorPage from './pages/LoanEMICalculatorPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import AboutUsPage from './pages/AboutUsPage';
import EducationalGamesPage from './pages/EducationalGamesPage'; // Import the Educational Games page
import './i18n'; // Import i18n configuration

const App = () => {
  const { t } = useTranslation(); // Use the t function to fetch translations

  return (
    <div>
      

      {/* Routes for pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/financial-advisory" element={<FinancialAdvisoryPage />} />
        <Route path="/loan-emi" element={<LoanEMICalculatorPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/educational-games" element={<EducationalGamesPage />} /> {/* Educational Games */}
      </Routes>

      {/* Footer (Optional) */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>{t('footer_text', '© 2025 ArthShastra. All rights reserved.')}</p>
      </footer>
    </div>
  );
};

export default App;
