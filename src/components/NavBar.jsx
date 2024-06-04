import { Link } from "react-router-dom";
import "./NavBar.css";

// import Login from "../pages/Login.jsx";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen((oldState) => !oldState);
  }
  function turnToFalse() {
    setIsMenuOpen(false);
  }
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <label htmlFor="" className="menu-icon" onClick={handleMenuClick}>
        {!isMenuOpen ? <i className="bx bx-menu"></i> : <p>✖</p>}
      </label>
      <div>
        <ul className={isMenuOpen ? "dropdown-menu" : "menu-list"}>
          <li onClick={turnToFalse}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={turnToFalse}>
            <Link to="/features">Features</Link>
          </li>
          <li onClick={turnToFalse}>
            <Link to="/workouts">Workouts</Link>
          </li>
          <li onClick={turnToFalse}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Link to="/login">
        <button id="login">Login</button>
      </Link>
    </nav>
  );
}
