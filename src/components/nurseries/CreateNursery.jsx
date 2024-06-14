import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNursery } from "../../services/nurseryServices.jsx";
import { Button, Input, Form } from "reactstrap";
import "./Nurseries.css"

export const CreateNursery = ({ currentUser }) => {
  const [newNursery, setNewNursery] = useState({ businessName: "" });

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const addNursery = {
      userId: currentUser.id,
      businessName: newNursery.businessName,
    };
    createNursery(newNursery).then(() => {
      navigate("/nurseryDetails");
    });
  };

  
  return (
    <Form>
        <h2 className="header-new-nursery">Add New Nursery</h2>
        <div>
        <Input
          type="text"
          text="text"
          placeholder="Business Name"
          onChange={(event) => {
            const nurseryCopy = { ...newNursery };
            nurseryCopy.businessName = event.target.value;
            setNewNursery(nurseryCopy);
          }}
        />
        </div>
      <fieldset>
        <Button color="success" size="sm" onClick={handleSave}>
          Submit
        </Button>
      </fieldset>
    </Form>
  );
};
