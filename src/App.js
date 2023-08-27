// Import necessary modules and components
import React from "react";
import "./App.css";

import Navbar from "./components/nav/Navbar";
import HomePage from "./components/home/HomePage";
import About from "./components/about/About";
import Experiences from "./components/Experiences/Experiences";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Perlin from "./components/Sub/Perlin";

const App = () => {
  return (
    <div className="App">
      {/* Render the Navbar component */}
      <Navbar />
      {/* 
        Render other components in the specified order to build the app structure.
        Add necessary comments to describe what each component represents.
      */}
      <HomePage /> {/* Home page */}
      <About /> {/* About page */}
      <Experiences />
      <Portfolio /> {/* Experiences or timeline section */}
      <Services />
      <Perlin/>
      <Contact />
 {/* Footer will appear on all pages except the last one */}
      <Footer />
    </div>
  );
};

export default App;
