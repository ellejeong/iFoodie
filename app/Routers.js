import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Welcome from './components/Welcome/Welcome';
import EntryPage from './components/EntryPage/EntryPage';
import GridRestaurantsAllView from './components/Restaurants/GridRestaurantsAllView';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="welcome" component={Welcome} title="Welcome" initial />
            <Scene key="entry page" component={EntryPage} title="RESTAURANT PAGE" />
            <Scene key="restaurant entries" component={GridRestaurantsAllView} title="Past Eats" />
        </Router>
    )
}

export default RouterComponent;
