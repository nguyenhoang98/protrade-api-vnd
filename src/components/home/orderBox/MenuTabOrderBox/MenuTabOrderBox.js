import React, { useState } from "react";
import "./MenuTabOrderBox.css";
import PropTypes from "prop-types";

MenuTabOrderBox.propTypes = {};

function MenuTabOrderBox(props) {
  const [bgColor, setBgColor] = useState(1);
  function handleChangePage(t) {
    setBgColor(t);
    const { onChangePage } = props;
    onChangePage(t);
  }
  return (
    <div className="menu-tab-order-box menu__tab flex">
      <span
        className="menu__tab__link"
        onClick={() => handleChangePage(1)}
        style={{
          background: bgColor === 1 ? "#2f3240" : "",
        }}
      >
        Số lệnh
      </span>
      <span
        className="menu__tab__link"
        onClick={() => handleChangePage(2)}
        style={{
          background: bgColor === 2 ? "#2f3240" : "",
        }}
      >
        Danh Mục
      </span>
      <span
        className="menu__tab__link"
        onClick={() => handleChangePage(3)}
        style={{
          background: bgColor === 3 ? "#2f3240" : "",
        }}
      >
        Tài Sản
      </span>
    </div>
  );
}

export default MenuTabOrderBox;
