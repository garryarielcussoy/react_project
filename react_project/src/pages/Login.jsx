import React from 'react';
import Header from '../components/Header';

import {withRouter} from 'react-router-dom';
import {store, actions} from '../global/store_bimon';
import { connect } from "unistore/react";

import '../styles/bootstrap.min.css';
import '../styles/Login.css';

class Login extends React.Component{

    // handleFormSubmit(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
        
    //     fetch('/api/form-submit-url', {
    //       method: 'POST',
    //       body: data,
    //     });
    // }


    render(){
        console.log("nilai user Credential", this.props.user_credential);
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <form className="form-signin" onSubmit={e => e.preventDefault()}>       
                        <h2 className="form-signin-heading">Please login</h2>
                        <input type="text" className="form-control" name="username" placeholder="Username or Email Address" required="" autoFocus="" />
                        <input type="password" className="form-control" name="password" placeholder="Password" required=""/>      
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" onClick={e => this.props.handleIsRememberState(e)}/> Remember me
                        </label>
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.props.storeHandleLogin}>Login</button>   
                    </form>
                </div>
            </div>

        );
    }
}

export default connect("user_credential", actions)(withRouter(Login));