import { useEffect, useState } from "react";
import {
  changItemStatus,
  deleteItems,
  getAllUnsoldItems,
  getItemsFromItemTags,
} from "../../services/itemsService";
import "./items.css";

import { Filters } from "../filters/filter";
import { Link } from "react-router-dom";
import { getItemTags } from "../../services/tagsService";

export const ItemsList = () => {
  const [items, setItems] = useState([]);

  const [allItemTags, setAllItemTags] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [filteredItems, setFilteredItems] = useState([]);

  const [itemFilter, setItemFilter] = useState(0);

  const [tagFilter, setTagFilter] = useState(0);

  useEffect(() => {
    getAllUnsoldItems().then((itemsArray) => setItems(itemsArray));
  }, []);

  useEffect(() => {
    getItemTags().then((array) => {
      setAllItemTags(array);
    });
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
      const filtered = items.filter((item) => parseInt(item.rarityId) === 1);
      setFilteredItems(filtered);
    } else if (itemFilter == 2) {
      const filtered = items.filter((item) => parseInt(item.rarity.id) === 2);
      setFilteredItems(filtered);
    } else if (itemFilter == 3) {
      const filtered = items.filter((item) => parseInt(item.rarity.id) === 3);
      setFilteredItems(filtered);
    } else if (itemFilter == 4) {
      const filtered = items.filter((item) => parseInt(item.rarity.id) === 4);
      setFilteredItems(filtered);
    } else if (itemFilter == 5) {
      const filtered = items.filter((item) => parseInt(item.rarity.id) === 5);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [itemFilter, items]);

  useEffect(() => {
    if (tagFilter == 0) {
      let filtered = items;
      setFilteredItems(filtered);
    } else if (tagFilter == 1) {
      let filtered = [];
      {
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
        items.map((item) => {
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
  }, [tagFilter, items]);

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
        setTagFilter={setTagFilter}
        setSearchTerm={setSearchTerm}
        setItemFilter={setItemFilter}
        itemFilter={itemFilter}
        searchTerm={searchTerm}
      />
      <div className="items">
        {filteredItems.map((item) => {
          // {item.itemTags.map((tag) => {
          //   return (
          //     console.log(tag.tagId)
          //   )
          // })}
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
                <u>Tags: </u>
                {allItemTags.map((tag) => {
                  if (tag.itemId === item.id) {
                    return <div>{tag.tag.name}</div>;
                  }
                })}
              </div>
              <div>
                <span className="item-info-cost">
                  <strong>
                    <u>Cost:</u>{" "}
                  </strong>
                </span>
                {item.cost} Gold
              </div>
              <div className="container-btns">
                <button className="item-btn" onClick={() => handleDelete(item)}>
                  Delete
                </button>
                <Link to={`/items/edit/${item.id}`}>
                  <button className="item-btn">Edit</button>
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
