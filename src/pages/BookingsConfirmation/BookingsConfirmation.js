import React from "react";
import BookingsHeader from "../../components/BookingsServices/BookingsHeader/BookingsHeader";
import "./BookingsConfirmation.css";
import { useLocation } from "react-router-dom";

const BookingsConfirmation = () => {
  const { state } = useLocation();
  return (
    <div className="bookingsConfirmation_container">
      <BookingsHeader />

      <span className="bookingsConfirmation_success_text">
        {state}
        <br />
      </span>
      <span className="bookingsConfirmation_text">
        Epicenter Wellness,
        <span
          className="bookingsConfirmation_bold_text"
          style={{ fontWeight: 700, color: "#000000" }}
        >
          {" "}
          Here to care for you
        </span>
      </span>
    </div>
  );
};

export default BookingsConfirmation;
