import React, { useState } from 'react';

const QuizGame = () => {
  const questions = [
    {
      question: "What is a budget?",
      options: [
        "A plan for spending and saving money",
        "A list of all your expenses",
        "An account balance",
        "None of the above",
      ],
      correctAnswer: "A plan for spending and saving money",
    },
    {
      question: "What is compound interest?",
      options: [
        "Interest earned on the initial principal only",
        "Interest earned on the principal and previously earned interest",
        "A penalty for late payments",
        "None of the above",
      ],
      correctAnswer: "Interest earned on the principal and previously earned interest",
    },
    {
      question: "What does diversification mean in investing?",
      options: [
        "Investing all your money in one stock",
        "Spreading your investments across various assets",
        "Avoiding risky investments",
        "Only investing in government bonds",
      ],
      correctAnswer: "Spreading your investments across various assets",
    },
    {
      question: "What is a credit score?",
      options: [
        "Your income level",
        "A measure of your creditworthiness",
        "The amount of money in your bank account",
        "None of the above",
      ],
      correctAnswer: "A measure of your creditworthiness",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Score: {score}/{questions.length}</h2>
          <p className="text-lg text-gray-700">Great job! Keep learning about finance to improve even more!</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
