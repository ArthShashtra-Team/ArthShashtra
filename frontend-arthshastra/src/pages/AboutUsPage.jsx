import React from 'react';
import Navbar from '../components/Navbar';
import logo from '../assets/arthshastra-logo.png';const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <img src={logo} alt='image'></img>
        <p className="text-lg">
          ArthShastra is dedicated to providing users with personalized financial advice, AI-driven budgeting tools, and micro-investment opportunities.
          Our goal is to help individuals manage their finances smarter and better. Our team is passionate about democratizing financial literacy.
        </p>
      </div>
    </>
  );
};

export default AboutUsPage;
