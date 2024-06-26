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
  //State that grabs all items from the carts database
  const [cartItems, setCartItems] = useState([]);
  //cartItems is then filtered by userId and stored here. This is what is mapped below to display the user's cart.
  const [foundCartItems, setFoundCartItems] = useState([]);
  //State that stores all shop items. This is needed below to add to an item's quantity if they decide not to purchase it.
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
  //Sets the gold owned by the user, we get this info from local storage.
  let totalGold = 0;
  //Sets the total cost of the cart by adding the cost of all items.
  let totalCost = 0;
  //The delete function if a user decides not to purchase an item. It deletes the item from the cart and also makes a PUT to the shop database to restore the quantity of the item.
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
  //Function that handles the purchase of items. First, it checks that the user has enough gold to purchase items. If they do not, it triggers a window alert and won't let them purchase. 
  //If they do have enough currency, it maps through the foundCartItems state and creates a new entry in the purchasedItems bridgeTable, containing the userId and itemID.
  //It then maps through foundCartItems again to delete them from the cart, so it is blank after purchasing.
  //It then subtracts the cost of the purchased items from the user's gold count and makes a PUT to the user database to set their gold amount accordingly.
  const handleBuy = (event) => {
    event.preventDefault();
    if (totalCost < totalGold) {
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
  //DOM script
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
          <button onClick={handleBuy} className="form-btn">Purchase</button>
        </div>
      </div>
    </div>
  );
};
