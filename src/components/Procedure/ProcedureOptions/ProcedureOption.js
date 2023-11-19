import React from "react";
import "./ProcedureOption.css";
import Check from "../../../images/whiteCheck.png";

const ProcedureOption = ({ text }) => {
  return (
    <div className="procedure_option_container">
      <div className="procedure_option_image_container">
        <img src={Check} alt="icon" className="procedure_option_image" />
      </div>

      <span className="procedure_option_text">{text}</span>
    </div>
  );
};

export default ProcedureOption;
