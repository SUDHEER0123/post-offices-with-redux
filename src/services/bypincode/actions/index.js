import { ACTION_TYPES } from "../../../constant";
import api from "../api";

export const placesByPincode = (pincode) => ({
  type: ACTION_TYPES.FETCH_LOCATION_BY_PINCODE,
  payload: api.placesByPincode(pincode),
});
