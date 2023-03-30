

import { createStore, applyMiddleware, compose } from "redux";
import authMiddleware from "../Middleware/authMiddleware"
import rootReducer from "./Reducers/index";
import thunk from "redux-thunk";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(authMiddleware)

  )
);
export default store;