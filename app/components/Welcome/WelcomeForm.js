import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from 'react-native';

import { createRestaurant, loadAllRestaurants } from '../../actions/index';

class WelcomeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleSubmitNewRestaurant = this.handleSubmitNewRestaurant.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitPastEats = this.handleSubmitPastEats.bind(this);

  }

  handleSubmitNewRestaurant(event) {
    console.log('Props:', this.props);
    this.props.handleSubmitNewRestaurant(this.state.text);
    Actions.entry();
  }

  handleSubmitPastEats(event) {
    this.props.handleSubmitPastEats();
    Actions.restaurants();
  }

  handleChange(text) {
    this.setState({text});
  }

  render() {
    console.log('state in render', this.state, 'props in render', this.props);
    return (
      <View style={styles.container}>
        <StatusBar
            barStyle='light-content'
        />
        <View style={styles.helloContainer}>
            <Text style={styles.helloTxt}>Hi, User! {"\n"}  Where are you eating today?</Text>
        </View>
        <TextInput
            onChangeText={this.handleChange}
            style={styles.input}
            placeholder="Restaurant Name"
            placeholderTextColor='#9cd19d'
            returnKeyType= "go"
            autoCorrect={false}
            value={this.state.text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonOne} onPress={this.handleSubmitNewRestaurant}>
          <TouchableOpacity>
              <Text style={styles.buttonTxt}>Next</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.buttonTwo}>
          <TouchableOpacity onPress={this.handleSubmitPastEats}>
              <Text style={styles.buttonTxt}>Past Eats</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state in mapStateToProps', state);
  return { name: state.editRestaurant.name };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmitNewRestaurant: (name) => {
      dispatch(createRestaurant(name));
    },
    handleSubmitPastEats: () => {
      dispatch(loadAllRestaurants());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeForm);


const styles = StyleSheet.create({
  container: {
      padding: 20
  },
  helloContainer:{
      paddingHorizontal: 10,
      alignItems: 'center'
  },
  helloTxt: {
      paddingHorizontal: 10,
      textAlign: 'center',
      fontSize: 18,
      color: '#FFF',
      marginBottom: 10
  },
  input: {
      height: 30,
      backgroundColor: '#43b764',
      marginBottom: 10,
      color: '#FFF',
      paddingHorizontal: 10
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  buttonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  buttonOne: {
    backgroundColor: '#447f45',
    paddingVertical:10,
    paddingHorizontal: 10,
    width: 100
  },
  buttonTwo: {
    backgroundColor: '#447f45',
    paddingVertical:10,
    paddingHorizontal: 10,
    width: 100
  }

});
