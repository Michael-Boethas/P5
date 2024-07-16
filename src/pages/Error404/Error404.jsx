import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="error-container">
      <span className="error-404">404</span>
      <p className="message-404">
        Oups! La page que <br /> vous demandez n&#39;existe pas.
      </p>
      <Link to="/" className="link-home">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
