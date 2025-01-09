// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imgSrc, altText, title, description, linkTo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <img
        src={imgSrc}
        alt={altText}
        className="rounded-md mb-4 w-full h-40 object-cover"
      />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
      <Link to={linkTo}>
        <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default Card;
