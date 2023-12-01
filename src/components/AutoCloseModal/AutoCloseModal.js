import React, { useEffect } from "react";
import "./AutoCloseModal.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

const AutoCloseModal = ({ openState, setOpenState, message }) => {
  useEffect(() => {
    let timeoutId;

    if (openState) {
      // Automatically close the modal after 1 second
      timeoutId = setTimeout(() => {
        setOpenState(false);
      }, 1000);
    }

    return () => {
      // Clear timeout on component unmount or when openState changes
      clearTimeout(timeoutId);
    };
  }, [openState, setOpenState]);

  const closeModal = () => {
    setOpenState(false);
  };

  return (
    openState && (
      <div className={`modal-overlay ${openState ? "visible" : ""}`}>
        <div className="modal-container">
          <div className="modal-close-icon-container">
            <XMarkIcon className="modal-close-icon" onClick={closeModal} />
          </div>
          <div className="modal-content">
            <p>{message}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default AutoCloseModal;
