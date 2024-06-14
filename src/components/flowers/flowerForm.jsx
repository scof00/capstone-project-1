import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const FlowerForm = ({ currentUser }) => {
    const [flower, setFlower] = useState({name: "", species: "", color: "", img_link:""})

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (flower.name && flower.species && flower.color && flower.img) {
            const newFlower = {
                userId: currentUser,
                name: flower.name,
                species: flower.species,
                color: flower.color,
                image: flower.img,
            }

            createFlower(newFlower).then(() => {
                navigate("/flowers")
            })
        } else {
            window.alert("Please fill out all fields")
        }
    }

    return (
        <form>
            <h2>New Flower</h2>
            <fieldset>
                <div className="form-group">
                    <label>Name
                        <input
                            type="text"
                            className="form-control"
                            placeholder="flower name"
                            onChange={(event) => {
                                const flowerCopy = {...flower }
                                flowerCopy.name = event.target.value
                                setFlower(flowerCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Species
                        <input
                            type="text"
                            className="form-control"
                            placeholder="flower species"
                            onChange={(event) => {
                                const flowerCopy = {...flower }
                                flowerCopy.species = event.target.value
                                setFlower(flowerCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Color
                        <input
                            type="text"
                            className="form-control"
                            placeholder="flower color"
                            onChange={(event) => {
                                const flowerCopy = {...flower }
                                flowerCopy.color = event.target.value
                                setFlower(flowerCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <label>Image link
                        <input
                            type="text"
                            className="form-control"
                            placeholder="image link goes here"
                            onChange={(event) => {
                                const flowerCopy = {...flower }
                                flowerCopy.img = event.target.value
                                setFlower(flowerCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info"
                        onClick={handleSave}
                    >
                        Submit New Flower
                    </button>
                </div>
            </fieldset>                     
        </form>
    )
}