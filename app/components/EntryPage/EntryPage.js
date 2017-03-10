import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Entry from './Entry';

export default class EntryPage extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.dateContainer}>
            <Text style={styles.date}>Today's Date: 3/9/2017</Text>
        </View>

        <View style={styles.headerContainer}>
            <Text style={styles.restaurant}>Restaurant Name</Text>
            <Text style={styles.location}>Restaurant Location</Text>
        </View>

        <View style={styles.entryContainer}>
            <Entry />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#309b4e',
    alignItems: 'flex-start',
    flexGrow:1,
    marginTop: 0,
  },
  headerContainer: {
    flex: 2,
    alignItems: 'flex-start',
    flexGrow:1,
    marginTop: 0,
  },
  restaurant: {
      color: "#FFFFFF",
      marginTop: 10,
      width: 160,
      textAlign: 'left',
      opacity: 0.9
  },
  location: {
      color: "#FFFFFF",
      marginTop: 10,
      width: 160,
      textAlign: 'left',
      opacity: 0.9
  }
});