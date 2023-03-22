import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logIn, sinUp } from "../Redux/Actions/actionAuth";
import { useNavigate } from "react-router-dom";
export const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    mail: "",
    password: "",
  });
  const [newUser, setNewUser] = useState({
 
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    isAgency: false,
  });
  const handelSumbit = (e) => {
    e.preventDefault();
    dispatch(logIn(loginUser, navigate));
  };
  const handelRegister =(e)=>{
    e.preventDefault();
    console.log({newUser})
    dispatch(sinUp(newUser,navigate))
    
  }
  return { loginUser, setLoginUser, handelSumbit,handelRegister, setNewUser,newUser };
};
