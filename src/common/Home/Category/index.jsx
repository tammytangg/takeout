import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { CategoryItem, CategoryWrapper } from './style';

/**
 * @constructor <Category/>
 * @description waimai category component
 */

class Category extends Component {
	constructor(props) {
		super(props);
		const { fetchData } = this.props;
		fetchData();
	}

	renderItems() {
		let { items } = this.props;
		items = items.slice(0, 8);
		return items.map(item => (
			<CategoryItem key={item.get('code')}>
				<img className="item-icon" src={item.get('url')} alt="icon" />
				<p className="item-name">{item.get('name')}</p>
			</CategoryItem>
		));
	}

	render() {
		return (
			<CategoryWrapper className="clearfix">
				{this.renderItems()}
			</CategoryWrapper>
		);
	}
}

const mapStateToProps = state => ({
	items: state.getIn(['homeInfo', 'items']),
});

const mapDispatchToProps = dispatch => ({
	fetchData: () => {
		dispatch(actionCreators.getCategory());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
