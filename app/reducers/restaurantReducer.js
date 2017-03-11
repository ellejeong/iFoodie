import React from 'react';

import { ADD_RESTAURANT, LOAD_ALL_RESTAURANTS, addRestaurant, loadAllRestaurants } from '../actions/index';

const initialState = {};

const editRestaurant = (state = initialState, action) => {
	console.log('action in reducer:', action);

	switch (action.type) {

		case ADD_RESTAURANT:
			return action.name;

		case LOAD_ALL_RESTAURANTS:
			return action.restaurants;

		default:
			return state;
	}
};

export default editRestaurant;
