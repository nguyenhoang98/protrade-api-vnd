import React, { Component } from "react";
import "./TableCodeItem.css";
class TableCodeItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <tr className="tablecodeitem">
        <td
          style={{
            color: "#0f0",
          }}
        >
          {" "}
          {data.code}{" "}
        </td>
        <td> {data.open} </td>
        <td> {data.change} </td>
        <td> {data.open} </td>
        <td> {data.nmVolume} </td>
      </tr>
    );
  }
}
export default TableCodeItem;
