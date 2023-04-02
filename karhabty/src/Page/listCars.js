import React from "react";
import Car from "../Components/Cars/car";
import { listCarCard } from "../Style/style";
import { useCar } from "../Hooks/useCar";


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
