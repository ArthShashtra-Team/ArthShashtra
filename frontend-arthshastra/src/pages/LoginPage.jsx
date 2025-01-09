import React from 'react';
import Navbar from '../components/Navbar';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2">Email:</label>
            <input type="email" className="border border-gray-300 rounded p-2 w-full" />
          </div>
          <div>
            <label className="block mb-2">Password:</label>
            <input type="password" className="border border-gray-300 rounded p-2 w-full" />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
