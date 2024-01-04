import { ACTION_TYPES } from "../../../constant";

const placesBylocation = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_LOCATION_BY_PLACE_PENDING: {
      return {
        ...state,
        isFetchingPlaces: true,
        isFetchingPlacesFailed: false,
        placeFetchError: undefined,
        Places: [],
      };
    }
    case ACTION_TYPES.FETCH_LOCATION_BY_PLACE_FULFILLED: {
      return {
        ...state,
        isFetchingPlaces: false,
        isFetchingPlacesFailed: false,
        placeFetchError: undefined,
        Places: action.payload.data,
      };
    }
    case ACTION_TYPES.FETCH_LOCATION_BY_PLACE_REJECTED: {
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
export default placesBylocation;
