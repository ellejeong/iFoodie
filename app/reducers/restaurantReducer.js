import React from 'react';

import { ADD_RESTAURANT, LOAD_ALL_RESTAURANTS, LOAD_RESTAURANT, addRestaurant, loadAllRestaurants, createRestaurant, loadRestaurant } from '../actions/index';

const initialState = {};

const restaurant = (state = initialState, action) => {
	console.log('action in reducer:', action);

	switch (action.type) {

		case ADD_RESTAURANT:
			return action.name;

		case LOAD_ALL_RESTAURANTS:
			return action.restaurants;

		case LOAD_RESTAURANT:
			return action.name;

		default:
			return state;
	}
};

export default restaurant;
