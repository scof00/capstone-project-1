import { useEffect, useState } from "react";
import { deleteShopItems, getShopItems } from "../../services/shopService";
import { Filters } from "../filters/filter";

export const PlayerShop = () => {
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
    <div className="entire-shop">

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
                <h2>
                  {item.name}
                </h2>
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
                {item.item?.description}
              </div>
              <div>
                <span className="item-info-cost">
                  <strong><u>Cost:</u> </strong>
                </span>
                {item.item?.cost} Gold
              </div>
              <div>
                <span className="item-info-cost">
                  <strong><u>In stock:</u> </strong>
                </span>
                {item.quantity}
              </div>
              <div className="container-btns">
                <button className="item-btn" >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};
