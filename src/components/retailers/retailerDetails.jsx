import { useEffect, useState } from "react";
import {
  RetailerDistributorInfo,
  getNurseryInformation,
  getRetailerById,
  getRetailerDetails,
} from "../../services/retailerServices";
import { useParams } from "react-router-dom";
import "./retailers.css";

export const RetailerDetails = () => {
  const [retailer, setRetailer] = useState({});
  const [distributorNurseryInfo, setDistributorNurseryInfo] = useState([]);
  const [foundDistributorInfo, setFoundDistributorInfo] = useState([]);
  const [nurseryInfo, setNurseryInfo] = useState([]);
  const [foundFlower, setFoundFlower] = useState([]);

  const { retailerId } = useParams();

  useEffect(() => {
    getRetailerDetails(retailerId).then((data) => {
      const retailerObj = data;
      setRetailer(retailerObj);
    });
  }, [retailerId]);

  useEffect(() => {
    RetailerDistributorInfo().then((data) => {
      setDistributorNurseryInfo(data);
    });
  }, []);

  useEffect(() => {
    const info = distributorNurseryInfo.filter(
      (item) => item.distributorId === retailer.distributorId
    );
    setFoundDistributorInfo(info);
  }, [retailer, distributorNurseryInfo]);

  useEffect(() => {
    getNurseryInformation().then((data) => {
      setNurseryInfo(data);
    });
  }, []);

  useEffect(() => {
    const flowerInfo = nurseryInfo.filter((item) => {
      item.nurseryId === foundDistributorInfo[2];
    });
    setFoundFlower(flowerInfo);
  }, []);

  let distributorMarkup = 0;
  let nurseryId = 0;

  return (
    <div>
      <div>
        <h2>{retailer.businessName}</h2>
        <p>{retailer.address}</p>
        <p>Markup: {retailer.markup}x</p>
        <p>Distributor: {retailer.distributor?.businessName}</p>
        <div>
          <p>Nursery: </p>
          {foundDistributorInfo.map((item) => {
            distributorMarkup = item.distributor.markup;
            nurseryId = item.nurseryId;
            return <p>{item.nursery.businessName}</p>;
          })}
        </div>
        <p>Flowers:</p>
        <div className="flower-display">
          {nurseryInfo.map((item) => {
            if (item.nurseryId === nurseryId) {
              return (
                <div className="flower-card">
                  <img
                    src={item.flower.img}
                    className="retailer-flower-img"
                  ></img>
                  <div className="flower-info">
                    <h3>{item.flower.name}</h3>
                    <p>
                      <i>{item.flower.species}</i>
                    </p>
                    <p>Color: {item.flower.color}</p>
                    <p>
                      Cost: $
                      {(
                        item.cost *
                        retailer.markup *
                        distributorMarkup
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
