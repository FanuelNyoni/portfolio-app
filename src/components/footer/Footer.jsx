import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showFullFooter, setShowFullFooter] = useState(false);

  const toggleFooter = () => {
    setShowFullFooter(!showFullFooter);
  };

  return (
    <footer
      className={`footer-container ${showFullFooter ? "full-footer" : "mini-footer"}`}
      onClick={toggleFooter}
    >
      <div className="footer-icons">
        <a href="mailto:Fancyee10@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="footer-icon footer-icon-email" />
        </a>
        <a href="https://maps.google.com/?q=Cape Town" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt className="footer-icon footer-icon-location" />
        </a>
        <a href="https://twitter.com/yourtwitterusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon footer-icon-twitter" />
        </a>
        <a href="https://wa.me/whatsappphonenumber" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="footer-icon footer-icon-whatsapp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
