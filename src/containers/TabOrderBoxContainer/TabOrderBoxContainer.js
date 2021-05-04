import React, { useEffect } from "react";
import TabOrderBook from "../../components/home/orderBox/OrderBoxTop/TabOrderBook/TabOrderBook";
import TabOrderBoxItem from "../../components/home/orderBox/OrderBoxTop/TabOrderBoxItem/TabOrderBoxItem";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { fetch_api_tab_order_book, delete_api_order_book } from "./action";
import PropTypes from "prop-types";
MainRightTopTab1Container.propTypes = {};

function MainRightTopTab1Container(props) {
  useEffect(() => {
    const { fetchApiOrderBook } = props;
    const username = localStorage.getItem("vnd")
      ? jwt_decode(localStorage.getItem("vnd")).username
      : "";
    fetchApiOrderBook(username);
  }, []);
  const { isOpenTab, data } = props;

  function handleOnDeleteOrderBook(param) {
    const { deleteOrderBookItem } = props;
    deleteOrderBookItem(param);
  }
  return (
    <TabOrderBook isOpenTab={isOpenTab}>
      {data.map((value, index) => {
        return (
          <TabOrderBoxItem
            data={value}
            key={index}
            handleOnDeleteOrderBook={handleOnDeleteOrderBook}
          />
        );
      })}
    </TabOrderBook>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.OrderBookData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiOrderBook: (user) => {
      dispatch(fetch_api_tab_order_book(user));
    },
    deleteOrderBookItem: (data) => {
      dispatch(delete_api_order_book(data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainRightTopTab1Container);
