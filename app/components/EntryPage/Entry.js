import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class Entry extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entryContainer}>
            <Text style={styles.helloTxt}>This is the entry</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 10
  },
  entryContainer:{
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
      marginBottom: 0,
      color: '#FFF',
      paddingHorizontal: 10
  }

});