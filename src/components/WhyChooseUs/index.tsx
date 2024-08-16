'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUserTie, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import { useInView } from '../../hooks/useInView';

const ReasonCard: React.FC<{ icon: React.ReactNode; title: string; description: string; index: number; isInView: boolean }> = ({ icon, title, description, index, isInView }) => {


  return (
    <motion.div
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
  >
      <div className="text-4xl text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  const [ref, isInView] = useInView();
  return (
    <section id='why-us' ref={ref} className="py-16 bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose AddisFinacials?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ReasonCard
            icon={<FaChartLine />}
            title="Low Fees, Higher Returns"
            description="Our transparent, low-fee structure means more of your money stays invested."
            isInView={isInView}
            index={0}
          />
          <ReasonCard
            icon={<FaUserTie />}
            title="Expert-Backed Strategies"
            description="Benefit from strategies developed by financial experts and data scientists."
            index={1}
            isInView={isInView}
          />
          <ReasonCard
            icon={<FaShieldAlt />}
            title="Bank-Level Security"
            description="Rest easy with state-of-the-art security measures protecting your investments."
            isInView={isInView}
            index={2}
          />
          <ReasonCard
            icon={<FaHeadset />}
            title="Personalized Support"
            description="Get dedicated customer support and personalized financial advice anytime."
            isInView={isInView}
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
