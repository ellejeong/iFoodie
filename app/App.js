import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

import firebaseInfo from '../firebaseSetup';
import reducers from './reducers/index';
import Router from './Routers';

const store = createStore(reducers, {}, applyMiddleware(thunkMiddleware));

class App extends Component {

	componentWillMount() {
		firebase.initializeApp(firebaseInfo);
	}

	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
