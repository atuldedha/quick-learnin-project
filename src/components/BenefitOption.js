import React from "react";
import "./BenefitOption.css";

const BenefitOption = ({ image, text }) => {
  return (
    <div className="benefit_option_container">
      <div className="benefit_option_image_container">
        {image ? (
          <img src={image} alt="" className="benefit_option_image" />
        ) : null}
      </div>

      <span className="benefit_option_text">{text}</span>
    </div>
  );
};

export default BenefitOption;
