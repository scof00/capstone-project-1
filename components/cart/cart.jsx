import { useEffect, useState } from "react";
import "./cart.css";
import {
  deleteCartItem,
  getCartItems,
  purchaseItems,
} from "../../services/cartService";
import { useNavigate } from "react-router";
import { addGold, setCurrentUserGold } from "../../services/userServices";
import { getShopItems, reduceQuantity } from "../../services/shopService";

export const Cart = ({ currentUser }) => {
  const [cartItems, setCartItems] = useState([]);
  const [foundCartItems, setFoundCartItems] = useState([]);
  const [shopItems, setShopItems] = useState([])

  useEffect(() => {
    getCartItems().then((array) => {
      setCartItems(array);
    });
  }, []);

  useEffect(() => {
    getShopItems().then((array) => {
      setShopItems(array)
    })
  },[])

  useEffect(() => {
    const foundItems = cartItems.filter(
      (item) => item.userId === currentUser.id
    );
    setFoundCartItems(foundItems);
  }, [cartItems]);

  let totalGold = 0;

  let totalCost = 0;

  const handleDelete = (event) => {
    console.log(event)
    
      {shopItems.map((shop) => {
        if(shop.itemId === event.item.id){
          let quantity = shop.quantity
          const returnItem = {
            itemId: shop.itemId,
            rarityId: shop.rarityId,
            name: shop.name,
            quantity: quantity + 1,
            id: shop.id
          }
          reduceQuantity(returnItem)
        }
      })}
    deleteCartItem(event.id).then(() => {
      getCartItems().then((array) => {
        setCartItems(array);
      });
    });
  };

  const navigate = useNavigate();

  const handleBuy = (event) => {
    event.preventDefault();
    if (totalCost <= totalGold) {
      {
        foundCartItems.map((item) => {
          const newItem = {
            userId: item.userId,
            itemId: item.itemId,
          };
          purchaseItems(newItem);
        });
      }
      {
        foundCartItems.map((item) => {
          deleteCartItem(item.id).then(() => {
            getCartItems().then((array) => {
              setCartItems(array);
            });
          });
        });
      }
      const newPlayerTotal = totalGold - totalCost;
      const newPlayerInfo = {
        id: currentUser.id,
        gold: newPlayerTotal,
        isAdmin: currentUser.isAdmin,
        name: currentUser.name,
        password: currentUser.password,
      };
      setCurrentUserGold(newPlayerInfo)
        .then(() => {
          navigate("/purchases");
        })
        .then(() => {
          window.location.reload();
        });
    } else {
      alert("Insufficient Funds");
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="go-right">
        {foundCartItems.map((item) => {
          totalCost += parseInt(item.item.cost);
          totalGold = parseInt(item.user.gold);
          return (
            <div className="cart-item" key={item.id}>
              <p>{item.item.name} </p>
              <p className="price">
                {" "}
                . . . {item.item.cost}{" "}
                <button
                  className="remove-item"
                  onClick={() => handleDelete(item)}
                >
                  {" "}
                  <u>x</u>
                </button>
              </p>
            </div>
          );
        })}
        <div>
          <p>Total: {totalCost}</p>
        </div>
        <div>
          <button onClick={handleBuy}>Purchase</button>
        </div>
      </div>
    </div>
  );
};
