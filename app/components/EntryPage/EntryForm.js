import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

// import DropDown, { Select, Option, OptionList } from 'react-native-selectme';

import {Select, Option} from "react-native-chooser";
import Entry from './Entry';
const ImagePicker = require('react-native-image-picker');
const cam = require('../../images/cam.png')

export default class EntryPage extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      imagePath: null,
      course: '',
      picSource: '',
    };
  }
 
onSelect(data) {
  this.setState({
      course: data
    });
}

pickImage() {
    const options = {
        title: 'Select Picture',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    }


    ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
        console.log('User cancelled image picker');
    } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
    } else {
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
        image: source
        });
    }
    });

}

render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.dateContainer}>
            <Text style={styles.date}>MARCH 10TH 2017</Text>
        </View>

        <View style={styles.headerContainer}>
            <Text style={styles.restaurant}>EDI AND THE WOLF</Text>
        </View>

        <View style={styles.locationContainer}>
            <Text style={styles.location}>45-18 STREET, FLUSHING, NEW YORK 12345 </Text>
        </View>


        <View style={styles.photoContainer}>
            {this.state.imagePath ? <Image style={{width: 40, height: 40}} source={{uri: this.state.imagePath}}/> : null}
            <TouchableOpacity onPress={this.pickImage.bind(this)}>
                <Image source={cam} style={{width: 40, height: 40}} />
            </TouchableOpacity>
            
        </View>

        <View style={styles.dishContainer}>
            <Text style={styles.dish}>Dish Name: </Text>
                <TextInput
                    style={styles.dishInput}
                    placeholder="Dish Name"
                    placeholderTextColor='#9cd19d'
                    returnKeyType= "done"
                    autoCorrect={false}
                />
        </View>

        <View style={styles.coursesContainer}>
            <Text style={styles.courses}>Course: {this.state.course} </Text>

            <Select onSelect = {this.onSelect.bind(this)}
                defaultText  = "Type of course ..."
                backdropStyle  = {{backgroundColor : "#9cd19d"}}
                optionListStyle = {{backgroundColor : "#F5FCFF", height: 100}}>
                <Option>appetizer</Option>
                <Option>starter</Option>
                <Option>dessert</Option>
                <Option>beverage</Option>
                <Option>main</Option>
                <Option>h'ors d'ouvres</Option>
                <Option>snack</Option>
                <Option>side order</Option>
                <Option>happy hour</Option>             
            </Select>

        </View>

        <View style={styles.expContainer}>
        <Text style={styles.exp}>Experience: </Text>
            <TextInput
                style={styles.expInput}
                placeholder="Your thoughts about the dish here ..."
                placeholderTextColor='#9cd19d'
                underlineColor= '#447f45'
                returnKeyType= "done"
                autoCorrect={false}
            />
        </View>

        <View style={styles.saveButton}>
          <TouchableOpacity>
            <Text style={styles.saveButtonTxt}>save dish</Text>
          </TouchableOpacity>
        </View> 

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    height: '100%',
    width: '100%'
  },


  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'flex-end'
  },
  date: {
    textAlign: 'right',
    fontSize: 20,
    color: '#309b4e',
    fontWeight: 'bold'

  },


  headerContainer: {
    flexDirection:'row',
    alignItems: 'flex-start',
    marginTop: 0,
  },
  restaurant: {
      color: "#447f45",
      marginTop: 10,
      width: 160,
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 30,
      fontWeight: 'bold'
  },


  locationContainer: {
    flexDirection:'column',
    height: 100,
    alignItems: 'flex-start',
  },
  location: {
      color: "#447f45",
      marginTop: 5,
      width: '50%',
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      height: 100,
     fontWeight: 'bold'
  },
  
  photoContainer: {
     flexDirection:'row',
     marginBottom: 30,
    alignItems: 'center',
  },

  photo: {
      color: "#447f45",
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      fontWeight: 'bold'
  },

  dishContainer: {
     flexDirection:'row',
     marginBottom: 10
  },
  
  dish: {
      color: "#447f45",
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      fontWeight: 'bold'
    },

  dishInput: {
      color: "black",
      width: '100%',
      opacity: 0.9,
      fontSize: 15
   },
   



   coursesContainer: {
      flexDirection: 'row',
      marginBottom: 10
    },
  courses: {
      color: "#447f45",
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      height: 25,
      fontWeight: 'bold'
    },



    expContainer:{
        flexDirection:'row',
        flex: 1
    },

    exp: {
      color: "#447f45",
      marginTop: 10,
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      height: 25,
      fontWeight: 'bold'
    },
    expInput: {
      color: "black",
      marginTop: 5,
      width: '100%',
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      height: 25,
    },


  saveButton: {
    marginTop: 20,
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#447f45',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 100,
    width: 110
  },
  saveButtonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});


// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Text,
//   View,
//   ImagePickerIOS,
//   Image,
// } from 'react-native';

// export default class EntryPage extends Component {
//   constructor() {
//     super();
//     this.state = { image: null };
//   }

//   componentDidMount() {
//     this.pickImage();
//   }

//   pickImage() {
//     // openSelectDialog(config, successCallback, errorCallback);
//     ImagePickerIOS.openSelectDialog({}, imageUri => {
//       this.setState({ image: imageUri });
//     }, error => console.error(error));
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         {this.state.image?
//           <Image style={{ flex: 1 }} source={{ uri: this.state.image }} /> :
//           null
//         }
//       </View>
//     );
//   }
// }
