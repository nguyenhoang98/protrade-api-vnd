import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { Link, withRouter } from "react-router-dom";
import { postApi } from "../../api/orderBookApi";
import { toast } from "react-toastify";
import { LOGIN_SUCCESS, LOGIN_ERR } from "../../constants/login";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
LoginPage.propTypes = {};

function LoginPage(props) {
  const [data, setData] = useState({
    user: "",
    password: "",
  });
  useEffect(() => {
    if (localStorage.getItem("vnd")) {
      localStorage.removeItem("vnd");
    }
    const { history } = props;
  }, []);
  function handleOnChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  }
  function handleOnLogin(e) {
    e.preventDefault();
    const { user, password } = data;
    const { history } = props;
    const { push } = history;
    postApi("https://auth-api.vndirect.com.vn/v2/auth", {
      username: user,
      password: password,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.token);
          localStorage.setItem("vnd", res.data.token);
          if (localStorage.getItem("vnd") === res.data.token) {
            push("/home", res.data.token);
            toast.success(LOGIN_SUCCESS);
          }
        }
      })
      .catch(() => {
        toast.error(LOGIN_ERR);
      });
  }
  const { user, password } = data;
  return (
    <div className="loginpage">
      <div className="loginpage__form">
        <div className="loginpage__form__title">
          Đăng nhập với tài khoản VNDIRECT
        </div>
        <form onSubmit={handleOnLogin} className="loginpage__form__content">
          <div className="group-form">
            <label htmlFor="userName" className="group-form__label">
              Tên đăng nhập :
            </label>
            <input
              type="text"
              id="userName"
              className="group-form__input__login"
              value={user}
              name="user"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="group-form">
            <label htmlFor="passName" className="group-form__label">
              Mật khẩu :
            </label>
            <input
              type="text"
              id="passName"
              className="group-form__input__login"
              value={password}
              name="password"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="group-form">
            <input type="checkbox" />
            <span
              style={{
                paddingLeft: 10,
              }}
            >
              Ghi nhớ trạng thái đăng nhập trên trình duyệt này
            </span>
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </div>
          <div className="group-form">
            <button className="btn btn-login">
              <span>
                <i className="fa fa-sign-in" aria-hidden="true"></i>
              </span>
              &nbsp; Đăng nhập
            </button>
          </div>
        </form>

        <div className="loginpage__form__help">
          <div
            style={{
              width: "60%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <div className="group-form">
              <button className="btn btn-open-account">
                <i className="fa fa-lock" aria-hidden="true"></i>
                &nbsp; Mở tài khoản
              </button>
            </div>
            <div className="group-form">
              <Link to="/help-page" className="link-help">
                Trợ giúp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginPage);
