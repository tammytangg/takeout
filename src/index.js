import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import App from './App';
import configureStore, { history } from './store';

const initialState = Immutable.Map();
const store = configureStore(initialState);
// ReactDOM.render(<App />, document.getElementById('root'));

const rootEl = document.getElementById('root');

const render = () => {
	ReactDOM.render(
	<Provider store={store}>
		<App history={history} />
	</Provider>,
	rootEl,
	);
};

render();

if (module.hot) {
	// Reload components
	module.hot.accept('./App', () => {
		render();
	});
}
