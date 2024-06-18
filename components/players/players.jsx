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
    <>
      <h1 className="page-title">Players</h1>
      <div className="players">
        {users.map((user) => {
          return (
            <div className="player-container">
              <h3>{user.name}</h3>
              <p>
                <u>PC name:</u> {user.password}
              </p>
              <p>
                <u>Gold:</u> {user.gold}
              </p>
              <Link to={`${user.id}/gold`}>
                <button className="player-btn">Add Gold</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
