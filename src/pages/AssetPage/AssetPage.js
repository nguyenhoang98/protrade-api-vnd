import React, { useEffect } from "react";
import "./AssetPage.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
AssetPage.propTypes = {};

function AssetPage(props) {
  useEffect(() => {
    if (!localStorage.getItem("vnd")) {
      const { history } = props;
      history.push("/login-page");
    }
  }, []);
  return (
    <div className="assetpage">
      <h2>AssetPage</h2>
    </div>
  );
}

export default withRouter(AssetPage);
