import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBriefcase, FaImage, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos < prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar__container">
        <div className="navbar__links">
          <a href="#home">
            <FaHome className="navbar__icon" />
            Home
          </a>
          <a href="#about">
            <FaUser className="navbar__icon" />
            About
          </a>
          <a href="#services">
            <FaBriefcase className="navbar__icon" />
            Services
          </a>
          <a href="#portfolio">
            <FaImage className="navbar__icon" />
            Portfolio
          </a>
          <a href="#contact">
            <FaEnvelope className="navbar__icon" />
            Contact
          </a>
        </div>
        <button className="navbar__contact-button">Contact</button>
        <div className="navbar__menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      <ul className={`navbar__dropdown ${menuOpen ? 'navbar__dropdown--open' : ''}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
