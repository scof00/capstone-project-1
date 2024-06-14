import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNurseryDistributors } from "../../services/nurseryServices";
import { getFlowerById } from "../../services/flowerService";

export const CustomerFlowerDetails = () => {
  const [foundFlower, setFoundFlower] = useState([]);
  const { flowerId } = useParams();

  const [nurseryDistributors, setNurseryDistributors] = useState([])

  useEffect(() => {
    getFlowerById(flowerId).then((data) => {
      setFoundFlower(data);
    });
  }, []);

  useEffect(() => {
    getNurseryDistributors().then((array) => {
        setNurseryDistributors(array)
    })
  },[]);

  return (
    <div>
      <div>
        <img src={foundFlower.img} className="flower-img"></img>
        <h2>{foundFlower.name}</h2>
        <p>
          <i>{foundFlower.species}</i>
        </p>
        <p>Color: {foundFlower.color}</p>
      </div>
    </div>
  );
};
