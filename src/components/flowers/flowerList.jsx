import { useState, useEffect } from "react"
import { getAllFlowers } from "../../services/flowerService.jsx"
import { useNavigate } from "react-router-dom"



export const FlowerList = ({currentUser}) => {
  const [userFlowers, setUserFlowers] = useState([])

  const navigate = useNavigate()

  const getAndSetFlowers = () => {
      getAllFlowers().then((flowersArray) => {
        
          setUserFlowers(flowersArray)
      })
  }

  useEffect(()=> {
    getAndSetFlowers()
}, [currentUser])

return (
  <div className="flowers-container">
      <h2>Available Flowers</h2>
      <article className="flowers">
          {userFlowers.map((flowerObj) => {
              return <div>
                {flowerObj.name}- 
                {flowerObj.species}- 
                {flowerObj.color}
                <img src= {flowerObj.img}></img>
              </div>
          })}
      </article>
      <button
              className="filter-btn btn-primary"
              onClick={() => {
                  navigate("/newFlower")
              }}
          >
              Add new flower
      </button>
  </div>
)
}

//   useEffect(() => {
//     getAllFlowers().then((flowers)=>{setAllFlowers(flowers)})
//   }, [])

//   return <article className="flowers" > Currently Available Flowers:
//       {allFlowers.map(flower => {
//         return <div className=""><p>{flower.name} {flower.species} {flower.color} {flower.img}</p></div>
//       })}
//     </article>
  
// }

// export default (newFlower) => {
//   return (
//     <Button color="blue">New Flower</Button>
//   );
// };
