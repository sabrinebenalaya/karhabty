import React from "react";
import { Outlet } from "react-router-dom";
import NavBarAccounts from "../Components/Acounts/navBarAccounts";
function Account() {
  return (
    <div>
      <NavBarAccounts/>
      <Outlet />
    </div>
  );
}

export default Account;
