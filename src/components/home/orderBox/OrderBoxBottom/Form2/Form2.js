import React, { Component } from "react";
import "./Form2.css";
import classNames from "classnames";
class Form2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isOpenTabForm } = this.props;
    return (
      <div
        className={classNames("tab__form tab__form-2", {
          showTabForm: isOpenTabForm === 2,
        })}
      >
        <form>
          <div className="group-form flex">
            <div className="col-4">
              <label>Mã HĐTL</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                className="group-form__input"
                placeholder="VN30F2104"
              />
            </div>
          </div>
          <div className="group-form flex">
            <div className="col-4">
              <label>Giá đặt</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                className="group-form__input"
                placeholder="Giá"
              />
            </div>
          </div>
          <div className="group-form flex">
            <div className="col-4">
              <label>Khối lượng</label>
            </div>
            <div className="col-8 flex">
              <input
                type="text"
                className="group-form__input"
                placeholder="Khối Lượng"
              />
            </div>
          </div>

          <div className="group-form flex">
            <div className="col-4">
              <label>Giá trị khớp</label>
            </div>
            <div className="col-8 flex">
              <div className="col-2">
                <button className="btn btn-next">≤</button>
              </div>
              <div className="col-2">
                <button className="btn btn-prev">≥</button>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  className="group-form__input"
                  placeholder="Ngày hết hạn"
                />
              </div>
            </div>
          </div>

          <div className="group-form flex">
            <div className="col-4">
              <label>Ngày hết hạn </label>
            </div>
            <div className="col-8 flex">
              <input
                type="text"
                className="group-form__input"
                placeholder="Ngày hết hạn"
              />
            </div>
          </div>

          <div
            className="group-form"
            style={{
              textAlign: "center ",
            }}
          >
            <button className="btn btn-buy">Mua</button>
            <button className="btn btn-sell">Bán</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form2;
