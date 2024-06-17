import { useEffect, useState } from "react";
import { changItemStatus, getAllSoldItems } from "../../services/itemsService";
import "./purchases.css";
import { Filters } from "../filters/filter";

export const Purchases = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllSoldItems().then((itemsArray) => setItems(itemsArray));
  }, []);

  return (
      <div>placeholder</div>
  );
};