import React from 'react';

import { ADD_RESTAURANT, LOAD_ALL_RESTAURANTS, LOAD_RESTAURANT,  EDIT_RESTAURANT, addRestaurant, loadAllRestaurants, createRestaurant, loadRestaurant } from '../actions/index';

const initialState = {};

const restaurant = (state = initialState, action) => {
	console.log('action in reducer:', action);
	let newState = { date: action.date, name: action.name };
			console.log('newstate: ', newState);

	switch (action.type) {

		case ADD_RESTAURANT:
			return newState;

		case LOAD_ALL_RESTAURANTS:
			return action.restaurants;

		case LOAD_RESTAURANT:
			return action.name;

		case EDIT_RESTAURANT:
			console.log('action in edit', action);
			break;

		default:
			return state;
	}
};

export default restaurant;
