import React from "react";
import Card from "react-bootstrap/Card";
import { carCard } from "../../Style/style";
import {  useNavigate } from "react-router-dom";
import CustomButton from "../../Atom/Button";

function Car({ car }) {

  const navigate = useNavigate();
  const handelShowDeatil = () => {
   
   navigate (`/detailCar/${car._id}`)
    
  };
  return (
    <div>
      <Card style={carCard}>
        <Card.Img
          variant="top"
          src={car.photo}
          width={"100%"}
          height={"100%"}
        />
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card.Title>{car.brand}</Card.Title>
            <Card.Title>{car.price} TN</Card.Title>
          </div>

          <CustomButton
            type="submit"
            variant="primary"
            handleClick={handelShowDeatil}
            title ="More Detail"
          />
        
        </Card.Body>
      </Card>
    </div>
  );
}

export default Car;
