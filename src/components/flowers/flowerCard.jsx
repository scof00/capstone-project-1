import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const FlowerCard = ({flowers, currentUser, resetState}) => {

    const [users, setUsers] = useState([])
    const [assignedUser, setAssignedUser] = useState({})

    useEffect(() => {
        getAllUsers().then(userFlowers => {
          setUsers(userFlowers)
        })
    }, [])


    useEffect(() => {
        const foundUser = users.find((user) => {      
          return user.id === flower?.userFlowers[0]?.userId});
        
        setAssignedUser(foundUser)
    }, [users, flower]) 
}