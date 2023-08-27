import React, { useState } from "react";
import "./About.css";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import prof_image from "../../img/My project-1.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleIconBlur = () => {
    setActiveIcon(null);
  };

  return (
    <div className="about-container">
      <div className="about-card card-left">
        <div className="profile-info">
          <div className="profile-image">
            <img src={prof_image} alt="Profile" className="profile-pic" />
            <div className="profile-overlay"></div>
          </div>
          <h2 className="profile-title">Fanuel Nyoni</h2>
          <button className="message-btn">Message Me</button>
        </div>
      </div>
      <div className="about-card card-right">
        <div className="profile-summary">
          <h2>FrontEnd | UX Designer</h2>
          <div className="title-underline"></div>
          <p>
            Specialize in crafting intuitive and visually appealing user
            interfaces. With a strong understanding of{" "}
            <FaHtml5 className="skill-icon html-icon" />,{" "}
            <FaCss3Alt className="skill-icon css-icon" />
            , <FaReact className="skill-icon react-icon" />
            , and proficient in <FaJs className="skill-icon js-icon" />.
            Committed to excellence and fueled by creativity. Let's work
            together to create something amazing! 😊
          </p>
          <div className="title-underline"></div>
          <div className="icon-container">
            <div
              className={`icon-wrapper ${
                activeIcon === "github" ? "active" : ""
              }`}
              onMouseEnter={() => handleIconHover("github")}
              onMouseLeave={handleIconBlur}
              onFocus={() => handleIconHover("github")}
              onBlur={handleIconBlur}
              tabIndex="0"
            >
              <FaGithub className="social-icon" />
            </div>
            <div
              className={`icon-wrapper ${
                activeIcon === "linkedin" ? "active" : ""
              }`}
              onMouseEnter={() => handleIconHover("linkedin")}
              onMouseLeave={handleIconBlur}
              onFocus={() => handleIconHover("linkedin")}
              onBlur={handleIconBlur}
              tabIndex="0"
            >
              <FaLinkedin className="social-icon" />
            </div>
            <div
              className={`icon-wrapper ${
                activeIcon === "twitter" ? "active" : ""
              }`}
              onMouseEnter={() => handleIconHover("twitter")}
              onMouseLeave={handleIconBlur}
              onFocus={() => handleIconHover("twitter")}
              onBlur={handleIconBlur}
              tabIndex="0"
            >
              <FaTwitter className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
