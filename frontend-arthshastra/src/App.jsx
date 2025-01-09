import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage'; // Import CardsPage
import FinancialAdvisoryPage from './pages/FinancialAdvisoryPage'; // Import Financial Advisory Page
import LoanEMICalculatorPage from './pages/LoanEMICalculatorPage'; // Import LoanEMICalculatorPage
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import AboutUsPage from './pages/AboutUsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="/financial-advisory" element={<FinancialAdvisoryPage />} />
      <Route path="/loan-emi" element={<LoanEMICalculatorPage />} /> {/* Add route for LoanEMICalculatorPage */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  );
};

export default App;
