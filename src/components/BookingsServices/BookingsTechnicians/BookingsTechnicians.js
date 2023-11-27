import React from "react";
import "./BookingsTechnicians.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import BackButton from "../../BackButton/BackButton";

const BookingsTechnicians = ({
  setSelectedTab,
  setSelectedTechnician,
  setShowServicesWithPrice,
  addTechnicianToService,
  allTechnicians,
  selectedCard,
  selectedCardService,
  setSelectedCardService,
  setSelectedServices,
}) => {
  const handleCardClick = (technician) => {
    setSelectedTechnician(technician);
    addTechnicianToService(technician);
    setSelectedTab(3);
  };

  const deleteService = () => {
    setSelectedServices((prevSelectedServices) => {
      const updatedServices = { ...prevSelectedServices };

      // Check if the selected card exists
      if (updatedServices[selectedCard.name]) {
        // Delete the selected service from the selected card
        delete updatedServices[selectedCard.name][selectedCardService.name];
      }

      return updatedServices;
    });
    setSelectedCardService({});
  };

  const handleBackClick = () => {
    deleteService();
    setShowServicesWithPrice(true);
    setSelectedTab(1);
  };

  return (
    <>
      <BackButton handleBackClick={handleBackClick} />
      <div className="bookingsTechnicians_container">
        {allTechnicians?.map((technician) => (
          <ServiceCard
            key={technician._id}
            service={technician}
            handleCardClick={handleCardClick}
            spanBg
          />
        ))}
      </div>
    </>
  );
};

export default BookingsTechnicians;
