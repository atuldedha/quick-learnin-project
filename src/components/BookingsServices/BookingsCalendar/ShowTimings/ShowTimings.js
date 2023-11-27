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
            {categorisedTimings[key].map((time, index) => (
              <button
                key={index}
                className="showTimings_button"
                onClick={() => handleTimingClick(time)}
              >
                {formatTime(time.fromTime)}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTimings;
