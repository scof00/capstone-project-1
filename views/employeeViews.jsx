import { useState } from "react";

import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { ItemsList } from "../components/items/itemsList";
import { AddItems } from "../components/addItem/addItem"
import { Purchases } from "../components/purchases/purchases";
import { EditItem } from "../components/items/editItem";





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
        <Route index path="/" element={<ItemsList />} />
        <Route path="items/edit/:itemId" element={<EditItem />} />
        <Route path="newItem" element={<AddItems />}/>
        <Route path="purchases" element={<Purchases/>} />
      </Route>
    </Routes>
  );
}
