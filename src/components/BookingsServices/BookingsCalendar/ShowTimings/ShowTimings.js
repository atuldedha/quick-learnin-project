import React from "react";
import "./ShowTimings.css";
import { categorizeTimings, formatTime } from "../../../../utils/utilities";

const ShowTimings = ({ results, handleTimeSelection }) => {
  const handleTimingClick = (timing) => {
    handleTimeSelection(timing);
  };

  const categorisedTimings = categorizeTimings([
    { fromTime: "2023-11-05T08:00:00" }, // Morning
    { fromTime: "2023-11-05T14:00:00" }, // Afternoon
    { fromTime: "2023-11-05T20:00:00" }, // Evening
  ]);

  return (
    <div className="showTimings_container">
      {Object.keys(categorisedTimings)?.map((key) => (
        <div key={key}>
          <h4 className="showTimings_heading">{key}</h4>
          {categorisedTimings[key].map((time, index) => (
            <div className="showTimings_button_container" key={index}>
              <button
                key={index}
                className="showTimings_button"
                onClick={() => handleTimingClick(time)}
              >
                {formatTime(new Date(time.fromTime))}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShowTimings;
