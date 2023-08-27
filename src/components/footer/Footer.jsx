import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ showFullFooter }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop < document.documentElement.scrollHeight - window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className={`footer ${showFullFooter ? 'full-footer' : isVisible ? 'visible' : 'hidden'}`}>
      <div className="footer-icons">
        <a href="mailto:Fancyee10@gmail.com" className="footer-icon">
          <FaEnvelope size={24} color="#FF5733" />
        </a>
        <div className="footer-location">
          <FaMapMarkerAlt size={24} color="#00C853" />
          <span>Cape Town</span>
        </div>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaGithub size={24} color="#333" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaTwitter size={24} color="#00ACEE" />
        </a>
        <a href="https://wa.me/whatsappphonenumber" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaWhatsapp size={24} color="#25D366" />
        </a>
      </div>

      {showFullFooter && (
        <div className={`footer-mini ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
          <FaEnvelope size={24} color="#FF5733" />
          <FaMapMarkerAlt size={24} color="#00C853" />
          <FaGithub size={24} color="#333" />
          <FaTwitter size={24} color="#00ACEE" />
          <FaWhatsapp size={24} color="#25D366" />
        </div>
      )}
    </footer>
  );
};

export default Footer;
