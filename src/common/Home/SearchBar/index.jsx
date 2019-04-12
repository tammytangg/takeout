import React, { Component } from 'react';
import TopSearchBarWrapper from './style';

/**
 * @constructor <TopSearchBar />
 * @description Top Search Bar
 */

class TopSearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'home',
		};
	}

	render() {
		const { text } = this.state;
		return (
			<TopSearchBarWrapper>
				<div className="bar-location">
					<div className="location-icon" />
					<div className="location-text">Huzhou</div>
				</div>
				<div className="search-btn">
					<p className="place-holder">{text}</p>
				</div>
			</TopSearchBarWrapper>
		);
	}
}


export default TopSearchBar;
