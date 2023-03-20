import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Car from "../Components/Cars/car";
import { getallCars } from "../Redux/Actions/actionCars";
import { listCarCard } from "../Style/style";
import { useCar } from "../Hooks/useCar";
import axios from "axios";
import { Url_get_all_cars, Url_search_cars } from "../Api";

function ListCars() {
  const {listOfCars} = useCar();
  return (
    <div style={listCarCard}>
      {listOfCars.map((car) => (
        <Car key={car._id} car={car} />
      ))}
    </div>
  );
}

export default ListCars;
