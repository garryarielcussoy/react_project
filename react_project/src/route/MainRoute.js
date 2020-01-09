import React from 'react'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'

import {Provider} from 'unistore/react'
import {store, actions} from '../global/store'

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}