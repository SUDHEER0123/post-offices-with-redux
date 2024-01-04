import { API_ENDPOINTS } from "../../constant";
import transport from "../../network";

export default {
  placesByLocation: (location) => {
    let config = {
      url: API_ENDPOINTS.FETCH_LOCATION_BY_PLACE + location,
      method: "GET",
    };
    return transport(config);
  },
};
