import { combineReducers } from "redux";
import ReducerCars from './reducerCars';
import ReducerUser from './reducerUsers';

const RootReducer = combineReducers({
  ReducerCars: ReducerCars,
  ReducerUser: ReducerUser
});

export default RootReducer;