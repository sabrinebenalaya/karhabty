import { combineReducers } from "redux";
import ReducerCars from './reducerCars';
import ReducerUser from './reducerUsers';
import ReducerAgency from './reducerAgency';

const RootReducer = combineReducers({
  ReducerCars: ReducerCars,
  ReducerUser: ReducerUser,
  ReducerAgency : ReducerAgency,
});

export default RootReducer;