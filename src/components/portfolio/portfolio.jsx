import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Web Development');
  const [slideIndex, setSlideIndex] = useState(0);

  const tabData = {
    'Web Development': [
      {
        color: '#FF4C4C',
        name: 'Red Color',
        description: 'A brief description of the Red color goes here...',
        dateCreated: 'August 2023',
        learnMoreLink: '#',
      },
      {
        color: '#4C79FF',
        name: 'Blue Color',
        description: 'A brief description of the Blue color goes here...',
        dateCreated: 'October 2023',
        learnMoreLink: '#',
      },
      {
        color: '#5AC45A',
        name: 'Green Color',
        description: 'A brief description of the Green color goes here...',
        dateCreated: 'September 2023',
        learnMoreLink: '#',
      },
      {
        color: '#FF9F40',
        name: 'Orange Color',
        description: 'A brief description of the Orange color goes here...',
        dateCreated: 'November 2023',
        learnMoreLink: '#',
      },
    ],
    'Brand Design': [
      {
        color: '#000000',
        name: 'Black Color',
        description: 'A brief description of the Black color goes here...',
        dateCreated: 'December 2023',
        learnMoreLink: '#',
      },
      {
        color: '#FFFF00',
        name: 'Yellow Color',
        description: 'A brief description of the Yellow color goes here...',
        dateCreated: 'January 2024',
        learnMoreLink: '#',
      },
      {
        color: '#FF69B4',
        name: 'Pink Color',
        description: 'A brief description of the Pink color goes here...',
        dateCreated: 'February 2024',
        learnMoreLink: '#',
      },
      {
        color: '#E6E6FA',
        name: 'Lavender Color',
        description: 'A brief description of the Lavender color goes here...',
        dateCreated: 'March 2024',
        learnMoreLink: '#',
      },
    ],
    'Game Dev/Gamer': [
      {
        color: '#964B00',
        name: 'Brown Color',
        description: 'A brief description of the Brown color goes here...',
        dateCreated: 'April 2024',
        learnMoreLink: '#',
      },
      {
        color: '#FFFFFF',
        name: 'White Color',
        description: 'A brief description of the White color goes here...',
        dateCreated: 'May 2024',
        learnMoreLink: '#',
      },
      {
        color: '#800080',
        name: 'Purple Color',
        description: 'A brief description of the Purple color goes here...',
        dateCreated: 'June 2024',
        learnMoreLink: '#',
      },
      {
        color: '#C0C0C0',
        name: 'Silver Color',
        description: 'A brief description of the Silver color goes here...',
        dateCreated: 'July 2024',
        learnMoreLink: '#',
      },
    ],
    // Add data for other categories here
  };
  const handleTabClick = (tabTitle) => {
    setActiveTab(tabTitle);
    setSlideIndex(0);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => Math.min(prevIndex + 1, tabData[activeTab].length - 1));
  };

  return (
    <div className="portfolio-container">
      <div className="animated-title">&lt;Works. /&gt;</div>
      {/* Simple animated background */}      
      <div className="tab-buttons">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="carousel-container">
        <div className="carousel">
          {tabData[activeTab].map((slide, index) => (
            <div
              className={`slide ${
                index === slideIndex
                  ? 'active'
                  : index === slideIndex + 1 || index === slideIndex - 1
                  ? 'next-prev-slide'
                  : ''
              }`}
              key={index}
            >
              <div className="color-sample" style={{ backgroundColor: slide.color }}>
                <div className="color-name">{slide.name}</div>
              </div>
              <div className="color-summary">
                <ul className="slide-info">
                  <li>Date Created: {slide.dateCreated}</li>
                  <li>{slide.description}</li>
                  <li>
                    <a className='app-link' href={slide.learnMoreLink}>Learn More</a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button
            className={`carousel-prev ${slideIndex === 0 ? 'disabled' : ''}`}
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className={`carousel-next ${
              slideIndex >= tabData[activeTab].length - 1 ? 'disabled' : ''
            }`}
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;