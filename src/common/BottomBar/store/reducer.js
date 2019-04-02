import { fromJS } from 'immutable';
import { TABKEY } from '../../../config';
import CHANGE_TAB from './actionTypes';

const defaultState = fromJS({
    tabs:
        [
            {
                name: 'Home',
                key: TABKEY.home,
            },
            {
                name: 'Order',
                key: TABKEY.order,
            },
            {
                name: 'Setting',
                key: TABKEY.my,
            },
        ],
    activeKey: TABKEY.home,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TAB: return state.set('activeKey', action.key);
        default: return state;
    }
};
