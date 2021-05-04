import React from "react";
import "./TabAsset.css";
import PropTypes from "prop-types";
import classNames from "classnames";

TabAsset.propTypes = {};

function TabAsset(props) {
  const { isOpenTab } = props;
  return (
    <div
      className={classNames("order-box-top-tab item-3", {
        showTab: isOpenTab === 3,
      })}
      style={{
        fontSize: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
          background: "hsla(0,0%,47.1%,.15)",
          padding: "8px",
          fontSize: 14,
        }}
      >
        <div
          className="text-orange"
          style={{
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Thông tin tài sản
        </div>
        <div>
          <span
            style={{
              padding: "0 5px ",
              cursor: "pointer",
            }}
            className="text-orange"
          >
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </span>
          <span
            style={{
              padding: "0 5px ",
              cursor: "pointer",
            }}
            className="text-orange"
          >
            <i className="fa fa-external-link" aria-hidden="true"></i>
          </span>
          <span
            style={{
              padding: "0 5px ",
              cursor: "pointer",
            }}
            className="text-orange"
          >
            <i className="fa fa-minus" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          padding: "5px 10px",
        }}
      >
        <div>Tài sản dòng</div>
        <div>41,681,615</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          padding: "5px 10px",
        }}
      >
        <div>Số dư kí quỹ</div>
        <div>-21,702,000</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          padding: "5px 10px",
        }}
      >
        <div>Thuế thu phí</div>
        <div>0</div>
      </div>
    </div>
  );
}

export default TabAsset;
