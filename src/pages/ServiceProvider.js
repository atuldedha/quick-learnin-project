import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import EpicenterWorksForProvider from "../components/EpicenterWorksForProvider/EpicenterWorksForProvider";
import Footer from "../components/Footer/Footer";
import BannerImage from "../images/banner2.png";
import BannerSmall from "../images/banner2Small.png";

const ServiceProvider = () => {
  return (
    <div>
      <Header />
      <Banner
        imageSrcLarge={BannerImage}
        imageSrcSmall={BannerSmall}
        textColor="#FFFFFF"
        headingText="Find clients & hourly treatment room rental."
        buttonText="Book a treatment room"
      />
      <EpicenterWorksForProvider />
      <Footer />
    </div>
  );
};

export default ServiceProvider;
