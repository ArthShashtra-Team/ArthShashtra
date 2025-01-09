import React from 'react';
import VideoCard from '../components/VideoCard';

const FinancialAdvisoryPage = () => {
  const videoCards = [
    {
      id: 1,
      title: "Investment Basics",
      thumbnail: "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your video thumbnail URL
      link: "https://youtu.be/qIw-yFC-HNU?si=_7G35dcVniuk6kU2", // Replace with your video link
    },
    {
      id: 2,
      title: "Saving Strategies",
      thumbnail: "https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your video thumbnail URL
      link: "https://www.youtube.com/watch?v=e-ORhEE9VVg", // Replace with your video link
    },
    {
      id: 3,
      title: "Avoiding Debt",
      thumbnail: "https://images.pexels.com/photos/5900131/pexels-photo-5900131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your video thumbnail URL
      link: "https://www.youtube.com/watch?v=9bZkp7q19f0", // Replace with your video link
    },
    {
      id: 4,
      title: "Financial Planning",
      thumbnail: "https://images.pexels.com/photos/4495904/pexels-photo-4495904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your video thumbnail URL
      link: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ", // Replace with your video link
    },
  ];

  const heroData = [
    {
      title: "Savings & Investments",
      intro: "Learn safe and effective ways to grow your money.",
      details: `
        - **Savings Account**: Deposit and withdraw money while earning interest.
        - **Recurring Deposit (RD)**: Monthly deposits for a fixed period.
        - **Fixed Deposit (FD)**: Lump sum deposit for a higher return.
        - **Self-Help Groups (SHGs)**: Community groups for collective savings and loans.
      `,
      image: "https://via.placeholder.com/150/4CAF50/FFFFFF?text=Savings",
    },
    {
      title: "Banking Basics",
      intro: "Understand essential banking services and tools.",
      details: `
        - **Passbook**: Record of transactions.
        - **ATM/Debit Card**: Withdraw money or make digital payments.
        - **Mobile Banking**: Manage accounts using your phone.
        - **KYC**: Identity verification for account opening.
      `,
      image: "https://via.placeholder.com/150/FF9800/FFFFFF?text=Banking",
    },
    {
      title: "Government Schemes",
      intro: "Explore initiatives to support your financial needs.",
      details: `
        - **PMJDY**: Zero-balance savings account for everyone.
        - **PMJJBY**: Affordable life insurance scheme.
        - **PMSBY**: Accidental insurance at low cost.
        - **APY**: Pension scheme for unorganized workers.
      `,
      image: "https://via.placeholder.com/150/3F51B5/FFFFFF?text=Schemes",
    },
    {
      title: "Loans & Credit",
      intro: "Learn about small loans and credit options.",
      details: `
        - **Microfinance**: Small loans without collateral.
        - **Agricultural Loans**: For seeds, equipment, and crop production.
        - **Mudra Loans**: For small businesses.
        - **Collateral**: Pledge valuable assets for loans.
      `,
      image: "https://via.placeholder.com/150/9C27B0/FFFFFF?text=Loans",
    },
    {
      title: "Digital Financial Literacy",
      intro: "Master modern payment methods and security.",
      details: `
        - **UPI**: Instant money transfers.
        - **Digital Wallets**: Apps like Paytm and PhonePe.
        - **Aadhaar-Linked Accounts**: Receive subsidies directly.
        - **Cyber Fraud**: Tips to stay safe online.
      `,
      image: "https://via.placeholder.com/150/00BCD4/FFFFFF?text=Digital",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Financial Advisory</h1>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Learn More About Financial Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {heroData.map((hero, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src={hero.image} alt={hero.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-bold mb-2">{hero.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{hero.intro}</p>
              <button
                onClick={() => alert(hero.details)}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialAdvisoryPage;
