import api from "./api";
import { API_ENDPOINTS } from "../constants/apiConstants";

export const loginUser = async (payload) => {
  return api.post(API_ENDPOINTS.LOGIN, payload);
};

export const signupUser = async (payload) => {
  return api.post(API_ENDPOINTS.SIGNUP, payload);
};
