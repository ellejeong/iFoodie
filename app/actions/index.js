// import { Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';

export const ADD_RESTAURANT = 'ADD_RESTAURANT';

export const addRestaurant = name => {
	return {
		type: ADD_RESTAURANT,
		name
	};
};

// export const createRestaurant = (name) => {
// 	store.save('restaurant', {
// 		name
// 	})
// 		.then(() => {
// 			return store.get('restaurant').then(restaurant => {
// 				console.log(restaurant.name);
// 			});
// 		})
// 		.catch(console.error);
// };

export const createRestaurant = (name) => {
	return dispatch => {
		store.save('restaurant', { name })
			.then(() => store.get('restaurant'))
			.then((savedRestaurant) => {
				console.log(savedRestaurant);
				dispatch(addRestaurant(savedRestaurant.name));
			})
			.catch(console.error);
	}
}

