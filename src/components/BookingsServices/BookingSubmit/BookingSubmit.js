import React, { useState } from "react";
import "./BookingSubmit.css";
import BookingsUserInfo from "./BookingsUserInfo/BookingsUserInfo";
import BookingsInformation from "./BookingInformation/BookingsInformation";
import CustomModal from "../../CustomModal/CustomModal";
import { XCircleIcon } from "@heroicons/react/24/outline";

const BookingSubmit = ({
  selectedServices,
  setSelectedTab,
  setShowServicesWithPrice,
  setSelectedServices,
}) => {
  console.log(selectedServices);
  const [formData, setFormData] = useState({
    number: "",
    email: "",
    name: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [editObj, setEditObj] = useState({});
  const [note, setNote] = useState("");

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

    closeNodal();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("services: -> ", selectedServices);

  const openNoteModal = (parentKey, targetKey) => {
    setEditObj({ parentKey, targetKey });
    setOpenModal(true);
  };

  const addClickHanlder = () => {
    setSelectedTab(1);
    setShowServicesWithPrice(false);
  };

  const closeNodal = () => {
    setNote("");
    setEditObj({});
    setOpenModal(false);
  };

  const handleServiceDelete = (parentKey, keyToDelete) => {
    // Create a copy of the selectedServices object
    const updatedSelectedServices = { ...selectedServices };

    // Check if the parent key exists in the object
    if (updatedSelectedServices[parentKey]) {
      // Delete the specified key from the parent object
      delete updatedSelectedServices[parentKey][keyToDelete];
    }

    // Update the state with the modified object
    setSelectedServices(updatedSelectedServices);
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
              >
                Add More Services
              </button>
              <button className="bookingsSubmit_book_button">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <CustomModal onHide={closeNodal} show={openModal} centered>
        <XCircleIcon
          className="bookingsSubmit_close_icon"
          onClick={closeNodal}
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
