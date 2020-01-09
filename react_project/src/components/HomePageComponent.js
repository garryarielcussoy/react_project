import React from 'react'
import Header from '../components/Header'

import {withRouter} from 'react-router-dom'
import {store, actions} from '../global/store'
import { connect } from "unistore/react";

class HomePageComponent extends React.Component{
    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 info-kota-information'>
                        <p className='information-content'>
                            Selamat Datang di INFO KOTA. Melalui aplikasi ini, kamu bisa caritau banyak hal
                            seputar suatu kota, mulai dari tempat makan, bioskop, sampai tingkat biaya hidup!
                            Untuk bisa menikmati aplikasi ini, kamu cukup login terlebih dahulu &#x1F31D;
                        </p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        )
    }
}

export default connect("", actions)(withRouter(HomePageComponent))