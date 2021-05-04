import React, { useState } from "react";
import "./MenuTabChart.css";
import PropTypes from "prop-types";
MenuTabChart.propTypes = {};

function MenuTabChart(props) {
  const [bgColor, setBgColor] = useState(1);
  function handleChangeTabTradingView(t) {
    setBgColor(t);
    const { handleChangeTabTradingView } = props;
    handleChangeTabTradingView(t);
  }
  return (
    <div className="menu-tab-chart flex">
      <div className="menu-tab-chart__left">
        Bản quyền thuộc về VNDIRECT © 2021. v2.2.2
      </div>
      <div className="menu-tab-chart__right flex">
        <span
          className="menu-tab-chart__right__link"
          onClick={() => handleChangeTabTradingView(1)}
          style={{
            background: bgColor === 1 ? "#2f3240" : "",
          }}
        >
          VN30 INTRADAY
        </span>
        <span
          className="menu-tab-chart__right__link"
          onClick={() => handleChangeTabTradingView(2)}
          style={{
            background: bgColor === 2 ? "#2f3240" : "",
          }}
        >
          VN30{" "}
        </span>
        <span
          className="menu-tab-chart__right__link"
          onClick={() => handleChangeTabTradingView(3)}
          style={{
            background: bgColor === 3 ? "#2f3240" : "",
          }}
        >
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
        </span>
        <span
          className="menu-tab-chart__right__link"
          onClick={() => handleChangeTabTradingView(4)}
          style={{
            background: bgColor === 4 ? "#2f3240" : "",
          }}
        >
          <i className="fa fa-pie-chart" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

export default MenuTabChart;
