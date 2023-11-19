import React from "react";

const BookingsUserInfo = ({ formData, handleChange }) => {
  return (
    <div className="bookingsSubmit_left_container">
      <input
        value={formData?.number}
        typeof="text"
        className="bookingsSubmit_input"
        placeholder="Enter Number"
        name="number"
        onChange={handleChange}
      />
      <input
        value={formData?.email}
        type="email"
        className="bookingsSubmit_input"
        placeholder="Enter Email"
        name="email"
        onChange={handleChange}
      />
      <input
        value={formData?.name}
        type="text"
        className="bookingsSubmit_input"
        placeholder="Enter Name"
        name="name"
        onChange={handleChange}
      />
    </div>
  );
};

export default BookingsUserInfo;
