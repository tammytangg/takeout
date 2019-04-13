import { combineReducers } from 'redux-immutable';
import { reducer as tabReducer } from '../common/BottomBar/store';
import { reducer as homeReducer } from '../common/Home/store';
import { reducer as ordersReducer } from '../common/Order/store';

const reducer = combineReducers({
  tabInfo: tabReducer,
  homeInfo: homeReducer,
  orderInfo: ordersReducer,
});
export default reducer;
