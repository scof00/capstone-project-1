import { Outlet, Route, Routes } from "react-router";
import { CustomerNavbar } from "../components/navbar/customerNavbar";

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
      ></Route>
    </Routes>
  );
};
