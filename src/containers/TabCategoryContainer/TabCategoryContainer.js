import React, { useEffect } from "react";
import TabCategory from "../../components/home/orderBox/OrderBoxTop/TabCategory/TabCategory";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import TabCategoryItem from "../../components/home/orderBox/OrderBoxTop/TabCategoryItem/TabCategoryItem";
import { fetch_api_category } from "./action";
import PropTypes from "prop-types";
MainRightTopTab2Container.propTypes = {};
function MainRightTopTab2Container(props) {
  useEffect(() => {
    const { fetchApiCateGory } = props;
    const username = localStorage.getItem("vnd")
      ? jwt_decode(localStorage.getItem("vnd")).username
      : "";
    fetchApiCateGory(username);
  }, []);
  const { data, isOpenTab } = props;
  return (
    <TabCategory isOpenTab={isOpenTab}>
      {data.map((value, index) => {
        return <TabCategoryItem data={value} key={index} />;
      })}
    </TabCategory>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.CategoryData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiCateGory: (user) => {
      dispatch(fetch_api_category(user));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainRightTopTab2Container);
