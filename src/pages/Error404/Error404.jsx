import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="error-container">
      <span className="error-code">404</span>
      <p className="error-message">
        Oups! La page que <br /> vous demandez n&#39;existe pas.
      </p>
      <Link to="/" className="link-home">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
