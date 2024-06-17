import { Outlet, Route, Routes } from "react-router";
import { CustomerNavbar } from "../components/navbar/customerNavbar";
import { PlayerShop } from "../components/shop/playerShop";
import { useEffect, useState } from "react";

export const CustomerViews = () => {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    const localShopUser = localStorage.getItem("shop_user")
    const shopUserObj = JSON.parse(localShopUser)
    setCurrentUser(shopUserObj)
  },[])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNavbar currentUser={currentUser}/>
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<PlayerShop currentUser={currentUser}/>} />

      </Route>
    </Routes>
  );
};
