import logo from "../../assets/logo-white.svg";
import "../../styles/components/_Footer.scss";

export default function Header() {
    return (
      <footer className="footer">
        <img className="footer__logo" src={logo} alt="Logo" />
        <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }