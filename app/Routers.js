import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Welcome from './components/Welcome/Welcome';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="welcome" component={Welcome} title="Welcome" initial />
        </Router>
    )
}

export default RouterComponent;
