import { useEffect, useState } from "react";
import "./purchases.css";
import { Filters } from "../filters/filter";
import { getPurchasedItems } from "../../services/cartService";

export const Purchases = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPurchasedItems().then((array) => {
      setItems(array);
    });
  }, []);

  return (
    <div>
      <h1 className="page-title">Purchases</h1>
      <div className="items">
        {items.map((item) => {
          return (
            <div className="itemContainer" key={item.id}>
              <h2>{item.user.name}</h2>
              <p>{item.item.name}</p>
              <p>{item.item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
