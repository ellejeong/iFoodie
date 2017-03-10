import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ListView,
  Image,
  TouchableHighlight,
  Text
} from 'react-native';

var items = Array.apply(null, Array(60)).map((v, i) => {
    return 'http://placehold.it/200x200?text=1'
});

var dummy = require('../../images/momo.jpg');

export default class GridRestaurantsAllView extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged:(r1, r2) => r1.guid != r2.guid});
    this.state = { 
        dataSource: dataSource.cloneWithRows(items)
     };
  }

renderRow(rowData, sectionID, rowID) {
    return (
        <View style={styles.container}>
        <TouchableHighlight underlayColor='#dddddd' style={{height:44}}>
            <View>

             <View style={styles.row}>
                <Image style={styles.thumb} source={dummy} />
                <Text style={styles.text}>
                    {rowData}
                </Text>
                </View>

            </View>
        </TouchableHighlight>
        </View>
    );
}


  render() {
    return (
        <View style={styles.bigContainer}>
        <ListView
            dataSource = { this.state.dataSource }
            renderRow = { this.renderRow.bind(this) }>
        </ListView>
        </View>
    );
  }
}

var styles = StyleSheet.create({
bigContainer: {
    backgroundColor: '#309b4e',
    flexDirection:'column',
    justifyContent:'space-between',
    height: '100%'
    },
 container: {
    borderBottomWidth: 1,
    height: 60
    },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  thumb: {
    width: 50,
    height: 50,
  },
  text: {
    flex: 1,
  },
});




