import React, { useState } from "react";
import "./HomeLayOut.css";

import ChartTop from "../../components/home/chart/ChartTop/ChartTop";
import ChartBottom from "../../components/home/chart/ChartBottom/ChartBottom";
import MenuTabChart from "../../components/home/chart/MenuTabChart/MenuTabChart";

import PriceTop from "../../components/home/price/PriceTop/PriceTop";
import PriceBottomContainer from "../../containers/PriceBottomContainer/PriceBottomContainer";

import OrderBoxTop from "../../components/home/orderBox/OrderBoxTop/OrderBoxTop";
import OrderBoxBottom from "../../components/home/orderBox/OrderBoxBottom/OrderBoxBottom";
import MenuTabOrderBox from "../../components/home/orderBox/MenuTabOrderBox/MenuTabOrderBox";
import PropTypes from "prop-types";
HomeLayOut.propTypes = {};
function HomeLayOut(props) {
  const [isOpenTab, setIsOpenTab] = useState(1);
  const [isOpenTabTradingView, setIsOpenTabTradingView] = useState(1);
  const [isOpenTabForm, setIsOpenTabForm] = useState(1);
  function onChangePage(t) {
    setIsOpenTab(t);
  }
  function handleChangeTabTradingView(t) {
    setIsOpenTabTradingView(t);
  }
  function handleChangeTabForm(t) {
    setIsOpenTabForm(t);
  }
  return (
    <div className="home flex">
      <div className="chart">
        <ChartTop />
        <ChartBottom isOpenTabTradingView={isOpenTabTradingView} />
        <MenuTabChart handleChangeTabTradingView={handleChangeTabTradingView} />
      </div>
      <div className="price">
        <PriceTop />
        <PriceBottomContainer />
      </div>
      <div className="order-box">
        <OrderBoxTop isOpenTab={isOpenTab} />
        <OrderBoxBottom
          isOpenTabForm={isOpenTabForm}
          handleChangeTabForm={handleChangeTabForm}
        />
        <MenuTabOrderBox onChangePage={onChangePage} />
      </div>
    </div>
  );
}

export default HomeLayOut;
