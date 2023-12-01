import React, { useEffect, useState } from "react";
import "./Bookings.css";
import BookingTabs from "../../components/BookingTabs/BookingTabs";
import Services from "../../components/BookingsServices/ServicesComponent/Services";
import BookingsTechnicians from "../../components/BookingsServices/BookingsTechnicians/BookingsTechnicians";
import BookingsCalendar from "../../components/BookingsServices/BookingsCalendar/BookingsCalendar";
import BookingSubmit from "../../components/BookingsServices/BookingSubmit/BookingSubmit";
import axios from "axios";
import { getURLs } from "../../utils/urlConfig";
import BookingsHeader from "../../components/BookingsServices/BookingsHeader/BookingsHeader";
import { formatDate } from "../../utils/utilities";
import AutoCloseModal from "../../components/AutoCloseModal/AutoCloseModal";

const Bookings = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const [showServicesWithPrice, setShowServicesWithPrice] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedCardService, setSelectedCardService] = useState({});
  const [selectedServices, setSelectedServices] = useState({});
  const [selectedTechnician, setSelectedTechnician] = useState({});
  const [selectedTiming, setSelectedTiming] = useState();

  // all technicians state
  const [allTechnicians, setAllTechnicians] = useState([]);
  const [bookedTimings, setBookedTimings] = useState([]);
  const [serviceTime, setServiceTime] = useState("");

  // show popup state
  const [showNoAppointmentPopup, setShowNoAppointmentPopup] = useState(false);

  const resetData = () => {
    setSelectedServices({});
    setSelectedCard({});
    setSelectedCardService({});
    setSelectedTechnician({});
    setSelectedTiming("");
  };

  const addTechnicianToService = (technician) => {
    setBookedTimings((prev) => {
      const updatedBookedTimings = { ...prev };

      // Check if the technician._id already exists in the state
      if (technician && technician._id) {
        const technicianId = technician._id;

        // If the technician._id exists, update the bookedTimings array
        if (!updatedBookedTimings[technicianId]) {
          // If the technician._id doesn't exist, create a new entry
          updatedBookedTimings[technicianId] = {
            bookedTimings: technician.bookedTimings,
          };
        }
      }

      return updatedBookedTimings;
    });

    setSelectedServices((prevSelectedServices) => {
      const updatedServices = { ...prevSelectedServices };

      // Check if selectedCard.keyName exists
      if (selectedCard?.keyName && updatedServices[selectedCard.keyName]) {
        // Check if selectedService.keyName exists
        if (
          selectedCardService?.keyName &&
          updatedServices[selectedCard.keyName][selectedCardService.keyName]
        ) {
          // Update technicianSelected for the specific service
          updatedServices[selectedCard.keyName][
            selectedCardService.keyName
          ].technicianSelected = {
            ...technician,
          };
        }
      }

      return updatedServices;
    });
  };

  const addTimingToService = (timing, date) => {
    const formattedDate = formatDate(date);

    const fromTime = new Date(`${formattedDate}T${timing.fromTime}`);
    const toTime = new Date(`${formattedDate}T${timing.toTime}`);

    const formattedDateObj = {
      fromTime: fromTime,
      toTime: toTime,
    };

    setBookedTimings((prev) => {
      const updatedBookedTimings = { ...prev };

      const technicianId = selectedTechnician._id;

      updatedBookedTimings[technicianId] = {
        ...updatedBookedTimings[technicianId],
        bookedTimings: [
          ...updatedBookedTimings[technicianId].bookedTimings,
          formattedDateObj,
        ],
      };

      return updatedBookedTimings;
    });
    const updatedServices = { ...selectedServices };

    updatedServices[selectedCard?.keyName][
      selectedCardService?.keyName
    ].dateAndTime = {
      time: timing,
      date,
    };

    setSelectedServices(updatedServices);
  };

  useEffect(() => {
    axios
      .get(getURLs("get-all-technicians"), {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setAllTechnicians(res?.data?.technicians);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bookings_container">
      {/* header */}
      <BookingsHeader />

      {/* card */}
      <div className="bookings_card_container">
        <BookingTabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        {selectedTab === 1 && (
          <Services
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            setSelectedTab={setSelectedTab}
            setShowServicesWithPrice={setShowServicesWithPrice}
            showServicesWithPrice={showServicesWithPrice}
            setServiceTime={setServiceTime}
            setSelectedCardService={setSelectedCardService}
            setShowNoAppointmentPopup={setShowNoAppointmentPopup}
          />
        )}
        {selectedTab === 2 && (
          <BookingsTechnicians
            setSelectedTechnician={setSelectedTechnician}
            setSelectedTab={setSelectedTab}
            addTechnicianToService={addTechnicianToService}
            setShowServicesWithPrice={setShowServicesWithPrice}
            allTechnicians={allTechnicians}
            selectedCard={selectedCard}
            selectedCardService={selectedCardService}
            setSelectedCardService={setSelectedCardService}
            setSelectedServices={setSelectedServices}
          />
        )}

        {selectedTab === 3 && (
          <BookingsCalendar
            setSelectedTiming={setSelectedTiming}
            selectedTechnician={selectedTechnician}
            setSelectedTab={setSelectedTab}
            addTimingToService={addTimingToService}
            serviceTime={serviceTime}
            bookedTimings={bookedTimings}
            setBookedTimings={setBookedTimings}
          />
        )}

        {selectedTab === 4 && (
          <BookingSubmit
            selectedServices={selectedServices}
            selectedTechnician={selectedTechnician}
            selectedTiming={selectedTiming}
            setSelectedTab={setSelectedTab}
            setShowServicesWithPrice={setShowServicesWithPrice}
            setSelectedServices={setSelectedServices}
            bookedTimings={bookedTimings}
            setBookedTimings={setBookedTimings}
            resetData={resetData}
          />
        )}
      </div>

      <AutoCloseModal
        openState={showNoAppointmentPopup}
        setOpenState={setShowNoAppointmentPopup}
        message={"We are not taking appoints for Facials right now"}
      />
    </div>
  );
};

export default Bookings;
