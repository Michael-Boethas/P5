import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import iconUrl from "../../assets/dropdown-collapsed.svg";

export default function Collapse({ heading, text }) {
  const [isCollapsed, setIsCollapsed] = useState(null); // Initialisation à "null" pour éviter les animations dès le chargement de la page

  function toggleIsCollapsed() {
    setIsCollapsed(!isCollapsed); // Gestion de l'état du dropdown
  }

  const boxAnimation = isCollapsed ? "section--expanded" : "section--collapsed";  // Sélection de l'animation appropriée 
  const iconAnimation = isCollapsed ? "icon--expanded" : "icon--collapsed";

  return (
    <div className="collapse">
      <div className="collapse__heading-block">
        <h2 className="collapse__heading">{heading}</h2>      {/* Affichage du heading en props */}
        <button className="collapse-button" onClick={toggleIsCollapsed}>     {/* Event listener sur le bouton */}
          <img
            className={`collapse-button__icon ${iconAnimation}`}  // Attribution de la classe pour l'animation
            src={iconUrl}
            alt="toggle icon"
          />
        </button>
      </div>
      <div className={`collapse__text ${boxAnimation}`}>{text}</div> {/* Affichage du texte en props */}
    </div>
  );
}

Collapse.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
