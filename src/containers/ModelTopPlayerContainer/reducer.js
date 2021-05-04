import * as typeAssetTopPlayer from "./constant";

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === typeAssetTopPlayer.FETCH_API_ASSET_TOP_PLAYER_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  if (action.type === typeAssetTopPlayer.FETCH_API_ASSET_TOP_PLAYER_ERR) {
  }
  return state;
};
export default reducer;
