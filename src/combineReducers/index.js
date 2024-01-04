import { combineReducers } from "redux";

import placesByPincode from "../services/bypincode/reducers";

export default combineReducers({
  placesByPincode,
});
