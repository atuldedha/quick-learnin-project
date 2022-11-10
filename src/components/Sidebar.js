import React from "react";
import "./Sidebar.css";
import Cross from "../images/cross.png";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_image_container">
        <img
          src={Cross}
          alt="close"
          className="sidebar_image"
          onClick={toggleSidebar}
        />
      </div>
      <div className="sidebar_items_container">
        <span className="sidebar_item" onClick={toggleSidebar}>
          Massage
        </span>
        <span className="sidebar_item" onClick={toggleSidebar}>
          Facial
        </span>
        <span className="sidebar_item" onClick={toggleSidebar}>
          Wax
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
