import { useEffect, useState } from "react";
import { getAllDistributors } from "../../services/distributorService";
import { createRetailer } from "../../services/retailerServices";
import { useNavigate } from "react-router-dom";

export const AddRetailer = () => {
  const [newRetailer, setNewRetailer] = useState({
    businessName: "",
    address: "",
    distributorId: 0,
    markup: 0,
  });
  const [distributors, setDistributors] = useState([]);
  useEffect(() => {
    getAllDistributors().then((distributorsArray) => {
      setDistributors(distributorsArray);
    });
  }, []);

  const navigate = useNavigate()

  const handleSave = (event) => {
    event.preventDefault()
    const retailer = {
        businessName: newRetailer.businessName,
        address: newRetailer.address,
        distributorId: newRetailer.distributorId,
        markup: newRetailer.markup
    }
    createRetailer(retailer).then(() => {
        navigate("/retailers")
    })
  }

  return (
    <form className="new-retailer-form">
      <h2>New Retailer</h2>
      <fieldset>
        <input
          text="text"
          className="form-control"
          placeholder="Retailer Name"
          onChange={(event) => {
            const retailerCopy = { ...newRetailer };
            retailerCopy.businessName = event.target.value;
            setNewRetailer(retailerCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <input
          text="text"
          className="form-control"
          placeholder="Physical Address"
          onChange={(event) => {
            const retailerCopy = { ...newRetailer };
            retailerCopy.address = event.target.value;
            setNewRetailer(retailerCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <select className="dropdown" onChange={(event) => {
            const retailerCopy = { ...newRetailer };
            retailerCopy.distributorId = event.target.value;
            setNewRetailer(retailerCopy);
        }}>
          <option value="0">Choose your distributor</option>
          {distributors.map((distributor) => {
            return (
              <option key={distributor.id} value={distributor.id}>
                {distributor.businessName}
              </option>
            );
          })}
        </select>
      </fieldset>
      <fieldset>
        <input
        type="number"
        className="form-control"
        placeholder="Markup"
        onChange={(event) => {
            const retailerCopy = { ...newRetailer };
            retailerCopy.markup = event.target.value;
            setNewRetailer(retailerCopy);
          }}
        ></input>
        <p>Examples: <br></br>
            2% = 1.02 <br></br>
            10% = 1.1 <br></br>
            200% = 2

        </p>
      </fieldset>
      <fieldset>
        <button onClick={handleSave} className="retailer-btn">Save Retailer</button>
      </fieldset>
    </form>
  );
};
