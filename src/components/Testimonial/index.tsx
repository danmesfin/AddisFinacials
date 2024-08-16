'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    image: '/images/human-3.png',
    quote: 'AddisFinacials has transformed the way I manage my business finances. Their user-friendly platform and expert advice have been invaluable.',
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    image: '/images/human-2.png',
    quote: 'As a freelancer, I was struggling with irregular income. AddisFinacials helped me create a solid financial plan and now I feel much more secure.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Recent Graduate',
    image: '/images/human-1.png',
    quote: 'Starting my financial journey was daunting, but AddisFinacials made it easy and approachable. I am now confidently saving and investing for my future.',
  }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ name, role, image, quote }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="flex items-center mb-4">
      <Image src={image} alt={name} width={60} height={60} className="rounded-full mr-4" />
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-700 italic">&quot;{quote}&quot;</p>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section id='testimonials' className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
