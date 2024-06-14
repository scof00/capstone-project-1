/* AUTHOR: Chelsea Brooks | PURPOSE: Nurseries List */

import "./Nurseries.css";
import { useEffect, useState } from "react";
import { deleteNursery, getAllNurseries } from "../../services/nurseryServices.jsx";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, Col, Row, Button } from "reactstrap";

export const NurseriesList = ({ currentUser }) => {
  const [allNurseries, setAllNurseries] = useState([]);
  const [myNurseries, setMyNurseries] = useState([]);

  //employee view for current nurseries used
  useEffect(() => {
    getAllNurseries().then((nurseriesArray) => {
      setAllNurseries(nurseriesArray);
    });
  }, []);

//function to handle deleting nursery from database 
  const handleDelete = (nursery) => {
    deleteNursery(nursery.id).then(() => {
      getAllNurseries().then((nurseryArray) => {
        setAllNurseries(nurseryArray);
      });
    });
  };

  // JSX to display allNurseries using Reactstrap
  return (
    <section>
      <header className="nursery-header">Nurseries</header>
      <Link to={`/newNursery`}>
        <Button color="success" size="sm">Add New Nursery</Button>
      </Link>
      <div className="nurseries">
        <div>
          <Row>
            {allNurseries.map((nursery) => {
              return (
                <Col key={nursery.id}>
                  <Card
                    style={{
                      width: "12rem",
                      padding: "1em",
                      margin: 5,
                    }}
                  >
                    <CardBody>
                      <h2>{nursery.businessName}</h2>
                      {/* Edit Nurseries Button */}
                      <Link to={`/editNursery/${nursery.id}`}>
                        <Button color="dark" size="sm" style={{ margin: 5 }}>
                          Edit
                        </Button>
                      </Link>

                      {/* Delete Nurseries Button */}
                      <Button
                        color="success"
                        size="sm"
                        onClick={() => handleDelete(nursery)}
                      >
                        Delete
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </section>
  );
};
