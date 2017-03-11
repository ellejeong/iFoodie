import store from 'react-native-simple-store';
import firebase from 'firebase';

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const LOAD_RESTAURANT = 'LOAD_RESTAURANT';
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

// export const loadRestaurant = restaurant => {
// 	return {
// 		type: LOAD_RESTAURANT,
// 		restaurant: snapshot.val()
// 	}
// }

// export const createRestaurant = (name) => {
// 	return dispatch => {
// 		store.save('restaurant', { name })
// 			.then(() => store.get('restaurant'))
// 			.then((savedRestaurant) => {
// 				console.log(savedRestaurant);
// 				dispatch(addRestaurant(savedRestaurant.name));
// 			})
// 			.catch(console.error);
// 	};
// };

// export const createRestaurant = name => {
// 	return dispatch => {
// 		firebase.database().ref(`/restaurants/${name}`).set({ name })
// 			.then(firebase.database().ref(`/restaurants/${name}`).on('value').then(snapshot => {
// 				console.log('snapshot', snapshot);
// 				let restaurant = snapshot.val().name;
// 				dispatch(addRestaurant(restaurant));
// 		}))
// 			.catch(console.error);
// 	};
// };

export const createRestaurant = name => {
	return dispatch => {
		firebase.database().ref(`/restaurants/${name}`).set({ name })
			.then(firebase.database().ref(`/restaurants/${name}`).once('value')
				.then(snapshot => {
					dispatch(addRestaurant(snapshot.val()));
				}));
			// .then((dispatch) => dispatch(addRestaurant(name)));
		// .then(firebase.database().ref(`/restaurants/${name}`).once('value') .then(snapshot => {
		// 	// console.log(snapshot.val());
		// 	// let data = snapshot.val();
		// 	dispatch({ type: ADD_RESTAURANT, name: snapshot.val() });
		// })
		// .catch(console.error);
	};
};

// export const createRestaurant = name => {
// 	return
// }

export const loadRestaurant = restaurant => {
	return dispatch => {
		firebase.database().ref(`/restaurants/${restaurant}`).on('value', snapshot => {
			dispatch({ type: LOAD_RESTAURANT, name: snapshot.val() });
		});
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
