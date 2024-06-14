import { useEffect, useState } from "react";
import {
  getNurseryById,
  updateNursery,
} from "../../services/nurseryServices.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const EditNursery = () => {
  const [myNursery, setMyNursery] = useState({});
  const { nurseryId } = useParams();

  useEffect(() => {
    getNurseryById(nurseryId).then((data) => {
      const nurseryObj = data;
      setMyNursery(nurseryObj);
    });
  }, [nurseryId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedNursery = {
      businessName: myNursery.businessName,
      id: myNursery.id,
    };
    updateNursery(editedNursery).then(() => {
      navigate("/Nurseries");
    });
  };
  const navigate = useNavigate();

  return (
    <div className="form">
      <form>
        <h2 className="header-edit">Edit Nursery</h2>
        <fieldset>
          <div>
            <input
              text="text"
              className="form-control"
              placeholder={myNursery.businessName}
              onChange={(event) => {
                const nurseryCopy = { ...myNursery };
                nurseryCopy.businessName = event.target.value;
                setMyNursery(nurseryCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset className="form-group">
          <button className="form-btn" btn-info onClick={handleSave}>
            Save Nursery
          </button>
        </fieldset>
      </form>
    </div>
  );
};
