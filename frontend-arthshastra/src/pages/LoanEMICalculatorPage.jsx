// src/pages/LoanEMICalculatorPage.jsx
import React, { useState } from 'react';

const LoanEMICalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);

  // Function to calculate EMI
  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !loanTenure) {
      alert('Please fill in all the fields.');
      return;
    }

    const principal = parseFloat(loanAmount);
    const rateOfInterest = parseFloat(interestRate) / 100 / 12;
    const tenureInMonths = parseInt(loanTenure) * 12;

    // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emiValue = (principal * rateOfInterest * Math.pow(1 + rateOfInterest, tenureInMonths)) /
      (Math.pow(1 + rateOfInterest, tenureInMonths) - 1);
    
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Loan EMI Calculator</h1>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Loan Amount</label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter loan amount"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter annual interest rate"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="loanTenure" className="block text-sm font-medium text-gray-700">Loan Tenure (years)</label>
          <input
            type="number"
            id="loanTenure"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter loan tenure in years"
          />
        </div>

        <div className="mb-6">
          <button
            onClick={calculateEMI}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400"
          >
            Calculate EMI
          </button>
        </div>

        {emi && (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Calculated EMI</h2>
            <p className="text-lg">₹ {emi}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanEMICalculatorPage;
