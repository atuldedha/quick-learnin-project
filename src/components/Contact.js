import React from "react";
import "./Contact.css";
import ContactImage from "../images/contactUs.jpg";
import Phone from "../images/phoneWhite.png";
import Mail from "../images/mailWhite.png";

const Contact = () => {
  return (
    <div className="contact_container">
      <img src={ContactImage} alt="contact" className="contact_image" />
      <div className="contact_form_container">
        <span className="contact_text">
          Get in touch, We’d Love To Hear From You!
        </span>
        <div className="contact_phone_container">
          <img src={Phone} alt="phone" className="contact_phone image" />
          <div className="contact_phone_inner">
            <span className="contact_phone_inner_heading">Contact Us</span>
            <span className="contact_phone_inner_subheading">
              +91 42435 34356
            </span>
          </div>
        </div>
        <div className="contact_phone_container">
          <img src={Mail} alt="phone" className="contact_phone image" />
          <div className="contact_phone_inner">
            <span className="contact_phone_inner_heading">Mail Us</span>
            <span className="contact_phone_inner_subheading">
              Raven@epicenterwellness.co
            </span>
          </div>
        </div>
        <div className="form_input_container">
          <div className="contact_value_container">
            <input
              type="text"
              placeholder="First Name"
              className="form_input"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="form_input"
            />
          </div>
          <div className="contact_value_container">
            <input type="text" placeholder="Last Name" className="form_input" />
            <input
              type="text"
              placeholder="Johndoe@example.com"
              className="form_input"
            />
          </div>
        </div>
        <textarea
          type="text"
          rows={4}
          className="form_text_area"
          placeholder="Type your message here"
        />

        <button className="contact_button">Submit Now</button>
      </div>
    </div>
  );
};

export default Contact;
