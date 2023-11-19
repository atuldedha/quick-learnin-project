import React from "react";
import "./Benefits.css";
import Option1 from "../../images/benefit1.png";
import Option2 from "../../images/benefit2.png";
import Option3 from "../../images/benefit3.png";
import BenefitOption from "../BenefitOptions/BenefitOption";

const Benefits = () => {
  return (
    <div className="benefits_container">
      <BenefitOption
        image={Option1}
        text="Service providers you can trust not to cancel at the last minute"
      />
      <BenefitOption
        image={Option2}
        text="Get matched with Self-Care service specialists"
      />
      <BenefitOption image={Option3} text="Same-day appointment" />
    </div>
  );
};

export default Benefits;
