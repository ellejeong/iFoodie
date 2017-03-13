import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Select, Option} from "react-native-chooser";
import Entry from './Entry';
import { updateRestaurant } from '../../actions/index';
const {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
const ImagePicker = require('react-native-image-picker');
const cam = require('../../images/cam.png')

export default class Entrys extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>


        <View style={styles.photoContainer}>

            <TouchableOpacity>
                <Image source={cam} style={{width: 40, height: 40}} />
            </TouchableOpacity>

        </View>

        <View style={styles.dishContainer}>
            <Text style={styles.dish}>Dish Name: </Text>
            <Text> {this.props.dishes.dish} </Text>
        </View>

        <View style={styles.coursesContainer}>
            <Text style={styles.courses}>Course: </Text>
            <Text> Breakfast </Text>

        </View>

        <View style={styles.expContainer}>
          <Text style={styles.exp}>Experience: </Text>
          <Text> {this.props.dishes.experience} </Text>
        </View>

        <View style={styles.saveButton}>
            <TouchableOpacity onPress={this.onDataSave}>
                <Text style={styles.saveButtonTxt}>edit</Text>
            </TouchableOpacity>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    height: '60%',
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
    color: '#309b4e',
    fontWeight: 'bold'

  },


  headerContainer: {
    flexDirection:'row',
    alignItems: 'flex-start',
    marginTop: 0,
  },
  restaurant: {
      color: "#447f45",
      marginTop: 10,
      width: 160,
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 30,
      fontWeight: 'bold'
  },


  locationContainer: {
    flexDirection:'column',
    height: 100,
    alignItems: 'flex-start',
  },
  location: {
      color: "#447f45",
      marginTop: 5,
      width: '50%',
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      height: 100,
     fontWeight: 'bold'
  },

  photoContainer: {
     flexDirection:'row',
     marginBottom: 20,
    alignItems: 'center',
  },

  photo: {
      color: "#447f45",
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      fontWeight: 'bold'
  },

  dishContainer: {
     flexDirection:'row',
      marginBottom: 5
  },

  dish: {
      color: "#447f45",
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      fontWeight: 'bold'
    },

  dishInput: {
      color: "black",
      width: '100%',
      opacity: 0.9,
      fontSize: 15
   },




   coursesContainer: {
      flexDirection: 'row',
    },
  courses: {
      color: "#447f45",
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      height: 15,
      marginBottom: 5,
      fontWeight: 'bold'
    },



    expContainer:{
        flexDirection:'row',
    },

    exp: {
      color: "#447f45",
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      marginBottom: 5,
      fontWeight: 'bold'
    },


  saveButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#447f45',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 100,
    width: 57
  },
  saveButtonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12
  }

});
