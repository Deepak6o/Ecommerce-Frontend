import React from "react";
import "./DiscriptionBox.css";

const DiscriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our vibrant and trendy online clothing emporium! We invite
          you to embark on a fashion-forward journey through our meticulously
          curated e-commerce platform, where style meets convenience at your
          fingertips. 
        </p>
        <p>
          At the heart of our e-commerce platform lies a commitment to not just
          offering clothing but curating an experience. To aid in your
          decision-making, we provide detailed product descriptions, sizing
          guides, and vibrant imagery that vividly showcase each garment's
          unique features and fit.
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
