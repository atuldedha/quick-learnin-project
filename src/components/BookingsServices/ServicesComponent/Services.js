import React, { useState } from "react";
import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import BackButton from "../../BackButton/BackButton";
import BookingsSearch from "../BookingsSearch/BookingsSearch";
import ServicesSelection from "../ServicesSelection/ServicesSelection";
import { services } from "../../../utils/utilities";

const Services = ({
  selectedCard,
  setSelectedCard,
  setSelectedServices,
  setSelectedTab,
  setShowServicesWithPrice,
  showServicesWithPrice,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const [showAddMoreItemButtons, setShowAddMoreItemButtons] = useState(false);
  const [availableServcies, setAvailableServices] = useState(services);
  const [availableSelectedServices, setAvailableSelectedServices] = useState(
    selectedCard?.servicesOffered
  );

  const handleCardClick = (service) => {
    setSelectedCard(service);
    setAvailableSelectedServices(service?.servicesOffered);
    setShowServicesWithPrice(true);
    setSearchValue("");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (showServicesWithPrice) {
      const filterServices = selectedCard?.servicesOffered?.filter((data) =>
        data.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setAvailableSelectedServices(filterServices);
    } else {
      const filterServices = services?.filter((data) =>
        data.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setAvailableServices(filterServices);
    }
  };

  const handleBackClick = () => {
    setSelectedCard({});
    setShowServicesWithPrice(false);
  };

  const handleServiceClick = (selectedService) => {
    setSelectedServices((prevSelectedServices) => {
      return {
        ...prevSelectedServices,
        [selectedCard?.name]: {
          ...prevSelectedServices[selectedCard?.name],
          [selectedService?.name]: {
            selectedService,
          },
        },
      };
    });
  };

  return !showServicesWithPrice ? (
    <>
      <BookingsSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={handleSearch}
      />
      <div className="bookingsServices_container">
        {availableServcies.map((service) => (
          <ServiceCard
            handleCardClick={handleCardClick}
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </>
  ) : (
    <div className="bookings_show_services_container">
      <BackButton handleBackClick={handleBackClick} />
      <BookingsSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={handleSearch}
      />
      <h2 className="bookings_show_services_name">
        {selectedCard?.serviceName}
      </h2>

      <ServicesSelection
        handleServiceClick={handleServiceClick}
        servicesOffered={availableSelectedServices}
        setSelectedTab={setSelectedTab}
        setShowServicesWithPrice={setShowServicesWithPrice}
        showAddMoreItemButtons={showAddMoreItemButtons}
        setShowAddMoreItemButtons={setShowAddMoreItemButtons}
      />
    </div>
  );
};

export default Services;
