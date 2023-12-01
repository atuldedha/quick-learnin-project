import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { formatTime } from "../../../../utils/utilities";

const BookingsInformation = ({
  selectedServices,
  handleDelete,
  openNoteModal,
}) => {
  return Object.keys(selectedServices)?.map((key) =>
    Object.keys(selectedServices[key])?.map((data, index) => (
      <div className="bookingsSubmit_appointment_container" key={data}>
        <div>
          <h4 className="bookingsSubmit_heading">
            Appointment Date:{" "}
            {new Date(
              selectedServices[key][data]?.dateAndTime?.date
            ).toLocaleDateString()}{" "}
          </h4>

          <div className="bookingsSubmit_appointment_info_container">
            {selectedServices[key][data]?.technicianSelected?.profileImage ? (
              <img
                src={""}
                alt="technician_thumbnail"
                className="bookingsSubmit_icon"
              />
            ) : (
              <div className="bookingsSubmit_icon_text">
                {selectedServices[key][data]?.technicianSelected?.name?.charAt(
                  0
                )}
              </div>
            )}
            <div className="bookingsSubmit_appointment_info_text">
              <h5 className="bookingsSubmit_technician_name">
                {selectedServices[key][data]?.technicianSelected?.name}
              </h5>
              <p className="bookingsSubmit_service__name_text">
                {selectedServices[key][data]?.selectedService?.name}
              </p>
              <p className="bookingsSubmit_time_text">
                {formatTime(
                  selectedServices[key][data]?.dateAndTime?.time?.fromTime
                )}{" "}
                -{" "}
                {formatTime(
                  selectedServices[key][data]?.dateAndTime?.time?.toTime
                )}
              </p>
              <p className="bookingsSubmit_note_text">
                Note: {selectedServices[key][data]?.note}
              </p>
              <button
                className="bookingsSubmit_add_note_button"
                onClick={() => openNoteModal(key, data)}
              >
                <PencilIcon className="bookingsSubmit_add_note_icon" />
                Add Note
              </button>
            </div>
          </div>
        </div>

        <TrashIcon
          className="bookingsSubmit_deleteIcon"
          onClick={() => handleDelete(key, data, index)}
        />
      </div>
    ))
  );
};

export default BookingsInformation;
