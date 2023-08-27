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
            <div className="animated-title">&lt;Expertise. /&gt;</div>

<div className="flip-card-wrapper">
  <div className="flip-card-container">
<div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg img-bg-blue"></div>
              <div className="service-title">
                <FontAwesomeIcon icon={faCode} style={{ color: "#F7931E"}} />
                <span>Web Development</span>
              </div>{" "}
            </figure>

            <div className="service-summary">
              Offering professional web development services.
            </div>
            <ul className="lists">
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#f7931e", }} />
                Front-end Development
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#f7931e", }} />
                Back-end Development
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#f7931e", }} />
                Responsive Design
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#f7931e", }} />
                UI/UX Design
              </li>
            </ul>
          </div>

          <div className="card-back">
            <button className="btn-card">Learn More</button>

            <div className="design-container orange-lines">
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
        </div></div>
<div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg img-bg-orange"></div>
              <div className="service-title">
                <FontAwesomeIcon icon={faPalette} style={{ color: "#00295c"}} />
                <span >Brand Design</span>
              </div>{" "}
            </figure>

            <div className="service-summary">
              Offering professional brand design services.
            </div>

            <ul className="lists">
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00295c", }} />
                Logo Design
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00295c", }} />
                Brand Identity
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00295c", }} />
                Print Design
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00295c", }} />
                Digital Graphics
              </li>
            </ul>
          </div>

          <div className="card-back">
            <button className="btn-card">Learn More</button>

            <div className="design-container blue-lines">
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
        </div></div>
<div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg img-bg-green"></div>
              <div className="service-title">
                <FontAwesomeIcon icon={faGamepad} style={{ color: "#00a05c", filter: "saturate(4)"}} />
                <span >Gamer</span>
              </div>{" "}
            </figure>

            <div className="service-summary">
              Offering various gaming experiences.
            </div>
            <ul className="lists">
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00a05c", fontSize: "1em", filter: "saturate(4)" }} />
                FPS Games
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00a05c", fontSize: "1em", filter: "saturate(4)" }} />
                RPG Games
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00a05c", fontSize: "1em", filter: "saturate(4)" }} />
                Strategy Games
              </li>
              <li className="list">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00a05c", fontSize: "1em", filter: "saturate(4)" }} />
                Adventure Games
              </li>
            </ul>
          </div>

          <div className="card-back">
            <button className="btn-card">Learn More</button>

            <div className="design-container green-lines">
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
        </div></div>
</div>
    </div>
  );
};

export default Services;
