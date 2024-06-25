import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
//Navbar component that appears on every page.
  const navigate = useNavigate()
  return (
    <header>
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/" className="navbar-item">
          Shop
        </Link>
      </li>
      |
      <li className="navbar-item">
        <Link to="items" className="navbar-item">
          All Items
        </Link>
      </li>
      |
      <li className="navbar-item">
        <Link to="newItem" className="navbar-item">
          New Wares Have Arrived
        </Link>
      </li>
      |
      <li className="navbar-item">
        <Link to="purchases" className="navbar-item">
          See All Purchases
        </Link>
      </li>|
      <li className="navbar-item">
        <Link to="players" className="navbar-item">
          View Players
        </Link>
      </li>
      |
      <li className="navbar-item">
        <Link className="navbar-item" to=""
        onClick={() => {
          localStorage.removeItem("shop_user")
          navigate("/login", {replace: true})
        }}
        >
          Logout
        </Link>
      </li>
    </ul>
    </header>
  );
};