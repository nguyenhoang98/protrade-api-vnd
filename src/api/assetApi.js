import axiosConfig from "./axiosServices";
const url = "https://dertrial-api.vndirect.com.vn/demotrade/assets";
export const getApiModelTopPlayer = () => {
  return axiosConfig.get(url);
};
