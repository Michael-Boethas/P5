import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import iconUrl from "../../assets/dropdown-collapsed.svg"
import "../../styles/components/_Collapse.scss"


export default function Collapse({ data }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  function toggleIsCollapsed() {
    setIsCollapsed(!isCollapsed);
  }
  
  const boxAnimation = isCollapsed
    ? "expandAboutSection"
    : "collapseAboutSection";

  const iconAnimation = isCollapsed
    ? "rotateIconCCW"
    : "rotateIconCW";

  return (
    <>
      <div className="heading-block">
        <h2 className={`about__${data.heading}`}>{data.heading}</h2>
        <button
          className="collapse-button"
          onClick={toggleIsCollapsed}
        >
          <img className={`collapsible-button__icon ${iconAnimation}`} src={iconUrl} alt="toggle icon" />
        </button>
      </div>
      <p className={`about__${data.heading} ${boxAnimation}`}>{data.text}</p>
    </>
  );
}


Collapse.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};