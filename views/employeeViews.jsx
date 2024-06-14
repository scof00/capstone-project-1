import { useState } from "react";

import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { UnsoldItemsList } from "../components/items/itemsList";
import { AddItems } from "../components/addItem/addItem"
import { Purchases } from "../components/purchases/purchases";





export const EmployeeViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar/>
            <Outlet/>
          </>
        }
      >
        <Route index path="/" element={<UnsoldItemsList />} />
        <Route path="newItem" element={<AddItems />}/>
        <Route path="purchases" element={<Purchases/>} />
      </Route>
    </Routes>
  );
}
