import { useEffect, useState } from "react";
import {
  deleteRetailer,
  getAllRetailers,
} from "../../services/retailerServices";
import "./retailers.css";
import { Link } from "react-router-dom";

export const Retailers = ({ currentUser }) => {
  const [retailers, setRetailers] = useState([]);

  useEffect(() => {
    getAllRetailers().then((retailersArray) => {
      setRetailers(retailersArray);
    });
  }, []);

  const handleDelete = (retailer) => {
    deleteRetailer(retailer.id).then(() => {
      getAllRetailers().then((retailersArray) => {
        setRetailers(retailersArray);
      });
    });
  };

  return (
    <div className="retailers">
      <div>
        <Link to={`/addRetailer`}>
          <button className="retailer-btn">Add New Retailer</button>
        </Link>
      </div>
      <div className="retailers-container">
        {retailers.map((retailer) => {
          return (
            <div key={retailer.id} className="retailer">
              <Link to={`/retailers/${retailer.id}`}>
                <h3>
                  <u>{retailer.businessName}</u>
                </h3>
              </Link>
              <p>{retailer.address}</p>
              <div className="card-buttons">
                <Link to={`/retailers/${retailer.id}/editRetailer`}>
                  <button className="retailer-btn">Edit</button>
                </Link>
                <button
                  className="retailer-btn"
                  onClick={() => handleDelete(retailer)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
