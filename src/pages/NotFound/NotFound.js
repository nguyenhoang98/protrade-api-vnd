import React, { useEffect } from "react";
import "./NotFound.css";
import ImgNotFound from "../../assets/image/not-found.png";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
NotFound.propTypes = {};

function NotFound(props) {
  useEffect(() => {
    if (!localStorage.getItem("vnd")) {
      const { history } = props;
      history.push("/login-page");
    }
  }, []);
  return (
    <div className="notfound">
      <img src={ImgNotFound} className="notfound__img" />
    </div>
  );
}

export default withRouter(NotFound);
