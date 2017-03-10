import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Welcome from './components/Welcome/Welcome';
import GridRestaurants from './components/Restaurants/GridRestaurantsAllView';
import EntryPage from './components/EntryPage/EntryPage';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="welcome" component={Welcome} title="Welcome" initial />
            <Scene key="restaurants" component={GridRestaurants} title="Past Eats" />
            <Scene key="entry" component={EntryPage} title="RESTAURANT NAME" />
        </Router>
    )
}

export default RouterComponent;
