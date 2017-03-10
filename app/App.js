import React from 'react';
// import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { Router } from 'react-native-router-flux';

// import Welcome from './components/Welcome/Welcome.js';
// import EntryPage from './components/EntryPage/EntryPage.js';
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
