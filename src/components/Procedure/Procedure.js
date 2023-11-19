import React from "react";
import "./Procedure.css";
import Phone from "../../images/phoneRing.png";
import ProcedureOption from "./ProcedureOptions/ProcedureOption";

const Procedure = () => {
  return (
    <div className="procedure_container">
      <img src={Phone} alt="phone" className="procedure_image" />
      <div className="procedure_text_container">
        <span className="procedure_title">How is Epicenter Different?</span>
        <ProcedureOption text="Epicenter provides access to self-care services where you live and work. We ensure the therapist matched to you has the right skills and experience to care for you." />
        <ProcedureOption text="When you choose us, your self-care appointment is only a few minutes/hours away with a provider you can trust to not cancel at the last minute." />
        <ProcedureOption text="The interest of our service providers is top of mind" />
      </div>
    </div>
  );
};

export default Procedure;
