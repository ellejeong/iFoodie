import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Welcome from './app/components/Welcome/Welcome.js';
import EntryPage from './app/components/EntryPage/EntryPage.js';


export default class iFoodie extends Component {

  render() {
    return (

      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Welcome',
          component: Welcome
        }}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#309b4e'
  }
});

AppRegistry.registerComponent('iFoodie', () => iFoodie);
