import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDistributorById } from "./distributorService.jsx";
import { updateDistributor } from "./distributorService.jsx";

export const EditDistributor = () => {
    const [distributor, setDistributor] = useState({});
    const { distributorId } = useParams();
    
    useEffect(() => {
      getDistributorById(distributorId).then((data) => {
        const distributorObj = data;
        setDistributor(distributorObj);
      });
    }, [distributorId]);
    
    const handleSave = (event) => {
      event.preventDefault()
      const editedDistributor = {
          businessName: distributor.businessName,
          markup: distributor.markup,
          id: distributor.id
      }
      updateDistributor(editedDistributor).then(() => {
          navigate("/distributors")
      })
    };
    const navigate = useNavigate();
  
  
    return (
      <div className="form">
        <form>
          <h2>Edit Distributor</h2>
          <fieldset>
            <div className="form-title">
              <input
                text="text"
                className="form-control"
                placeholder={distributor.businessName}
                onChange={(event) => {
                  const distributorCopy = { ...distributor };
                  distributorCopy.businessName = event.target.value;
                  setDistributor(distributorCopy);
                }}
              ></input>
            </div>
          </fieldset>
          <fieldset className="form-group">
            <button onClick={handleSave}>Save Distributor</button>
          </fieldset>
        </form>
      </div>
    );
  };
  