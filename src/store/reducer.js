import {combineReducers} from 'redux-immutable';
import {reducer as tabReducer} from '../common/BottomBar/store';

const reducer = combineReducers({
    tabInfo:tabReducer
});
export default reducer;