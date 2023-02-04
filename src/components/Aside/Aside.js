import React from "react";

import "./aside.css";

const Aside = () => {
  return (
    <div className="aside-container">
      <h1>New</h1>
      <div className="aside-contents">
        <div className="aside-item">
          <h3>Hydrogen Vs Electric Cars</h3>
          <p>With Hydrogen-fueled cars ever catch up to Evs?</p>
        </div>
        <div className="aside-item">
          <h3>The Downside of Ai Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation
          </p>
        </div>
        <div className="aside-item">
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aside;
