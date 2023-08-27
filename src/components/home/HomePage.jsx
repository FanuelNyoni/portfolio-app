// Import necessary dependencies
import React, { useEffect, useState } from "react";
import "./HomePage.css";

// Define the HomePage component
const HomePage = () => {
  const [gridSize] = useState({ rows: 4, cols: 4 });
  const [flowField, setFlowField] = useState([]);

  useEffect(() => {
    const field = Array.from({ length: gridSize.rows }, () =>
      Array.from({ length: gridSize.cols }, () => ({
        angle: Math.random() * Math.PI * 2,
      }))
    );
    setFlowField(field);
  }, [gridSize.rows, gridSize.cols]);

  const handleCellMouseMove = (rowIndex, colIndex, event) => {
    const cellRect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - cellRect.left;
    const mouseY = event.clientY - cellRect.top;
    const angle = Math.atan2(
      mouseY - cellRect.height / 0.5,
      mouseX - cellRect.width / 0.5
    );

    const updatedFlowField = [...flowField];
    updatedFlowField[rowIndex][colIndex].angle = angle;
    setFlowField(updatedFlowField);
  };

  // Render the component JSX
  return (
    <div className="home-page">
      {/* Background image */}
      <div className="home-page-content">
        <h1 className="home-page-title">
          Drink Water <br />{" "}
          <span>
            {" "}
            <div className="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            & Code{" "}
            <div className="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae
          doloribus, dolore consequuntur eveniet quam saepe labore maxime
          doloremque aperiam debitis totam enim.
        </p>
        <button className="app-button">Lets Talk..</button>
      </div>
      <div className="home-page-animation">
        <div className="animation-card">
          <div className="flow-field">
            {flowField.map((row, rowIndex) => (
              <div key={rowIndex} className="flow-row">
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className="flow-cell"
                    onMouseMove={(e) =>
                      handleCellMouseMove(rowIndex, colIndex, e)
                    }
                    style={{
                      transform: `rotate(${cell.angle}rad)`,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component as the default export
export default HomePage;
