import React from "react";
import PropTypes from "prop-types";

// "page" props pour adapter la bannière sur Home.jsx et About.jsx
export default function Banner({ page }) {
  return (
    <div className={`${page}__banner`}>
      <div className={`${page}__banner--overlay`}>
        {page === "home" ? (
          <h1 className={`${page}__banner-txt`}>    {/* Ajout conditionnel du texte à la bannière */}
            Chez vous, partout et ailleurs
          </h1>
        ) : null}
      </div>
    </div>
  );
}

Banner.propTypes = {
  page: PropTypes.string.isRequired,
};
