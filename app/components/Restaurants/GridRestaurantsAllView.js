import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ListView,
  Image,
  TouchableHighlight,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { receiveAllRestaurants } from '../../actions/index';
import { store } from '../../App';

var items = Array.apply(null, Array(60)).map((v, i) => {
    return 'http://placehold.it/200x200?text=1'
});

var dummy = require('../../images/momo.jpg');

const mapStateToProps = state => {
  console.log(state);
  return { restaurants: state.restaurant.restaurants };
};

// const mapDispatchToProps = dispatch => ({
//   receiveRestaurants() {
//     return dispatch(receiveAllRestaurants());
//   }
// });

class GridRestaurantsAllView extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid });

    var restArr = Object.keys(this.props.restaurants).map(key => this.props.restaurants[key]);
    // console.log('restArr', restArr);
    let theOne = restArr.map(rest => rest.name);

    this.state = {
        dataSource: ds.cloneWithRows(theOne)
    };

    this.renderRow = this.renderRow.bind(this);
    this.onEntryPress = this.onEntryPress.bind(this);
  }

  // componentWillMount() {
  //   this.props.receiveAllRestaurants();
  // }

  onEntryPress() {
    Actions.restaurants()
  }

  renderRow(rowData) {
    // var restArr = Object.keys(this.props.restaurants).map(key => this.props.restaurants[key]);
    // let restArr = Object.keys(this.props.restaurants);
    // console.log(restArr);
    // had other props: , sectionID, rowID
    return (
        // <View><Text>{rowData}</Text></View>
          <View style={styles.container}>
        <TouchableHighlight underlayColor='#dddddd' style={{ height: 44 }} onPress={this.onEntryPress}>
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
  // console.log('ALL OF THE RESTAURANTS', this.props.restaurants);
  // let restaurants = Object.keys(this.props.restaurants);
  // console.log(restaurants);
  // let restArr = Object.keys(this.props.restaurants);
  console.log(this.state.dataSource);
    return (
        <View style={styles.bigContainer}>
        <ListView
            dataSource = { this.state.dataSource }
            renderRow={dataSource => this.renderRow(dataSource)}>
        </ListView>
        </View>
    )
  }
}

export default connect(mapStateToProps)(GridRestaurantsAllView);


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

