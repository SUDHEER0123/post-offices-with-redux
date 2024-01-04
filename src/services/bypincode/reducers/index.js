import { ACTION_TYPES } from "../../../constant";

const placesByPincode = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_LOCATION_BY_PINCODE_PENDING: {
      return {
        ...state,
        isFetchingPlaces: true,
        isFetchingPlacesFailed: false,
        placeFetchError: undefined,
        Places: [],
      };
    }
    case ACTION_TYPES.FETCH_LOCATION_BY_PINCODE_FULFILLED: {
      return {
        ...state,
        isFetchingPlaces: false,
        isFetchingPlacesFailed: false,
        placeFetchError: undefined,
        Places: action.payload.data,
      };
    }
    case ACTION_TYPES.FETCH_LOCATION_BY_PINCODE_REJECTED: {
      return {
        ...state,
        isFetchingPlaces: false,
        isFetchingPlacesFailed: true,
        placeFetchError: action.payload,
        Places: [],
      };
    }
    default:
      return state;
  }
};
export default placesByPincode;
