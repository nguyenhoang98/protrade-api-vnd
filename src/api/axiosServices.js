// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({});
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN";
instance.interceptors.request.use(
  (request) => {
    if (request.method === "delete") {
    }
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
