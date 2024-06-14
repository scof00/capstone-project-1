// shows list of all current distributors
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAllDistributors } from "./distributorService.jsx";
import { deleteDistributor } from "./distributorService.jsx";
import { useEffect } from "react";

export const DistributorList = ({}) => {
    const [allDistributors, setAllDistributors] = useState([])



    useEffect(() => {
        getAllDistributors().then((distributorsArray) => {
            setAllDistributors(distributorsArray)
        })
    },[]);

    const handleDelete = (distributor) => {
        deleteDistributor(distributor.id).then(() => {
          getAllDistributors().then((distributorsArray) => {
            setAllDistributors(distributorsArray);
          });
        });
      };


    return (
        <div className= "distributors-container">
            <Link to={`/addDistributor`} ><button className="distributor-btn">Add New Distributor</button></Link>
            <h2>Distributors</h2>
            <article className= "distributors">
            <div className="distributors">
                {allDistributors.map((distributor) => {
                    return(
                        <div key={distributor.id} className="distributor">
                            <h2>{distributor.businessName}</h2>
                            <div className="card-buttons">
                        <Link to={`/distributors/editDistributor/${distributor.id}`}>
                            <button className="distributor-btn">Edit</button>
                        </Link>
                        <button
                             className="distributor-btn"
                            onClick={() => handleDelete(distributor)}
                        >
                             Delete
                            </button>
                        </div>


                        </div>
                    )
                })}
            </div>

            </article>

        </div>
    )






}