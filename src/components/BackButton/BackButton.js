import React from "react";
import "./BackButton.css";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const BackButton = ({ handleBackClick }) => {
  return (
    <div className="backButton_container" onClick={handleBackClick}>
      <ArrowLeftIcon className="backButton_left_icon" />
      <span className="backButton_text">Back</span>
    </div>
  );
};

export default BackButton;
