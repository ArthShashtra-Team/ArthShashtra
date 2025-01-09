import React from 'react';

const ChatbotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="80"
      height="80"
      fill="none"
    >
      <path
        d="M32 4C17.2 4 5 14.8 5 28c0 5.8 2.3 11.1 6 15.4V56l9.5-6.3c2.9 1 6.1 1.6 9.5 1.6 14.8 0 27-10.8 27-24S46.8 4 32 4z"
        fill="#00a78e"
      />
      <path
        d="M32 8C19.2 8 9 17.4 9 28c0 5.3 2.1 10 5.5 13.4L13 50.5 20.5 46c2.5.9 5.2 1.4 8 1.4 12.8 0 23-9.4 23-21S44.8 8 32 8z"
        fill="#fff"
      />
      <circle cx="24" cy="25" r="2" fill="#333" />
      <circle cx="40" cy="25" r="2" fill="#333" />
      <path
        d="M27 35c2 1.5 8 1.5 10 0"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="32"
        y="20"
        textAnchor="middle"
        fontSize="8"
        fill="#00a78e"
        fontWeight="bold"
      >
        ₹
      </text>
    </svg>
  );
};

export default ChatbotIcon;
