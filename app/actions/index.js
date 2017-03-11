import store from 'react-native-simple-store';

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const LOAD_ALL_RESTAURANTS = 'LOAD_ALL_RESTAURANTS';

export const addRestaurant = name => {
	return {
		type: ADD_RESTAURANT,
		name
	};
};

export const loadAllRestaurants = restaurants => {
	return {
		type: LOAD_ALL_RESTAURANTS,
		restaurants
	};
};

export const createRestaurant = (name) => {
	return dispatch => {
		store.save('restaurant', { name })
			.then(() => store.get('restaurant'))
			.then((savedRestaurant) => {
				console.log(savedRestaurant);
				dispatch(addRestaurant(savedRestaurant.name));
			})
			.catch(console.error);
	};
};

export const receiveAllRestaurants = () => {
	return dispatch => {
		store.get('restaurants', {})
			.then(restaurants => {
				dispatch(loadAllRestaurants(restaurants));
			})
			.catch(console.error);
	};
};
