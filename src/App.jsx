import React from 'react';
import { Provider } from 'react-redux';
import GlobalResetStyle from './style';
import BottomBar from './common/BottomBar';
import store from './store';


const App = () => (
	<Provider store={store}>
		<GlobalResetStyle />
		<BottomBar />
	</Provider>
);

export default App;
