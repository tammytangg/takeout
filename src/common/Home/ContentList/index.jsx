import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentListWrapper from './style';
import ListItem from './ListItem';
import ScrollView from '../../ScrollView';
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
			isend: false,
		};
		this.page = 0;
		fetchData( this.page );
	}

	onLoadPage() {
		// console.log('load page');
		this.page = this.page + 1;
		if ( this.page < 2) {
			const { fetchData } = this.props;
			fetchData(this.page);
		} else {
			this.setState({
				isend: true,
			});
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
		const { isend } = this.state;
		return (
			<ContentListWrapper>
				<h4 className="list-title">
					<span className="title-line" />
					<span>Resturants</span>
					<span className="title-line" />
				</h4>
				<ScrollView loadCallBack={() => this.onLoadPage()} isend={isend}>
					{this.renderItems()}
				</ScrollView>
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
