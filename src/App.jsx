import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Route, Switch } from 'react-router-dom';
import GlobalResetStyle from './style';
import BottomBar from './common/BottomBar';
import Home from './common/Home';
import Order from './common/Order';
import My from './common/My';

const App = ({ history }) => (
	<ConnectedRouter history={history}>
		<GlobalResetStyle />
		<div>
			<Switch>
				<Route exact path="/home" component={Home} />
				<Route path="/order" component={Order} />
				<Route path="/my" component={My} />
			</Switch>
			<BottomBar />
		</div>
	</ConnectedRouter>
);

export default hot(module)(App);
