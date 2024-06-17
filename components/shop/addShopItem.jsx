import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getItemById } from "../../services/itemsService";
import "./shop.css"
import { AddItemToShop } from "../../services/shopService";

export const AddShopItem = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    getItemById(itemId).then((data) => {
      setItem(data);
    });
  }, []);

  const navigate = useNavigate()

  const submitItem = (event) => {
    event.preventDefault()
    const newItem = {
        name: item.name,
        description: item.description,
        cost: item.cost,
        rarityId: item.rarityId,
        quantity: item.quantity,
        itemId: item.id
      };
      AddItemToShop(newItem).then(() => {
        navigate("/");
      });
  }


  return (
    <form className="add-item-container">
      <h2>{item.name}</h2>
      <p><strong>Rarity: </strong> {item.rarity?.name}</p>
      <p><strong>Description: </strong>{item.description}</p>
      <p><strong>Cost: </strong> {item.cost} </p>
      <fieldset>
        <label><strong>Quantity: </strong></label>
        <input
        type="number"
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
        <button onClick={submitItem}>Add Item to Shop</button>
      </fieldset>
    </form>
  );
};
