// gives options to create new distributor

import { createDistributor } from "./distributorService.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddDistributor = () => {
  const [distributor, setDistributor] = useState({
    businessName: "",
    markup: 0,
  });
  const navigate = useNavigate();

  const handleSave = (e) => {
      e.preventDefault();
      if (distributor.businessName && distributor.markup) {
          const newDistributor = {
              businessName: distributor.businessName,
              markup: distributor.markup,

          };

    createDistributor(newDistributor).then(() => {
        navigate("/distributors");
    })
  } else {
      window.alert("Please fill out all fields");
  }}

  return (
    <div>
      <form>
        <h2>New Distributor</h2>
        <fieldset>
          <input
            type="text"
            className="form-control"
            placeholder="Distributor Name"
            value={distributor.businessName}
            onChange={(e) => {
              const distributorCopy = { ...distributor };
              distributorCopy.businessName = e.target.value;
              setDistributor(distributorCopy);}}
          ></input>
        </fieldset>
        <fieldset>
        <input
          text="text"
          className="form-control"
          placeholder="Markup"
          onChange={(event) => {
            const distributorCopy = { ...distributor };
            distributorCopy.markup = event.target.value;
            setDistributor(distributorCopy);
          }}
        ></input>
      </fieldset>
        <fieldset>
          <div className="form-group">
            <button onClick={handleSave} className="distributor-btn">Save</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
