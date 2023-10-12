import React, { useEffect } from 'react';
import './sampleCard.css';


const sampleCard = () => {
  useEffect(() => {
    // Function to create and animate raindrops
    const createRaindrop = () => {
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.style.left = Math.random() * 100 + 'vw';
      document.body.appendChild(raindrop);

      setTimeout(() => {
        raindrop.remove();
      }, 2000);

      raindrop.addEventListener('animationiteration', () => {
        raindrop.style.left = Math.random() * 100 + 'vw';
      });
    };

    // Create raindrops at intervals
    const rainInterval = setInterval(createRaindrop, 200);

    // Cleanup the interval on component unmount
    return () => clearInterval(rainInterval);
  }, []);

  return (
    <div className="rain-card">
      <div className="card-content">
        {/* Your card content goes here */}
      </div>
    </div>
  );
}

export default sampleCard