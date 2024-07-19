import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import iconPrev from "../../assets/slideshow-prev.svg";
import iconNext from "../../assets/slideshow-next.svg";

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showControls = pictures.length > 1;

  function prevSlide() {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1,
    );
  }

  function nextSlide() {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <div className="slideshow">
      <img
        className="current-slide"
        src={pictures[currentIndex]}
        alt={"Photo " + (currentIndex + 1) + "/" + pictures.length}
      />
      {showControls ? (
        <>
          <button className="prev-button" onClick={prevSlide}>
            <img src={iconPrev} alt="Previous" />
          </button>
          <button className="next-button" onClick={nextSlide}>
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
