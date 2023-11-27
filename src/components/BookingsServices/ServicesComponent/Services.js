import React, { useEffect, useState } from "react";
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
  setServiceTime,
  setSelectedCardService,
  selectedServices,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const [availableServcies, setAvailableServices] = useState(services);
  const [availableSelectedServices, setAvailableSelectedServices] = useState(
    selectedCard?.servicesOffered
  );

  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    // Filter out services that are already selected
    const filtered = availableSelectedServices?.filter((service) => {
      const cardName = selectedCard?.name;
      const serviceName = service.name;

      // Check if the service is selected for the card
      if (selectedServices?.[cardName]?.[serviceName]) {
        const selectedService =
          selectedServices[cardName][serviceName].selectedService;

        // Compare the name and time of the selected service with the current service
        return (
          selectedService.name !== service.name ||
          selectedService.time !== service.time
        );
      }

      // If the service is not selected, include it in the filtered list
      return true;
    });

    setFilteredServices(filtered);
  }, [availableSelectedServices, selectedServices, selectedCard]);

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

  const deleteService = () => {
    setSelectedServices((prevSelectedServices) => {
      const updatedServices = { ...prevSelectedServices };

      // Check if the selected card exists
      if (updatedServices[selectedCard.name]) {
        // Delete
        delete updatedServices[selectedCard.name];
      }

      return updatedServices;
    });
  };

  const handleBackClick = () => {
    deleteService();
    setSelectedCard({});
    setShowServicesWithPrice(false);
  };

  const handleServiceClick = (selectedService) => {
    setServiceTime(selectedService?.time);
    setSelectedCardService(selectedService);
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
        servicesOffered={filteredServices}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
};

export default Services;
