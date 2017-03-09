/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Welcome from './app/components/Welcome/Welcome.js'


export default class iFoodie extends Component {

  render() {
    return (
      <View style={styles.ifoodie}>
        <Text style={styles.ifoodieTxt}>iFoodie</Text>
        <Welcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ifoodie: {
    flex: 1,
    backgroundColor: '#309b4e',
    alignItems: 'center',
    flexGrow:1,
    marginTop: 0,
  },
  ifoodieTxt: {
      color: "#FFFFFF",
      marginTop: 10,
      fontSize: 60,
      width: 200,
      textAlign: 'center',
      opacity: 0.9
  }
});

AppRegistry.registerComponent('iFoodie', () => iFoodie);
