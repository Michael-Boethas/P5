import { useState } from "react";

export default function Collapse({ data }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  function toggleIsCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  const iconUrl = isCollapsed
    ? "../../assets/dropdown-collapsed.svg"
    : "../../assets/dropdown-expanded.svg";
  return (
    <>
      <div>
        <h2 className={`about__${data.heading}`}>{data.heading}</h2>
        <button
          className="collapsible__button"
          onClick={toggleIsCollapsed}
        >
          <img src={iconUrl} alt="toggle icon" />
        </button>
      </div>
      <p className={`about__${data.heading}`}>{data.text}</p>
    </>
  );
}
