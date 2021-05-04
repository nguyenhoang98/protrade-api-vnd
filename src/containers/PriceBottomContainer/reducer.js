import * as typePrice from "./constant";

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === typePrice.FETCH_API_PRICE_BOTTOM_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  if (action.type === typePrice.FETCH_API_PRICE_BOTTOM_ERR) {
    const { err } = action.payload;
    console.log(err);
  }
  return state;
};
export default reducer;
