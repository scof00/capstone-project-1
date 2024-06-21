import { useEffect, useState } from "react";
import "./addItem.css";
import { getRarities } from "../../services/rarityservice";
import { useNavigate } from "react-router-dom";
import { createItem, getAllUnsoldItems } from "../../services/itemsService";
import { createItemTags, getTags } from "../../services/tagsService";

export const AddItems = () => {
  const [item, setItem] = useState({});

  const [rarities, setRarities] = useState([]);

  const [tags, setTags] = useState([]);

  const [itemTags, setItemTags] = useState([]);

  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    getRarities().then((raritiesArray) => setRarities(raritiesArray));
  }, []);

  useEffect(() => {
    getTags().then((array) => setTags(array));
  }, []);

  useEffect(() => {
    getAllUnsoldItems().then((array) => {
      setAllItems(array);
    });
  }, []);

  const navigate = useNavigate();
  const selectedTags = [];

  const handleSave = (event) => {
    event.preventDefault();
    setItemTags(selectedTags);
    const newItem = {
      name: item.name,
      description: item.description,
      cost: item.cost,
      rarityId: item.rarityId,
    };
    createItem(newItem)
      .then((data) => {
        if (data) {
          {
            selectedTags.map((tag) => {
              const newTag = {
                tagId: tag,
                itemId: data,
              };
              createItemTags(newTag);
            });
          }
        }
      })
      .then(() => {
        navigate("/items");
      });
  };

  return (
    <div>
      <form className="add-item-form">
        <h2>Add Item</h2>
        <div className="inputs">
          <fieldset>
            <div className="form-div">
              <label>Item: </label>
              <br></br>
              <input
                type="text"
                required
                placeholder="Item Name"
                className="form-info"
                onChange={(event) => {
                  const itemCopy = { ...item };
                  itemCopy.name = event.target.value;
                  setItem(itemCopy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-div">
              <label>Rarity: </label>
              <br></br>
              <select
                className="rarity-filter"
                onChange={(event) => {
                  const itemCopy = { ...item };
                  itemCopy.rarityId = event.target.value;
                  setItem(itemCopy);
                }}
              >
                <option value="0">Rarity</option>
                {rarities.map((rarity) => {
                  return (
                    <option key={rarity.id} value={rarity.id}>
                      {rarity.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-div">
              <label>Description: </label>
              <br></br>
              <input
                type="text"
                required
                placeholder="Item Description"
                className="form-info"
                onChange={(event) => {
                  const itemCopy = { ...item };
                  itemCopy.description = event.target.value;
                  setItem(itemCopy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-div">
              <label>Cost: </label>
              <br></br>
              <input
                type="number"
                required
                placeholder="Item Cost (in gold)"
                className="form-info"
                onChange={(event) => {
                  const itemCopy = { ...item };
                  itemCopy.cost = event.target.value;
                  setItem(itemCopy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <p>Select Tags: </p>
              {tags.map((tag) => {
                return (
                  <div className="item-tags">
                    <input
                      type="checkbox"
                      key={tag.id}
                      id={tag.id}
                      value={tag.id}
                      onClick={(event) => {
                        event.target.checked
                          ? selectedTags.push(parseInt(event.target.value))
                          : "";

                        console.log(selectedTags);
                      }}
                    ></input>
                    <label>{tag.name}</label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </div>
        <fieldset>
          <button className="form-btn" onClick={handleSave}>
            Save Item
          </button>
        </fieldset>
      </form>
    </div>
  );
};
