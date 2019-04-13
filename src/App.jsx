import React from 'react';
import { hot } from 'react-hot-loader';
import GlobalResetStyle from './style';
import BottomBar from './common/BottomBar';
// import Home from './common/Home';
import Order from './common/Order';

const App = () => (
	<div>
		<GlobalResetStyle />
		<Order />
		<BottomBar />
	</div>
);

export default hot(module)(App);
