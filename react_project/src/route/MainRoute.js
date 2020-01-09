import React from 'react'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'

import {Provider} from 'unistore/react'
import {store, actions} from '../storeSetyo'

import Home from '../pages/Home'
import Profile from '../pages/profile'

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/profile' component={Profile} />
                    {/* <Route exact path='/login' component={Login} /> */}
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoute