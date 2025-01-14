import React, { useState } from "react";
import VideoCard from "../components/VideoCard";

const FinancialAdvisoryPage = () => {
  const [completion, setCompletion] = useState({});

  const videoCards = [
    {
      id: 1,
      title: "Investment Basics",
      thumbnail:
        "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://youtu.be/qIw-yFC-HNU?si=_7G35dcVniuk6kU2",
    },
    {
      id: 2,
      title: "Saving Strategies",
      thumbnail:
        "https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://www.youtube.com/watch?v=e-ORhEE9VVg",
    },
    {
      id: 3,
      title: "Avoiding Debt",
      thumbnail:
        "https://images.pexels.com/photos/5900131/pexels-photo-5900131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
    {
      id: 4,
      title: "Financial Planning",
      thumbnail:
        "https://images.pexels.com/photos/4495904/pexels-photo-4495904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    },
  ];

  const heroData = [
    {
      title: "Savings & Investments",
      intro: "Learn safe and effective ways to grow your money.",
      link: "https://www.indusind.com/iblogs/savings-account/understanding-the-differences-between-savings-and-investment/#:~:text=Savings%20refer%20to%20the%20amount,instruments%20are%20available%20for%20investments.",
      color: "bg-green-100",
    },
    {
      title: "Banking Basics",
      intro: "Understand essential banking services and tools.",
      link: "https://example.com/banking-basics",
      color: "bg-orange-100",
    },
    {
      title: "Government Schemes",
      intro: "Explore initiatives to support your financial needs.",
      link: "https://example.com/government-schemes",
      color: "bg-blue-100",
    },
    {
      title: "Loans & Credit",
      intro: "Learn about small loans and credit options.",
      link: "https://example.com/loans-credit",
      color: "bg-purple-100",
    },
    {
      title: "Digital Financial Literacy",
      intro: "Master modern payment methods and security.",
      link: "https://example.com/digital-literacy",
      color: "bg-teal-100",
    },
  ];

  const toggleCompletion = (index) => {
    setCompletion((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Financial Advisory</h1>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {videoCards.map((video) => (
          <VideoCard
            key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            link={video.link}
          />
        ))}
      </div>

      {/* Hero Cards */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Learn More About Financial Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {heroData.map((hero, index) => (
            <div
              key={index}
              className={`${hero.color} border-2 border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}
            >
              <h3 className="text-lg font-bold mb-2">{hero.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{hero.intro}</p>
              <a
                href={hero.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Tabular Format with Completion Toggle */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Track Your Topics</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Topic</th>
              <th className="border border-gray-300 px-4 py-2">Introduction</th>
              <th className="border border-gray-300 px-4 py-2">Completion</th>
            </tr>
          </thead>
          <tbody>
            {heroData.map((hero, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{hero.title}</td>
                <td className="border border-gray-300 px-4 py-2">{hero.intro}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={completion[index] || false}
                    onChange={() => toggleCompletion(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialAdvisoryPage;
