import React, { Component } from 'react';
import Header from './Header';
import Category from './Category';
import ContentList from './ContentList';

/**
 * @constructor <Home/>
 * @description home page
 */

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'home',
		};
	}

	render() {
		const { text } = this.state;
		return (
			<div>
				<Header />
				<Category />
				<ContentList />
				{text}
			</div>
		);
	}
}


export default Home;
