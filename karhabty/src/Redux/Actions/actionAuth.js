import { REGISTER_USER, LOGIN_USER } from "../constante";
import { Url_SingUp, Url_login } from "../../Api";
import axios from "axios";
export const logIn = (userInfo, navigate)=>async (dispatch)=>{
    try {
    const res = await axios.post(Url_login,userInfo);
    const { token, user } = res.data;
      dispatch({ type: LOGIN_USER, payload: { token, user } });
      if (user.isAgency) {
        navigate("/agency");
      } else {
        navigate("/account");
      }
    } catch (e) {
      console.log(e);
    }
  }

  export const sinUp = (userInfo, navigate)=>async (dispatch)=>{
    try {
      console.log({userInfo})
    const res = await axios.post(Url_SingUp,userInfo);
    console.log({res})
    const { token, user } = res.data;
      dispatch({ type: REGISTER_USER, payload: { token, user } });
     
      if (user.isAgency) {
        navigate(`/agency/${user._id}`);
      } else {
        navigate("/account");
      }
    } catch (e) {
     
      console.log(e);
    }
  }