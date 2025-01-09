import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., form submission)
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
