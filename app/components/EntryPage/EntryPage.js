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

import RNGooglePlaces from 'react-native-google-places';

import Entry from './Entry';
import { loadRestaurant } from '../../actions/index';

class EntryPage extends Component {
  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this);
  }



  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
        console.log(place);
        // place represents user's selection from the 
        // suggestions and it is a simplified Google Place object. 
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object 
  }


  setDate() {

  }

  handlePress() {
    // this.props.handlePress();
    Actions.newDish();
  }

  render() {
    console.log('props in entry page', this.props);
    // const temp = new Date;
    // const date = temp.toString().toUpperCase().slice(0, 15);
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.dateContainer}>
          <Text style={styles.date}>{this.props.date}</Text>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.restaurant}>{this.props.name}</Text>
        </View>

            <View style={styles.locationContainer}>
            <View style={styles.locationLine}>
            <TextInput
                style={styles.location}
                placeholder="Add location here ..."
                placeholderTextColor='#9cd19d'
                returnKeyType= "done"
                autoCorrect={false}
            />
            </View>

            <TouchableOpacity style={styles.addLocationButton}
            onPress={() => this.openSearchModal()}>
              <Text style={styles.addButtonTxt}>search</Text>
            </TouchableOpacity>
            </View>

          <View style={styles.addButton}>
          <TouchableOpacity onPress={this.handlePress}>
              <Text style={styles.addButtonTxt}>add dish</Text>
            </TouchableOpacity>
          </View>


        <View style={styles.entryContainer}>
          <Entry />
        </View>

        <View style={styles.saveButton}>
          <TouchableOpacity>
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
    date: state.restaurant.date
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     handlePress: () => {
//       dispatch()
//     }
//   }
// }

export default connect(mapStateToProps)(EntryPage);

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
    alignItems: 'flex-start',
    height: 50
  },
  location: {
      color: "#FFFFFF",
      marginTop: 10,
      width: '75%',
      textAlign: 'left',
      opacity: 0.9,
      height: 40,
      fontSize: 17,
      borderRadius: 2
  },
  locationLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#486d47'
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
    marginTop: 20,
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
