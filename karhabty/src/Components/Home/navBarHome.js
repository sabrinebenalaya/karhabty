import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Atom/Button";
import { btn_div_navbar, navbarHome, btn } from "./../../Style/style";
import SearchCar from "./searchCar";

function NavBarHome() {
  const navigate = useNavigate();
  const handelSingUp = () => {
    navigate("/singUp");
  };
  const handelogIn = () => {
    navigate("/logIn");
  };
  return (
    <div style={navbarHome}>
      <SearchCar />
      <div style={btn_div_navbar}>
        <CustomButton
          type="button"
          style={btn}
          handleClick={handelSingUp}
          title="Sing up"
        />
        <CustomButton
          type="button"
          style={btn}
          handleClick={handelogIn}
          title="Log in"
        />
      </div>
    </div>
  );
}

export default NavBarHome;
