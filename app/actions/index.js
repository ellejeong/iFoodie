import store from 'react-native-simple-store';
import firebase from 'firebase';

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const LOAD_RESTAURANT = 'LOAD_RESTAURANT';
export const LOAD_ALL_RESTAURANTS = 'LOAD_ALL_RESTAURANTS';
export const EDIT_RESTAURANT = 'EDIT_RESTAURANT';

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

export const editRestaurant = restaurant => {
	return {
		type: EDIT_RESTAURANT,
		restaurant
	}
}

// export const loadRestaurant = restaurant => {
// 	return {
// 		type: LOAD_RESTAURANT,
// 		restaurant: snapshot.val()
// 	}
// }

export const createRestaurant = name => {
	const temp = new Date;
	const date = temp.toString().toUpperCase().slice(0, 15);

	// let entry = firebase.database().ref(`/restaurants/${name}`);
	// if (entry) {
	// 	entry.update({ name, date }).then(dispatch => { dispatch({ type: LOAD_RESTAURANT, name: name })});
	// } else {
			return dispatch => {
				firebase.database().ref(`/restaurants/${name}`).set({ date, name })
					.then(firebase.database().ref(`/restaurants/${name}`).once('value')
						.then(snapshot => {
							// dispatch(addRestaurant(snapshot.val()));
							let sendData = addRestaurant(snapshot.val());
							console.log('senddata', sendData);
							dispatch(sendData);
						}));
			};
	// }

};

export const loadRestaurant = restaurant => {
	return dispatch => {
		firebase.database().ref(`/restaurants/${restaurant}`).on('value', snapshot => {
			console.log('snapshot.val()', snapshot.val());
			dispatch({ type: LOAD_RESTAURANT, name: snapshot.val() });
		});
	};
};

console.log('got right before receiveAllRestaurants');

export const receiveAllRestaurants = () => {
	console.log('GOT TO receiveAllRestaurants');
	return dispatch => {
		firebase.database().ref('/restaurants').once('value')
			.then(snapshot => {
				console.log('SNAPSHOT', snapshot.val());
				let sendData = loadAllRestaurants(snapshot.val());
				console.log('senddata', sendData);
				dispatch(sendData);
			});
	};
};

export const updateRestaurant = (restaurant) => {
	// let newPostKey = firebase.database().ref().child('restaurants').push().key;
	// let path = `/restaurants/${restaurant.name}/${restaurant.dish}`;
	console.log('restauratn:', restaurant);
	// let updates = {}
	// // updates[path] = restaurant;
	// let database = firebase.database().ref(`/restaurants/${restaurant.name}`);
	// if (database) {

	// }
	return () => {
		firebase.database().ref(`/restaurants/${restaurant.name}/${restaurant.dish}`).update(restaurant)
			.then(dispatch => {
				dispatch(editRestaurant(restaurant));
		})
	}
}
