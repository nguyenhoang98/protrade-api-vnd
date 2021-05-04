import React, { useEffect, useState } from "react";
import "./Menu.css";
import LOGO_VND from "../../assets/image/logo.svg";
import { NavLink, withRouter } from "react-router-dom";
import Clock from "../common/Clock";
import ProfitOrLossContainer from "../../containers/ProfitOrLossContainer/ProfitOrLossContainer";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
MenuPage.propTypes = {};
function MenuPage(props) {
  const [userName, setUserName] = useState("");
  const { handleShowModelTopPlayer } = props;
  useEffect(() => {
    setUserName(
      localStorage.getItem("vnd")
        ? jwt_decode(localStorage.getItem("vnd")).customerName
        : ""
    );
  }, []);
  function handleOnLogOut() {
    const { history } = props;
    const { push } = history;
    localStorage.removeItem("vnd");
    push("/login-page");
  }
  return (
    <div className="menupage flex">
      <div className="menupage__left">
        <ul className="flex">
          <li>
            <img src={LOGO_VND} className="logo-vnd" />
          </li>
          <li>
            <span
              className="time text-orange"
              style={{
                color: "#f7941d",
              }}
            >
              <Clock />
            </span>
          </li>
          <li>
            <NavLink to="/home" activeClassName="action_page" exact={true}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/asset-page" activeClassName="action_page">
              Tài sản
            </NavLink>
          </li>
          <li
            style={{
              borderRight: "none",
            }}
          >
            <NavLink to="/tutorial-page" activeClassName="action_page">
              Hướng Dẫn
            </NavLink>
          </li>
          <li
            style={{
              borderRight: "none",
            }}
          >
            <span
              className="text-orange"
              style={{
                color: "#f7941d",
              }}
            >
              Lãi/Lỗ:
              <span
                style={{
                  color: "#ffd900",
                }}
              >
                <ProfitOrLossContainer />
              </span>
            </span>
          </li>
          <li
            style={{
              marginLeft: 30,
            }}
          >
            <button
              className="btn top-btn-model"
              onClick={handleShowModelTopPlayer}
            >
              <i className="fa fa-trophy" aria-hidden="true"></i>
              Top cao thủ phái sinh
            </button>
          </li>
        </ul>
      </div>
      <div className="menupage__right">
        <ul className="flex">
          <li>
            <button className="btn-trial">Bản trial</button>
          </li>
          <li
            style={{
              marginLeft: 6,
            }}
          >
            <a href="#" className="btn-upgrade-account">
              Nâng cấp tài khoản
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-user" aria-hidden="true"></i>
              &nbsp; {userName} &nbsp;
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            <div className="logout">
              <button className="btn btn-logout" onClick={handleOnLogOut}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                &nbsp; logout
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(MenuPage);
