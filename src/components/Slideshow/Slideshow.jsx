import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import iconPrev from "../../assets/slideshow-prev.svg";
import iconNext from "../../assets/slideshow-next.svg";

export default function Slideshow({ picturesUrl }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const showControls = picturesUrl.length > 1;
  const [isDisabled, setIsDisabled] = useState(true); // Gestion de la fonctionnalité navigation

  // Chargement anticipé des photos afin d'éviter un bug d'affichage lors de l'animation du slideshow
  useEffect(() => {
    (async () => {    // IIFE asynchrone
      const slidesPreload = picturesUrl.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      try {
        await Promise.all(slidesPreload); // Attente de la résolution de l'ensemble des promises
        setIsDisabled(false); // Activation des boutons de navigation après chargement de toutes les photos
      } catch (error) {
        window.alert("Erreur lors du chargement des photos");
        console.log("Error loading slideshow images: ", error);
      }
    })();
  }, [picturesUrl]);

  function prevSlide() {
    if (isDisabled) return; // Fonctionnalité désactivée
    setSlideDirection("prev-slide"); // Sélection de l'animation en fonction du bouton cliqué
    setIsDisabled(true); // Désactivation de la fonctionnalité pour la durée de l'animation
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
    <figure className="slideshow">
      <img
        className={`current-slide ${slideDirection}`} // Attribution de la classe pour l'animation
        src={picturesUrl[currentIndex]}
        alt={`Slide ${currentIndex + 1}/${picturesUrl.length}`}
        onAnimationEnd={() => {
          // Réinitialisation des paramètres en fin d'animation
          setSlideDirection("");
          setIsDisabled(false);
        }}
      />
      {showControls ? ( // Affichage conditionnel des boutons de navigation
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
          <figcaption className="slide-number">
            {currentIndex + 1}/{picturesUrl.length}    {/* Affichage dynamique du numéro du slide actuel */}
          </figcaption>
        </>
      ) : null}
    </figure>
  );
}

Slideshow.propTypes = {
  picturesUrl: PropTypes.array.isRequired,
};
