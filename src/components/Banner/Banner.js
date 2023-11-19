import React from "react";
import "./Banner.css";
import { useWindowSize } from "../../utils/WindowResizeHook";
import { Link } from "react-router-dom";

const Banner = ({
  headingText,
  buttonText,
  imageSrcLarge,
  imageSrcSmall,
  textColor,
}) => {
  const [width, height] = useWindowSize();
  return (
    <div className="banner_container">
      <div className="image_container">
        {width > parseFloat(600) ? (
          <img src={imageSrcLarge} alt="banner" className="banner_image" />
        ) : (
          <img src={imageSrcSmall} alt="banner" className="banner_image" />
        )}

        <div className="banner_text_container">
          <span className="banner_title_text" style={{ color: textColor }}>
            {headingText}
          </span>
          <Link to={"/appointment-booking"}>
            <button className="banner_button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
