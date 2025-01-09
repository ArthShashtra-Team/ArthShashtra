import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Explore features like Personalized Financial Advice, AI-Driven Budgeting Tools, Micro-Investment Opportunities, and Gamified Finance Knowledge!</p>
      </div>
    </>
  );
};

export default Dashboard;
