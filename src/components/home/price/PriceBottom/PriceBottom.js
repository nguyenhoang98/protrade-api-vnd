import React from "react";
import "./PriceBottom.css";

import PropTypes from "prop-types";

PriceBottom.propTypes = {};

function PriceBottom(props) {
  return (
    <div className="chart__bottom">
      <div
        style={{
          height: "100%",
        }}
      >
        <table className="chart__bottom__table">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Giá</th>
              <th>
                <span>
                  <i className="fa fa-caret-left" aria-hidden="true"></i>
                </span>
                +/-
                <span>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </span>
              </th>
              <th>Lệch</th>
              <th>Tổng KL</th>
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default PriceBottom;
