import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE } from "../constante";

const initialState = {
    isAuthenticated: false,
    token: null
  };

const ReducerAuth = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token
        };
      case LOGIN_FAILURE:
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          token: null
        };
      default:
        return state;
    }
console.log("****", state.token)
  };
  
  export default ReducerAuth;