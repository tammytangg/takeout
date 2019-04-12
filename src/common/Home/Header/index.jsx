import React, { Component } from 'react';
import HomeHeaderWrapper from './style';
import SearchBar from '../SearchBar';

/**
 * @constructor <Header/>
 * @description Top banner
 */

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: 'http://xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg',
		};
	}

	render() {
		const { url } = this.state;
		return (
			<HomeHeaderWrapper>
				<SearchBar />
				<img className="banner-img" src={url} alt="banner" />
			</HomeHeaderWrapper>
		);
	}
}

export default Header;
