import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/" className="navbar-item">
          Shop
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="newItem" className="navbar-item">
          New Wares Have Arrived
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="purchases" className="navbar-item">
          See Your Purchases
        </Link>
      </li>
    </ul>
    </header>
  );
};