import React, { useEffect } from "react";
import { connect } from "react-redux";
import PriceBottom from "../../components/home/price/PriceBottom/PriceBottom";
import TableCodeItem from "../../components/home/price/PriceBottom/TableCodeItem/TableCodeItem";
import { fetch_api_price_bottom } from "./action";
import PropTypes from "prop-types";
PriceBottomContainer.propTypes = {};

function PriceBottomContainer(props) {
  useEffect(() => {
    const { fetchApiPriceBottom } = props;
    fetchApiPriceBottom();
  }, []);
  const { data } = props;
  return (
    <PriceBottom>
      {data.map((value, index) => {
        return <TableCodeItem data={value} key={index} />;
      })}
    </PriceBottom>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.PriceBottomData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiPriceBottom: () => {
      dispatch(fetch_api_price_bottom());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceBottomContainer);
