import React from "react";
import "./BookingsHeader.css";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";
// import { useWindowSize } from "../../../utils/WindowResizeHook";

const BookingsHeader = () => {
  // const [width] = useWindowSize();
  return (
    <div className="bookings_header_container">
      <Link to={`/`} className="left_section no-underline">
        <img src={Logo} alt="logo" className="logo_image" />
        <span className="title">EPICENTER WELLNESS</span>
      </Link>

      <div className="bookings_header_text_container">
        <p className="bookings_header_address_text">
          202 Albemarle St, Baltimore, MD 21202, United States
        </p>
        <span className="bookings_header_phone_text">+1 410-914-7131</span>
      </div>
    </div>
  );
};

export default BookingsHeader;
