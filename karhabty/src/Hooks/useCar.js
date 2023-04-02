
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import {getAllCars, search} from "../Redux/Actions/actionCars"


import { useNavigate } from "react-router-dom";
export const useCar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const listOfCars = useSelector((state) => state.ReducerCars.cars);
 
  //get list of cars
  useEffect(() => {
    dispatch (getAllCars());
  }, []);

  //search
  const [searchInput, setSearchInput] = useState({
    min: 0,
    max: 0,
    brand: "",
    adress: "",
  });
 
  const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(search(searchInput, navigate));
  };

 
  return { listOfCars, setSearchInput, searchInput, handleSubmit };
};
