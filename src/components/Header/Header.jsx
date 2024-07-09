import logo from "../../assets/logo.svg";
import Nav from "../../components/Nav/Nav";
import "../../styles/components/_Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <Nav />
    </header>
  );
}