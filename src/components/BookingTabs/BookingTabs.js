import React from "react";
import "./BookingTabs.css";

const tabs = [
  { id: 1, tabName: "Service" },
  { id: 2, tabName: "Technician" },
  { id: 3, tabName: "Time" },
  { id: 4, tabName: "client" },
];

const BookingTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="bookingTabs_container">
      {tabs?.map((tab) => (
        <div
          key={tab.id}
          className={`bookingTabs_tab ${
            selectedTab === tab.id ? "bookingTabs_selected_tab" : ""
          }`}
        >
          <span
            className={`bookingTabs_tab_text ${
              selectedTab === tab.id ? "bookingTabs_selected_tab_text" : ""
            }`}
          >
            {tab.tabName}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BookingTabs;
