import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItemWrapper from './style';
// import { actionCreators } from '../store';

/**
 * @constructor <ListItem />
 * @description item of resturants
 */

class ListItem extends Component {
	static renderBrand(data) {
		if (data.get('brand_type')) {
			return <div className="brand brand-pin">PIN</div>;
		}
		return <div className="brand brand-xin">XIN</div>;
	}

	/**
	 * render 5 stars
	 * @param data
	 */
	static renderScore(data) {
		const poiScore = data.get('wm_poi_score') || '';
		const score = poiScore.toString();
		const scoreArray = score.split('.');
		const fullStar = parseInt(scoreArray[0], 0);
		const halfStar = parseInt(scoreArray[1], 0) >= 5 ? 1 : 0;
		const nullStar = 5 - fullStar - halfStar;
		const startJsx = [];
		for (let i = 0; i < fullStar; i += 1) {
			startJsx.push(<div key={`${i}full`} className="star fullstar" />);
		}
		for (let i = 0; i < halfStar; i += 1) {
			startJsx.push(<div key={`${i}harf`} className="star halfstar" />);
		}
		for (let i = 0; i < nullStar; i += 1) {
			startJsx.push(<div key={`${i}null`} className="star nullstar" />);
		}
		return startJsx;
	}

	static renderCount(data) {
		const num = data.get('month_sale_num');
		if (num > 999) {
			return '999+';
		}
		return num;
	}

	/**
	 * 是否需要渲染美团转送tag
	 * @param {} data
	 */
	static renderFlag(data) {
		if (data.get('delivery_flag')) {
			return <div className="item-meituan-flag">美团专送</div>;
		}
		return null;
	}

	/**
	 * 渲染商家活动
	 * @param {} data
	 */
	static renderOthers(data) {
		const discounts2 = data.get('discounts2');
		return discounts2.map(item => (
			<div key={item.get('id')} className="other-info">
				<img src={item.get('icon_url')} alt="icon" className="other-tag" />
				<div className="other-content">{ item.get('info') }</div>
			</div>
		));
	}


	render() {
		const { itemData } = this.props;
		return (
			<ListItemWrapper className="scale-1px">
				<img className="item-img" alt="" src={itemData.get('pic_url')} />
				{ListItem.renderBrand(itemData)}
				<div className="item-info-content">
					<div className="item-title">{ itemData.get('name') }</div>
					<div className="item-desc clearfix">
						<div className="item-score">{ ListItem.renderScore(itemData) }</div>
						<div className="item-count">{ `月售${ListItem.renderCount(itemData)}` }</div>
						<div className="item-distance">
							<span dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />
							{ `${itemData.get('distance')}` }
						</div>
						<div className="item-time">{`${itemData.get('mt_delivery_time')} |` }</div>
					</div>
					<div className="item-price">
						<div className="item-pre-price">{ itemData.get('min_price_tip') }</div>
						{ ListItem.renderFlag(itemData) }
					</div>
					<div className="item-others">
						{ListItem.renderOthers(itemData)}
					</div>
				</div>
			</ListItemWrapper>
		);
	}
}

// const mapStateToProps = state => ({
// 	list: state.getIn(['homeInfo', 'resturants']),
// });

// const mapDispatchToProps = dispatch => ({
// 	fetchData: () => {
// 		dispatch(actionCreators.getList());
// 	},
// });

export default connect(null, null)(ListItem);
