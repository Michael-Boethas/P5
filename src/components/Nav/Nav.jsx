import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="header__nav">
      <Link to="/" className="nav__link-home">
        ACCUEIL
      </Link>
      <Link to="/about" className="nav__link-about">
        À PROPOS
      </Link>
    </nav>
  );
}
