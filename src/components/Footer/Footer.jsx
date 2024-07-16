import React from "react";
import logo from "../../assets/logo-white.svg";

export default function Header() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Logo" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
