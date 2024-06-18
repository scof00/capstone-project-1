import { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllUsers, getUserById } from "../../services/userServices";

export const CustomerNavbar = ({ currentUser }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllUsers().then((array) => {
      setAllUsers(array);
    });
  }, []);

  useEffect(() => {
    const foundUser = allUsers.filter((user) => user.id === currentUser.id);
    setUser(foundUser);
  }, [allUsers]);

  const navigate = useNavigate();
  return (
    <header>
      <div className="player-gold">
        Gold:
        {user.map((item) => {
          return <div>{item.gold}</div>;
        })}
      </div>
      <ul className="navbar-customer">
        <li className="navbar-item">
          <Link to="/" className="navbar-item">
            Shop
          </Link>
        </li>
        |
        <li className="navbar-item">
          <Link to="cart" className="navbar-item">
            Your Cart
          </Link>
        </li>
        |
        <li className="navbar-item">
          <Link to="purchases" className="navbar-item">
            See Your Purchases
          </Link>
        </li>
        |
        <li className="navbar-item">
          <Link
            className="navbar-item"
            to=""
            onClick={() => {
              localStorage.removeItem("shop_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
      
    </header>
  );
};
