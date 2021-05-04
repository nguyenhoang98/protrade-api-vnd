import axios from "axios";
import axiosConfig from "./axiosServices";

export const getApi = (url) => {
  return axiosConfig.get(url);
};
export const postApi = (url, data) => {
  return axiosConfig.post(url, data);
};
// export const deleteApi = (url, data, config) => {
//   return axios.delete(url, data, config);
// };
const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
};
export const deleteApiOrderBook = (data) => {
  return axios("https://dertrial-api.vndirect.com.vn/demotrade/orders", {
    method: "DELETE",
    data: data,
    config,
  })
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};
