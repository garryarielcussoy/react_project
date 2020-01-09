import React from 'react'
import Header from '../components/Header'

import {withRouter} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return (
            <div></div>
        )
    }
}

export default connect("", actions)(withRouter(Home))