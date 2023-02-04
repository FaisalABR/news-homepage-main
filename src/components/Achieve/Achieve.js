import React from "react";

import picOne from "../../assets/images/image-retro-pcs.jpg";
import picTwo from "../../assets/images/image-top-laptops.jpg";
import picThree from "../../assets/images/image-gaming-growth.jpg";

import "./achieve.css";

const Achieve = () => {
  return (
    <div className="achieve-container">
      <div className="achieve-item">
        <img src={picOne} alt="retro pcs" />
        <div className="item-content">
          <h3>01</h3>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="achieve-item">
        <img src={picTwo} alt="retro pcs" />
        <div className="item-content">
          <h3>02</h3>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets</p>
        </div>
      </div>
      <div className="achieve-item">
        <img src={picThree} alt="retro pcs" />
        <div className="item-content">
          <h3>03</h3>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities</p>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
