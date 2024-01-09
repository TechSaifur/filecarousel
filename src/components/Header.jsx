import React from "react";
import "./Header.css";
import useSlide from "../contexts/SlideContext";

const Header = (props) => {
  const { activeStep, images } = useSlide();
  return (
    <div className="header">
      <div className="header-left">
        <span className="img-file">{images[activeStep].label}</span>
        <span className="date">Jan 7, at 20:30 pm</span>
      </div>
      <div className="header-right">
        <div className="downloads">
          <i className="bi bi-download"></i>
          <a href={images[activeStep].imgPath} download>
            Download
          </a>
        </div>
        <div className="add-feedback">
          <i className="bi bi-plus-circle-dotted"></i>
          Add Feedback
        </div>
        <div className="close-modal" onClick={props?.handleClose}>
          <div className="modal">
            <i className="bi bi-x-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
