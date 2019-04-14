import React, { Component } from 'react';
import ScrollViewWrapper from './style';
import Loading from '../Loading';

class ScrollView extends Component {
	componentWillMount() {
		window.addEventListener('scroll', this.onLoadPage);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onLoadPage);
	}

	onLoadPage = () => {
		console.log('onLoadPage');
		const { clientHeight } = document.documentElement;
		const { scrollHeight } = document.body;
		const { scrollTop } = document.documentElement;
		const proLoadDis = 30;
		const { isend } = this.props;
		const { loadCallBack } = this.props;
		if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
			if (!isend && loadCallBack) {
				loadCallBack();
			}
		}
	};

	render() {
		const { children } = this.props;
		const { isend } = this.props;
		return (
		<ScrollViewWrapper>
			{children}
			<Loading isend={isend} />
		</ScrollViewWrapper>
		);
	}
}

export default ScrollView;
