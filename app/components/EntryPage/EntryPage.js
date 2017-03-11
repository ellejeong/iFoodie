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

import Entry from './Entry';
import { loadRestaurant } from '../../actions/index';

class EntryPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('props in entry page', this.props);
    const temp = new Date;
    const date = temp.toString().toUpperCase().slice(0, 15);
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}</Text>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.restaurant}>{this.props.restaurant.name}</Text>
        </View>

            <View style={styles.locationContainer}>
            <TextInput
                style={styles.location}
                placeholder="Add location here ..."
                placeholderTextColor='#9cd19d'
                underlineColor= '#447f45'
                returnKeyType= "done"
                autoCorrect={false}
            />
            </View>

          <View style={styles.addButton}>
            <TouchableOpacity>
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
  return {
    restaurant: state.restaurant
  };
};

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
    marginTop: 70,
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
      fontSize: 40
  },
  locationContainer: {
    flexDirection:'column',
    alignItems: 'flex-start',
    borderBottomColor:'#447f45',
    borderBottomWidth: 1,
  },
  location: {
      color: "#FFFFFF",
      marginTop: 5,
      width: '100%',
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      height: 25,
      borderRadius: 2
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
