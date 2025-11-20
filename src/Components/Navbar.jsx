import "../Styles/Navbar.css";
import { IoCartOutline, IoGlobeOutline } from "react-icons/io5";
import Searchbar from "./Searchbar";
import logo from "../assets/udemy-nav-logo.png";

function Navbar() {
  return (
    <div className="nav-container">

      <img className="logo" src={logo} alt="Udemy Logo" />

      <a className="nav-link" href="#">Explore</a>

      <Searchbar />

      <a className="nav-link" href="#">Plans & Pricing</a>
      <a className="nav-link" href="#">Udemy Business</a>

      <IoCartOutline className="nav-icon cart" />

      <button className="login-btn">Log In</button>
      <button className="signup-btn">Sign Up</button>

      <IoGlobeOutline className="nav-icon globe" />

    </div>
  );
}

export default Navbar;
