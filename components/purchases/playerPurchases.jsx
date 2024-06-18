import { useEffect, useState } from "react";
import { getPurchasedItems } from "../../services/cartService";

export const PlayerPurchases = ({ currentUser }) => {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [foundPurchasedItems, setFoundPurchasedItems] = useState([]);

  useEffect(() => {
    getPurchasedItems().then((array) => {
      setPurchasedItems(array);
    });
  }, []);

  useEffect(() => {
    const foundItems = purchasedItems.filter(
      (item) => item.userId === currentUser.id
    );
    setFoundPurchasedItems(foundItems);
  }, [purchasedItems]);
  return (
    <div className="player-items">
      <div className="item-container">
        {foundPurchasedItems.map((item) => {
          return (
            <div className="itemContainer" key={item.id}>
              <div className="item-info-item">
                <h2>{item.item.name}</h2>
              </div>
              <div>
                <span className="item-info-rarity">
                  <strong>
                    <u>Rarity:</u>{" "}
                  </strong>{" "}
                </span>
                {item.item.rarity.name}
              </div>
              <div className="item-info-description">
                <span>
                  <strong>
                    <u>Description:</u>{" "}
                  </strong>
                </span>
                {item.item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};