'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300"
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 bg-indigo-600 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
            <p className="mb-4">Ready to take control of your financial future? Reach out to us today.</p>
            <ul className="space-y-2">
              <li className="flex items-center"><FaPhone className="mr-2" /> +1 (555) 123-4567</li>
              <li className="flex items-center"><FaEnvelope className="mr-2" /> contact@addisfinacials.com</li>
              <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 123 Finance St, Money City</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-8">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
