import React, { useState } from "react";
import "./Header.css";
import LogoImage from "../images/logo.svg";
import { useWindowSize } from "../utils/WindowResizeHook";
import Menu from "../images/blackMenu.png";

const Header = ({ openSidebar, toggleSidebar }) => {
  const [selected, setSelected] = useState(1);

  const [width, height] = useWindowSize();
  return (
    <div className="container">
      <div className="left_section">
        <img src={LogoImage} alt="logo" className="logo_image" />
        <span className="title">EPICENTER WELLNESS</span>
        {width < parseFloat(1100) ? (
          <div className="left_menu_container">
            <img
              src={Menu}
              alt="menu"
              className="menu_image"
              onClick={toggleSidebar}
            />
          </div>
        ) : null}
      </div>
      <div className="middle_section">
        <div className="option_container">
          <span
            className={`${selected === 1 ? "option_selected" : ""} option`}
            onClick={() => setSelected(1)}
          >
            Massage
            {selected === 1 && <div className="selected" />}
          </span>
        </div>
        <div className="option_container">
          <span
            className={`${selected === 2 ? "option_selected" : ""} option`}
            onClick={() => setSelected(2)}
          >
            Facial
            {selected === 2 && <div className="selected" />}
          </span>
        </div>
        <div className="option_container">
          <span
            className={`${selected === 3 ? "option_selected" : ""} option`}
            onClick={() => setSelected(3)}
          >
            Wax
            {selected === 3 && <div className="selected" />}
          </span>
        </div>
      </div>
      <div className="right_section">
        <button className="right_button">Service Provider</button>
        <button className="right_button">Service Provider</button>
      </div>
    </div>
  );
};

export default Header;
