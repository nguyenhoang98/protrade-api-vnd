import React from "react";
import "./OrderBoxBottom.css";
import classNames from "classnames";
import Form1Container from "../../../../containers/Form1Container/Form1Container";
import Form2 from "./Form2/Form2";
import ControlTab from "./ControlTab/ControlTab";
import PropTypes from "prop-types";
OrderBoxBottom.propTypes = {};

function OrderBoxBottom(props) {
  const { isOpenTabForm, handleChangeTabForm } = props;
  return (
    <div className="order-box-bottom">
      <div className="order-box-bottom__content">
        <ControlTab handleChangeTabForm={handleChangeTabForm} />
        <Form1Container isOpenTabForm={isOpenTabForm} />
        <Form2 isOpenTabForm={isOpenTabForm} />
        <div
          className={classNames("tab__form tab__form-3", {
            showTabForm: isOpenTabForm === 3,
          })}
        >
          3
        </div>
        <div
          className={classNames("tab__form tab__form-4", {
            showTabForm: isOpenTabForm === 4,
          })}
        >
          4
        </div>
      </div>
    </div>
  );
}

export default OrderBoxBottom;
