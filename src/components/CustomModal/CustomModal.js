import React, { useEffect, useRef } from "react";
import "./CustomModal.css";

const CustomModal = ({ show, onHide, centered = false, children }) => {
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onHide();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onHide]);

  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [show]);

  return (
    <div
      className={`${
        show
          ? `customModal_container ${
              centered ? "customModal_container_center" : ""
            }`
          : "customModal_hide"
      } `}
    >
      <div
        ref={ref}
        className={` ${
          show
            ? "customModal_show_values_container"
            : "customModal_hide_values_container"
        } customModal_transition`}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
