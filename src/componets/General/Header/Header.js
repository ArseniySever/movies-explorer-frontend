import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import NavAuth from "../NavigationAuth/NavigationAuth";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn, isLoading }) => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Логотип ПоискКино"></img>
      </Link>
      {isLoading ? "" : loggedIn ? <Navigation /> : <NavAuth />}
    </header>
  );
};

export default Header;
