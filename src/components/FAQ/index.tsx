'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "How does AddisFinacials ensure the security of my investments?",
    answer: "We employ bank-level security measures, including 256-bit encryption, two-factor authentication, and regular security audits to protect your investments and personal information."
  },
  {
    question: "What are the fees associated with using AddisFinacials?",
    answer: "Our fee structure is transparent and competitive. We charge a low annual fee of 0.25% on your invested balance, with no hidden costs or transaction fees."
  },
  {
    question: "Can I withdraw my money at any time?",
    answer: "Yes, you can withdraw your funds at any time without penalties. Most withdrawals are processed within 3-5 business days."
  },
  {
    question: "How does AddisFinacials choose investments for my portfolio?",
    answer: "We use advanced algorithms and expert insights to create diversified portfolios tailored to your risk tolerance and financial goals, focusing on low-cost ETFs across various asset classes."
  },
  {
    question: "Is there a minimum investment amount required?",
    answer: "To get started with AddisFinacials, you can begin with as little as $500. This low entry point allows more people to start their investment journey."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-black">{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
