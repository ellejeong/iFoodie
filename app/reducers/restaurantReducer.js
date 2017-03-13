import React from 'react';

import { ADD_RESTAURANT, LOAD_ALL_RESTAURANTS, LOAD_RESTAURANT,  EDIT_RESTAURANT, EDIT_ADDRESS } from '../actions/index';

const initialState = {};

const restaurant = (state = initialState, action) => {
	console.log('action in reducer:', action);
	let newState = { date: action.date, name: action.name };
			console.log('newstate: ', newState);

	switch (action.type) {

		case ADD_RESTAURANT:
			return newState;

		case LOAD_ALL_RESTAURANTS:
		console.log('got to reducer');
			return action.restaurants;

		case LOAD_RESTAURANT:
			return action.name;

		case EDIT_RESTAURANT:
			console.log('action in edit', action);
			break;

		case EDIT_ADDRESS:
			return Object.assign({}, state, { address: action.address }, { name: action.name});

		default:
			return state;
	}
};

export default restaurant;
