import CHANGE_TAB from './actionTypes';

const changeTab = key => ({
  type: CHANGE_TAB,
  key,
});

export default { changeTab };
