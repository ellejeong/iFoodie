import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

import WelcomeForm from './WelcomeForm';

export default class Welcome extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.helloContainer}>
            <Text style={styles.helloTxt}>Hi, NAME! {"\n"}  Where are you eating today?</Text>
        </View>
        <TextInput
            style={styles.input}
        />
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
      textAlign: 'center',
      fontSize: 18,
      color: '#FFF'
  },
  input: {
      height: 40,
      backgroundColor: '#43b764',
      marginBottom: 20,
      color: '#FFF',
      paddingHorizontal: 10
  }

});