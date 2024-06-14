import { useEffect, useState } from "react";
import { CustomerViews } from "./customerViews";
import { EmployeeViews } from "./employeeViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localShopUser = localStorage.getItem("shop_user");
    const shopUserObj = JSON.parse(localShopUser);

    setCurrentUser(shopUserObj);
  }, []);

  return currentUser.isAdmin ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews currentUser={currentUser}/>
  );
};