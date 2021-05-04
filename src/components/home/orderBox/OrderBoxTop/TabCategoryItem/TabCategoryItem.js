import React from "react";
import "./TabCategoryItem.css";
import PropTypes from "prop-types";
TabCategoryItem.propTypes = {};

function TabCategoryItem(props) {
  const { data } = props;
  return (
    <tr>
      <td
        style={{
          color: "rgb(0, 255, 0)",
        }}
      >
        {" "}
        {data.symbol}{" "}
      </td>
      <td> {data.quantity} </td>
      <td> {data.costPrice} </td>
      <td>empty</td>
      <td>empty</td>
      <td>
        <button className="btn btn-close">Đóng</button>
        <button className="btn btn-reverse">Đảo</button>
      </td>
    </tr>
  );
}

export default TabCategoryItem;
