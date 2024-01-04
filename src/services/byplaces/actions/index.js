import { ACTION_TYPES } from "../../../constant";
import api from "../api";

export const placesByLocation = (location) => ({
  type: ACTION_TYPES.FETCH_LOCATION_BY_PLACE,
  payload: api.placesByLocation(location),
});
