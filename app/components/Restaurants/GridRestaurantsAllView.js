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

import { receiveAllRestaurants } from '../../reducers/index';

var items = Array.apply(null, Array(60)).map((v, i) => {
    return 'http://placehold.it/200x200?text=1'
});

var dummy = require('../../images/momo.jpg');

console.log('got here');

const mapStateToProps = state => {
  console.log('am i here? in mapStateToProps');
  return { restaurants: state.restaurants }
};

// const mapDispatchToProps = dispatch => {
//   console.log('am i even fucking here? in mapdispatch to props?');
//   return {
//     componentWillMount:
//       () => dispatch(receiveAllRestaurants())

//   };
// };

export class GridRestaurantsAllView extends Component {
  constructor(props) {
    console.log('am i here?');
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged:(r1, r2) => r1.guid != r2.guid});
    this.state = {
        dataSource: dataSource.cloneWithRows(items)
    };

    this.renderRow = this.renderRow.bind(this);
  }


  componentWillMount() {
    console.log('loadrestaurants function', this.props);
    receiveAllRestaurants();
  }

  renderRow(rowData) {
    // had other props: , sectionID, rowID
      return (
          <View style={styles.container}>
          <TouchableHighlight underlayColor='#dddddd' style={{height:44}}>
              <View>
              <View style={styles.row}>
                  <Image style={styles.thumb} source={dummy} />
                  <Text style={styles.text}>
                      some stuff
                  </Text>
                  </View>
              </View>
          </TouchableHighlight>
          </View>
      );
  }


render() {
    console.log('ALL OF THE RESTAURANTS', this.props);
    return (
        <View style={styles.bigContainer}>
        <ListView
            dataSource = { this.state.dataSource }
            renderRow={this.props.restaurants.map(restaurant => {
            this.renderRow(restaurant);
            })}>
        </ListView>
        </View>
    );
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

