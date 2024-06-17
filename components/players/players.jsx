import { useEffect, useState } from "react";
import { getNonAdminUsers } from "../../services/userServices";
import "./players.css";
import { Link } from "react-router-dom";

export const Players = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getNonAdminUsers().then((array) => {
      setUsers(array);
    });
  }, []);

  return (
    <div className="players">
      {users.map((user) => {
        return (
          <div className="player-container">
            <h3>{user.name}</h3>
            <p>PC name: {user.password}</p>
            <p>Gold: {user.gold}</p>
            <Link to={`${user.id}/gold`}>
              <button>Add Gold</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
