import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import WelcomeForm from './WelcomeForm';

export default class Welcome extends Component {
//   constructor() {
//     super();
//     this.state = {
//       text: 'Restaurant Name'
//     };
//   }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
            source={require('../../images/momo.jpg')} 
            />
            <Text style={styles.title}>An app made for fellow foodies to track their favorite eats!</Text>
        </View>
        <View style={styles.formContainer}>
        <WelcomeForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#309b4e'
  },
  logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent:'center'
  },
  title: {
      color: "#FFFFFF",
      marginTop: 10,
      width: 160,
      textAlign: 'center',
      opacity: 0.9
  }
});