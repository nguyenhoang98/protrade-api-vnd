import React from "react";
import "./ChartBottom.css";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import classNames from "classnames";

import PropTypes from "prop-types";

ChartBottom.propTypes = {};

function ChartBottom(props) {
  const { isOpenTabTradingView } = props;
  return (
    <div className="chart__bottom">
      <div
        className={classNames("chart__bottom__item item-1", {
          showMenuTabTradingView: isOpenTabTradingView === 1,
        })}
      >
        <TradingViewEmbed
          widgetType={widgetType.SCREENER_CRYPTOCURRENCY}
          widgetConfig={{
            colorTheme: "dark",
            width: "100%",
            height: "98%",
          }}
        />
      </div>
      <div
        className={classNames("chart__bottom__item item-2", {
          showMenuTabTradingView: isOpenTabTradingView === 2,
        })}
      >
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
      <div
        className={classNames("chart__bottom__item item-3", {
          showMenuTabTradingView: isOpenTabTradingView === 3,
        })}
      >
        <TradingViewEmbed
          widgetType={widgetType.SYMBOL_INFO}
          widgetConfig={{
            colorTheme: "dark",
            autosize: true,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        className={classNames("chart__bottom__item item-4", {
          showMenuTabTradingView: isOpenTabTradingView === 4,
        })}
      >
        <TradingViewEmbed
          widgetType={widgetType.FUNDAMENTAL_DATA}
          widgetConfig={{
            colorTheme: "dark",
            autosize: true,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default ChartBottom;
