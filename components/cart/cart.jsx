import { useEffect, useState } from "react";
import "./cart.css";
import { getCartItems } from "../../services/cartService";

export const Cart = ({ currentUser }) => {
  const [cartItems, setCartItems] = useState([]);
  const [foundCartItems, setFoundCartItems] = useState([]);

  useEffect(() => {
    getCartItems().then((array) => {
      setCartItems(array);
    });
  }, []);

  useEffect(() => {
    const foundItems = cartItems.filter(
      (item) => item.userId === currentUser.id
    );
    setFoundCartItems(foundItems);
  }, [cartItems]);

  let totalCost = 0
  return (
  <div className="cart">
    <h2>Your Order</h2>
    {foundCartItems.map((item) => {
        totalCost += parseInt(item.item.cost)
        return(
            <div className="cart-item" key={item.id}>
                <p>{item.item.name} </p>
                <p> . . . {item.item.cost}</p>
            </div>
        )
    })}
    <div>
        <p>Total: {totalCost}</p>
    </div>
    <div>
        <button>Purchase</button>
    </div>
  </div>
);
};
