import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

class Header extends React.Component{
    render(){
        return (
            <div className='container-fluid'>
                <div className='row header'>
                    <div className='col-md-1 col-sm-12 header-info-kota'>
                        <Link to='/'><img src={infoKotaLogo} className='header-logo'/></Link>
                    </div>
                    <div className='col-md-9 col-sm-12'>
                        {this.props.userCredential.isLogin === true ? 
                            <ul className='appear-after-login'>
                                <li className='header-home'><Link to='/'><a>Home</a></Link></li>
                                <li className='header-profile'><Link to='/'><a>Profile</a></Link></li>
                            </ul>:
                            <div></div>
                        }
                    </div>
                    <div className='col-md-2 col-sm-6 header-log'>
                        { this.props.userCredential.isLogin === true ? 
                            <Link to='/login'><a onClick={() => this.props.handleLogout()} href='' className='login-text'>Logout</a></Link>:
                            <Link to='/login'><a href='' className='logout-text'>Login</a></Link>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Header