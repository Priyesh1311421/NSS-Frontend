import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState('/home'); // Default active link
  const navigate = useNavigate();

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
    setToggle(false);
  };

  return (
    <nav className='app__navbar p-2'>
      <div className='app__navbar-logo h-11 w-12 m-1'>
        <img src={logo} alt='nss-logo' className='h-10 w-12' />
      </div>
      <ul className='app__navbar-links'>
        <li
          className={`p__opensans ${activeLink === '/home' ? 'active' : ''}`}
          onClick={() => handleClick('/home')}
        >
          Home
        </li>
        <li
          className={`p__opensans ${activeLink === '/about' ? 'active' : ''}`}
          onClick={() => handleClick('/about')}
        >
          About
        </li>
        <li
          className={`p__opensans ${activeLink === '/gallery' ? 'active' : ''}`}
          onClick={() => handleClick('/gallery')}
        >
          Gallery
        </li>
        <li
          className={`p__opensans ${activeLink === '/notices' ? 'active' : ''}`}
          onClick={() => handleClick('/notices')}
        >
          Notices
        </li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='black'
          fontSize={27}
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <div
              size={27}
              className='overlay__close font-extrabold'
              onClick={() => {
                setToggle(false);
              }}
            >
              X
            </div>
            <ul className='app__navbar-smallscreen-links'>
              <li
                className={`p__opensans ${activeLink === '/home' ? 'active' : ''}`}
                onClick={() => handleClick('/home')}
              >
                Home
              </li>
              <li
                className={`p__opensans ${activeLink === '/about' ? 'active' : ''}`}
                onClick={() => handleClick('/about')}
              >
                About
              </li>
              <li
                className={`p__opensans ${activeLink === '/gallery' ? 'active' : ''}`}
                onClick={() => handleClick('/gallery')}
              >
                Gallery
              </li>
              <li
                className={`p__opensans ${activeLink === '/notices' ? 'active' : ''}`}
                onClick={() => handleClick('/notices')}
              >
                Notices
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
