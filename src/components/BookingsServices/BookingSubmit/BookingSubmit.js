import React, { useState } from "react";
import "./BookingSubmit.css";
import BookingsUserInfo from "./BookingsUserInfo/BookingsUserInfo";
import BookingsInformation from "./BookingInformation/BookingsInformation";
import CustomModal from "../../CustomModal/CustomModal";
import { XCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { getURLs } from "../../../utils/urlConfig";
import emailjs from "@emailjs/browser";
import { generateAppointmentMessages } from "../../../utils/utilities";
import { useNavigate } from "react-router-dom";

const BookingSubmit = ({
  selectedServices,
  setSelectedTab,
  setShowServicesWithPrice,
  setSelectedServices,
  bookedTimings,
  resetData,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    number: "",
    email: "",
    name: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [editObj, setEditObj] = useState({});
  const [note, setNote] = useState("");

  const [error, setError] = useState({ show: false, message: "" });

  const [disableButton, setDisableButton] = useState(false);

  const addNoteHandler = () => {
    setSelectedServices((prevSelectedServices) => {
      return {
        ...prevSelectedServices,
        [editObj?.parentKey]: {
          ...prevSelectedServices[editObj?.parentKey],
          [editObj?.targetKey]: {
            ...prevSelectedServices[editObj?.parentKey][editObj?.targetKey],
            note: note,
          },
        },
      };
    });

    closeModal();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openNoteModal = (parentKey, targetKey) => {
    setEditObj({ parentKey, targetKey });
    setOpenModal(true);
  };

  const addClickHanlder = () => {
    setSelectedTab(1);
    setShowServicesWithPrice(false);
  };

  const closeModal = () => {
    setNote("");
    setEditObj({});
    setOpenModal(false);
  };

  const handleServiceDelete = (parentKey, keyToDelete) => {
    const updatedSelectedServices = { ...selectedServices };

    // Check if the parent key exists in the object
    if (updatedSelectedServices[parentKey]) {
      // Delete the specified key from the parent object
      delete updatedSelectedServices[parentKey][keyToDelete];
    }

    // Update the state with the modified object
    setSelectedServices(updatedSelectedServices);
  };

  const validateFormData = () => {
    // number validation
    const phoneNumberRegex = /^(\+\d{1,4})?(\d{10})$/;
    const isPhoneNumberValid = phoneNumberRegex.test(formData.number);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email);

    // Name validation (non-empty)
    const isNameValid = formData.name.trim() !== "";

    // validation status
    return {
      isValid: isPhoneNumberValid && isEmailValid && isNameValid,
      errors: {
        phoneNumber: isPhoneNumberValid ? "" : "Invalid phone number",
        email: isEmailValid ? "" : "Invalid email address",
        name: isNameValid ? "" : "Name cannot be empty",
      },
    };
  };

  const sendConfirmationToClient = () => {
    const templateParams = {
      to_email: formData?.email,
      name: formData?.name,
    };

    emailjs
      .send(
        "service_mpkrzin",
        "template_rb239xt",
        templateParams,
        "nl7Y-oltcKO5AYPUR"
      )
      .then((response) => {})
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });
  };
  const sendConfirmationToEpicenter = () => {
    const templateParams = {
      subject: `New Booking from ${formData?.name}`,
      name: formData.name,
      email: formData?.email,
      phoneNumber: formData?.number,
      message: generateAppointmentMessages(selectedServices),
    };
    emailjs
      .send(
        "service_mpkrzin",
        "template_33rlgxi",
        templateParams,
        "nl7Y-oltcKO5AYPUR"
      )
      .then((response) => {
        if (response?.status === 200) {
          resetData();
          setDisableButton(false);
          navigate(`/booking-confirmation`, { replace: true });
        }
      })
      .catch((error) => {
        setDisableButton(false);
        console.error("Email could not be sent:", error);
      });
  };

  const handleBooking = () => {
    setDisableButton(true);
    const { isValid, errors } = validateFormData();
    if (isValid) {
      axios
        .post(
          getURLs("book-technician"),
          { bookedTimings },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          sendConfirmationToClient();
          sendConfirmationToEpicenter();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError({ show: true, message: errors });
      setDisableButton(false);
    }
  };

  return (
    <>
      <div className="bookingsSubmit_container">
        {/* left */}
        <h4 className="bookingsSubmit_heading">Tell us about yourself</h4>
        <div className="bookingsSubmit_cards_container">
          <BookingsUserInfo
            formData={formData}
            handleChange={handleInputChange}
            error={error}
          />

          {/* right */}
          <div className="bookingsSubmit_right_container">
            <h4 className="bookingsSubmit_heading">Your Appointment Details</h4>
            <div className="divider" />
            <BookingsInformation
              selectedServices={selectedServices}
              handleDelete={handleServiceDelete}
              openNoteModal={openNoteModal}
            />

            {/* buttons */}
            <div className="bookingsSubmit_buttons_container">
              <button
                className="bookingsSubmit_add_more_button"
                onClick={addClickHanlder}
                disabled={disableButton}
              >
                Add More Services
              </button>
              <button
                className="bookingsSubmit_book_button"
                onClick={handleBooking}
                disabled={disableButton}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomModal onHide={closeModal} show={openModal} centered>
        <XCircleIcon
          className="bookingsSubmit_close_icon"
          onClick={closeModal}
        />

        <textarea
          rows={4}
          className="bookingsSubmit_modal_input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Add a Note"
        />
        <button
          className="bookingsSubmit_add_more_button"
          onClick={addNoteHandler}
        >
          Add
        </button>
      </CustomModal>
    </>
  );
};

export default BookingSubmit;
