'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductCard: React.FC<{ imageSrc: string; title: string; description: string; isReversed?: boolean; colorClass: string }> = ({ imageSrc, title, description, isReversed, colorClass }) => (
  <motion.div 
    className={`${colorClass} p-4 md:p-8 rounded-3xl mb-8 md:mb-12 flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-center`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-full md:w-1/2 mb-4 md:mb-0">
      <Image src={imageSrc} alt={title} width={500} height={300} className="rounded-2xl w-full h-auto" />
    </div>
    <div className={`w-full md:w-1/2 ${isReversed ? 'md:pr-8' : 'md:pl-8'}`}>
      <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{title}</h3>
      <p className="text-lg md:text-xl text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const ProductsServices: React.FC = () => {
  return (
    <section id='products' className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Our Products and Services</h2>
        <ProductCard
          imageSrc="/images/investors.jpeg"
          title="Managed Portfolios"
          description="Let our experts handle your investments with diversified portfolios designed for long-term growth."
          colorClass="bg-blue-50"
        />
        <ProductCard
          imageSrc="/images/3dcoins.jpeg"
          title="Self-Directed Investing"
          description="Take control with our commission-free trading platform offering a wide range of stocks, ETFs, and bonds."
          isReversed
          colorClass="bg-green-50"
        />
        <ProductCard
          imageSrc="/images/graph.jpeg"
          title="High-Interest Savings Accounts"
          description="Earn more on your savings with industry-leading interest rates and no hidden fees."
          colorClass="bg-yellow-50"
        />
        <ProductCard
          imageSrc="/images/retirement-planning.jpeg"
          title="Retirement Planning"
          description="Secure your future with tailored retirement solutions, including RRSPs and TFSAs."
          isReversed
          colorClass="bg-purple-50"
        />
        <ProductCard
          imageSrc="/images/financial-education.jpeg"
          title="Financial Education"
          description="Empower yourself with our library of financial resources, webinars, and expert advice."
          colorClass="bg-pink-50"
        />
      </div>
    </section>
  );
};

export default ProductsServices;
