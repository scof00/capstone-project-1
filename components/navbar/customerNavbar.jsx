import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const CustomerNavbar = () => {

  const navigate = useNavigate()
  return (
    <header>
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/" className="navbar-item">
          Shop
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="purchases" className="navbar-item">
          See Your Purchases
        </Link>
      </li>
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