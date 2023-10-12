// Import necessary dependencies
import React from "react";
import "./HomePage.css";
import { FaCode, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";


// Define the HomePage component
const HomePage = () => {
  // Render the component JSX
  return (
    <div id="home" className="home">
      {/* Background image */}
      <div className="home-page-content">
        <h1 className="home-page-title">
          Drink Water <br />{" "}
          <span style={{ color: "orange" }}>& FrontEnd </span>
        </h1>
        <p>
          Pariatur quae doloribus, dolore consequuntur eveniet quam saepe <br/> labore
          maxime doloremque aperiam debitis totam enim.
        </p>
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/fanuel-nyoni-6b291b155/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button             initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="app-button">Let's Talk</motion.button>
        </a>
      </div>
      <div className="home-page-animation">
        <div class="square-container">
          <div class="item item-1">
            <FaHtml5 alt="" className="home-icons" />
          </div>
          <div class="item item-2">
            <FaCode alt="" className="home-icons" />
          </div>
          <div class="item item-3">
            <FaReact alt="" className="home-icons" />
          </div>
          <div class="item item-4">
            <FaCss3 alt="" className="home-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component as the default export
export default HomePage;
