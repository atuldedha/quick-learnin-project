import React, { useState } from "react";
import "./Contact.css";
import ContactImage from "../../images/contactUs.jpg";
import Phone from "../../images/phoneWhite.png";
import Mail from "../../images/mailWhite.png";
import emailjs from "@emailjs/browser";

const Contact = ({ innerRef }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [isMailSend, setIsMailSend] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData?.firstName &&
      !formData?.email &&
      !formData?.message &&
      !formData?.phoneNumber
    ) {
      return;
    }

    const templateParams = {
      subject: `New Query from ${formData?.firstName}`,
      name: formData?.firstName + formData?.lastName,
      email: formData?.email,
      phoneNumber: formData?.phoneNumber,
      message: formData?.message,
    };

    emailjs
      .send(
        "service_mpkrzin",
        "template_33rlgxi",
        templateParams,
        "nl7Y-oltcKO5AYPUR"
      )
      .then((response) => {
        setIsMailSend(true);
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
        setIsMailSend(false);
      });
  };

  return (
    <div className="contact_container" ref={innerRef}>
      <img src={ContactImage} alt="contact" className="contact_image" />
      {!isMailSend ? (
        <div className="contact_form_container">
          <span className="contact_text">
            Get in touch, We’d Love To Hear From You!
          </span>
          <div className="contact_phone_container">
            <img src={Phone} alt="phone" className="contact_phone image" />
            <div className="contact_phone_inner">
              <span className="contact_phone_inner_heading">Contact Us</span>
              <span className="contact_phone_inner_subheading">
                +1 410-914-7131
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
                name="firstName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="form_input"
                name="phoneNumber"
                onChange={handleChange}
              />
            </div>
            <div className="contact_value_container">
              <input
                type="text"
                placeholder="Last Name"
                className="form_input"
                name="lastName"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Johndoe@example.com"
                className="form_input"
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <textarea
            type="text"
            rows={4}
            name="message"
            onChange={handleChange}
            className="form_text_area"
            placeholder="Type your message here"
          />

          <button className="contact_button" onClick={handleSubmit}>
            Submit Now
          </button>
        </div>
      ) : (
        <span className="contact_text">
          Your Query has been Submitted Successfully
        </span>
      )}
    </div>
  );
};

export default Contact;
