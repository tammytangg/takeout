import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OrderWrapper, HeaderWrapper } from './style';
import { actionCreators } from './store';
import OrderItem from './OrderItem';
import ScrollView from '../ScrollView';

/**
 * @constructor <Order/>
 * @description  订单页面
 */

class Order extends Component {
	constructor(props) {
		super(props);
		const { fetchData } = this.props;
		fetchData();
	}

	renderItems() {
		const { orders } = this.props;
		console.log(orders);
		return orders.map(item => (
			<OrderItem key={item.get('order_id')} itemData={item} />
		));
	}

	render() {
		return (
			<OrderWrapper>
				<HeaderWrapper>Order</HeaderWrapper>
				<ScrollView isend={false}>
					{this.renderItems()}
				</ScrollView>
			</OrderWrapper>
		);
	}
}

const mapStateToProps = state => ({
	orders: state.getIn(['orderInfo', 'orders']),
});

const mapDispatchToProps = dispatch => ({
	fetchData: () => {
		dispatch(actionCreators.getOrderList(1));
	},
});


export default connect(mapStateToProps, mapDispatchToProps)(Order);
