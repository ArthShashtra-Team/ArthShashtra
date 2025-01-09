import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Chatbot from '../components/Chatbot'; // Importing the Chatbot component
import ChatbotIcon from '../components/ChatbotIcon'; // Importing the ChatbotIcon component

const HomePage = () => {
  const [showChatbot, setShowChatbot] = useState(false); // State to toggle chatbot visibility

  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Chatbot Icon */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
          zIndex: 1000,
        }}
        onClick={() => setShowChatbot((prev) => !prev)} // Toggle chatbot on click
      >
        <ChatbotIcon />
      </div>
      {/* Chatbot Popup */}
      {showChatbot && <Chatbot />}
    </>
  );
};

export default HomePage;
