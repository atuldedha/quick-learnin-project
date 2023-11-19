import React from "react";
import "./Sidebar.css";
import Cross from "../../images/cross.png";
import { Link } from "react-router-dom";

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
        <Link to="/appointment-booking" className="no-underline">
          <span className="sidebar_item" onClick={toggleSidebar}>
            Massage
          </span>
        </Link>
        <Link to="/appointment-booking" className="no-underline">
          <span className="sidebar_item" onClick={toggleSidebar}>
            Facial
          </span>
        </Link>
        <Link to="/appointment-booking" className="no-underline">
          <span className="sidebar_item" onClick={toggleSidebar}>
            Wax
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
