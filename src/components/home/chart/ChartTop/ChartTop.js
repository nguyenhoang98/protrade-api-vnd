import React from "react";
import "./ChartTop.css";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import PropTypes from "prop-types";

ChartTop.propTypes = {};

function ChartTop(props) {
  return (
    <div className="chart__top">
      <TradingViewEmbed
        widgetType={widgetType.ADVANCED_CHART}
        widgetConfig={{
          colorTheme: "dark",
          symbol: "BITMEX:XBTUSD",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default ChartTop;
