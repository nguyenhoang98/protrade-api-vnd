import React, { Component } from "react";
import Form1 from "../../components/home/orderBox/OrderBoxBottom/Form1/Form1";
import { connect } from "react-redux";
import { post_api_order_book } from "./action";
class Form1Container extends Component {
  constructor(props) {
    super(props);
    this.postApiOrderBook = this.postApiOrderBook.bind(this);
  }
  postApiOrderBook(data) {
    const { postApiOrderBook } = this.props;
    postApiOrderBook(data);
  }
  render() {
    const { isOpenTabForm } = this.props;
    return (
      <>
        <Form1
          isOpenTabForm={isOpenTabForm}
          postApiOrderBook={this.postApiOrderBook}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    postApiOrderBook: (data) => {
      dispatch(post_api_order_book(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form1Container);
