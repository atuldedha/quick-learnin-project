import React, { useState } from "react";
import "./Bookings.css";
import Logo from "../../images/logo.png";
import BookingTabs from "../../components/BookingTabs/BookingTabs";
import Services from "../../components/BookingsServices/ServicesComponent/Services";
import BookingsTechnicians from "../../components/BookingsServices/BookingsTechnicians/BookingsTechnicians";
import BookingsCalendar from "../../components/BookingsServices/BookingsCalendar/BookingsCalendar";
import BookingSubmit from "../../components/BookingsServices/BookingSubmit/BookingSubmit";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const [showServicesWithPrice, setShowServicesWithPrice] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedServices, setSelectedServices] = useState({});
  const [selectedTechnician, setSelectedTechnician] = useState({});
  const [selectedTiming, setSelectedTiming] = useState();
  const [allSelectedServices, setAllSelectedServices] = useState([]);

  const addTechnicianToService = (technician) => {
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
    const updatedServices = { ...selectedServices };

    for (const serviceName in updatedServices) {
      if (updatedServices.hasOwnProperty(serviceName)) {
        for (const key in updatedServices[serviceName]) {
          if (updatedServices[serviceName].hasOwnProperty(key)) {
            updatedServices[serviceName][key].dateAndTime = {
              time: timing,
              date,
            };
          }
        }
      }
    }

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
    setSelectedServices({});
  };

  return (
    <div className="bookings_container">
      {/* header */}
      <div className="bookings_header_container">
        <div className="bookings_header_logo_container">
          <Link to="/">
            <img src={Logo} alt="logo" className="bookings_header_logo" />
          </Link>
        </div>

        <div className="bookings_header_text_container">
          <Link to="/" className="no-underline">
            <h1 className="bookings_header_logo_text">Epicenter Wellness</h1>
          </Link>
          <p className="bookings_header_address_text">
            202 Albemarle St, Baltimore, MD 21202, United States
          </p>
          <span className="bookings_header_phone_text">+1 410-914-7131</span>
        </div>
      </div>

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
          />
        )}
        {selectedTab === 2 && (
          <BookingsTechnicians
            setSelectedTechnician={setSelectedTechnician}
            setSelectedTab={setSelectedTab}
            addTechnicianToService={addTechnicianToService}
            setShowServicesWithPrice={setShowServicesWithPrice}
          />
        )}

        {selectedTab === 3 && (
          <BookingsCalendar
            setSelectedTiming={setSelectedTiming}
            selectedTechnician={selectedTechnician}
            setSelectedTab={setSelectedTab}
            addTimingToService={addTimingToService}
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
          />
        )}
      </div>
    </div>
  );
};

export default Bookings;
