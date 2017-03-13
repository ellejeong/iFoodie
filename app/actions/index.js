import store from 'react-native-simple-store';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const LOAD_RESTAURANT = 'LOAD_RESTAURANT';
export const LOAD_ALL_RESTAURANTS = 'LOAD_ALL_RESTAURANTS';
export const EDIT_RESTAURANT = 'EDIT_RESTAURANT';
export const EDIT_ADDRESS = 'EDIT_ADDRESS';

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

export const editRestaurant = dish => {
	return {
		type: EDIT_RESTAURANT,
		dish: dish
	}
}

export const editAddress = (address, name) => {
	return {
		type: EDIT_ADDRESS,
		address,
		name
	};
};

// export const loadRestaurant = restaurant => {
// 	return {
// 		type: LOAD_RESTAURANT,
// 		restaurant: snapshot.val()
// 	}
// }

export const createRestaurant = name => {
	const temp = new Date;
	const date = temp.toString().toUpperCase().slice(0, 15);
	return dispatch => {
		firebase.database().ref(`/restaurants/${name}`).push({ date, name })
			.then(data => {
				let key = data.key;
				firebase.database().ref(`/restaurants/${name}`).once('value')
					.then(snapshot => {
						console.log('snapshot.val', snapshot.val()[key]);
						dispatch(addRestaurant(snapshot.val()[key]));
					});
			})
			.catch(console.error);
	};
};


// export const loadRestaurant = restaurant => {
// 	return dispatch => {
// 		firebase.database().ref(`/restaurants/${restaurant}`).on('value', snapshot => {
// 			console.log('snapshot.val()', snapshot.val());
// 			dispatch({ type: LOAD_RESTAURANT, name: snapshot.val() });
// 		});
// 	};
// };


export const receiveAllRestaurants = () => {
	return dispatch => {
		firebase.database().ref('/restaurants').once('value')
			.then(snapshot => {
				console.log('SNAPSHOT', snapshot.val());
				// return snapshot.val();
				return dispatch(loadAllRestaurants(snapshot.val()));
			})
			// .then(snapshot => { dispatch(loadAllRestaurants(snapshot));})
			.catch(console.error);
	};
};

export const updateRestaurant = (restaurant) => {
	console.log('restauratn:', restaurant);
	return dispatch => {
		firebase.database().ref(`/restaurants/${restaurant.name}/${restaurant.dish}`).push({restaurant})
			.then(() => {
				dispatch(editRestaurant(restaurant));
			})
		.catch(console.error);
	}
}

export const addAddress = (address, name) => {
	return dispatch => {
		firebase.database().ref(`/restaurants/${name}`).push({ address, name })
			.then(data => {
				let key = data.key;
				firebase.database().ref(`/restaurants/${name}/${key}`).once('value')
					.then(snapshot => {
						console.log('SNAPSHOT', snapshot);
						let addy = snapshot.val().address;
						let nomen = snapshot.val().name;
						dispatch(editAddress(addy, nomen));
					});
			})
		.catch(console.error)
	};
};
