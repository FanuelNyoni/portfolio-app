import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import prof_image from "../../img/profile.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleIconBlur = () => {
    setActiveIcon(null);
  };

  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cardRect = cardRef.current.getBoundingClientRect();
      const mouseX = event.clientX - cardRect.left;
      const mouseY = event.clientY - cardRect.top;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    cardRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="about-container">
      <div className="animated-title">&lt;About Me. /&gt;</div>
      <div className="about-cards-wrapper">
        <div className="particle-card" ref={cardRef}>
          <div className="particle-field">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transition: `${Math.random()}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="about-card">
          <div className="profile-summary">
            <h2>Frontend | UX Designer</h2>
            <div className="title-underline"></div>
            <p>
              Crafting intuitive and visually appealing user interfaces, with a
              strong understanding of{" "}
              <FaHtml5 className="skill-icon html-icon" />{" "}
              <FaCss3Alt className="skill-icon css-icon" />
              <FaReact className="skill-icon react-icon" />
              and <FaJs className="skill-icon js-icon" />.<br />
              Let's work together!
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
            </div>
          </div>
        </div>
        <div className="about-card">
          <div className="profile-info">
            <div className="profile-image">
              <img src={prof_image} alt="Profile" className="profile-pic" />
              <div className="profile-overlay"></div>
            </div>
            <div className="profile-title-container">
              <svg
                width="118"
                height="17"
                viewBox="0 0 118 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="profile-title"
              >
                <path
                  d="M0.405938 13V10.376H1.20594V3.176H0.405938V0.551999H9.97394V4.696H7.14194V3.176H5.68594V5.832H8.10194V7.656H5.68594V10.376H7.78194V13H0.405938Z"
                  fill="#00A0FF"
                />
                <path
                  d="M19.8113 10.376V13H15.5873V11.912C15.3526 12.2533 15.022 12.5573 14.5953 12.824C14.1793 13.0907 13.6673 13.224 13.0593 13.224C12.2593 13.224 11.63 13.0107 11.1713 12.584C10.7126 12.1573 10.4833 11.5547 10.4833 10.776C10.4833 8.76 12.1953 7.72533 15.6193 7.672C15.5873 7.30933 15.4486 7.064 15.2033 6.936C14.958 6.79733 14.542 6.728 13.9553 6.728C13.4753 6.728 12.958 6.78133 12.4033 6.888C11.8593 6.984 11.358 7.11733 10.8993 7.288V4.344C11.4646 4.20533 12.078 4.09333 12.7393 4.008C13.4006 3.92267 14.046 3.88 14.6753 3.88C16.2646 3.88 17.4006 4.168 18.0833 4.744C18.766 5.32 19.1073 6.21067 19.1073 7.416V10.376H19.8113ZM15.5873 9.256C15.1073 9.256 14.734 9.32 14.4673 9.448C14.2113 9.576 14.0833 9.78933 14.0833 10.088C14.0833 10.2693 14.1366 10.4187 14.2433 10.536C14.3606 10.6427 14.5206 10.696 14.7233 10.696C15.0006 10.696 15.214 10.5787 15.3633 10.344C15.5126 10.1093 15.5873 9.77867 15.5873 9.352V9.256ZM30.9511 10.376V13H25.8951V10.376H26.5671V7.752C26.5671 7.4 26.4924 7.144 26.3431 6.984C26.1937 6.81333 25.9697 6.728 25.6711 6.728C25.0311 6.728 24.7111 7.06933 24.7111 7.752V10.376H25.3831V13H20.3271V10.376H21.0311V6.728H20.3271V4.104H24.7111V5.352C25.4791 4.37067 26.4391 3.88 27.5911 3.88C28.4764 3.88 29.1377 4.15733 29.5751 4.712C30.0231 5.26667 30.2471 6.02933 30.2471 7V10.376H30.9511ZM41.9957 10.376V13H37.6117V11.752C36.8437 12.7333 35.8837 13.224 34.7317 13.224C33.8464 13.224 33.1797 12.9467 32.7317 12.392C32.2944 11.8373 32.0757 11.0747 32.0757 10.104V6.728H31.3717V4.104H35.7557V9.352C35.7557 9.704 35.8304 9.96533 35.9797 10.136C36.1397 10.296 36.3744 10.376 36.6837 10.376C36.993 10.376 37.2224 10.296 37.3717 10.136C37.5317 9.96533 37.6117 9.704 37.6117 9.352V6.728H36.7477V4.104H41.2917V10.376H41.9957ZM47.2044 13.224C45.6898 13.224 44.5058 12.8293 43.6524 12.04C42.7991 11.24 42.3724 10.0773 42.3724 8.552C42.3724 7.02667 42.7991 5.86933 43.6524 5.08C44.5058 4.28 45.6898 3.88 47.2044 3.88C48.7084 3.88 49.7911 4.27467 50.4524 5.064C51.1244 5.84267 51.4604 6.81333 51.4604 7.976V9.128H46.2764V9.224C46.2764 9.61867 46.3938 9.912 46.6284 10.104C46.8631 10.2853 47.2524 10.376 47.7964 10.376C48.4471 10.376 49.0658 10.328 49.6524 10.232C50.2391 10.136 50.7511 10.0133 51.1884 9.864V12.424C50.8151 12.6267 50.2658 12.8133 49.5404 12.984C48.8258 13.144 48.0471 13.224 47.2044 13.224ZM48.1324 7.368V7.176C48.1324 6.81333 48.0524 6.552 47.8924 6.392C47.7431 6.232 47.5138 6.152 47.2044 6.152C46.8951 6.152 46.6604 6.23733 46.5004 6.408C46.3511 6.568 46.2764 6.824 46.2764 7.176V7.368H48.1324ZM51.9364 13.016V10.376H52.6404V3.176H51.9364V0.551999H56.3204V10.376H57.0244V13.016H51.9364ZM87.0372 4.104V6.728H86.4292L84.3332 12.28C83.8105 13.6773 83.2132 14.7227 82.5412 15.416C81.8692 16.12 80.9839 16.472 79.8852 16.472C79.4372 16.472 78.9839 16.424 78.5252 16.328C78.0665 16.2427 77.6505 16.12 77.2772 15.96V13.064H79.4852V13.224C79.4852 13.4907 79.6239 13.624 79.9012 13.624C80.1465 13.624 80.3332 13.5067 80.4612 13.272L77.9332 6.728H77.3252V4.104H82.0772V6.728H81.5332L82.3652 9.224L83.1332 6.728H82.5892V4.104H87.0372ZM92.2826 13.224C90.7679 13.224 89.5839 12.8293 88.7306 12.04C87.8772 11.24 87.4506 10.0773 87.4506 8.552C87.4506 7.02667 87.8772 5.86933 88.7306 5.08C89.5839 4.28 90.7679 3.88 92.2826 3.88C93.8186 3.88 95.0079 4.28533 95.8506 5.096C96.6932 5.896 97.1146 7.048 97.1146 8.552C97.1146 10.0773 96.6879 11.24 95.8346 12.04C94.9812 12.8293 93.7972 13.224 92.2826 13.224ZM92.2826 10.376C92.5919 10.376 92.8212 10.296 92.9706 10.136C93.1306 9.96533 93.2106 9.704 93.2106 9.352V7.752C93.2106 7.4 93.1306 7.144 92.9706 6.984C92.8212 6.81333 92.5919 6.728 92.2826 6.728C91.9732 6.728 91.7386 6.81333 91.5786 6.984C91.4292 7.144 91.3546 7.4 91.3546 7.752V9.352C91.3546 9.704 91.4292 9.96533 91.5786 10.136C91.7386 10.296 91.9732 10.376 92.2826 10.376ZM108.248 10.376V13H103.192V10.376H103.864V7.752C103.864 7.4 103.789 7.144 103.64 6.984C103.491 6.81333 103.267 6.728 102.968 6.728C102.328 6.728 102.008 7.06933 102.008 7.752V10.376H102.68V13H97.6239V10.376H98.3279V6.728H97.6239V4.104H102.008V5.352C102.776 4.37067 103.736 3.88 104.888 3.88C105.773 3.88 106.435 4.15733 106.872 4.712C107.32 5.26667 107.544 6.02933 107.544 7V10.376H108.248ZM109.533 3.224V0.551999H112.797V3.224H109.533ZM108.765 13V10.376H109.469V6.728H108.765V4.104H113.149V10.376H113.853V13H108.765ZM114.648 13V10.376H117.144V13H114.648Z"
                  fill="white"
                />
                <path
                  d="M71.5751 0.551999H76.8231V3.176H76.0231V13H71.5271L66.8391 5.784V10.376H67.6071V13H62.3591V10.376H63.1591V3.176H62.3591V0.551999H68.1351L72.3431 6.968V3.176H71.5751V0.551999Z"
                  fill="#F7931E"
                />
              </svg>
            </div>
            <button className="app-button about-button">Learn More..</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
