import React from 'react';
import { hot } from 'react-hot-loader';
import GlobalResetStyle from './style';
import BottomBar from './common/BottomBar';
import Home from './common/Home';

const App = () => (
	<div>
		<GlobalResetStyle />
		<Home />
		<BottomBar />
	</div>
);

export default hot(module)(App);
