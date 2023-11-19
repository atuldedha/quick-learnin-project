import React from "react";
import "./Footer.css";
import ArrowUp from "../../images/arrowUpWhite.png";
// import Logo from "../../images/logo.svg";
import Logo from "../../images/logo.png";
import PhoneIcon from "../../images/phoneBlack.png";
import LocationIcon from "../../images/locationBlack.png";
import MailIcon from "../../images/mailBlack.png";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import LinkedIn from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_arrow_container">
        <img src={ArrowUp} alt="up" className="footer_arrow" />
      </div>
      <div className="footer_wrapper">
        <Link to="/" className="no-underline">
          <div className="footer_title_container">
            <img src={Logo} alt="logo" className="footer_logo" />
            <div className="footer_text_container">
              <span className="footer_title">EPICENTER WELLNESS</span>
              <span className="footer_description">Here to care for you.</span>
            </div>
          </div>
        </Link>
        <div className="footer_links_container">
          <span className="footer_link_text">Links</span>
          <div className="footer_link_options">
            <span className="footer_link_option1">About Us</span>
            <span className="footer_link_option1 footer_link_option2">
              Contact Us
            </span>
          </div>
          <div className="footer_link_options">
            <span className="footer_link_option1">Help</span>
            <span className="footer_link_option1 footer_link_option2">
              DISCLAIMER
            </span>
          </div>
        </div>

        <div className="footer_links_container">
          <span className="footer_link_text">Contact Us</span>
          <div className="footer_link_options">
            <div className="footer_contact_option">
              <img src={PhoneIcon} alt="phone" className="footer_option_icon" />
              <span className="footer_option_text">+1 410-914-7131</span>
            </div>
            <div
              className="footer_contact_option"
              style={{ marginLeft: "29px" }}
            >
              <img
                src={LocationIcon}
                alt="location_icon"
                className="footer_option_icon"
              />
              <span className="footer_option_text">
                202 Albemarle St, Baltimore, MD 21202, United States
              </span>
            </div>
          </div>
          <div className="footer_contact_option">
            <img src={MailIcon} alt="phone" className="footer_option_icon" />
            <span className="footer_option_text">
              Raven@epicenterwellness.co
            </span>
          </div>
        </div>
      </div>

      <div className="footer_divider" />

      <div className="footer_bottom">
        <div className="footer_logo_container">
          <img src={Facebook} alt="icon" className="footer_social_logo" />
          <img src={Twitter} alt="icon" className="footer_social_logo" />
          <img src={LinkedIn} alt="icon" className="footer_social_logo" />
          <img src={Instagram} alt="icon" className="footer_social_logo" />
        </div>

        <span className="footer_copyright_text">
          Copyright © 2022 • EPICENTER
        </span>

        <span className="footer_copyright_text">Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
