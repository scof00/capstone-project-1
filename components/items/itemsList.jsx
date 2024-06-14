import { useEffect, useState } from "react";
import {
  changItemStatus,
  deleteItems,
  getAllUnsoldItems,
} from "../../services/itemsService";
import "./items.css";

import { Filters } from "../../filters/filter";

export const UnsoldItemsList = () => {
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
        setItems(array)
      });
    });
  };

  useEffect(() => {
    if (itemFilter == 1) {
      const filtered = items.filter((item) => item.rarityId === 1);
      setFilteredItems(filtered);
    } else if (itemFilter == 2) {
      const filtered = items.filter((item) => item.rarityId === 2);
      setFilteredItems(filtered);
    } else if (itemFilter == 3) {
      const filtered = items.filter((item) => item.rarityId === 3);
      setFilteredItems(filtered);
    } else if (itemFilter == 4) {
      const filtered = items.filter((item) => item.rarityId === 4);
      setFilteredItems(filtered);
    } else if (itemFilter == 5) {
      const filtered = items.filter((item) => item.rarityId === 5);
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
                {item.description}
              </div>
              <div>
                <span className="item-info-cost">
                  <strong>Cost: </strong>
                </span>
                {item.cost} Gold
              </div>
              <div className="container-btns">
                <button className="item-btn">Edit</button>
                <button
                  className="item-btn"
                  onClick={(event) => {
                    item.purchased = !item.purchased;
                    changItemStatus(item).then(() => {
                      getAllUnsoldItems().then((allItems) => {
                        setItems(allItems);
                      });
                    });
                  }}
                >
                  Buy
                </button>
                <button className="item-btn" onClick={() => handleDelete(item)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};