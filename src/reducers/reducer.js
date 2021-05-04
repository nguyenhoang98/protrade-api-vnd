import { combineReducers } from "redux";
import PriceBottomData from "../containers/PriceBottomContainer/reducer";
import OrderBookData from "../containers/TabOrderBoxContainer/reducer";
import CategoryData from "../containers/TabCategoryContainer/reducer";
import Assets from "../containers/ProfitOrLossContainer/reducer";
import AssetsTopPlayer from "../containers/ModelTopPlayerContainer/reducer";
const appReducers = combineReducers({
  PriceBottomData: PriceBottomData,
  OrderBookData: OrderBookData,
  CategoryData: CategoryData,
  Assets: Assets,
  AssetsTopPlayer: AssetsTopPlayer,
});

export default appReducers;
