import React, { useEffect, useState } from "react";
import "./BookingsCalendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ShowTimings from "./ShowTimings/ShowTimings";
import BackButton from "../../BackButton/BackButton";

const BookingsCalendar = ({
  selectedTechnician,
  selectedService,
  setSelectedTab,
  setSelectedTiming,
  addTimingToService,
  serviceTime,
  bookedTimings,
}) => {
  const [value, onChange] = useState(new Date());
  const handleTimeSelection = (time) => {
    setSelectedTiming(time);
    addTimingToService(time, value);
    setSelectedTab(4);
  };

  useEffect(() => {
    // do an api call for selectedtech and service to find available timings for the technician
  }, []);

  const handleBackClick = () => {
    setSelectedTab(2);
  };

  return (
    <div>
      <BackButton handleBackClick={handleBackClick} />
      <Calendar
        onChange={onChange}
        value={value}
        className="bookingsCalendar_customCalendar"
      />

      {/* showTiming component */}
      <ShowTimings
        setSelectedTab={setSelectedTab}
        setSelectedTiming={setSelectedTiming}
        handleTimeSelection={handleTimeSelection}
        serviceTime={serviceTime}
        dateValue={value}
        bookedSlots={bookedTimings[selectedTechnician._id].bookedTimings}
      />
    </div>
  );
};

export default BookingsCalendar;
