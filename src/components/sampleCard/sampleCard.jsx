import React, { useEffect, useRef } from 'react';
import './SampleCard.css';

const SampleCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const createRaindrop = () => {
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.style.left = Math.random() * card.offsetWidth + 'px';
      card.appendChild(raindrop);

      setTimeout(() => {
        raindrop.style.top = card.offsetHeight + 'px'; // Move the raindrop to the bottom
        raindrop.style.transform = 'scaleY(0.1)'; // Squish the raindrop vertically
        raindrop.style.opacity = 0; // Make it transparent
        setTimeout(() => {
          raindrop.remove();
        }, 1000);
      }, 1500);
    };

    const rainInterval = setInterval(createRaindrop, 200);

    return () => clearInterval(rainInterval);
  }, []);

  return (
    <div className="samplecard">
      <div className="rain-card" ref={cardRef}>
        <div className="card-content">
          {/* Your card content goes here */}
        </div>
      </div>
    </div>
  );
};

export default SampleCard;
