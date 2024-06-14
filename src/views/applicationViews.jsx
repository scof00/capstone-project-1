
import { useEffect, useState } from "react";
import { CustomerViews } from "./customerViews";
import { EmployeeViews } from "./employeeViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localGreenbrierUser = localStorage.getItem("greenbrier_user");
    const greenbrierUserObj = JSON.parse(localGreenbrierUser);

    setCurrentUser(greenbrierUserObj);
  }, []);

  return currentUser.isEmployee ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews currentUser={currentUser}/>
  );
};