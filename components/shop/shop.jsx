import { useEffect, useState } from "react";
import { deleteShopItems, getShopItems } from "../../services/shopService";
import { Filters } from "../filters/filter";

export const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemFilter, setItemFilter] = useState(0);

  useEffect(() => {
    getShopItems().then((array) => {
      setShopItems(array);
    });
  }, []);

  const handleDelete = (item) => {
    deleteShopItems(item.id).then(() => {
      getShopItems().then((array) => {
        setShopItems(array);
      });
    });
  };

  useEffect(() => {
    if (itemFilter == 1) {
      const filtered = shopItems.filter((item) => item.rarityId === 1);
      setFilteredItems(filtered);
    } else if (itemFilter == 2) {
      const filtered = shopItems.filter((item) => item.rarity.id === 2);
      setFilteredItems(filtered);
    } else if (itemFilter == 3) {
      const filtered = shopItems.filter((item) => item.rarity.id === 3);
      setFilteredItems(filtered);
    } else if (itemFilter == 4) {
      const filtered = shopItems.filter((item) => item.rarity.id === 4);
      setFilteredItems(filtered);
    } else if (itemFilter == 5) {
      const filtered = shopItems.filter((item) => item.rarity.id === 5);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(shopItems);
    }
  }, [itemFilter, shopItems]);

  useEffect(() => {
    const foundItem = shopItems.filter((item) => {
      return item?.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
    setFilteredItems(foundItem);
  }, [searchTerm, shopItems]);

  return (
    <>
      <Filters
        setSearchTerm={setSearchTerm}
        setItemFilter={setItemFilter}
        itemFilter={itemFilter}
        searchTerm={searchTerm}
      />
      <div className="items">
        {filteredItems.map((item) => {
          return (
            <div className="itemContainer" key={item.id}>
              <div className="item-info-item">
                <h3>
                  <span>
                    <strong>Item: </strong>
                  </span>
                  {item.name}
                </h3>
              </div>
              <div>
                <span className="item-info-rarity">
                  <strong>Rarity: </strong>{" "}
                </span>
                {item.rarity.name}
              </div>
              <div className="item-info-description">
                <span>
                  <strong>Description: </strong>
                </span>
                {item.item?.description}
              </div>
              <div>
                <span className="item-info-cost">
                  <strong>Cost: </strong>
                </span>
                {item.item?.cost} Gold
              </div>
              <div>
                <span className="item-info-cost">
                  <strong>In stock: </strong>
                </span>
                {item.quantity}
              </div>
              <div className="container-btns">
                <button className="item-btn" onClick={() => handleDelete(item)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
