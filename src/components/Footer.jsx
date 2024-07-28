import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://x.com/nssnsutcell" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-400" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-500" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-700" />
        </a>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} NSS NSUT Cell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
