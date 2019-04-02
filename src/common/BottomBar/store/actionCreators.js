import * as actionTypes from './actionTypes';

export const changeTab = (key) =>{
    return{
        type:actionTypes.CHANGE_TAB,
        key: key
    }
}