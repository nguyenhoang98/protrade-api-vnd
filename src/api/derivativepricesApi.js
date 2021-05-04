import axiosConfig from "./axiosServices";
const url = "https://finfo-api.vndirect.com.vn/v4/derivative_prices?q=type:FU";
export const getApiderivativePrices = () => {
  return axiosConfig(url);
};
