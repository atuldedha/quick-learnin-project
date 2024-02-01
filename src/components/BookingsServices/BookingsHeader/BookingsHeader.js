import React from "react";
import "./BookingsHeader.css";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";
import { useWindowSize } from "../../../utils/WindowResizeHook";

const BookingsHeader = () => {
  const [width] = useWindowSize();
  return (
    <div className="bookings_header_container">
      <Link to="/" className="no-underline">
        <div className="bookings_header_logo_container">
          <img src={Logo} alt="logo" className="bookings_header_logo" />
          {width < parseFloat(768) && (
            <h1 className="hidden-lg bookings_header_logo_text">
              Epicenter Wellness
            </h1>
          )}
        </div>
      </Link>

      <div className="bookings_header_text_container">
        {width > parseFloat(768) && (
          <Link to="/" className="no-underline hidden-md">
            <h1 className="bookings_header_logo_text">Epicenter Wellness</h1>
          </Link>
        )}
        <p className="bookings_header_address_text">
          202 Albemarle St, Baltimore, MD 21202, United States
        </p>
        <span className="bookings_header_phone_text">+1 410-914-7131</span>
      </div>
    </div>
  );
};

export default BookingsHeader;
