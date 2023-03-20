import { ADD_USER, UPDATE_USER, DELETE_USER } from "../constante";

const initialState = { loading: false, users: [] };

const ReducerUser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
        
      return { ...state, Loading: false, users: action.payload };

    case UPDATE_USER:
      return { ...state, Loading: false, users: action.payload };

    case DELETE_USER:
      return { ...state, Loading: false, users: action.payload };
    default:
      return state;
  }
};

export default ReducerUser;
