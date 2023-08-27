import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faGamepad,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services-container">
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front" style={{ color: "#fff", backgroundColor: "#4CAF50" }}>
            <figure>
              <div className="img-bg"></div>
              <div className="service-title">
                <FontAwesomeIcon icon={faCode} style={{ color: "#fff" }} />
                <span>Web Development</span>
              </div>{" "}
            </figure>

            <div className="service-summary">
              Offering professional web development services.
            </div>
            <ul className="lists">
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4CAF50" }} />
                Front-end Development
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4CAF50" }} />
                Back-end Development
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4CAF50" }} />
                Responsive Design
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4CAF50" }} />
                UI/UX Design
              </li>
            </ul>
          </div>

          <div className="card-back">
            <button className="btn-card">Learn More</button>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front" style={{ color: "#fff", backgroundColor: "#FFC107" }}>
            <figure>
              <div className="img-bg"></div>
              <div className="service-title">
                <FontAwesomeIcon icon={faPalette} style={{ color: "#fff" }} />
                <span>Brand Design</span>
              </div>{" "}
            </figure>

            <div className="service-summary">
              Offering professional brand design services.
            </div>

            <ul className="lists">
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#FFC107" }} />
                Logo Design
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#FFC107" }} />
                Brand Identity
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#FFC107" }} />
                Print Design
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#FFC107" }} />
                Digital Graphics
              </li>
            </ul>
          </div>

          <div className="card-back">
            <button className="btn-card">Learn More</button>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front" style={{ color: "#fff", backgroundColor: "#E91E63" }}>
            <figure>
              <div className="img-bg"></div>
              <div className="service-title">
                <FontAwesomeIcon icon={faGamepad} style={{ color: "#fff" }} />
                <span>Gamer</span>
              </div>{" "}
            </figure>

            <div className="service-summary">
              Offering various gaming experiences.
            </div>
            <ul className="lists">
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#E91E63" }} />
                FPS Games
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#E91E63" }} />
                RPG Games
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#E91E63" }} />
                Strategy Games
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#E91E63" }} />
                Adventure Games
              </li>
            </ul>
          </div>

          <div className="card-back">
            <button className="btn-card">Learn More</button>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
