import * as typeOrderBook from "./constant";

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === typeOrderBook.FETCH_API_ORDER_BOOK_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  if (action.type === typeOrderBook.FETCH_API_ORDER_BOOK_ERR) {
    const { err } = action.payload;
  }
  return state;
};
export default reducer;
