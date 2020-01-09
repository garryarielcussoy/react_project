import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import infoKotaLogo from '../img/InfoKotaLogo.png'

class Header extends React.Component{
    render(){
        return (
            <div className='container-fluid'>
                <div className='row header'>
                    <div className='col-md-3 col-sm-5 header-info-kota'>
                        <img src={infoKotaLogo} className='header-logo'/>
                    </div>
                    <div className='col-md-6 col-sm-2'></div>
                    <div className='col-md-3 col-sm-5 header-profile'>
                        <a href='' className='login-text'>Login</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header