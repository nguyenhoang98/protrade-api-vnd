import * as typeCategory from "./constant";

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === typeCategory.FETCH_API_CATEGORY_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  if (action.type === typeCategory.FETCH_API_CATEGORY_ERR) {
    const { err } = action.payload;
  }
  return state;
};
export default reducer;
