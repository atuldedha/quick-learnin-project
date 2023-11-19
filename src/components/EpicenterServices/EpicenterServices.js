import React from "react";
import "./EpicenterServices.css";
import Service from "../../images/service.png";
import EpicenterServiceOption from "./EpicenterServiceOption/EpicenterServiceOption";
import Service1 from "../../images/service1.png";
import Service2 from "../../images/service2.png";
import Service3 from "../../images/service3.png";

const EpicenterServices = () => {
  return (
    <div className="epicenter_services_container">
      <img src={Service} alt="service" className="epicenter_service_image" />

      <div className="epicenter_service_description_container">
        <span className="epicenter_services_heading">Epicenter Services</span>
        <EpicenterServiceOption
          icon={Service1}
          title="Massage Therapy"
          description="For stress and anxiety, pain relief, fatigue, athletic and injury recovery etc."
        />
        <EpicenterServiceOption
          icon={Service2}
          title="Facial"
          description="For acne, dark spots, clogged pores, anti-aging, dry and oily skin etc."
        />
        <EpicenterServiceOption
          icon={Service3}
          title="Wax"
          description="For shaving rash, dry skin, strawberry skin, ingrown hair, coarse hair regrowth, dead skin cell etc."
        />
      </div>
    </div>
  );
};

export default EpicenterServices;
