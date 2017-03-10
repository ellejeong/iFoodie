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

// import WelcomeForm from './WelcomeForm';
import { createRestaurant } from '../../actions/index';

export class WelcomeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

//   async onEnterPressed(value) {
//       AsyncStorage.setItem("txt", value);
//       this.setState
//   }
  handleSubmit(event) {
    console.log('Props:', this.props);
    this.props.handleSubmit(this.state.text);
    Actions.restaurants();
  }

  handleChange(text) {
    this.setState({text});
  }

  render() {
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

        <TouchableOpacity
            // onPress={this.onNextPressed.bind(this)}
          style={styles.buttonContainer}
          onPress={this.handleSubmit}
        >
            <Text style={styles.buttonTxt}>Next</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { name: state.editRestaurant };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (name) => {
      dispatch(createRestaurant(name));
    },
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
      backgroundColor: '#447f45',
      paddingVertical: 15

  },
  buttonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }

});
