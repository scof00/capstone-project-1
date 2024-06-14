import { useNavigate } from "react-router-dom"
import { deleteFlower } from "../../services/flowerService.jsx"

export const getAllFlowers = ({ flower, getAndSetFlowers}) => {

    const navigate = useNavigate()

    const handleDelete = () => {
        deleteFlower(flower.id).then(() => {
            getAndSetFlowers()
        })
    }

    return (
        <section className="flower" >
            <header className="flower-info">
                {flower.name}
            </header>
            <div>
                {flower.species}
            </div>
            <div>
                {flower.color}
            </div>
            <div>
                {flower.img}
            </div>
            <div className="btn-container">
                 <button
                    className="filter-btn btn-primary"
                    onClick={() => {
                        navigate(`/flowers/edit/${flower.id}`)
                    }}
                  >
                    Edit
                </button>                
                <button className="btn btn-secondary" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </section>
    )
}