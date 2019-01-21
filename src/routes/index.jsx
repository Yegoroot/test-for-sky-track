import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import indexRoutes from './routes'

class Routes extends Component {
    render() {
        return (
            <Switch>
                {indexRoutes.map((prop, key) => (
                    <Route exact={prop.exact} path={prop.path} key={key} component={prop.component} />
                ))}
            </Switch>
        )
    }
}

export default Routes
