import { Outlet, Route, Routes } from "react-router-dom";
import { NurseriesList } from "../components/nurseries/NurseriesList.jsx";
import { useEffect, useState } from "react";
import { Retailers } from "../components/retailers/retailers.jsx";
import { AddRetailer } from "../components/retailers/addRetailer.jsx";
import { AddDistributor } from "../distributors/addDistributor.jsx";
import { DistributorList } from "../distributors/distributorList.jsx";
import { EditDistributor } from "../distributors/editDistributors.jsx";
import { CreateNursery } from "../components/nurseries/CreateNursery.jsx";
import { EditNursery } from "../components/nurseries/EditNursery.jsx";
import { FlowerList } from "../components/flowers/flowerList.jsx"
import { FlowerForm } from "../components/flowers/flowerForm.jsx"
import { EditRetailer } from "../components/retailers/editRetailer.jsx";
import { RetailerDetails } from "../components/retailers/retailerDetails.jsx";
import { NavBar } from "../components/nav bar/NavBar.jsx";

export const EmployeeViews = (currentUser) => {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >

      <Route
        path="/nurseries"
        index
        element={<NurseriesList currentUser={currentUser} />}
      />
      <Route
        path="/newNursery"
        element={<CreateNursery currentUser={currentUser} />}
      ></Route>
      <Route
        path="editNursery/:nurseryId"
        element={<EditNursery currentUser={currentUser} />}
      />      
        <Route path="/retailers">
          <Route index element={<Retailers currentUser={currentUser} />} />
          <Route
            path=":retailerId/editRetailer"
            element={<EditRetailer currentUser={currentUser} />}
          />
          <Route
            path=":retailerId"
            element={<RetailerDetails currentUser={currentUser} />}
          />
        </Route>
        <Route
          path="/addRetailer"
          element={<AddRetailer currentUser={currentUser} />}
        />
        <Route path="/distributors">
          <Route
            index
            element={<DistributorList currentUser={currentUser} />}
          />
        <Route
        path="editDistributor/:distributorId"
        element={<EditDistributor currentUser={currentUser} />}
      /> 
        </Route>
        <Route path="flowers">
          <Route index element={<FlowerList currentUser={currentUser} />} />
          <Route
            path=":create"
            element={<FlowerForm currentUser={currentUser} />}
          />
          <Route path="edit/:articleId" 
                    element={<flowerEditForm currentUser={currentUser} />} 
                    />
        </Route>
        <Route path="flowers" element={<FlowerList/>}/>
            <Route path="/addFlower" element={<FlowerForm currentUser={currentUser} />} />
        <Route/> 
        <Route path= "/addDistributor" element={<AddDistributor currentUser={currentUser} />} />
      </Route>
    </Routes>
  );
};
