import React, { useState } from "react";
import {
  FaHtml5,
  FaSketch,
  FaFigma,
  FaGamepad,
  FaChess,
  FaUsers,
  FaReact,
  FaCss3,
  FaPaintBrush,
} from "react-icons/fa";
import "./Perlin.css";



const Perlin = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  const handleResetClick = () => {
    setSelectedCard(null);
  };

  const selectedCardContent = {
    Code: {
      skills: [
        { icon: <FaReact/>, name: "React", p_value: 88 },
        { icon: <FaCss3 />, name: "CSS", p_value: 99 },
        { icon: <FaHtml5/>, name: "HTML", p_value: 96 },
      ],
    },
    Design: {
      skills: [
        { icon: <FaPaintBrush />, name: "Adobe", p_value: 64 },
        { icon: <FaSketch />, name: "Sketch", p_value: 56 },
        { icon: <FaFigma />, name: "Figma", p_value: 72 },
      ],
    },
    Play: {
      skills: [
        { icon: <FaGamepad />, name: "RPG", p_value: 100 },
        { icon: <FaChess />, name: "Strategy", p_value: 100 },
        { icon: <FaUsers />, name: "Multiplayer", p_value: 100 },
      ],
    },
  };

  const defaultCardContent = {
    title: '" Water is for those that care about Health and stuff.."',
    svgColor: (
<></>
    ),
  };

  const largeCardContent = selectedCard
    ? selectedCardContent[selectedCard]
    : defaultCardContent;

  return (
    <div id="experience" className="perlin container">
      <div className="page-title">&lt;Skills. /&gt;</div>
      <div className="perlin-cards-wrapper">
        <div
          className={`card-small ${selectedCard === "Code" ? "selected" : ""}`}
          onClick={() => handleCardClick("Code")}
        >
          Code
        </div>
        <div
          className={`card-small ${
            selectedCard === "Design" ? "selected" : ""
          }`}
          onClick={() => handleCardClick("Design")}
        >
          Design
        </div>
        <div
          className={`card-small ${selectedCard === "Play" ? "selected" : ""}`}
          onClick={() => handleCardClick("Play")}
        >
          Play
        </div>
        <div className="card-large">
          {largeCardContent.svgColor}
          <div className="perlin-title">{largeCardContent.title}</div>
          <div className="perlin-skills-wrapper">
            {selectedCard &&
              largeCardContent.skills.map((skill, index) => (
                <div className="skill-card" style={{'--percentage-value': `${skill.p_value}`}} key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-percentage">{skill.p_value} %</div>
                </div>
              ))}
            {selectedCard && (
              <div className="reset-button" onClick={handleResetClick}>
                &#x2716;
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perlin;
