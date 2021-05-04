import * as typePrice from "./constant";
import { getApiderivativePrices } from "../../api/derivativepricesApi";
export const fetch_api_price_bottom = () => {
  return (dispatch) => {
    getApiderivativePrices()
      .then((res) => {
        dispatch(fetch_api_price_bottom_success(res.data.data));
      })
      .catch((err) => {
        dispatch(fetch_api_price_bottom_err(err));
      });
  };
};

export const fetch_api_price_bottom_success = (data) => {
  return {
    type: typePrice.FETCH_API_PRICE_BOTTOM_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetch_api_price_bottom_err = (err) => {
  return {
    type: typePrice.FETCH_API_PRICE_BOTTOM_SUCCESS,
    payload: {
      err: err,
    },
  };
};
