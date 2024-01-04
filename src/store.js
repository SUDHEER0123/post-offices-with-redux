import reducers from "./combineReducers/index";
import { createStore, applyMiddleware } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import { thunk } from "redux-thunk";

const store = createStore(
  reducers,
  applyMiddleware(thunk, reduxPromiseMiddleware)
);

export default store;
