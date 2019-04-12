import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootEl = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, rootEl,
	);

if (module.hot) {
	module.hot.accept('./App', () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root'),
		);
	});
}
