import React from 'react';

const VideoCard = ({ thumbnail, title, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-md mb-4 w-full h-40 object-cover"
        />
        <h2 className="text-lg font-bold">{title}</h2>
      </a>
    </div>
  );
};

export default VideoCard;
