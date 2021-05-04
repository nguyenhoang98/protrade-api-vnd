import React from "react";
import PropTypes from "prop-types";

ProfitOrLoss.propTypes = {};

function ProfitOrLoss(props) {
  const { assets } = props;
  return <span> {assets.toLocaleString()} đ </span>;
}

export default ProfitOrLoss;
