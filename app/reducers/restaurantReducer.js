import React from 'react';

import { ADD_RESTAURANT, LOAD_ALL_RESTAURANTS, LOAD_RESTAURANT,  EDIT_RESTAURANT, EDIT_ADDRESS } from '../actions/index';

const initialState = {
	// course: '',
	// date: '',
	// dish: '',
	// experience: '',
	// imagePath: 'http://placehold.it/200x200?text=1',
	// name: '',
	// picSource: '',
	// dishes: []
};

const restaurant = (state = initialState, action) => {
	console.log('action in reducer:', action);

	switch (action.type) {

		case ADD_RESTAURANT:
			return Object.assign({}, state, { date: action.date }, { name: action.name });

		case LOAD_ALL_RESTAURANTS:
			return Object.assign({}, state, action.restaurants);

		case LOAD_RESTAURANT:
			return action.name;

		case EDIT_RESTAURANT:
			// return {restaurant: action.restaurant}
			return Object.assign({}, state, {dishes: action.dish});

		case EDIT_ADDRESS:
			// return Object.assign({}, state, { address: action.address }, { name: action.name });
			return { address: action.address, name: action.name };

		default:
			return state;
	}
};

export default restaurant;
