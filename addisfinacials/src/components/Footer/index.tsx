import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AddisFinacials</h3>
            <p className="text-gray-400">Empowering your financial future</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-400 transition duration-300"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition duration-300"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition duration-300"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition duration-300"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AddisFinacials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
