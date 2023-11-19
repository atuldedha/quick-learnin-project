import React from "react";
import "./ServiceCard.css";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const ServiceCard = ({ service, handleCardClick, spanBg }) => {
  return (
    <div
      className="serviceCard_container"
      onClick={() => handleCardClick(service)}
    >
      {service?.image?.length > 0 ? (
        <div>
          <img
            src={service.image}
            alt="service_thumbnail"
            className="serviceCard_image"
          />
        </div>
      ) : (
        <UserCircleIcon className="serviceCard_icon" />
      )}
      <span
        className={`serviceCard_text ${spanBg ? "serviceCard_text_bg" : ""}`}
      >
        {service.name}
      </span>
    </div>
  );
};

export default ServiceCard;
