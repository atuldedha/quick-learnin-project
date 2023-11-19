import React, { useState } from "react";
import "./Header.css";
// import LogoImage from "../../images/logo.svg";
import LogoImage from "../../images/logo.png";
import { useWindowSize } from "../../utils/WindowResizeHook";
import Menu from "../../images/blackMenu.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ openSidebar, toggleSidebar, contactSectionRef }) => {
  const [selected, setSelected] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const [width, height] = useWindowSize();

  const handleRoute = () => {
    navigate("/service_provider");
  };

  const handleScroll = () => {
    contactSectionRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div className="container">
      <div className="left_section">
        <Link to={`/`} className="left_section no-underline">
          <img src={LogoImage} alt="logo" className="logo_image" />
          <span className="title">EPICENTER WELLNESS</span>
        </Link>
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
          <Link to="/appointment-booking" className="no-underline">
            <span
              className={` 
              option`}
              onClick={() => setSelected(1)}
            >
              Massage
              {/* {selected === 1 && <div className="selected" />} */}
            </span>
          </Link>
        </div>
        <div className="option_container">
          <Link to="/appointment-booking" className="no-underline">
            <span className={`option`} onClick={() => setSelected(2)}>
              Facial
              {/* {selected === 2 && <div className="selected" />} */}
            </span>
          </Link>
        </div>
        <div className="option_container">
          <Link to="/appointment-booking" className="no-underline">
            <span className={`option`} onClick={() => setSelected(3)}>
              Wax
              {/* {selected === 3 && <div className="selected" />} */}
            </span>
          </Link>
        </div>
      </div>
      <div className="right_section">
        <button className="right_button" onClick={handleRoute}>
          {location.pathname === "/service_provider"
            ? "Sign up"
            : "Service Provider"}
        </button>
        <button className="right_button" onClick={handleScroll}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
