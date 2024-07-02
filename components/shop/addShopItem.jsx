import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getItemById } from "../../services/itemsService";
import "./shop.css"
import { AddItemToShop } from "../../services/shopService";

export const AddShopItem = () => {
  //State that will temporarily hold the item object before it is pushed to the shopItems database.
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    getItemById(itemId).then((data) => {
      setItem(data);
    });
  }, []);

  const navigate = useNavigate()
//Function that handles the submission of a new item to appear in the shop.
  const submitItem = (event) => {
    event.preventDefault()
    const newItem = {
        name: item.name,
        rarityId: item.rarityId,
        itemId: item.id,
        quantity: item.quantity
      };
      AddItemToShop(newItem).then(() => {
        navigate("/");
      });
  }

//DOM script for the form to add an item to the shop. This is where the DM will also set the quantity of the item as it appears in the shop.
  return (
    <form className="add-item-form">
      <h2>{item.name}</h2>
      <p><strong>Rarity: </strong> {item.rarity?.name}</p>
      <p><strong>Description: </strong>{item.description}</p>
      <p><strong>Cost: </strong> {item.cost} </p>
      <fieldset>
        <label><strong>Quantity: </strong></label>
        <input
        type="number"
        required
        placeholder="# of this item available"
        onChange={(event) => {
            const itemCopy = {...item}
            itemCopy.quantity = event.target.value
            setItem(itemCopy)
        }}
        >
        </input>
      </fieldset>

      <fieldset>
        <button className="form-btn" onClick={submitItem}>Add Item to Shop</button>
      </fieldset>
    </form>
  );
};
