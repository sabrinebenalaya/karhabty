import { combineReducers } from "redux";
import ReducerCars from './reducerCars';
import ReducerUser from './reducerUsers';
import ReducerAgency from './reducerAgency';
import ReducerAuth from './reducerAuth';


const RootReducer = combineReducers({
  ReducerCars: ReducerCars,
  ReducerUser: ReducerUser,
  ReducerAgency : ReducerAgency,
  ReducerAuth : ReducerAuth,
});

export default RootReducer;