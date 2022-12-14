import React from "react";
import "./Banner.css";
import BannerImage from "../images/banner1.png";
import BannerSmall from "../images/bannerSmall.png";
import { useWindowSize } from "../utils/WindowResizeHook";

const Banner = ({ headingText, buttonText }) => {
  const [width, height] = useWindowSize();
  return (
    <div className="banner_container">
      <div className="image_container">
        {width > parseFloat(600) ? (
          <img src={BannerImage} alt="banner" className="banner_image" />
        ) : (
          <img src={BannerSmall} alt="banner" className="banner_image" />
        )}

        <div className="banner_text_container">
          <span className="banner_title_text">{headingText}</span>
          <button className="banner_button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
