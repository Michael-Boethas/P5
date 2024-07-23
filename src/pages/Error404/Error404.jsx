import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">
        Oups! La page que <br /> vous demandez n&#39;existe pas.
      </h2>
      <Link to="/" className="link-home">     {/* Lien de navigation vers la page d'accueil */}
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
