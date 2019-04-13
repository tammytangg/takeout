import React, { Component } from 'react';
import { MyWrapper, HeaderWrapper, ContentWrapper } from './style';

class My extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'my',
		};
	}

	render() {
		const { text } = this.state;
		return (
			<MyWrapper>
				<HeaderWrapper>
					<img className="avatar" src="http://i.waimai.meituan.com/static/img/default-avatar.png" alt="avatar" />
					<p className="nickname">Tammy</p>
				</HeaderWrapper>
				<ContentWrapper>
					<ul className="items">
						<li className="address">收货地址管理</li>
						<li className="money">商家代金券</li>
					</ul>
					<ul className="items">
						<li className="email">意见反馈</li>
						<li className="question">常见问题</li>
					</ul>
					<p className="tel">客服电话: 090-1483-2036</p>
					<p className="time">服务时间: 9:00～23:00</p>
				</ContentWrapper>
				{text}
			</MyWrapper>
		);
	}
}

export default My;
