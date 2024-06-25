import { useEffect, useState } from "react";
import {
  deleteShopItems,
  getShopItems,
  reduceQuantity,
} from "../../services/shopService";
import { Filters } from "../filters/filter";
import { AddItemToCart } from "../../services/cartService";
import { getAllUnsoldItems } from "../../services/itemsService";
import { getItemTags } from "../../services/tagsService";

export const PlayerShop = ({ currentUser }) => {
  //State for grabbing all items in the database.
  const [allItems, setAllItems] = useState([]);
  //State that contains only items that are supposed to appear in the shop.
  const [shopItems, setShopItems] = useState([]);
  //The following states are relevant for the filters.
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemFilter, setItemFilter] = useState(0);
  const [tagFilter, setTagFilter] = useState(0);
  const [allItemTags, setAllItemTags] = useState([]);

  useEffect(() => {
    getAllUnsoldItems().then((array) => setAllItems(array));
  }, []);

  useEffect(() => {
    getItemTags().then((array) => {
      setAllItemTags(array);
    });
  }, []);
//Function to map through allItems an only grab out the items that are supposed to be displayed in the shop, and sets the appropriate state.
  useEffect(() => {
    const newShopItems = [];
    {
      allItems.map((item) => {
        if (item.shopItems.length == 1) {
          newShopItems.push(item);
        }
        setShopItems(newShopItems);
      });
    }
  }, [allItems]);
//Rarity filter
  useEffect(() => {
    if (itemFilter == 1) {
      const filtered = shopItems.filter(
        (item) => parseInt(item.rarityId) === 1
      );
      setFilteredItems(filtered);
    } else if (itemFilter == 2) {
      const filtered = shopItems.filter(
        (item) => parseInt(item.rarityId) === 2
      );
      setFilteredItems(filtered);
    } else if (itemFilter == 3) {
      const filtered = shopItems.filter(
        (item) => parseInt(item.rarityId) === 3
      );
      setFilteredItems(filtered);
    } else if (itemFilter == 4) {
      const filtered = shopItems.filter(
        (item) => parseInt(item.rarityId) === 4
      );
      setFilteredItems(filtered);
    } else if (itemFilter == 5) {
      const filtered = shopItems.filter(
        (item) => parseInt(item.rarityId) === 5
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(shopItems);
    }
  }, [itemFilter, shopItems]);
//Search filter
  useEffect(() => {
    const foundItem = shopItems.filter((item) => {
      return item?.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
    setFilteredItems(foundItem);
  }, [searchTerm, shopItems]);

//Lines 82-297 are the ifElse statements for the tag filter.
  useEffect(() => {
    if (tagFilter == 0) {
      let filtered = shopItems;
      setFilteredItems(filtered);
    } else if (tagFilter == 1) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 1) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 2) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 2) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 3) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 3) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 4) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 4) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 5) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 5) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 6) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 6) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 7) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 7) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 8) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 8) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 9) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 9) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 10) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 10) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 11) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 11) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 12) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 12) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 13) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 13) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 14) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 14) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    } else if (tagFilter == 15) {
      let filtered = [];
      {
        shopItems.map((item) => {
          {
            item.itemTags.map((tag) => {
              if (tag.tagId === 15) {
                filtered.push(item);
              }
            });
          }
        });
      }
      setFilteredItems(filtered);
    }
  }, [tagFilter, shopItems]);
//DOM script
  return (
    <>
      <h1 className="page-title">Shop</h1>
      <div className="entire-shop">
        <Filters
          setTagFilter={setTagFilter}
          setSearchTerm={setSearchTerm}
          setItemFilter={setItemFilter}
          itemFilter={itemFilter}
          searchTerm={searchTerm}
        />
        <div className="items">
          {filteredItems.map((item) => {
            let itemQuantity = 0;
            {
              item.shopItems.map((shop) => {
                return (itemQuantity = shop.quantity);
              });
            }
            // Function for adding an item to the user's cart. It has to be located inside of the overarching map so that we can set the quantity after an item is added to the user's cart.
            const handleSubmit = (event) => {
              event.preventDefault();
              const newItem = {
                itemId: event.target.value,
                userId: currentUser.id,
              };
              itemQuantity--;
              {
                item.shopItems.map((shop) => {
                  const settingNewQuantity = {
                    itemId: shop.itemId,
                    rarityId: parseInt(shop.rarityId),
                    name: shop.name,
                    id: shop.id,
                    quantity: itemQuantity,
                  };
                  reduceQuantity(settingNewQuantity);
                });
              }
              AddItemToCart(newItem);
              window.location.reload();
            };
            return (
              <div className="itemContainer" key={item.id}>
                <div className="item-info-item">
                  <h2>{item.name}</h2>
                </div>
                <div>
                  <span className="item-info-rarity">
                    <strong>
                      <u>Rarity:</u>{" "}
                    </strong>{" "}
                  </span>
                  {item.rarity.name}
                </div>
                <div className="item-info-description">
                  <span>
                    <strong>
                      <u>Description:</u>{" "}
                    </strong>
                  </span>
                  {item.description}
                </div>
                <div>
                  <span className="item-info-cost">
                    <strong>
                      <u>Cost:</u>{" "}
                    </strong>
                  </span>
                  {item.cost} Gold
                </div>
                <div className="item-info-description">
                  <span>
                    <strong>
                      <u>Tags:</u>{" "}
                    </strong>
                  </span>
                  {allItemTags.map((tag) => {
                    if (tag.itemId === item.id) {
                      return <div>{tag.tag.name}</div>;
                    }
                  })}
                </div>
                <div>
                  <span className="item-info-cost">
                    <strong>
                      <u>In stock:</u>{" "}
                    </strong>
                  </span>
                  {itemQuantity}
                </div>
                <div className="container-btns">
                  <button
                    className="item-btn"
                    value={item.id}
                    onClick={handleSubmit}
                  >
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
