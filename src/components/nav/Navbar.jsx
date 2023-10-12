import React, { useState, useEffect, useCallback } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaImage,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";
import logo from "../../img/logo/logo.svg"
import { motion } from "framer-motion";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos < prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 60; // Adjust this value to offset the scroll position as needed
      const top =
        section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${visible ? "navbar--visible" : "navbar--hidden"}`}>
      <div className="navbar__container">
        {/* Your logo */}
        <motion.img
        initial={{ scale: 0, rotateY: 0}}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        whileHover={{ rotateY: 180 }}
        className="logo"
         src={logo} alt="logo" />

        <div className="navbar__links">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <FaHome className="navbar__icon" />
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            <FaUser className="navbar__icon" />
            About
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
          >
            <FaBriefcase className="navbar__icon" />
            Services
          </a>
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("portfolio");
            }}
          >
            <FaImage className="navbar__icon" />
            Portfolio
          </a>

          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            <FaImage className="navbar__icon" />
            Experience
          </a>

          {/* Keep the "Contact" button as is */}
          <button
            className="app-button"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
        <div
          className={`navbar__menu-icon ${menuOpen ? "menu-open" : ""}`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <ul
        className={`navbar__dropdown ${
          menuOpen ? "navbar__dropdown--open" : ""
        }`}
      >
        <li>
          <a href="#home" onClick={() => scrollToSection("home")}>
            <FaHome className="navbar__icon" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => scrollToSection("about")}>
            <FaUser className="navbar__icon" />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => scrollToSection("services")}>
            <FaBriefcase className="navbar__icon" />
            <span>Services</span>
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => scrollToSection("portfolio")}>
            <FaImage className="navbar__icon" />
            <span>Portfolio</span>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            <FaImage className="navbar__icon" />
            Experience
          </a>
        </li>
        <li>
          <button
            className="app-button"
            onClick={() => scrollToSection("contact")}
            style={{ width: "90%", margin: "0 auto" }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
