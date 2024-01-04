import { API_ENDPOINTS } from "../../constant";
import transport from "../../network";

export default {
  placesByPincode: (pincode) => {
    let config = {
      url: API_ENDPOINTS.FETCH_LOCATION_BY_PINCODE + pincode,
      method: "GET",
    };
    return transport(config);
  },
};
