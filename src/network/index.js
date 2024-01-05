import { API_ENDPOINTS } from "../constant";
import axios from "axios";

const transport = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL,
  withCredentials: false,
  timeout: 50000000,
});

transport.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
transport.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default transport;
