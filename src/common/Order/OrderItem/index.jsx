import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OrderItemWrapper, ProductItemWrapper } from './style';
// import { actionCreators } from '../store';

/**
 * @constructor <OrderItem />
 * @description item of orders
 */

class OrderItem extends Component {
	renderCommentButton() {
		const { itemData } = this.props;
		const isComment = itemData.get('is_comment');
		if (isComment === 0) {
			console.log(`iscoment: ${isComment}`);
			return (
			<div className="evaluation clearfix">
				<div className="evaluation-btn">评价</div>
			</div>
			);
		}
		return null;
	}

	renderTotalPrice() {
		const { itemData } = this.props;
		return (
			<ProductItemWrapper key={`total${itemData.get('order_id')}`}>
				<span>...</span>
				<div className="p-total-count">
					{`总计${itemData.get('product-count')}`}
				</div>
			</ProductItemWrapper>
		);
	}

	renderProducts() {
		const { itemData } = this.props;
		const list = itemData.get('product_list').toJS();
		list.push({
				type: 'more',
				spuId: 1,
		});
		return list.map((item) => {
			if (item.type === 'more') {
				return (
						<ProductItemWrapper key="more">
						<span>...</span>
						<div className="p-total-count">
							{`总计${itemData.get('product_count')}个菜，实付`}
							<span className="total-price">{itemData.get('total')}</span>
						</div>
						</ProductItemWrapper>
				);
			}
			return (
					<ProductItemWrapper key={item.product_name}>
					<span>{item.product_name}</span>
					<span className="p-count">
						{`x${item.product_count}`}
					</span>
					</ProductItemWrapper>
			);
		});
	}

	render() {
		const { itemData } = this.props;
		return (
			<OrderItemWrapper>
				<div className="order-item-inner">
					<img className="item-img" src={itemData.get('poi_pic')} alt="" />
					<div className="item-right">
						<div className="item-top">
							<p className="order-name one-line">{itemData.get('poi_name')}</p>
							<div className="arrow" />
							<div className="order-state">{itemData.get('status_description')}</div>
						</div>
						<div className="item-bottom">
							{this.renderProducts()}
						</div>
					</div>
				</div>
				{this.renderCommentButton()}
			</OrderItemWrapper>
		);
	}
}

// const mapStateToProps = state => ({
// 	list: state.getIn(['orderInfo', 'orders']),
// });

// const mapDispatchToProps = dispatch => ({
// 	fetchData: () => {
// 		dispatch(actionCreators.getList());
// 	},
// });

export default connect(null, null)(OrderItem);
