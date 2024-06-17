import { useState } from "react";

import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { ItemsList } from "../components/items/itemsList";
import { AddItems } from "../components/addItem/addItem"
import { Purchases } from "../components/purchases/purchases";
import { EditItem } from "../components/items/editItem";
import { Shop } from "../components/shop/shop";
import { AddShopItem } from "../components/shop/addShopItem";





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
        <Route index path="/items" element={<ItemsList />} />
        <Route path="items/edit/:itemId" element={<EditItem />} />
        <Route path="newItem" element={<AddItems />}/>
        <Route path="purchases" element={<Purchases/>} />
        <Route path="/" element={<Shop />} />
        <Route path="items/addShopItem/:itemId" element={<AddShopItem />} />
      </Route>
    </Routes>
  );
}
