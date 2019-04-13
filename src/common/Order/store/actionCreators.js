import axios from 'axios';
import actionTypes from './actionTypes';

const getListData = (currentPage, data) => ({
	type: actionTypes.GET_ORDER_DATA,
	currentPage,
	data,
});

const getOrderList = page => (dispatch) => {
	const url = 'json/orders.json';
	axios({
		method: 'get',
		url,
	}).then((resp) => {
		const data = resp.data.data.digestlist;
		console.log(data);
		dispatch(getListData(page, data));
	});
};

export default { getOrderList };
