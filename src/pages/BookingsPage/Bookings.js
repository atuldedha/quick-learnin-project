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

const Bookings = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const [showServicesWithPrice, setShowServicesWithPrice] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedCardService, setSelectedCardService] = useState({});
  const [selectedServices, setSelectedServices] = useState({});
  const [selectedTechnician, setSelectedTechnician] = useState({});
  const [selectedTiming, setSelectedTiming] = useState();
  const [allSelectedServices, setAllSelectedServices] = useState([]);

  // all technicians state
  const [allTechnicians, setAllTechnicians] = useState([]);
  const [bookedTimings, setBookedTimings] = useState([]);
  const [serviceTime, setServiceTime] = useState("");

  const resetData = () => {
    setSelectedServices({});
    setSelectedCard({});
    setSelectedCardService({});
    setSelectedTechnician({});
    setSelectedTiming("");
    setAllSelectedServices([]);
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

      for (const serviceName in updatedServices) {
        if (updatedServices.hasOwnProperty(serviceName)) {
          for (const key in updatedServices[serviceName]) {
            if (updatedServices[serviceName].hasOwnProperty(key)) {
              updatedServices[serviceName][key].technicianSelected = {
                ...technician,
              };
            }
          }
        }
      }

      return updatedServices;
    });
  };

  const addTimingToService = (timing, date) => {
    const formattedDate = date.toISOString().split("T")[0];

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

    updatedServices[selectedCard?.name][selectedCardService?.name].dateAndTime =
      {
        time: timing,
        date,
      };

    for (const serviceName in updatedServices) {
      if (updatedServices.hasOwnProperty(serviceName)) {
        for (const key in updatedServices[serviceName]) {
          if (updatedServices[serviceName].hasOwnProperty(key)) {
            if (
              allSelectedServices[serviceName] &&
              allSelectedServices[serviceName][key]
            ) {
              // If the key already exists in allSelectedServices, add the content
              allSelectedServices[serviceName][key] = {
                ...allSelectedServices[serviceName][key],
                ...updatedServices[serviceName][key],
              };
            } else {
              // If the key doesn't exist, simply assign the content
              allSelectedServices[serviceName] = {
                ...allSelectedServices[serviceName],
                [key]: updatedServices[serviceName][key],
              };
            }
          }
        }
      }
    }

    setAllSelectedServices({ ...allSelectedServices });
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
            selectedServices={allSelectedServices}
            selectedTechnician={selectedTechnician}
            selectedTiming={selectedTiming}
            setSelectedTab={setSelectedTab}
            setShowServicesWithPrice={setShowServicesWithPrice}
            setSelectedServices={setSelectedServices}
            bookedTimings={bookedTimings}
            resetData={resetData}
          />
        )}
      </div>
    </div>
  );
};

export default Bookings;
