import React, { useState } from "react";
import "./About.css";
import prof_image from "../../img/profile/profile-img.svg";
import profile_name from "../../img/profile/profile_name.svg"


const About = () => {
  return (
    <div id="about" className="about">
      <div className="page-title">&lt;About Me. /&gt;</div>
      <p className="about-custom-message">
          "And now that you do not have to be perfect, you can be good"
        </p>
      <div className="about-cards-wrapper">
        <ul class="about-loader">
          <li class="abl-center"></li>
          <li class="abl-item abl-item-1"></li>
          <li class="abl-item abl-item-2"></li>
          <li class="abl-item abl-item-3"></li>
          <li class="abl-item abl-item-4"></li>
          <li class="abl-item abl-item-5"></li>
          <li class="abl-item abl-item-6"></li>
          <li class="abl-item abl-item-7"></li>
          <li class="abl-item abl-item-8"></li>
        </ul>
        <div className="about-card">
          <img src={profile_name} alt="" className="profile-title" />
          <div className="about-section">
            <h2>Frontend | UX Designer</h2>
            <p>
              Crafting intuitive and visually appealing user interfaces. Let's
              work together!
            </p>
          </div>
          <img src={prof_image} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  );
};

export default About;
