// src/pages/EducationalGamesPage.jsx

import React, { useState } from 'react';
import QuizGame from '../components/QuizGame'; // Import the QuizGame component

const EducationalGamesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Educational Games</h1>

      {/* Display the QuizGame directly */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Finance Quiz Game</h2>
        <p className="text-sm text-gray-700 mb-4">
          Test your financial knowledge with this interactive quiz game. Challenge yourself to improve your understanding of finance.
        </p>
      </div>

      {/* Directly display the QuizGame component */}
      <QuizGame />
    </div>
  );
};

export default EducationalGamesPage;
