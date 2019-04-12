import { combineReducers } from 'redux-immutable';
import { reducer as tabReducer } from '../common/BottomBar/store';
import { reducer as homeReducer } from '../common/Home/store';

const reducer = combineReducers({
  tabInfo: tabReducer,
  homeInfo: homeReducer,
});
export default reducer;
