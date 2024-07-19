import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import iconUrl from "../../assets/dropdown-collapsed.svg";

export default function Collapse({ heading, text }) {
  const [isCollapsed, setIsCollapsed] = useState(null); // Pour éviter les animations dès le chargement de la page

  function toggleIsCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  const boxAnimation = isCollapsed ? "section--expanded" : "section--collapsed";

  const iconAnimation = isCollapsed ? "icon--expanded" : "icon--collapsed";

  return (
    <>
      <div className="collapse">
        <div className="collapse__heading-block">
          <h2 className={`collapse__heading`}>{heading}</h2>
          <button className="collapse-button" onClick={toggleIsCollapsed}>
            <img
              className={`collapse-button__icon ${iconAnimation}`}
              src={iconUrl}
              alt="toggle icon"
            />
          </button>
        </div>
        <div className={`collapse__text ${boxAnimation}`}>{text}</div>
      </div>
    </>
  );
}

Collapse.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
