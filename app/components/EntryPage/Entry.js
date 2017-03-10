import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

export default class Entry extends Component {

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 10
  },
  addButtonContainer:{
    height:128,
    width: 128,
    borderRadius: 64
  },
  image: {
    height:128,
    width: 128,
    borderRadius: 64
  }

});
