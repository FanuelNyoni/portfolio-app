import React from 'react';
import './Experiences.css';

const Experiences = () => {
  return (
    <div className="experiences-container">
      <div className="timeline-line"></div>
      <ul className="timeline">
        <li className="experience-item">
          <div className="flag-wrapper">
            <span className="flag">Web Development Degree</span>
            <span className="time-wrapper">
              <span className="time">Aug 2013 - May 2017</span>
            </span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non ultrices elit. Donec lacinia.
          </div>
          <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
        </li>
        <li className="experience-item">
          <div className="flag-wrapper">
            <span className="flag">Junior Web Developer</span>
            <span className="time-wrapper">
              <span className="time">Jun 2017 - Dec 2018</span>
            </span>
          </div>
          <div className="desc">
            Duis et interdum mi. Quisque malesuada risus a ipsum consequat, vel aliquam risus.
          </div>
          <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
        </li>
        <li className="experience-item">
          <div className="flag-wrapper">
            <span className="flag">Senior Web Developer</span>
            <span className="time-wrapper">
              <span className="time">Jan 2019 - Present</span>
            </span>
          </div>
          <div className="desc">
            Suspendisse malesuada ipsum non ex laoreet tristique. Aliquam in felis sit amet neque faucibus.
          </div>
          <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
        </li>
        <li className="experience-item">
          <div className="flag-wrapper">
            <span className="flag">Senior Web Developer</span>
            <span className="time-wrapper">
              <span className="time">Jan 2019 - Present</span>
            </span>
          </div>
          <div className="desc">
            Suspendisse malesuada ipsum non ex laoreet tristique. Aliquam in felis sit amet neque faucibus.
          </div>
          <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
        </li>
      </ul>
    </div>
  );
};

export default Experiences;
