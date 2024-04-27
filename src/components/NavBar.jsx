import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <label htmlFor="" className="menu-icon">
        <i className="bx bx-menu"></i>
      </label>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <button id="login">
        <Link>Login</Link>
      </button>
    </nav>
  );
}
