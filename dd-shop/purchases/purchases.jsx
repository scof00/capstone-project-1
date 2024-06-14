import { useEffect, useState } from "react";
import { changItemStatus, getAllSoldItems } from "../services/itemsService";
import "./purchases.css";
import { Filters } from "../filters/filter";

export const Purchases = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllSoldItems().then((itemsArray) => setItems(itemsArray));
  }, []);

  return (
    <div>
      <Filters />
    <div className="items">
      {items.map((item) => {
        return (
          <div className="itemContainer" key={item.id}>
            <img src={item.image} />
            <div>
              <h3>
                <span className="item-info-item">Item: </span>
                {item.name}
              </h3>
            </div>
            <div>
              <span className="item-info-rarity">Rarity: </span>
              {item.rarity.name}
            </div>
            <div>
              <span className="item-info-description">Description: </span>
              {item.description}
            </div>
            <div>
              <span className="item-info-cost">Cost: </span>
              {item.cost} Gold
            </div>
            <div className="container-btns">
              <button className="item-btn">🖋️</button>
              <button className="item-btn"
              onClick={(event) => {
                item.purchased = !item.purchased;
                changItemStatus(item).then(() => {
                  getAllSoldItems().then((allItems) =>{
                    setItems(allItems)
                  })
                })
              }}
              >💰</button>
              <button className="item-btn">🗑️</button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};