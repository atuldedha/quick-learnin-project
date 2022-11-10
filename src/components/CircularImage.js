import React from "react";
import "./CircularImage.css";

const CircularImage = ({ image, index, text }) => {
  return (
    <div className="circular_image_container">
      <div className="circular_image_wrap">
        <img className="circular_image_icon" src={image} alt="icon" />
        <span className="circular_image_number">{index}</span>
      </div>

      <span className="circular_image_text">{text}</span>
    </div>
  );
};

export default CircularImage;
