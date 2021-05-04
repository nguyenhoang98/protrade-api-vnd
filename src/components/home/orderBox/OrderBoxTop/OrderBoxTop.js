import React from "react";
import "./OrderBoxTop.css";
import TabOrderBoxContainer from "../../../../containers/TabOrderBoxContainer/TabOrderBoxContainer";
import TabCategoryContainer from "../../../../containers/TabCategoryContainer/TabCategoryContainer";
import TabAsset from "./TabAsset/TabAsset";

import PropTypes from "prop-types";
OrderBoxTop.propTypes = {};

function OrderBoxTop(props) {
  const { isOpenTab } = props;
  return (
    <div className="order-box-top">
      <TabOrderBoxContainer isOpenTab={isOpenTab} />
      <TabCategoryContainer isOpenTab={isOpenTab} />
      <TabAsset isOpenTab={isOpenTab} />
    </div>
  );
}

export default OrderBoxTop;
