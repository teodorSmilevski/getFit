import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="logo">
        Logo
      </Link>
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
      </ul>
    </nav>
  );
}
