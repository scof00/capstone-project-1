import { useEffect, useState } from "react";
import {
  changItemStatus,
  deleteItems,
  getAllUnsoldItems,
} from "../../services/itemsService";
import "./items.css";

import { Filters } from "../filters/filter";
import { Link } from "react-router-dom";

export const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemFilter, setItemFilter] = useState(0);

  useEffect(() => {
    getAllUnsoldItems().then((itemsArray) => setItems(itemsArray));
  }, []);

  const handleDelete = (item) => {
    deleteItems(item.id).then(() => {
      getAllUnsoldItems().then((array) => {
        setItems(array);
      });
    });
  };

  useEffect(() => {
    if (itemFilter == 1) {
      const filtered = items.filter((item) => item.rarityId === 1);
      setFilteredItems(filtered);
    } else if (itemFilter == 2) {
      const filtered = items.filter((item) => item.rarity.id === 2);
      setFilteredItems(filtered);
    } else if (itemFilter == 3) {
      const filtered = items.filter((item) => item.rarity.id === 3);
      setFilteredItems(filtered);
    } else if (itemFilter == 4) {
      const filtered = items.filter((item) => item.rarity.id === 4);
      setFilteredItems(filtered);
    } else if (itemFilter == 5) {
      const filtered = items.filter((item) => item.rarity.id === 5);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [itemFilter, items]);

  useEffect(() => {
    const foundItem = items.filter((item) => {
      return item?.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
    setFilteredItems(foundItem);
  }, [searchTerm, items]);

  return (
    <>
    <h1 className="page-title">All Items</h1>
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
                <h2>{item.name}</h2>
              </div>
              <div>
                <span className="item-info-rarity">
                  <strong><u>Rarity:</u> </strong>{" "}
                </span>
                {item.rarity.name}
              </div>
              <div className="item-info-description">
                <span>
                  <strong><u>Description:</u> </strong>
                </span>
                {item.description}
              </div>
              <div>
                <span className="item-info-cost">
                  <strong><u>Cost:</u> </strong>
                </span>
                {item.cost} Gold
              </div>
              <div className="container-btns">
                <button className="item-btn" onClick={() => handleDelete(item)}>
                  Delete
                </button>
                <Link to={`/items/edit/${item.id}`}>
                  <button className="item-btn">Edit and Add Tags</button>
                </Link>
                <Link to={`/items/addShopItem/${item.id}`}>
                  <button className="item-btn">Add to shop</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
