import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import iconUrl from "../../assets/dropdown-collapsed.svg";

export default function Collapse({ data }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleIsCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  const boxAnimation = isCollapsed
    ? "section--collapsed"
    : "section--expanded";

  const iconAnimation = isCollapsed 
    ? "icon--collapsed"
    : "icon--expanded";

  return (
    <>
      <div className="about__heading-block">
        <h2 className={`about__heading`}>{data.heading}</h2>
        <button className="collapse-button" onClick={toggleIsCollapsed}>
          <img
            className={`collapse-button__icon ${iconAnimation}`}
            src={iconUrl}
            alt="toggle icon"
          />
        </button>
      </div>
      <p className={`about__text ${boxAnimation}`}>{data.text}</p>
    </>
  );
}

Collapse.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
