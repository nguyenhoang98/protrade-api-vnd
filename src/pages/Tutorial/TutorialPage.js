import React, { useEffect } from "react";
import "./TutorialPage.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
TutorialPage.propTypes = {};

function TutorialPage(props) {
  useEffect(() => {
    if (!localStorage.getItem("vnd")) {
      const { history } = props;
      history.push("/login-page");
    }
  }, []);
  return <div className="tutorialpage">TutorialPage</div>;
}

export default withRouter(TutorialPage);
