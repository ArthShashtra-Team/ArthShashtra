// src/components/HeroCard.jsx
import React, { useState } from 'react';

const HeroCard = ({ title, intro, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm mb-4">{intro}</p>
      <button
        className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={toggleDetails}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
      {isExpanded && (
        <div className="text-left mt-4 text-sm">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

export default HeroCard;
