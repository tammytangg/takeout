import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

const defaultState = fromJS({
	items: [],
	resturants: [],
});

const getResturants = ( state, action ) => {
	if (action.currentPage === 0) {
		return state.set('resturants', fromJS(action.data));
	}
	return state.set('resturants', state.get('resturants').concat(fromJS(action.data)));
};

export default (state = defaultState, action) => {
    switch (action.type) {
		case actionTypes.GET_HEAD_DATA: return state.set('items', fromJS(action.data));
		case actionTypes.GET_LIST_DATA: return getResturants(state, action);
        default: return state;
    }
};
