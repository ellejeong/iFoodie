import React, { Component } from 'react';
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

export default class WelcomeForm extends Component {

  constructor() {
    super();
    this.state = {
      txt: ''
    };
  }

//   async onEnterPressed(value) {
//       AsyncStorage.setItem("txt", value);
//       this.setState
//   }

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
            onChange={ (text) => this.setState({txt: text}) }
            style={styles.input}
            placeholder="Restaurant Name"
            placeholderTextColor='#9cd19d'
            returnKeyType= "go"
            autoCorrect={false}
        />

        <TouchableOpacity 
            // onPress={this.onNextPressed.bind(this)} 
            style={styles.buttonContainer}>
            <Text style={styles.buttonTxt}>Next</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

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