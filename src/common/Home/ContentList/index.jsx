import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentListWrapper from './style';
import ListItem from './ListItem';
import { actionCreators } from '../store';

/**
 * @constructor <ContentList />
 * @description shop list around here
 */

class ContentList extends Component {
	constructor(props) {
		super(props);
		const { fetchData } = this.props;
		this.state = {
			loadingText: '加载中',
		};
		this.page = 0;
		fetchData( this.page );
	}

	componentWillMount() {
		window.addEventListener('scroll', ContentList.onLoadPage.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', ContentList.onLoadPage.bind(this));
	}

	static onLoadPage() {
		const { clientHeight } = document.documentElement;
		const { scrollHeight } = document.body;
		const { scrollTop } = document.documentElement;
		const proLoadDis = 30;
		if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
			this.page = this.page + 1;
			if ( this.page < 2) {
				const { fetchData } = this.props;
				fetchData(this.page);
			} else {
				this.setState({
					loadingText: '加载完成',
				});
			}
		}
	}

	renderItems() {
		const { list } = this.props;
		// console.log(list);
		return list.map(item => (
			<ListItem key={`${item.get('id')} ${this.page}`} itemData={item} />
		));
	}

	render() {
		const { loadingText } = this.state;
		return (
			<ContentListWrapper>
				<h4 className="list-title">
					<span className="title-line" />
					<span>Resturants</span>
					<span className="title-line" />
				</h4>
				<div>
					{this.renderItems()}
					<div className="loading">{loadingText}</div>
				</div>
			</ContentListWrapper>
		);
	}
}

const mapStateToProps = state => ({
	list: state.getIn(['homeInfo', 'resturants']),
});

const mapDispatchToProps = dispatch => ({
	fetchData: ( page ) => {
		dispatch(actionCreators.getList( page ));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
