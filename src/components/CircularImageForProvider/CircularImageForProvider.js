import React from "react";
import "./CircularImageForProvider.css";

const CircularImageForProvider = ({ image, index, text, isFourthChild }) => {
  return (
    <div
      className={`${
        isFourthChild ? "circular_image_provider_fourth_child_wrapper" : ""
      } circular_image_provider_container`}
    >
      <div className="circular_image_provider_wrap">
        <img className="circular_image_provider_icon" src={image} alt="icon" />
        <span className="circular_image_provider_number">{index}</span>
      </div>

      <span className="circular_image_provider_text">{text}</span>
    </div>
  );
};

export default CircularImageForProvider;
