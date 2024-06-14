import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRetailerById, updateRetailer } from "../../services/retailerServices";
import { getAllDistributors } from "../../services/distributorService";

export const EditRetailer = () => {
  const [retailer, setRetailer] = useState({});
  const [ distributors, setDistributors] = useState([])
  const { retailerId } = useParams();
  useEffect(() => {
    getRetailerById(retailerId).then((data) => {
      const retailerObj = data;
      setRetailer(retailerObj);
    });
  }, [retailerId]);
  useEffect(() => {
    getAllDistributors().then((distributorsArray) => {
      setDistributors(distributorsArray);
    });
  }, []);
  const navigate = useNavigate()

  const handleSave = (event) => {
    event.preventDefault()
    const editedRetailer = {
        businessName: retailer.businessName,
        address: retailer.address,
        distributorId: retailer.distributorId,
        markup: retailer.markup,
        id: retailer.id
    }
    updateRetailer(editedRetailer).then(() => {
        navigate("/retailers")
    })
  }

  const handleCancel = (event) => {
    event.preventDefault()
    navigate("/retailers")
  }

  return (
    <div className="form">
      <form>
        <h2>Edit Retailer</h2>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={retailer.businessName}
              onChange={(event) => {
                const retailerCopy = { ...retailer };
                retailerCopy.businessName = event.target.value;
                setRetailer(retailerCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={retailer.address}
              onChange={(event) => {
                const retailerCopy = { ...retailer };
                retailerCopy.address = event.target.value;
                setRetailer(retailerCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <select
              className="dropdown"
              onChange={(event) => {
                const retailerCopy = { ...retailer };
                retailerCopy.distributorId = event.target.value;
                setRetailer(retailerCopy);
              }}
            >
              <option value="0">Choose your distributor</option>
              {distributors.map((distributor) => {
                return (
                  <option key={distributor.id} value={distributor.id}>
                    {distributor.businessName}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>
        <fieldset>
        <input
        type="number"
        className="form-control"
        placeholder="Markup"
        onChange={(event) => {
            const retailerCopy = { ...retailer };
            retailerCopy.markup = event.target.value;
            setRetailer(retailerCopy);
          }}
        ></input>
        <p>Examples: <br></br>
            2% = 1.02 <br></br>
            10% = 1.1 <br></br>
            200% = 2

        </p>
      </fieldset>
      <fieldset>
        <button onClick={handleCancel}>Cancel</button>
      </fieldset>
        <fieldset className="form-group">
          <button onClick={handleSave}>Save retailer</button>
        </fieldset>
      </form>
    </div>
  );
};
