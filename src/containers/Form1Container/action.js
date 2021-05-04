import * as typeOrderBook from "./constant";
import { postApi } from "../../api/orderBookApi";
import { fetch_api_tab_order_book } from "../TabOrderBoxContainer/action";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
const url = "https://dertrial-api.vndirect.com.vn/demotrade/orders";
export const post_api_order_book = (data) => {
  return (dispatch) => {
    console.log("Post");
    postApi(url, data)
      .then((res) => {
        dispatch(post_api_order_book_success(res.data));
        dispatch(
          fetch_api_tab_order_book(
            localStorage.getItem("vnd")
              ? jwt_decode(localStorage.getItem("vnd")).username
              : ""
          )
        );
        toast.success(
          `${data.side === "NB" ? "Mua thành công" : "Bán thành công"}`
        );
      })
      .catch((err) => {
        console.log("Post err");
        dispatch(post_api_order_book_err(err));
        dispatch(
          fetch_api_tab_order_book(
            localStorage.getItem("vnd")
              ? jwt_decode(localStorage.getItem("vnd")).username
              : ""
          )
        );
        toast.error(`${data.side === "NB" ? "Mua thất bại" : "Bán thất bại"}`);
      });
  };
};
export const post_api_order_book_success = (data) => {
  return {
    type: typeOrderBook.POST_API_ORDER_BOOK_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const post_api_order_book_err = (err) => {
  return {
    type: typeOrderBook.POST_API_ORDER_BOOK_ERR,
    payload: {
      err: err,
    },
  };
};
