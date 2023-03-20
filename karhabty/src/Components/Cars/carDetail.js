import React, { useEffect } from "react";
import CustomImage from "../../Atom/Image";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCar } from "../../Redux/Actions/actionCars";
import NavBarAccounts from "./../Acounts/navBarAccounts";
import { btn_div_navbar } from "./../../Style/style";
import {
  pictureCarStyle,
  detailCarStyle,
  detailContainerStyle,
} from "./../../Style/détailCarStyle";
import CustomText from "../../Atom/Text";
import CustomCriteria from "../../Atom/Criteria";
function CarDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCar(id));
  });
  const Onecar = useSelector((state) => state.ReducerCars.car);

  return (
    <div class="container py-5">
      <div class="row container py-5">
        <NavBarAccounts />
        <div class="container" style={detailContainerStyle}>
          <div style={pictureCarStyle}>
            <CustomImage path={Onecar.photo} variant="top" />
          </div>
          <div style={detailCarStyle}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CustomText text={Onecar.brand} style={{ fontWeight: "bold" }} />
              <CustomText text={`${Onecar.price} TN`} />
              <div>
                <i class="bi bi-geo-alt-fill"></i>
                <CustomText text={Onecar.adress} style={{ marginLeft: "1%" }} />
                <CustomText text=",2hours ago." style={{ marginLeft: "1%" }} />
              </div>
            </div>
            <hr></hr>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CustomText text="Description" style={{ fontWeight: "bold" }} />
              <CustomText text="announcement_description" />
            </div>
            <hr></hr>
            <div>
              <CustomText
                text="Criteria"
                style={{ fontWeight: "bold", marginBottom: "2%" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                <CustomCriteria criteria="Brand " text={Onecar.brand} />
                <CustomCriteria criteria="Year " text={Onecar.anne} />
                <CustomCriteria criteria="Color " text={Onecar.color} />
                <CustomCriteria criteria="Location " text={Onecar.adress} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
