import React, { useEffect } from "react";
import ProfitOrLoss from "../../components/common/ProfitOrLoss";
import { connect } from "react-redux";
import { fetch_api_asset } from "./action";
import PropTypes from "prop-types";

ProfitOrLossContainer.propTypes = {};

function ProfitOrLossContainer(props) {
  useEffect(() => {
    const { fetchApiAssets } = props;
    fetchApiAssets();
  }, []);
  const { assets } = props;
  return <ProfitOrLoss assets={assets} />;
}
const mapStateToProps = (state) => {
  return {
    assets: state.Assets,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiAssets: () => {
      dispatch(fetch_api_asset());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfitOrLossContainer);
