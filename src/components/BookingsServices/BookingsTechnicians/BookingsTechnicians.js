import React from "react";
import "./BookingsTechnicians.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import BackButton from "../../BackButton/BackButton";

const technicians = [
  {
    id: 1,
    name: "Marry",
    image: "",
  },
  {
    id: 2,
    name: "Angela",
    image: "",
  },
  {
    id: 3,
    name: "Joey",
    image: "",
  },
  {
    id: 4,
    name: "Ross",
    image: "",
  },
];

const BookingsTechnicians = ({
  setSelectedTab,
  setSelectedTechnician,
  setShowServicesWithPrice,
  addTechnicianToService,
}) => {
  const handleCardClick = (technician) => {
    setSelectedTechnician(technician);
    addTechnicianToService(technician);
    setSelectedTab(3);
  };

  const handleBackClick = () => {
    setShowServicesWithPrice(true);
    setSelectedTab(1);
  };

  return (
    <>
      <BackButton handleBackClick={handleBackClick} />
      <div className="bookingsTechnicians_container">
        {technicians.map((technician) => (
          <ServiceCard
            key={technician.id}
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
