// Import necessary dependencies
import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";

// Define the HomePage component
const HomePage = () => {
  // Refs to interact with elements in the DOM
  const logoRef = useRef(null);
  const cubeRef = useRef(null);
  const messageRef = useRef(null);
  
  // State to manage the current message index
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // useEffect hook to manage the typing effect and message cycling
  useEffect(() => {
    // Array of messages to be displayed
    const messages = [
      "Welcome to Pixel Palate",
      "Home of the Juicy Fruit People 😊",
      "Tasty web solutions for your digital hunger!",
    ];

    // Reference to the message element
    const messageElement = messageRef.current;
    // Get the current message to be displayed
    const currentMessage = messages[currentMessageIndex];
    // Variable to keep track of the current character index being typed
    let currentCharIndex = 0;
    // Timers for typing and deleting messages
    let typingTimer;
    let deletingTimer;

    // Function to simulate typing a letter
    const typeLetter = () => {
      if (currentCharIndex < currentMessage.length) {
        messageElement.textContent += currentMessage[currentCharIndex];
        currentCharIndex++;
        typingTimer = setTimeout(typeLetter, 100); // Adjust the typing speed as desired
      } else {
        deletingTimer = setTimeout(deleteLetter, 1000); // Adjust the delay before deleting as desired
      }
    };

    // Function to simulate deleting a letter
    const deleteLetter = () => {
      if (currentCharIndex >= 0) {
        messageElement.textContent = currentMessage.slice(0, currentCharIndex);
        currentCharIndex--;
        deletingTimer = setTimeout(deleteLetter, 50); // Adjust the deleting speed as desired
      } else {
        // Cycle to the next message after deleting is finished
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        clearTimeout(deletingTimer);
        typingTimer = setTimeout(typeLetter, 500); // Adjust the delay before typing the next message as desired
      }
    };

    // Initial delay before typing starts
    typingTimer = setTimeout(typeLetter, 500); // Adjust the initial delay before typing as desired

    // Cleanup function to clear the timers when the component unmounts or when currentMessageIndex changes
    return () => {
      clearTimeout(typingTimer);
      clearTimeout(deletingTimer);
    };
  }, [currentMessageIndex]);

  // Render the component JSX
  return (
    <div className="homepage">
      {/* Background image */}
      <div className="background" />
      <div className="content">
        {/* Logo container */}
        <div className="logo-container">
          {/* Rotating cubes */}
          <div ref={cubeRef} className="cube" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="logo"
          >
            {/* SVG logo paths */}
            <text x="15%" y="50%" className="logo-text-blue">
              Pixel
            </text>
            <text x="50%" y="50%" className="logo-text-yellow">
              Palate
            </text>
          </svg>
          <div ref={cubeRef} className="cube" />
        </div>
        {/* Window with typing message */}
        <div className="window">
          <div className="window-content">
            <div className="typing-message" ref={messageRef}>
              <p className="message-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component as the default export
export default HomePage;
