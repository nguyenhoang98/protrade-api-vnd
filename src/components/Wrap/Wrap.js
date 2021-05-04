import React, { useState } from "react";
import "./Wrap.css";
import Menu from "../../components/Menu/Menu";
import ModelTopPlayerContainer from "../../containers/ModelTopPlayerContainer/ModelTopPlayerContainer";
import { Switch, Route, withRouter } from "react-router-dom";
import routers from "../../routers/routers";
import PropTypes from "prop-types";

Wrap.propTypes = {};

function Wrap(props) {
  const [isOpenModelTopPlayer, setisOpenModelTopPlayer] = useState(false);
  function showModelTopPlayer() {
    setisOpenModelTopPlayer(true);
  }
  function closeTopModelPlayer() {
    setisOpenModelTopPlayer(false);
  }
  const { location } = props;
  const { pathname } = location;
  return (
    <div
      className="wrap"
      style={{
        height: "100%",
      }}
    >
      {pathname !== "/login-page" && (
        <Menu handleShowModelTopPlayer={showModelTopPlayer} />
      )}
      {isOpenModelTopPlayer && (
        <ModelTopPlayerContainer
          handleCloseModelTopPlayer={closeTopModelPlayer}
          isOpenModelTopPlayer={isOpenModelTopPlayer}
        />
      )}
      <Switch>
        {routers.map((value, index) => {
          return (
            <Route
              path={value.path}
              component={value.component}
              exact={value.exact}
              key={index}
            />
          );
        })}
      </Switch>
    </div>
  );
}

export default withRouter(Wrap);
