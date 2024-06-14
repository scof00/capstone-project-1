import { useEffect, useState } from "react";
import "./addItem.css";
import { getRarities } from "../../services/rarityservice";
import { useNavigate } from "react-router-dom";

export const AddItems = () => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    cost: 0,
    image: "",
    rarityId: 0,
  });

  const [rarities, setRarities] = useState([]);
  useEffect(() => {
    getRarities().then((raritiesArray) => setRarities(raritiesArray));
  }, []);
  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    if (item.description) {
      const newItem = {
        name: item.name,
        description: item.description,
        cost: item.cost,
        rarityId: item.rarityId,
        image: item.image,
        purchased: false,
      };
      AddItems(newItem).then(() => {
        navigate("/");
      });
    } else {
      window.alert("Please finishing filling out the item.");
    }
  };

  return (
    <div>
      <form className="add-item-form">
        <h2>Add Item</h2>
        <fieldset>
          <div className="form-div">
            <label>Item: </label>
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
            <select
              className="rarity-filter"
              onChange={(event) => {
                const itemCopy = { ...item };
                itemCopy.rarityId = event.target.value;
                setItem(itemCopy);
              }}
            >
              <option value="0">Sort by Rarity</option>
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
          <div className="form-div">
            <label>Image: </label>
            <input
              type="text"
              required
              placeholder="Item Image URL"
              className="form-info"
              onChange={(event) => {
                const itemCopy = { ...item };
                itemCopy.image = event.target.value;
                setItem(itemCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-div">
            <button className="form-btn" onClick={handleSave}>
              Save Item
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
