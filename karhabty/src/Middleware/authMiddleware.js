import axios from "axios";
import { useSelector } from "react-redux";

const authMiddleware = (store) => (next) => (action) => {
  const stat= store.getState();
 

  const { token } = stat? stat : {}; // Vérifier si state.auth est null ou undefined
  console.log("jwt=", token)
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  return next(action);
};

export default authMiddleware;
