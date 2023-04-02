import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE , REGISTER} from "../constante";

const initialState = {
    isAuthenticated: false,
    token: null,
    user:{},
    users :[]
  };

const ReducerAuth = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER:
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token,
          users : action.payload.user
        };
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