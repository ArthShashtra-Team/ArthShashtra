import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to handle navigation

const HeroSection = () => {
  return (
    <div className="hero-section bg-blue-600 text-white h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ArthShastra</h1>
        <p className="text-lg mb-6">Your journey to smarter financial management starts here.</p>
        <Link 
          to="/cards"  // Link to the cards page
          className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
