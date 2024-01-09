import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import useSlide from "../contexts/SlideContext";
import "./Carousel.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Carousel() {
  const { images, activeStep, setActiveStep } = useSlide();
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="img-carousel">
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        <i className="bi bi-chevron-left back"></i>
      </Button>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <React.Fragment key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="pdf-box">
                {step.imgPath.toLowerCase().includes(".pdf") ? (
                  <img
                    className="pdf-err-img"
                    src="https://images.imyfone.com/en/assets/article/repair-file/can't-open-pdf.webp"
                    alt="file format not supported"
                  />
                ) : (
                  <img
                    className="img-box"
                    src={step.imgPath}
                    alt={step.label}
                  />
                )}
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </SwipeableViews>
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        <i className="bi bi-chevron-right next"></i>
      </Button>
    </div>
  );
}

export default Carousel;
