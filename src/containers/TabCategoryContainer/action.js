import * as typeCategory from "./constant";
import { getApiCategory } from "../../api/categoryApi";
const url_first =
  "https://dertrial-api.vndirect.com.vn/demotrade/portfolio?username=";
const url_last = "&position=open";

export const fetch_api_category = (user) => {
  console.log("fetch_api_category");
  return (dispatch) => {
    getApiCategory(`${url_first}${user}${url_last}`)
      .then((res) => {
        dispatch(fetch_api_category_success(res.data));
      })
      .catch((err) => {
        dispatch(fetch_api_category_err(err));
      });
  };
};
export const fetch_api_category_success = (data) => {
  return {
    type: typeCategory.FETCH_API_CATEGORY_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const fetch_api_category_err = (err) => {
  return {
    type: typeCategory.FETCH_API_CATEGORY_ERR,
    payload: {
      err: err,
    },
  };
};
