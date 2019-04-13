import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

const defaultState = fromJS({
	orders: [],
});


export default (state = defaultState, action) => {
    switch (action.type) {
		case actionTypes.GET_ORDER_DATA: return state.set('orders', fromJS(action.data));
        default: return state;
    }
};
