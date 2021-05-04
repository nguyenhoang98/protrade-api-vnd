import * as typeAsset from "./constant";
import { getApiAsset } from "../../api/assetPersonalApi";
export const fetch_api_asset = () => {
  return (dispatch) => {
    return getApiAsset()
      .then((res) => {
        dispatch(fetch_api_asset_success(res.data.cashOnHand));
      })
      .catch((err) => {
        dispatch(fetch_api_asset_err(err));
      });
  };
};

export const fetch_api_asset_success = (data) => {
  return {
    type: typeAsset.FETCH_API_ASSET_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const fetch_api_asset_err = (err) => {
  return {
    type: typeAsset.FETCH_API_ASSET_ERR,
    payload: {
      err: err,
    },
  };
};
