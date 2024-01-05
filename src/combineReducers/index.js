import { combineReducers } from "redux";

import placesByPincode from "../services/bypincode/reducers";
import placesBylocation from "../services/byplaces/reducers";
export default combineReducers({
  placesByPincode,
  placesBylocation,
});
