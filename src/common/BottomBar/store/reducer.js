import {TABKEY} from '../../../config';
import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    tabs:[
        {
            name:'Home',
            key:TABKEY.home
        },
        {
            name:'Order',
            key:TABKEY.order
        },
        {
            name:'Setting',
            key:TABKEY.my
        }
    ],
    activeKey:TABKEY.home
});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.CHANGE_TAB: return state.set('activeKey', action.key);
        default: return state;
    }
}