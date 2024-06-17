import { useEffect, useState } from "react";
import "./gold.css";
import { getNonAdminUsers } from "../../services/userServices";
export const GoldForm = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getNonAdminUsers().then((array) => {
            setUsers(array)
        })
    },[])


  return (
    <div>
      <form className="add-gold-form">
        <h2>Give a Player Gold</h2>
        <div className="inputs">
            <fieldset>
                <div className="form-div">
                    <label>Select Player: </label>
                    <br></br>
                    <select className="player-filter">
                        <option value="0">Player</option>
                        {users.map((user) => {
                            return(
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            )
                        })}
                    </select>
                    
                </div>
            </fieldset>
            <fieldset>
                <div className="form-div">
                <input
                    type="number"
                    required
                    placeholder="Amount of Gold"
                    className="form-info"
                    >
                    </input>
                </div>
            </fieldset>
        </div>
      </form>
    </div>
  );
};
