import React from "react";

import hero from "../../assets/images/image-web-3-desktop.jpg";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={hero} alt="hero" />
      </div>
      <div className="hero-content">
        <div className="title">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="content-text">
          <p>
            We dive into the next evolution of the web that claim to put the
            power platforms back into the hands of the people. But is it really
            fullfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
