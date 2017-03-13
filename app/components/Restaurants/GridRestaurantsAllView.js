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

import { receiveAllRestaurants } from '../../actions/index';
import { store } from '../../App';

var items = Array.apply(null, Array(60)).map((v, i) => {
    return 'http://placehold.it/200x200?text=1'
});

var dummy = require('../../images/momo.jpg');

// const mapStateToProps = state => {
//   console.log(state);
//   return { restaurants: state.restaurant };
// };

// const mapDispatchToProps = dispatch => ({
//   receiveRestaurants() {
//     return dispatch(receiveAllRestaurants());
//   }
// });

export default class GridRestaurantsAllView extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid });

    // var restArr =

    this.state = {
        dataSource: ds.cloneWithRows(['xanadu', 'sushi', 'tacos'])
    };

    this.renderRow = this.renderRow.bind(this);
  }


  // componentWillMount() {
  //   this.props.receiveAllRestaurants();
  // }

  renderRow(rowData) {
    // had other props: , sectionID, rowID
    return (
        <View><Text>{rowData}</Text></View>
          // <View style={styles.container}>
          // <TouchableHighlight underlayColor='#dddddd' style={{height:44}}>
          //     <View>
          //       <View style={styles.row}>
          //         <Image style={styles.thumb} source={dummy} />
          //         <Text style={styles.text}>
          //             {rowData.name}
          //         </Text>
          //       </View>
          //     </View>
          // </TouchableHighlight>
          // </View>
      );
  }


render() {
  // console.log('ALL OF THE RESTAURANTS', this.props.restaurants);
  // let restaurants = Object.keys(this.props.restaurants);
  // console.log(restaurants);
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

// export default connect(mapStateToProps, {receiveAllRestaurants})(GridRestaurantsAllView);


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

