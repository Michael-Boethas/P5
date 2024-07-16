import React from "react";
import logo from "../../assets/logo.svg";
import Nav from "../../components/Nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <Nav />
    </header>
  );
}