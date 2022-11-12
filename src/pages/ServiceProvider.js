import React from "react";
import Banner from "../components/Banner";
import EpicenterWorksForProvider from "../components/EpicenterWorksForProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ServiceProvider = () => {
  return (
    <div>
      <Header />
      <Banner
        headingText="Find clients & hourly treatment room rental."
        buttonText="Book a treatment now"
      />
      <EpicenterWorksForProvider />
      <Footer />
    </div>
  );
};

export default ServiceProvider;
