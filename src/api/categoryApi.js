import axiosConfig from "./axiosServices";

export const getApiCategory = (url) => {
  return axiosConfig.get(url);
};
