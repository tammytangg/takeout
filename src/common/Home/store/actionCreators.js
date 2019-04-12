import axios from 'axios';
import actionTypes from './actionTypes';

const getHeadData = data => ({
  type: actionTypes.GET_HEAD_DATA,
  data,
});

const getListData = (currentPage, data) => ({
	type: actionTypes.GET_LIST_DATA,
	currentPage,
	data,
});

const getCategory = () => (dispatch) => {
        axios({
			method: 'get',
			url: 'json/head.json',
		}).then((resp) => {
			const categoryData = resp.data.data.primary_filter;
			console.log(categoryData);
			dispatch(getHeadData(categoryData));
		});
};

const getList = page => (dispatch) => {
	const url = `json/homelist${page}.json`;
	axios({
		method: 'get',
		url,
	}).then((resp) => {
		const categoryData = resp.data.data.poilist;
		console.log(categoryData);
		dispatch(getListData(page, categoryData));
	});
};

export default { getCategory, getList };
