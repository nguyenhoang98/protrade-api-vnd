import axiosConfig from "./axiosServices";
import jwt_decode from "jwt-decode";
const url = "https://dertrial-api.vndirect.com.vn/demotrade/assets?username=";
const username = localStorage.getItem("vnd")
  ? jwt_decode(localStorage.getItem("vnd")).username
  : "";
export const getApiAsset = () => {
  return axiosConfig.get(`${url}${username}`);
};
