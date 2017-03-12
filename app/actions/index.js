import store from 'react-native-simple-store';
import firebase from 'firebase';

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const LOAD_RESTAURANT = 'LOAD_RESTAURANT';
export const LOAD_ALL_RESTAURANTS = 'LOAD_ALL_RESTAURANTS';

export const addRestaurant = ({date, name})=> {
	return {
		type: ADD_RESTAURANT,
		date,
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

// export const createRestaurant = name => {
// 	return dispatch => {
// 		firebase.database().ref(`/restaurants/${name}`).set({ name })
// 			.then(firebase.database().ref(`/restaurants/${name}`).on('value', snapshot => {
// 				console.log('snapshot', snapshot);
// 				let restaurant = snapshot.val();
// 				dispatch(addRestaurant(restaurant));
// 		}))
// 			.catch(console.error);
// 	};
// };

export const createRestaurant = name => {
	const temp = new Date;
	const date = temp.toString().toUpperCase().slice(0, 15);
	return dispatch => {
		firebase.database().ref(`/restaurants/${name}`).set({ date, name })
			.then(firebase.database().ref(`/restaurants/${name}`).once('value')
				.then(snapshot => {
					// dispatch(addRestaurant(snapshot.val()));
					let sendData = addRestaurant(snapshot.val());
					console.log('senddata', sendData);
					dispatch(sendData);
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
