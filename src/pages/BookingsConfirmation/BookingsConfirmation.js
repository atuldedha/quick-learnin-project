import React from "react";
import BookingsHeader from "../../components/BookingsServices/BookingsHeader/BookingsHeader";
import "./BookingsConfirmation.css";

const BookingsConfirmation = () => {
  return (
    <div className="bookingsConfirmation_container">
      <BookingsHeader />

      <span className="bookingsConfirmation_success_text">
        Thank you for booking your service with Epicenter!. We will confirm your
        appointment via email
        <br />
      </span>
      <span className="bookingsConfirmation_bold_text">
        Epicenter Wellness, Here to care for you
        <br />
        Thanks
      </span>
    </div>
  );
};

export default BookingsConfirmation;
