import * as typeOrderBook from "./constant";
import { getApi, deleteApiOrderBook } from "../../api/orderBookApi";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
const url = "https://dertrial-api.vndirect.com.vn/demotrade/orders?username=";
export const fetch_api_tab_order_book = (user) => {
  return (dispatch) => {
    getApi(`${url}${user}`)
      .then((res) => {
        dispatch(fetch_api_tab_order_book_success(res.data));
      })
      .catch((err) => {
        dispatch(fetch_api_tab_order_book_err(err));
      });
  };
};

export const fetch_api_tab_order_book_success = (data) => {
  return {
    type: typeOrderBook.FETCH_API_ORDER_BOOK_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetch_api_tab_order_book_err = (err) => {
  return {
    type: typeOrderBook.FETCH_API_ORDER_BOOK_ERR,
    payload: {
      err: err,
    },
  };
};

//

export const delete_api_order_book = (data) => {
  return (dispatch) => {
    deleteApiOrderBook(data)
      .then((res) => {
        console.log("ABC");
        dispatch(
          fetch_api_tab_order_book(
            localStorage.getItem("vnd")
              ? jwt_decode(localStorage.getItem("vnd")).username
              : ""
          )
        );
        toast.success("Xóa thành công");
      })
      .catch(() => {
        toast.error("Xóa thất bại");
      });
  };
};
