import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <a href="../../index.js">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default Header;
