import * as typeAsset from "./constant";

const initialState = "";

const reducer = (state = initialState, action) => {
  if (action.type === typeAsset.FETCH_API_ASSET_SUCCESS) {
    const { data } = action.payload;
    state = Number(data);
  }
  if (action.type === typeAsset.FETCH_API_ASSET_ERR) {
  }

  return state;
};
export default reducer;
