import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getItemById, updateItem } from "../../services/itemsService";
import { getRarities } from "../../services/rarityservice";


export const EditItem = () => {
  //State for setting the selected item object
    const [item, setItem] = useState({})
    //Sets state for rarities
    const [rarities, setRarities] = useState([])


    const {itemId} = useParams()

    useEffect(() => {
        getItemById(itemId).then((data) => {
            const itemObj = data
            setItem(itemObj)
        })
    },[])

    useEffect(() => {
        getRarities().then((array) => {
            setRarities(array)
        })
    }, [])

    const navigate = useNavigate()
    //Function that saves the edited information for an item and then navigates back to the item page.
    const handleSave = (event) => {
        event.preventDefault()
        const editedItem = {
            name: item.name,
            id: item.id,
            description: item.description,
            cost: item.cost,
            rarityId: item.rarityId,

        }
        updateItem(editedItem).then(() => {
            navigate("/items")
        })
    }
    //DOM script
  return (
    <div>
      <form className="add-item-form">
        <h2>Edit Item</h2>
        <div className="inputs">
          <fieldset>
            <div className="form-div">
              <label>Item: </label>
              <br></br>
              <input
                type="text"
                required
                placeholder={item.name}
                className={"form-info"}
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
                placeholder={item.description}
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
                placeholder={item.cost}
                className="form-info"
                onChange={(event) => {
                  const itemCopy = { ...item };
                  itemCopy.cost = event.target.value;
                  setItem(itemCopy);
                }}
              />
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
