import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 w-full mb-[-65px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src="/path-to-logo.png" alt="NSS NSUT Cell" className="h-10" />
        </div>
        <nav>
          <ul className="flex space-x-4 ">
            <li className='hover:cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='hover:cursor-pointer'><Link to="aboutus" smooth={true} duration={500}>About Us</Link></li>
            <li className='hover:cursor-pointer'><Link to="achievements" smooth={true} duration={500}>Achievements</Link></li>
            <li className='hover:cursor-pointer'><Link to="contactus" smooth={true} duration={500}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
