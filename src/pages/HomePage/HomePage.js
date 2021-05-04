import React, { useEffect } from "react";
import "./HomePage.css";
import HomeLayOut from "../../layout/HomeLayOut/HomeLayOut";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
HomePage.propTypes = {};

function HomePage(props) {
  useEffect(() => {
    const { history } = props;
    const { location } = props;
    console.log(history);
    if (!localStorage.getItem("vnd")) {
      history.goBack();
    }
  }, []);
  return (
    <div className="homepage">
      <HomeLayOut />
    </div>
  );
}

export default withRouter(HomePage);
