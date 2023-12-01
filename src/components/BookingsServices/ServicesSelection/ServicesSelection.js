import React from "react";
import "./ServicesSelection.css";

const ServicesSelection = ({ servicesOffered, handleServiceClick }) => {
  return servicesOffered?.length === 0 ? (
    <span className="servicesSelection__no_service_text">
      No Services found for this type
    </span>
  ) : servicesOffered?.length < 8 ? (
    <div className="servicesSelection_container">
      {servicesOffered.map((data, index) => (
        <div
          key={index}
          className="servicesSelection_text_container"
          onClick={() => handleServiceClick(data)}
        >
          <span className="servicesSelection__text_name">{data.name}</span>
          <span className="servicesSelection_text_price">{`$${data.price} (${data.time})`}</span>
        </div>
      ))}
    </div>
  ) : (
    <div className="servicesSelection_row_container">
      <div className="servicesSelection_container">
        {servicesOffered?.slice(0, 9)?.map((data, index) => (
          <div
            key={index}
            className="servicesSelection_text_container"
            onClick={() => handleServiceClick(data)}
          >
            <span className="servicesSelection__text_name">{data.name}</span>
            <span className="servicesSelection_text_price">{`$${data.price} (${data.time})`}</span>
          </div>
        ))}
      </div>
      <div className="servicesSelection_container">
        {servicesOffered
          ?.slice(9, servicesOffered?.length)
          ?.map((data, index) => (
            <div
              key={index}
              className="servicesSelection_text_container"
              onClick={() => handleServiceClick(data)}
            >
              <span className="servicesSelection__text_name">{data.name}</span>
              <span className="servicesSelection_text_price">{`$${data.price} (${data.time})`}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesSelection;
