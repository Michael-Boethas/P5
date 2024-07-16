import React from "react";
export default function Banner({ page }) {
  // "page" props pour adapter la bannière sur Home.jsx et About.jsx
  return (
    <div className={`${page}__banner`}>
      <div className={`${page}__banner--overlay`}>
        {page === "home" ? (
          <h1 className={`${page}__banner-txt`}>
            Chez vous, partout et ailleurs
          </h1>
        ) : null}
      </div>
    </div>
  );
}
