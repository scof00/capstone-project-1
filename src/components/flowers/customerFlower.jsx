import { useState, useEffect } from "react";
import { getAllFlowers } from "../../services/flowerService.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./flowers.css";
import { CustomerFlowerDetails } from "./customerFlowerDetails.jsx";

export const CustomerFlowers = ({ currentUser }) => {
  const [userFlowers, setUserFlowers] = useState([]);
  const navigate = useNavigate();
  const getAndSetFlowers = () => {
    getAllFlowers().then((flowersArray) => {
      setUserFlowers(flowersArray);
    });
  };
  useEffect(() => {
    getAndSetFlowers();
  }, [currentUser]);
  return (
    <div>
      <h2>Available Flowers</h2>
      <article className="flowers-container">
        {userFlowers.map((flowerObj) => {
          return (
            <Link to={`customerFlowerDetails/${flowerObj.id}`}>
              <div key={flowerObj.id} className="flowers">
                <img src={flowerObj.img} className="flower-img"></img>
                <div>{flowerObj.name}</div>
                <div>
                  <i>{flowerObj.species}</i>
                </div>
                <div>{flowerObj.color}</div>
              </div>
            </Link>
          );
        })}
      </article>
    </div>
  );
};
