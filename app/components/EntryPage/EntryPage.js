import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import RNGooglePlaces from 'react-native-google-places';

import Entry from './Entry';
import { loadRestaurant, addAddress, receiveAllRestaurants } from '../../actions/index';


const {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');


class EntryPage extends Component {
  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this);
    this.onSavePress = this.onSavePress.bind(this);
  }

  componentWillMount() {
    loadRestaurant(this.props.name);
  }

  setDate() {

  }

  handlePress() {
    Actions.newDish();
  }

  onSavePress() {
    // this.props.receiveAllRestaurants();
    Actions.restaurants();
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.dateContainer}>
          <Text style={styles.date}>{this.props.date}</Text>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.restaurant}>{this.props.name}</Text>
        </View>
        {}
            <View style={styles.locationContainer}>
                <GooglePlacesAutocomplete
                      placeholder='Enter Location'
                      minLength={2}
                      listViewDisplayed='auto'
                      autoFocus={false}
                      fetchDetails={true}
                      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        this.props.addAddress(data.description, this.props.name)
                      }}
                      query={{ key: 'AIzaSyBX24ClG46CmZeN9iSOu9tCKJnljh9b09Q',
                          language: 'en', // language of the results
                          types: '(cities)' }}
                      styles={{textInputContainer: {
                                  backgroundColor: 'rgba(0,0,0,0)',
                                  borderTopWidth: 0,
                                  borderBottomWidth:0,
                                  width: '100%'
                              },
                              textInput: {
                                  marginLeft: 0,
                                  marginRight: 0,
                                  height: 38,
                                  color: '#5d5d5d',
                                  fontSize: 16
                              },
                              predefinedPlacesDescription: {
                                  color: '#1faadb',
                                  height: 50
                              }, }}
                      currentLocation={false}
                      nearbyPlacesAPI='GooglePlacesSearch'/>


            </View>

        <View style={styles.entryContainer}>
          {this.props.dishes ? <Entry dishes={this.props.dishes} /> : null}
        </View>

          <View style={styles.addButton}>
          <TouchableOpacity onPress={this.handlePress}>
              <Text style={styles.addButtonTxt}>add dish</Text>
            </TouchableOpacity>
          </View>

        <View style={styles.saveButton}>
          <TouchableOpacity onPress={this.onSavePress}>
            <Text style={styles.saveButtonTxt}>save entry</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    name: state.restaurant.name,
    date: state.restaurant.date,
    dishes: state.restaurant.dishes
  };
};

// const mapDispatchToProps = dispatch => ({

//   updateAddress(address, name) {
//     return dispatch(addAddress(address, name));
//     // firebase.database().ref(`/restaurants/${name}`).push({ address, name })
//   }
// });

export default connect(mapStateToProps, {loadRestaurant, addAddress, receiveAllRestaurants})(EntryPage);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#309b4e',
    padding: 20,
    height: '100%',
    width: '100%'
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'flex-end'
  },
  date: {
    textAlign: 'right',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'

  },
  headerContainer: {
    flexDirection:'row',
    alignItems: 'flex-start',
    marginTop: 0,
  },
  restaurant: {
      color: "#8EF052",
      marginTop: 10,
      width: 160,
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 30,
      fontWeight: 'bold'
  },
  locationContainer: {
    flexDirection:'row',
    flexGrow: 2,
    alignItems: 'flex-start',
    height: 50
  },
  location: {
      color: "#FFFFFF",
      flex: 2,
      marginTop: 10,
      width: '75%',
      textAlign: 'left',
      opacity: 0.9,
      height: 40,
      fontSize: 17,
      borderRadius: 2
  },
  addLocationButton: {
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#447f45',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
    width: 72
  },
  entryContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  addButton: {
    position: 'absolute',
    marginTop: 20,
    bottom: 10,
    left: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#447f45',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 100,
    width: 90
  },
  addButtonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  saveButton: {
    marginTop: 20,
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#447f45',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 100,
    width: 110
  },
  saveButtonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
