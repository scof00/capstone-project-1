import { Link } from "react-router-dom"
import "./welcome.css"

export const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="welcome-text">
                Welcome Weary Traveler, would you like to see our wares?
                <Link to="home"><button className="welcome-btn"> Enter Shop </button></Link>
            </div>
        </div>
    )
}