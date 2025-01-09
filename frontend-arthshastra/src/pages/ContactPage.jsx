import React from 'react';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>For inquiries, email us at <a href="mailto:support@arthshastra.com" className="text-blue-600">support@arthshastra.com</a>.</p>
      </div>
    </>
  );
};

export default ContactPage;
