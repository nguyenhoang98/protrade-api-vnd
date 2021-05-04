import React, { Component } from "react";
import "./Form1.css";
import classNames from "classnames";
import jwt_decode from "jwt-decode";
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "NB",
      symbol: "VN30F2105",
      priceType: "",
      quantity: "",
      price: 0,
      userName: localStorage.getItem("vnd")
        ? jwt_decode(localStorage.getItem("vnd")).username
        : "",

      isOpenToolTip: false,
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this.handleOpenToolTip = this.handleOpenToolTip.bind(this);
    this.handleCloseToolTip = this.handleCloseToolTip.bind(this);
    this.handleOptionValue = this.handleOptionValue.bind(this);
    this.handleBlurInput = this.handleBlurInput.bind(this);
    this.handleOnForcusRemoveSymbol = this.handleOnForcusRemoveSymbol.bind(
      this
    );
  }

  handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleBuy(e) {
    e.preventDefault();
    const data = {
      side: "NB",
      symbol: this.state.symbol,
      priceType: this.state.priceType,
      quantity: Number(this.state.quantity),
      price: Number(this.state.price),
      userName: localStorage.getItem("vnd")
        ? jwt_decode(localStorage.getItem("vnd")).username
        : "",
    };
    const { postApiOrderBook } = this.props;
    postApiOrderBook(data);
  }

  handleSell(e) {
    e.preventDefault();
    const data = {
      side: "NS",
      symbol: this.state.symbol,
      priceType: this.state.priceType,
      quantity: Number(this.state.quantity),
      price: Number(this.state.price),
      userName: localStorage.getItem("vnd")
        ? jwt_decode(localStorage.getItem("vnd")).username
        : "",
    };
    const { postApiOrderBook } = this.props;
    postApiOrderBook(data);
  }
  handleOpenToolTip() {
    this.setState({
      isOpenToolTip: true,
    });
  }
  handleCloseToolTip() {
    this.setState({
      isOpenToolTip: false,
    });
  }
  handleOptionValue(value) {
    this.setState({
      priceType: value,
    });
    this.handleCloseToolTip();
  }
  handleBlurInput() {
    setTimeout(() => {
      this.setState({
        isOpenToolTip: false,
      });
    }, 100);
  }
  handleOnForcusRemoveSymbol() {
    this.setState({
      symbol: "",
    });
  }
  render() {
    const {
      code,
      price,
      quantity,
      priceType,
      isOpenToolTip,
      symbol,
    } = this.state;
    const { isOpenTabForm } = this.props;
    return (
      <div
        className={classNames("tab__form tab__form-1", {
          showTabForm: isOpenTabForm === 1,
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
                name="symbol"
                value={symbol}
                onChange={this.handleOnchange}
                onFocus={this.handleOnForcusRemoveSymbol}
                list="symbol"
                required
              />
              <datalist id="symbol">
                <option value="VN30F2105" />
                <option value="VN30F2106" />
                <option value="VN30F2109" />
                <option value="VN30F2112" />
              </datalist>
            </div>
          </div>
          <div className="group-form flex">
            <div className="col-4">
              <label>Giá đặt</label>
            </div>
            <div className="col-8 tooltip-container">
              <input
                type="text"
                className="group-form__input"
                placeholder="Giá"
                name="priceType"
                value={priceType}
                onChange={this.handleOnchange}
                onFocus={this.handleOpenToolTip}
                id="input-price-type"
                onBlur={this.handleBlurInput}
                required
                autoComplete="off"
              />
              {isOpenToolTip && (
                <div className="tooltip-content flex" id="tooltip-content">
                  <div
                    className="tooltip-item"
                    onClick={() => this.handleOptionValue("ATO")}
                  >
                    ATO
                  </div>
                  <div
                    className="tooltip-item"
                    onClick={() => this.handleOptionValue("ATC")}
                  >
                    ATC
                  </div>
                  <div
                    className="tooltip-item"
                    onClick={() => this.handleOptionValue("MTL")}
                  >
                    MTL
                  </div>
                  <div
                    className="tooltip-item"
                    onClick={() => this.handleOptionValue("MOK")}
                  >
                    MOK
                  </div>
                  <div
                    className="tooltip-item"
                    onClick={() => this.handleOptionValue("MAK")}
                  >
                    MAK
                  </div>

                  <div className="caret-top"></div>
                </div>
              )}
            </div>
          </div>
          <div className="group-form flex">
            <div className="col-4">
              <label>Khối lượng</label>
            </div>
            <div className="col-8 flex">
              <input
                type="number"
                className="group-form__input"
                placeholder="Khối Lượng"
                name="quantity"
                value={quantity}
                onChange={this.handleOnchange}
                min={1}
                max={2}
                required
              />
            </div>
          </div>

          <div
            className="group-form"
            style={{
              textAlign: "right ",
            }}
          >
            <button
              type="submit"
              className="btn btn-buy"
              onClick={this.handleBuy}
            >
              Mua
            </button>
            <button
              type="button"
              className="btn btn-sell"
              onClick={this.handleSell}
            >
              Bán
            </button>
            <input type="checkbox" />
            <span className="save">Lưu lệnh</span>
          </div>
        </form>
      </div>
    );
  }
}
export default Form1;
