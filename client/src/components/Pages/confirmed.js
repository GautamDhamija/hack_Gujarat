import React,{Fragment, useState, useEffect} from 'react'
import { useContext } from 'react'
import SelectedContext from '../../context/selected/selectedContext'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'

function confirmPage(props) {
    
    return (
        <>
        <div className="container" id="top">
            <div className="row">
                <div className="col-lg-12">
                    <center>
                        <span class="badge badge-dark">Your Appointment Has been Booked...</span>
                    </center>
                </div>
            </div>
        </div>
        </>
    )
}

export default confirmPage
