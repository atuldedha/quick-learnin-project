import React from "react";
import BookingsHeader from "../../components/BookingsServices/BookingsHeader/BookingsHeader";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import "./BookingsConfirmation.css";

const BookingsConfirmation = () => {
  return (
    <div className="bookingsConfirmation_container">
      <BookingsHeader />

      <span className="bookingsConfirmation_success_text">
        <CheckCircleIcon className="bookingsConfirmation_check_icon" /> We have
        received you booking request. You will receive a confirmation email from
        our side. For any query please Contact Us.
      </span>
      <br />
      <br />
      <span className="bookingsConfirmation_bold_text">Thanks</span>
    </div>
  );
};

export default BookingsConfirmation;
