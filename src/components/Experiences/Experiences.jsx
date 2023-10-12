import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div className="experiences container">
      <div className="page-title">&lt;My Journey. /&gt;</div>
      <div className="cards-container">
        <p className="exp-qoute">
          "I don't trust people who don't drink water. What are they hiding?"
        </p>
        <div className="loader">
          <div className="box"></div>
          <div className="box-hill"></div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <FaGraduationCap className="icon" /> <h2>- Education -</h2>
            </div>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
          <div className="face face2">
          <div className="content">
              <div className="work-timeline">
                <div className="event-right event">
                  <div className="work-content">
                    <span>Jan 2013</span>
                    <p>IB Diploma</p>
                    <p>HGIC</p>
                  </div>
                </div>
                <div className="event-left event">
                <div className="work-content">
                    <span>Jan 2018</span>
                    <p>B.Sc</p>
                    <p>UCT</p>
                  </div>
                </div>
                <div className="event-right event">
                  <div className="work-content">
                    <span>Jan 2015</span>
                    <p>Software Dev</p>
                    <p>Self-taught U</p>
                  </div>
                </div>
                <div className="event-left event">
                  <div className="work-content">
                    <span>Present</span>
                    <p>Web Dev</p>
                    <p>Still-Learning U</p>
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
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <div className="work-timeline">
                <div className="event-right event">
                  <div className="work-content">
                    <span>Jan 2018</span>
                    <p>Freelance</p>
                  </div>
                </div>
                <div className="event-left event">
                  <div className="work-content">
                    <span>Jan 2020</span>
                    <p>DD Contract</p>
                  </div>
                </div>
                <div className="event-right event">
                  <div className="work-content">
                    <span>Jan 2022</span>
                    <p>Freelance</p>
                  </div>
                </div>
                <div className="event-left event">
                  <div className="work-content">
                    <span>Jan 2023</span>
                    <p>Dermatrance</p>
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

/*

      <div className="loader">
        <div className="box"></div>
        <div className="box-hill"></div>
      </div>*/
