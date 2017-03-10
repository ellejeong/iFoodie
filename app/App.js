import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers/index';
import Router from './Routers';


const App = () => {
	const store = createStore(reducers, {}, applyMiddleware(thunkMiddleware));

	return (
		<Provider store={store}>
			{/* Provider is communication glue with react */}
			<Router />
		</Provider>
	);
};

export default App;
