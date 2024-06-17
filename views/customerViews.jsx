import { Outlet, Route, Routes } from "react-router";
import { CustomerNavbar } from "../components/navbar/customerNavbar";
import { PlayerShop } from "../components/shop/playerShop";

export const CustomerViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNavbar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<PlayerShop />} />

      </Route>
    </Routes>
  );
};
