import { useEffect, useState } from "react";
import "./cart.css";
import { deleteCartItem, getCartItems } from "../../services/cartService";

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

  let totalCost = 0;

  const handleDelete = (item) => {
    deleteCartItem(item.id).then(() => {
      getCartItems().then((array) => {
        setCartItems(array);
      });
    });
  };

  return (
    <div className="cart">
      <h2>Your Order</h2>
      {foundCartItems.map((item) => {
        totalCost += parseInt(item.item.cost);
        return (
          <div className="cart-item" key={item.id}>
            <p>{item.item.name} </p>
            <p className="price"> . . . {item.item.cost}</p>
            <button className="remove-item" onClick={() => handleDelete(item)}> X</button>
          </div>
        );
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
