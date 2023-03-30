import { Url_get_all_cars, Url_search_cars } from "../Api";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import {getAllCars, getCar, search} from "../Redux/Actions/actionCars"
import { GET_ALL_CARS, SEARCH_CAR } from "../Redux/constante";

import { useNavigate } from "react-router-dom";
export const useCar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const listOfCars = useSelector((state) => state.ReducerCars.cars);
  console.log({listOfCars})
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
