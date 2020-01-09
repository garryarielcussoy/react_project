import React from 'react'
import Header from '../components/Header'

import {withRouter} from 'react-router-dom'
import {store, actions} from '../global/store'
import { connect } from "unistore/react";

class Home extends React.Component{
    render(){
        return (
            <Header />
        )
    }
}

export default connect("", actions)(withRouter(Home));