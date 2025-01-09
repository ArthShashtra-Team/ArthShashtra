// src/pages/CardsPage.js
import React from 'react';
import Educationalgames from '../assets/Educationalgames.jpeg';
import Expensetracker from '../assets/expensetracker.jpeg';
import Financialadvisory from '../assets/financialadvisory.jpeg';
import Loanandemi from '../assets/loanandemi.jpeg';
import Microinvestments from '../assets/microinvestments.jpeg';
import Stockpredictor from '../assets/stockpredictor.jpeg';
import Card from '../components/Card'; // Import the Card component

const CardsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          imgSrc={Educationalgames}
          altText="Educational Games"
          title="Educational Games"
          description="Interactive games to improve financial literacy."
          linkTo="/educational-games"
        />
        <Card
          imgSrc={Expensetracker}
          altText="Expense Tracker"
          title="Expense Tracker"
          description="Track your expenses effortlessly with our tool."
          linkTo="/expense-tracker"
        />
        <Card
          imgSrc={Financialadvisory}
          altText="Financial Advisory"
          title="Financial Advisory"
          description="Expert advice to help you manage your finances better."
          linkTo="/financial-advisory"
        />
        <Card
  imgSrc={Loanandemi}
  altText="Loan & EMI Calculator"
  title="Loan & EMI Calculator"
  description="Calculate your loan EMIs and manage repayments."
  linkTo="/loan-emi" // Ensure it points to the correct path
/>
        <Card
          imgSrc={Microinvestments}
          altText="Micro Investments"
          title="Micro Investments"
          description="Invest small amounts and build a large portfolio over time."
          linkTo="/micro-investments"
        />
        <Card
          imgSrc={Stockpredictor}
          altText="Stock Predictor"
          title="Stock Predictor"
          description="Get predictions and insights on stock market trends."
          linkTo="/stock-predictor"
        />
      </div>
    </div>
  );
};

export default CardsPage;
