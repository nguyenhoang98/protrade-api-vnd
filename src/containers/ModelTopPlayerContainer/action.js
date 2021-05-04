import * as typeAssetTopPlayer from "./constant";
import { getApiModelTopPlayer } from "../../api/assetApi";
export const fetch_api_model_top_player = () => {
  return (dispatch) => {
    getApiModelTopPlayer()
      .then((res) => {
        dispatch(fetch_api_model_top_player_success(res.data));
      })
      .catch((err) => {
        dispatch(fetch_api_model_top_player_err(err));
      });
  };
};

export const fetch_api_model_top_player_success = (data) => {
  return {
    type: typeAssetTopPlayer.FETCH_API_ASSET_TOP_PLAYER_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const fetch_api_model_top_player_err = (err) => {
  return {
    type: typeAssetTopPlayer.FETCH_API_ASSET_TOP_PLAYER_ERR,
    payload: {
      err: err,
    },
  };
};
