import React, { useState } from "react";
import "./PriceTop.css";
import PriceTopTab1 from "./PriceTopTab1/PriceTopTab1";
import PriceTopTab2 from "./PriceTopTab2/PriceTopTab2";

import PropTypes from "prop-types";
PriceTop.propTypes = {};

function PriceTop(props) {
  const [isOpenTab, setIsOpenTab] = useState(1);
  function handleChangeTab(i) {
    setIsOpenTab(i);
  }
  return (
    <div className="price__top">
      <table className="price__top__table">
        <thead>
          <tr>
            <th>VN30F2104</th>
            <th>
              Sàn: <br />
              <span
                style={{
                  color: "#18c451",
                }}
              >
                1080.7
              </span>
            </th>
            <th>
              TC: <br />
              <span
                style={{
                  color: "#ffd900",
                }}
              >
                1162.0
              </span>
            </th>
            <th>
              Trần:
              <br />
              <span className="text-purple">1243.3</span>
            </th>
          </tr>
          <tr>
            <th
              colSpan={2}
              onClick={() => handleChangeTab(1)}
              style={{
                cursor: "pointer",
                color: isOpenTab === 1 ? "#f7941d" : "",
              }}
            >
              Bước giá
            </th>
            <th
              colSpan={2}
              onClick={() => handleChangeTab(2)}
              style={{
                cursor: "pointer",
                color: isOpenTab === 2 ? "#f7941d" : "",
              }}
            >
              Lịch sử khớp lệnh
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      {isOpenTab === 1 ? (
        <PriceTopTab1 />
      ) : isOpenTab === 2 ? (
        <PriceTopTab2 />
      ) : null}
    </div>
  );
}

export default PriceTop;
