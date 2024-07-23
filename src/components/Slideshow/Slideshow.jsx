import React, { useState } from "react";
import PropTypes from "prop-types";
import iconPrev from "../../assets/slideshow-prev.svg";
import iconNext from "../../assets/slideshow-next.svg";

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const showControls = pictures.length > 1;

  function prevSlide() {
    if (isDisabled) return;
    setSlideDirection("prev-slide");
    setIsDisabled(true);
    setCurrentIndex((index) => (index === 0 ? pictures.length - 1 : index - 1));
  }

  function nextSlide() {
    if (isDisabled) return;
    setSlideDirection("next-slide");
    setIsDisabled(true);
    setCurrentIndex((index) => (index === pictures.length - 1 ? 0 : index + 1));
  }

  return (
    <div className="slideshow">
      <img
        className={`current-slide ${slideDirection}`}
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}/${pictures.length}`}
        onAnimationEnd={() => {
          setSlideDirection("");
          setIsDisabled(false);
        }}
      />
      {showControls ? (
        <>
          <button
            className="prev-button"
            onClick={prevSlide}
            disabled={isDisabled}
          >
            <img src={iconPrev} alt="Previous" />
          </button>
          <button
            className="next-button"
            onClick={nextSlide}
            disabled={isDisabled}
          >
            <img src={iconNext} alt="Next" />
          </button>
          <span className="slide-number">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      ) : null}
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.array.isRequired,
};
