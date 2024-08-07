import { useEffect, useState } from "react";
import { deleteShopItems, getShopItems } from "../../services/shopService";
import { Filters } from "../filters/filter";
import { getAllUnsoldItems } from "../../services/itemsService";
import { getItemTags } from "../../services/tagsService";

export const Shop = () => {
  //This is the same exact setup as the playerShop. It serves as a DM view of the shop so that they can see what a normal user sees without having to logout.
  //The only difference is that instead of an option add an item to your cart, there is a button to remove an item from the store.
  const [allItems, setAllItems] = useState([]);
  const [shopItems, setShopItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemFilter, setItemFilter] = useState(0);
  const [tagFilter, setTagFilter] = useState(0);
  const [allItemTags, setAllItemTags] = useState([]);

  useEffect(() => {
    getAllUnsoldItems().then((array) => {
      setAllItems(array);
    });
  }, []);

  useEffect(() => {
    getItemTags().then((array) => {
      setAllItemTags(array);
    });
  }, []);

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

  const handleDelete = (item) => {
    console.log(item)
    {item.shopItems.map((shopItem) => {
      deleteShopItems(shopItem.id)
      .then(() => {
        getAllUnsoldItems().then((array) => {
          setAllItems(array)
        })
      });
      
    })}

  };

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

  useEffect(() => {
    const foundItem = shopItems.filter((item) => {
      return item?.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
    setFilteredItems(foundItem);
  }, [searchTerm, shopItems]);

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

  return (
    <>
      <h1 className="page-title">Shop</h1>
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
          return (
            <details className="itemContainer" key={item.id}>
              <summary className="item-info-item">{item.name}</summary>
              <div className="item-info-rarity">
                <span >
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
              <div className="item-info-cost">
                <span >
                  <strong>
                    <u>Cost:</u>{" "}
                  </strong>
                </span>
                {item.item?.cost} Gold
              </div>
              <div className="item-info-cost">
                <strong>
                  <u>Tags:</u>{" "}
                </strong>
                {allItemTags.map((tag) => {
                  if (tag.itemId === item.id) {
                    return <div>{tag.tag.name}</div>;
                  }
                })}
              </div>
              {/* <div className="item-info-cost">
                <span>
                  <strong>
                    <u>In stock:</u>{" "}
                  </strong>
                </span>
                {itemQuantity}
              </div> */}
              <div className="container-btns">
                <button className="item-btn" onClick={() => handleDelete(item)}>
                  Remove
                </button>
              </div>
            </details>
          );
        })}
      </div>
    </>
  );
};
