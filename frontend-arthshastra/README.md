
---
# ArthShashtra: AI Powered Financial Advisor for Rural Indian Women

[![ArthShashtra Logo](src/Assets/ArthShashtra.png)

![React](https://img.shields.io/badge/React-v19.0-blue.svg) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg) ![CSS](https://img.shields.io/badge/CSS-Responsive-green.svg)

**ArthShashtra** is an AI-powered web platform designed to empower rural Indian women with financial literacy, personalized financial guidance, and tools to make informed financial decisions. It combines cutting-edge technology such as AI, ML, and engaging features to foster financial independence in underserved communities.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

---

## Features

### 1. **User Authentication:**
   - **Login and Signup Page:** Secure login/signup system for user access.
   - **Multiple Language Support:** Users can switch the language of the website to their regional language.

### 2. **Landing Page:**
   - **Modern SaaS Design:** A visually appealing, responsive landing page with engaging animations and advanced design.

   ![Landing Page](https://via.placeholder.com/800x400)

### 3. **Financial Literacy Section:**
   - **Educational Content:** Videos, lectures, and articles tailored for rural women to understand financial concepts like savings, budgeting, and investments.
   
   ![Financial Literacy](https://via.placeholder.com/800x400)

### 4. **AI Chatbot:**
   - **Personal Financial Assistant:** AI-powered chatbot that assists users with financial literacy terms, queries, and personalized advice.

### 5. **Financial Games:**
   - **Interactive Financial Games:** Gamified learning experiences to engage users while teaching important financial principles.
     - **Budgeting Challenge**
     - **Investment Simulator**
     - **Loan & EMI Quiz**
     - **Financial Goal Setter**

   ![Financial Games](https://via.placeholder.com/800x400)

### 6. **AI/ML-Based Financial Tools:**
   - **Stock Predictor:** Predict stock trends using machine learning models.
   - **Expense Tracker:** Track daily and monthly expenses, offering budgeting tips.
   - **EMI & Loan Calculator:** Calculate EMIs and interest rates for different loan types.

### 7. **Micro Investment Feature:**
   - **Investment Guidance:** Helping rural Indian women engage in micro-investments through AI-driven suggestions and access to government schemes for entrepreneurship.

   ![Micro Investment](https://via.placeholder.com/800x400)

### 8. **Bank & Loan Assistance:**
   - **Bank Transactions & Loan Assistance:** Integration with banking services for loan applications and financial transactions.
   - **Payment Gateway Integration:** Secure payment gateway for seamless transactions.

---

---

## **🚀 Tech Stack**

| **Technology**       | **Description**                                       |
|-----------------------|-------------------------------------------------------|
| **React.js**          | Frontend framework for building user interfaces.      |
| **React Router**      | Handles routing and navigation between pages.         |
| **CSS**               | Styling for responsive and modern design.             |
| **HTML5**             | Markup language for structuring components.           |

---

## **📂 Project Structure**

```
src/
│
├── components/          # Reusable React components
├── pages/               # LoginPage.js, SignupPage.js, LandingPage.js
├── styles/              # Corresponding CSS files for each page
├── App.js               # Main app component with routing
└── index.js             # Entry point of the app
```

---

## **💻 Installation and Setup**

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone[ https://github.com/your-username/react-authentication-system.git](https://github.com/ArthShashtra-Team/ArthShashtra-WebAPP)
   ```

2. **Navigate to the project directory**:
   ```bash
   cd react-authentication-system
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm start
   ```

5. **Access the app**:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## **🛠️ Features in Action**

| Page         | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| **Login**    | Login form with email and password fields. Validation for existing users.   |
| **Signup**   | Registration form for new users. Validates email and password inputs.       |
| **Landing**  | Welcome page for authenticated users with logout navigation.                |

---

## **📸 Screenshots**

### **Landing Page**
![Landing Page](public/LandingPage.png)

---

## **📈 Why This Project Stands Out**

1. **Best Practices**: The codebase follows React best practices and modularity principles.
2. **Scalable Architecture**: Designed for scalability, making it suitable for large projects.
3. **Focus on UX**: The project emphasizes user-friendly design and smooth navigation.
4. **Production-Ready**: Built to integrate with a backend for full-stack functionality.

---

## **🤝 Collaborators**

| **Team Member** | **Role**         | **Contact**          |
|------------------|------------------|----------------------|
| Nayan Kathait    | Machine Learning    | 8700852907 |
| Vanshika Mavi    | Backend Developer | 9012482008 |
| Ankur Jha        | Frontend Developer         | 7011793539 |

---

## **🔮 Future Enhancements**

- **Backend Integration**: Add APIs for user authentication with a database.
- **Role-Based Access**: Implement user roles (e.g., Admin, User).
- **Password Reset**: Add "Forgot Password" functionality.
- **OAuth**: Enable social media login (e.g., Google, Facebook).

---

## **📜 License**

This project is licensed under the MIT License. Feel free to use and modify it.

---

## **📧 Contact**

If you have any questions or suggestions, feel free to reach out at:

- **Your Email**: [your.email@example.com](mailto:)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)

---


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
