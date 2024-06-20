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

  const [allItemTags, setAllItemTags] = useState([])

  const [taggedItems, setTaggedItems] = useState([])

  const [searchTerm, setSearchTerm] = useState("");

  const [filteredItems, setFilteredItems] = useState([]);

  const [itemFilter, setItemFilter] = useState(0);

  const [tagFilter, setTagFilter] = useState(0)


  useEffect(() => {
    getAllUnsoldItems().then((itemsArray) => setItems(itemsArray));
  }, []);

  useEffect(()=>{
    getItemsFromItemTags().then((array) => setTaggedItems(array))
  },[])

  useEffect(() => {
    getItemTags().then((array) => {
      setAllItemTags(array)
    })
  },[])

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
      const filtered = items.filter((item) => parseInt(item.rarity.id)=== 4);
      setFilteredItems(filtered);
    } else if (itemFilter == 5) {
      const filtered = items.filter((item) => parseInt(item.rarity.id) === 5);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [itemFilter, items]);

  useEffect(()=>{
    if(tagFilter == 1){
      const filtered = taggedItems.filter((item) => item.tagId === 1)
      setFilteredItems(filtered)
    }
  },[tagFilter, items])

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
                <u>Tags: </u>
                {allItemTags.map((tag) => {
                  if(tag.itemId === item.id) {
                    return(
                      <div>{tag.tag.name}</div>
                    )
                  }
                })}
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
