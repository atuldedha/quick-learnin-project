import React from "react";
import "./Banner2.css";
import BannerImage from "../../images/banner2.png";
import BannerSmall from "../../images/banner2Small.png";
import HandImage from "../../images/hand.png";
import { useWindowSize } from "../../utils/WindowResizeHook";

const Banner2 = () => {
  const [width, height] = useWindowSize();
  return (
    <div className="banner2_container">
      {width > parseFloat(900) ? (
        <img src={BannerImage} alt="banner2" className="banner2_image" />
      ) : (
        <img src={BannerSmall} alt="banner2" className="banner2_image" />
      )}

      <div className="banner2_text_container">
        <img src={HandImage} alt="star" className="banner2_hand_image" />
        <span className="banner2_text">We are here to care for you.</span>
      </div>
    </div>
  );
};

export default Banner2;
