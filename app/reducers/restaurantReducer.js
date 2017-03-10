import React from 'react';

import { ADD_RESTAURANT, addRestaurant } from '../actions/index';

const initialState = {};

const editRestaurant = (state = initialState, action) => {
	switch (action.type) {

		case ADD_RESTAURANT:
			return action.name;

		default:
			return state;
	}
};

export default editRestaurant;
