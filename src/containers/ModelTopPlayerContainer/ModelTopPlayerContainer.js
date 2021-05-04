import React, { useEffect } from "react";
import ModelTopPlayer from "../../components/ModelTopPlayer/ModelTopPlayer";
import { connect } from "react-redux";
import { fetch_api_model_top_player } from "./action";
import PropTypes from "prop-types";

ModelTopPlayerContainer.propTypes = {};

function ModelTopPlayerContainer(props) {
  useEffect(() => {
    const { fetchApiAssetTopPlayer } = props;
    fetchApiAssetTopPlayer();
  }, []);
  const { isOpenModelTopPlayer, handleCloseModelTopPlayer, data } = props;
  return (
    <ModelTopPlayer
      isOpenModelTopPlayer={isOpenModelTopPlayer}
      handleCloseModelTopPlayer={handleCloseModelTopPlayer}
      data={data}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.AssetsTopPlayer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiAssetTopPlayer: () => {
      dispatch(fetch_api_model_top_player());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelTopPlayerContainer);
