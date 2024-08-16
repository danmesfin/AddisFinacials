'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavItem {
  href: string;
  text: string;
}

const navItems: NavItem[] = [
  { href: "#features", text: "Features" },
  { href: "#products", text: "Products" },
  { href: "#why-us", text: "Why Us" },
  { href: "#testimonials", text: "Testimonials" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = (): void => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              AddisFinacials
            </Link>
            <div className="hidden md:flex items-center justify-center space-x-6">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href} className="text-gray-600 hover:text-indigo-600">
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</Link>
              <Link href="/signin" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Sign In</Link>
            </div>
            <button className="md:hidden text-gray-600" onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white overflow-hidden shadow-md relative"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className="text-gray-600 hover:text-indigo-600 py-2">
                {item.text}
              </Link>
            ))}
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center">Register</Link>
            <Link href="/signin" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 text-center">Sign In</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
      </nav>
      
    </>
  );
};

export default Navbar;
