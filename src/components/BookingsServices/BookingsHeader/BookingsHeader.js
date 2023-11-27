import React from "react";
import "./BookingsHeader.css";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";

const BookingsHeader = () => {
  return (
    <div className="bookings_header_container">
      <div className="bookings_header_logo_container">
        <Link to="/">
          <img src={Logo} alt="logo" className="bookings_header_logo" />
        </Link>
      </div>

      <div className="bookings_header_text_container">
        <Link to="/" className="no-underline">
          <h1 className="bookings_header_logo_text">Epicenter Wellness</h1>
        </Link>
        <p className="bookings_header_address_text">
          202 Albemarle St, Baltimore, MD 21202, United States
        </p>
        <span className="bookings_header_phone_text">+1 410-914-7131</span>
      </div>
    </div>
  );
};

export default BookingsHeader;
