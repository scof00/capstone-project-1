import { Outlet, Route, Routes } from "react-router-dom";
import { CustomerNavBar } from "../components/nav bar/customerNavbar";
import { CustomerFlowers } from "../components/flowers/customerFlower";
import { CustomerFlowerDetails } from "../components/flowers/customerFlowerDetails";

export const CustomerViews = (currentUser) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNavBar />
            <Outlet />
          </>
        }
      >
        <Route path="flowers">
            <Route index element={<CustomerFlowers currentUser={currentUser}/>} />
            <Route path="customerFlowerDetails/:flowerId" element={<CustomerFlowerDetails currentUser={currentUser}/>}/>

        </Route>

      </Route>
    </Routes>
  );
};
