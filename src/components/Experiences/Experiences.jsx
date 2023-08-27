import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./Experiences.css";


const Experiences = () => {
  return (
    <div className="experiences-container">
      <div className="animated-title">&lt;My Journey. /&gt;</div>
      <div className="cards-container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <FaGraduationCap className="icon" /> <h2>- Education -</h2>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <div className="timeline">
                <div className="timeline-left">
                  <div className="date">Jan 2013</div>
                  <div className="timeline-content">
                    <h4>Chemistry Degree</h4>
                    <p>Fake University</p>
                  </div>
                </div>
                <div className="timeline-right">
                  <div className="date">Jan 2013</div>
                  <div className="timeline-content">
                    <h4>Chemistry Degree</h4>
                    <p>Fake University</p>
                  </div>
                </div>
                <div className="timeline-left">
                  <div className="date">Jan 2013</div>
                  <div className="timeline-content">
                    <h4>Chemistry Degree</h4>
                    <p>Fake University</p>
                  </div>
                </div>
                <div className="timeline-right">
                  <div className="date">Jan 2013</div>
                  <div className="timeline-content">
                    <h4>Chemistry Degree</h4>
                    <p>Fake University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <FaBriefcase className="icon" /> <h2>- Work -</h2>
            </div>
          </div>
          <div className="face face2">
            <div className="content">             
              <div className="work-timeline">
                <div className="event-left">
                  <div className="work-content">
                    <span>Jan 2020</span>
                    <p>Fake Company</p>
                  </div>
                </div>
                <div className="event-right">
                  <div className="work-content">
                    <span>Jan 2020</span>
                    <p>Fake Company</p>
                  </div>
                </div>
                <div className="event-left">
                  <div className="work-content">
                    <span>Jan 2020</span>
                    <p>Fake Company</p>
                  </div>
                </div>
                <div className="event-right">
                  <div className="work-content">
                    <span>Jan 2020</span>
                    <p>Fake Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
