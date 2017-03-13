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

export const editAddress = (address) => {
	return {
		type: EDIT_ADDRESS,
		address
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
	const dishes = [];
	return dispatch => {
		firebase.database().ref(`/restaurants/${name}`).set({ date, name, dishes })
			.then(
				firebase.database().ref(`/restaurants/${name}`).once('value')
					.then(snapshot => {
						console.log('snapshot.val', snapshot.val());
						dispatch(addRestaurant(snapshot.val()));
					})
			)
			.catch(console.error);
	};
};
// const temp = new Date;
// const date = temp.toString().toUpperCase().slice(0, 15);
// let restaurantRef = firebase.database().ref(`/restaurants/${name}`);
// restaurantRef.set({ name, date });
// let dishesRef = firebase.database().ref(`/restaurants/${dish.name}/${dish.dish}`);
// dishesRef.set({ dish });

export const loadRestaurant = restaurantName => {
	return dispatch => {
		firebase.database().ref(`/restaurants/${restaurantName}`).once('value')
			.then(snapshot => {
				console.log('snapshot.val()', snapshot.val());
				dispatch({ type: LOAD_RESTAURANT, name: snapshot.val() });
			});
	};
};


export const receiveAllRestaurants = () => {
	return dispatch => {
		firebase.database().ref('/restaurants').once('value')
			.then(snapshot => {
				console.log('SNAPSHOT', snapshot.val());
				// return snapshot.val();
				dispatch(loadAllRestaurants(snapshot.val()));
			})
			.then(() => Actions.restaurants())
			// .then(snapshot => { dispatch(loadAllRestaurants(snapshot));})
			// .catch(console.error);
	};
};

export const updateRestaurant = (dish) => {
	console.log('restauratn:', dish);
	return dispatch => {
		let dishRef = firebase.database().ref(`/restaurants/${dish.name}/${dish.dish}`);
		dishRef.set(dish)
		// firebase.database().ref(`/restaurants/${dish.name}`).push(dish)
			.then(() => {
				dispatch(editRestaurant(dish));
			})
		.catch(console.error);
	}
}

export const addAddress = (address, name) => {
	return dispatch => {
		let locationRef = firebase.database().ref(`/restaurants/${name}/location`);	locationRef.set(address)
			.then(() => {
				firebase.database().ref(`/restaurants/${name}/location`).once('value')
					.then(snapshot => {
						console.log('SNAPSHOT', snapshot.val());
						let addy = snapshot.val();
						dispatch(editAddress(addy));
					});
			})
		.catch(console.error)
	};
};
