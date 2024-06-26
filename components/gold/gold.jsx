import { useEffect, useState } from "react";
import "./gold.css";
import { addGold, getUserById } from "../../services/userServices";
import { useNavigate, useParams } from "react-router";
export const GoldForm = () => {
    //This is the page for adding manually setting the gold for a user's account as the Dungeon Master (DM).
    //DM selects a user to set the gold of.
    const [user, setUser] = useState({})
    const {userId} = useParams()

    useEffect(() => {
        getUserById(userId).then((data) => {
            const userObj = data
            setUser(userObj)
        })
    },[])

    const navigate= useNavigate()
    //This makes a PUT to set the corresponding user's gold.
    const handleSave = (event) => {
        event.preventDefault()
        const goldAdded ={
            id: user.id,
            gold: user.gold,
            isAdmin: false,
            name: user.name,
            password: user.password
        }
        addGold(goldAdded).then(
            navigate("/players")
        )
    }

  //DOM script
  return (
    <div>
      <form className="add-gold-form">
        <h2>Give gold to {user.name}</h2>
        <div className="inputs">
            <fieldset>
                <div className="form-div">
                <input
                    type="number"
                    required
                    placeholder="Set new amount"
                    className="form-info"
                    onChange={(event) => {
                        const userCopy = {...user}
                        userCopy.gold = event.target.value
                        setUser(userCopy)
                    }}
                    >
                    </input>
                </div>
            </fieldset>
            <fieldset>
                <button onClick={handleSave} className="form-btn">Add Gold</button>
            </fieldset>
        </div>
      </form>
    </div>
  );
};
