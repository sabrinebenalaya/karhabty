import { REGISTER, LOGIN_SUCCESS, LOGOUT } from "../constante";
import { Url_Register, Url_login, Url_logOut } from "../../Api";
import axios from "axios";

import { postInApi } from "../../Service/services";

//log in
export const logIn = (userInfo, navigate) => async (dispatch) => {
  console.log({ userInfo });
  try {
    const res = await axios.post(Url_login, userInfo);
    console.log({ res });
    const { token, user } = res.data;
    dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
    if (user.isAgency) {
      navigate(`/agency/${user._id}`);
    } else {
      navigate("/account");
    }
  } catch (e) {
    console.log(e);
  }
};

// log out
export const logOut = (navigate) => async (dispatch) => {
  try {
    const res = await axios.get(Url_logOut);
    const { token } = res.data;
    token = "";
    dispatch({ type: LOGOUT, payload: { token } });
    navigate("/");
  } catch (e) {
    console.log(e);
  }
};
export const register = (userInfo, navigate) => async (dispatch) => {
  try {
    const res = await postInApi(Url_Register, userInfo);
    const { token, user } = res.data;
    dispatch({ type: REGISTER, payload: { token, user } });
    user.isAgency ? navigate(`/agency/${user._id}`) : navigate("/account");
  } catch (e) {
    console.log(e);
  }
};
