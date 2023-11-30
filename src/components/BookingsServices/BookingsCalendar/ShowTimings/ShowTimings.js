import React, { useEffect, useState } from "react";
import "./ShowTimings.css";
import { categorizeTimings, formatTime } from "../../../../utils/utilities";

const ShowTimings = ({
  results,
  handleTimeSelection,
  serviceTime,
  dateValue,
  bookedSlots,
}) => {
  const handleTimingClick = (timing) => {
    handleTimeSelection(timing);
  };

  const [categorisedTimings, setCategorisedTimings] = useState({});

  const currentDate = new Date().toISOString().split("T")[0];

  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentTime = new Date().toISOString();
  const selectedDateValue = new Date(dateValue);
  selectedDateValue.setHours(0, 0, 0, 0);

  useEffect(() => {
    setCategorisedTimings(
      categorizeTimings(serviceTime, dateValue.toDateString(), bookedSlots)
    );
  }, [dateValue, serviceTime, bookedSlots]);

  return (
    <div className="showTimings_container">
      {Object.keys(categorisedTimings)?.map((key) => (
        <div key={key}>
          <h4 className="showTimings_heading">{key}</h4>
          <div className="showTimings_timings_container">
            {categorisedTimings[key].map(
              (time, index) =>
                (selectedDateValue > today ||
                  (selectedDateValue.getTime() === today.getTime() &&
                    currentTime <
                      new Date(
                        `${currentDate}T${time.fromTime}`
                      ).toISOString())) && (
                  <button
                    key={index}
                    className="showTimings_button"
                    onClick={() => handleTimingClick(time)}
                  >
                    {formatTime(time.fromTime)} - {formatTime(time.toTime)}
                  </button>
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTimings;
