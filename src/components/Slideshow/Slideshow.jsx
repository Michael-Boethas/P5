import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import iconPrev from "../../assets/slideshow-prev.svg";
import iconNext from "../../assets/slideshow-next.svg";

export default function Slideshow({ picturesUrl }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const showControls = picturesUrl.length > 1;               //Affichage des boutons de navigation
  const [isDisabled, setIsDisabled] = useState(true);         // Gestion de l'activation de la navigation

  // Chargement anticipé des images afin d'éviter un bug d'affichage lors de l'animation du slideshow
  useEffect(() => {
    (async () => {
      const slidesPreload = picturesUrl.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
        });
      });
      await Promise.all(slidesPreload);
      setIsDisabled(false);
    })();
  }, []); // Uniquement au premier render

  function prevSlide() {
    if (isDisabled) return;
    setSlideDirection("prev-slide");
    setIsDisabled(true);
    setCurrentIndex((index) =>
      index === 0 ? picturesUrl.length - 1 : index - 1
    );
  }

  function nextSlide() {
    if (isDisabled) return;
    setSlideDirection("next-slide");
    setIsDisabled(true);
    setCurrentIndex((index) =>
      index === picturesUrl.length - 1 ? 0 : index + 1
    );
  }

  return (
    <div className="slideshow">
      <img
        className={`current-slide ${slideDirection}`}
        src={picturesUrl[currentIndex]}
        alt={`Slide ${currentIndex + 1}/${picturesUrl.length}`}
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
            {currentIndex + 1}/{picturesUrl.length}
          </span>
        </>
      ) : null}
    </div>
  );
}

Slideshow.propTypes = {
  picturesUrl: PropTypes.array.isRequired,
};
