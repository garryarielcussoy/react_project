import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

class Header extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Info Kota</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Login</a></li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default Header