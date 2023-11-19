import React from "react";
import "./EpicenterWorks.css";
import EpicenterWorks1 from "../../images/works1.png";
import EpicenterWorks2 from "../../images/works2.png";
import EpicenterWorks3 from "../../images/works3.png";
import CircularImage from "../CircularImage/CircularImage";

const EpicenterWroks = () => {
  return (
    <div className="epicenter_works_container">
      <span className="epicenter_works_title">
        How Epicenter Works for Clients
      </span>
      <div className="epicenter_works_flow">
        <CircularImage
          image={EpicenterWorks1}
          index={1}
          text="Book a massage, facial or wax appointment."
        />
        <CircularImage
          image={EpicenterWorks2}
          index={2}
          text="Arrive at an Epicenter location near you."
        />
        <CircularImage
          image={EpicenterWorks3}
          index={3}
          text="Rate your experience and/or leave a tip."
        />
      </div>

      <div className="epicenter_works_left_dot" />
      <div className="epicenter_works_divider" />
      <div className="epicenter_works_right_dot" />
    </div>
  );
};

export default EpicenterWroks;
