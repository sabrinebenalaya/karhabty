import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import LogIn from "./Page/LogIn";
import SingUp from "./Page/SingUp";
import Home from "./Page/home";
import Account from "./Page/account";
import ListCars from "./Page/listCars";
import ListOrders from "./Page/listOrders";
import DetailOrder from "./Page/detailOrder";
import ProfilAgency from "./Page/profilAgency";
import CarDetail from "./Components/Cars/carDetail";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <ListCars />,
        },
      ],
    },
    {
      path: "/logIn",
      element: <LogIn />,
    },
    {
      path: "/singUp",
      element: <SingUp />,
    },
    {
      path: "/detailCar/:id",
      element: <CarDetail />,
    },

    {
      path: "/account",
      element: <Account />,
      children: [
        { path: "/account", element: <ListCars /> },
        { path: "/account/orders", element: <ListOrders /> },
        { path: "/account/order", element: <DetailOrder /> },
      ],
    },
    { path: "/agency", element: <ProfilAgency /> },
  ];
  const router = createBrowserRouter(routes);
  return (
    <div>
      {" "}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
