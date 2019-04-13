import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as tabReducer } from '../common/BottomBar/store';
import { reducer as homeReducer } from '../common/Home/store';
import { reducer as ordersReducer } from '../common/Order/store';

const rootReducer = history => combineReducers({
	tabInfo: tabReducer,
	homeInfo: homeReducer,
	orderInfo: ordersReducer,
	router: connectRouter(history),
});

export default rootReducer;
