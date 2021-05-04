import React, { useEffect } from "react";
import PropTypes from "prop-types";

ControlTab.propTypes = {};

function ControlTab(props) {
  const { handleChangeTabForm } = props;
  useEffect(() => {
    document.getElementById("tab-radio-default").click();
  }, []);
  return (
    <div className="tab__radio flex">
      <label
        className="tab__radio__btn"
        htmlFor="tab-radio-1"
        onClick={() => handleChangeTabForm(1)}
        id="tab-radio-default"
      >
        <input type="radio" name="tab-radio" id="tab-radio-1" />
        Lệnh thường
      </label>
      <label
        className="tab__radio__btn"
        htmlFor="tab-radio-2"
        onClick={() => handleChangeTabForm(2)}
      >
        <input type="radio" name="tab-radio" id="tab-radio-2" />
        Lệnh stop
      </label>
      <label
        className="tab__radio__btn"
        disabled={true}
        htmlFor="tab-radio-3"
        //   onClick={() => handleChangeTabForm(3)}
        disabled
      >
        <input type="radio" name="tab-radio" id="tab-radio-3" />
        Lệnh trailing
      </label>
      <label
        className="tab__radio__btn"
        htmlFor="tab-radio-4"
        //   onClick={() => handleChangeTabForm(4)}
      >
        <input type="radio" name="tab-radio" id="tab-radio-4" />
        Lệnh SOS
      </label>
    </div>
  );
}

export default ControlTab;
