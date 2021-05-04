import React, { useState, useEffect } from "react";
import "./ModelTopPlayer.css";
import Logo from "../../assets/image/caothu.png";
import ImgCup from "../../assets/image/cup.png";
import ImgSilver from "../../assets/image/silver.png";
import ImgCopper from "../../assets/image/copper.png";
import PropTypes from "prop-types";

ModelTopPlayer.propTypes = {};
function ModelTopPlayer(props) {
  const { data } = props;
  data.sort((a, b) => {
    return b.netAssetValue - a.netAssetValue;
  });
  console.log(data);
  const dataPlayerTop20 = data.slice(0, 20);
  const dataPlayerTop3 = dataPlayerTop20.slice(0, 3);
  const dataPlayerfrom4to10 = dataPlayerTop20.slice(3, 10);
  const dataPlayerfrom3to20 = dataPlayerTop20.slice(3, 20);
  console.log(dataPlayerTop20);
  const { handleCloseModelTopPlayer, isOpenModelTopPlayer } = props;
  console.log("Hello player");
  return (
    <div className="modeltopplayer">
      <div
        className={
          isOpenModelTopPlayer === true
            ? "modeltopplayer__content animation__model"
            : "modeltopplayer__content"
        }
      >
        <div
          className="modeltopplayer__close"
          onClick={handleCloseModelTopPlayer}
        >
          &times;
        </div>
        <div className="flex">
          <div className="col-6 modeltopplaye__left">
            <div className="modeltopplaye__left__img">
              <img src={Logo} className="modeltopplayer__logo" />
            </div>

            <div className="modeltopplaye__left__title">
              <h2 className="text-purple">BẢNG XẾP HẠNG THÁNG</h2>
            </div>
            <div>
              <div
                style={{
                  float: "right",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    color: "#00de1e",
                  }}
                >
                  <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                  <span
                    style={{
                      paddingLeft: 2,
                    }}
                  >
                    NAV
                  </span>
                </span>
              </div>

              <div
                style={{
                  clear: "both",
                }}
              ></div>
            </div>
            <div className="flex">
              <span
                style={{
                  fontSize: 13,
                }}
                className="text-orange"
              >
                CAO THỦ PHÁI SINH
              </span>
              <span
                style={{
                  fontSize: 10,
                }}
                className="text-orange"
              >
                Đơn vị : VND
              </span>
            </div>

            <div className="modeltopplaye__left__list">
              {dataPlayerTop3.map((value, index) => {
                return (
                  <div className="modeltopplaye__left__item" key={index}>
                    {index + 1 === 1 ? (
                      <img src={ImgCup} className="img-top-player" />
                    ) : index + 1 === 2 ? (
                      <img src={ImgSilver} className="img-top-player" />
                    ) : index + 1 === 3 ? (
                      <img src={ImgCopper} className="img-top-player" />
                    ) : (
                      ""
                    )}

                    <div className="modeltopplayer__name">{value.username}</div>
                    <div className="modeltopplayer__assets">
                      {Math.ceil(value.netAssetValue).toLocaleString()} đ
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="modeltopplaye__left__list__all">
              {dataPlayerfrom4to10.map((value, index) => {
                return (
                  <div className="modeltopplaye__left__item__all" key={index}>
                    <div className="modeltopplaye__left__item__all__name">
                      {value.username}
                    </div>
                    <div className="modeltopplaye__left__item__all__assets">
                      {Math.ceil(value.netAssetValue).toLocaleString()} đ
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="modeltopplaye__left__action">
              <button className="btn btn-modeltopplaye__left__action">
                Tham giá tại đây
              </button>
            </div>
          </div>
          <div className="col-6 modeltopplaye__right">
            <div className="modeltopplayer__right__title">
              <h2 className="text-orange">BẢNG XẾP HẠNG TUẦN</h2>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#616161",
                  fontSize: 12,
                }}
              >
                (Từ 8h00 thứ 2 đến 15H00 thứ 6 hàng tuần)
              </p>
            </div>
            <div className="content">
              <div>
                <div
                  style={{
                    float: "right",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      color: "#00de1e",
                    }}
                  >
                    <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                    <span
                      style={{
                        paddingLeft: 2,
                      }}
                    >
                      NAV
                    </span>
                  </span>
                </div>

                <div
                  style={{
                    clear: "both",
                  }}
                ></div>
              </div>
              <div
                className="flex"
                style={{
                  padding: 2,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                  }}
                  className="text-orange"
                >
                  CAO THỦ PHÁI SINH
                </span>
                <span
                  style={{
                    fontSize: 10,
                  }}
                  className="text-orange"
                >
                  Đơn vị : VND
                </span>
              </div>

              <div className="modeltopplaye__right__list">
                {dataPlayerTop3.map((value, index) => {
                  return (
                    <div className="modeltopplaye__right__item" key={index}>
                      <div className="modeltopplaye__right__item__name">
                        {value.username}
                      </div>
                      <div className="modeltopplaye__right__item__assets">
                        {Math.ceil(value.netAssetValue).toLocaleString()} đ
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="modeltopplaye__right__list__all">
                {dataPlayerfrom3to20.map((value, index) => {
                  return (
                    <div
                      className="modeltopplaye__right__item__all"
                      key={index}
                    >
                      <div className="modeltopplaye__right__item__all__left">
                        {value.username}
                      </div>
                      <div className="modeltopplaye__right__item__all__right">
                        {Math.ceil(value.netAssetValue).toLocaleString()} đ
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelTopPlayer;
