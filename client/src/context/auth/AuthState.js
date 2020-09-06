import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    VERIFY_SUCCESS,
    VERIFY_FAIL,
    CLEAR_ERROR,
    SET_LOADING,
    LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT

} from '../types'
import axios from 'axios'
import setAuthToken from '../../components/setAuthToken'


const AuthState = (props) => {
    const initialState = {
        token: null,
        isAuthenticated: false,
        isVerified: false,
        error: null,
        msg: null,
        OTPsent: false,
        loading: false,
        user: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)



    //load consultant
    const loadConsultant = async () => {
        if (localStorage.getItem('token')) {
            setAuthToken(localStorage.token)
        }
        axios.get('/api/consultantAuth', {
            headers: {
                'Access-Control-Allow-Credentials': true
            }
        })
            .then(res => {
                dispatch({
                    type: LOADED,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: AUTH_ERROR
                })
            })
    }
    //load user
    const loadUser = async () => {
        if (localStorage.getItem('token')) {
            setAuthToken(localStorage.token)
        }
        axios.get('/api/userAuth', {
            headers: {
                'Access-Control-Allow-Credentials': true
            }
        })
            .then(res => {
                dispatch({
                    type: LOADED,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: AUTH_ERROR
                })
            })
    }

    //register consultant
    const registerConsultant = async formData => {

        await axios.post('/api/consultants', formData)
            .then(res => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(error => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: error.response.data.msg
                })
            })
    }
    //register user
    const registerUser = async formData => {

        await axios.post('/api/users', formData)
            .then(res => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(error => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: error && error.response.data.msg
                })
            })
    }
    //verify consultant
    const verifyConsultant = async formData => {

        await axios.post('/api/consultantPostConfirmation', formData, {
            header: {
                'content-type': 'application/json'
            }
        })

            .then(res => {
                dispatch({
                    type: VERIFY_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: VERIFY_FAIL,
                    payload: err.response.data
                })
            })

    }
    //verify user
    const verifyUser = async formData => {
        console.log(formData)
        await axios.post('/api/userPostConfirmation', formData, {
            header: {
                'content-type': 'application/json'
            }
        })

            .then(res => {
                dispatch({
                    type: VERIFY_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: VERIFY_FAIL,
                    payload: err.response.data
                })
            })

    }
    //consultant login
    const loginConsultant = async formData => {
        const res = await axios.post('/api/consultantAuth', formData, {
            header: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
                loadConsultant()   
            })
            .catch(err => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: err.response.data.msg
                })
            })
    }
    //user login
    const loginUser = async formData => {
        const res = await axios.post('/api/userAuth', formData, {
            header: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
                loadUser()
            })
            .catch(err => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: err.response.data.msg
                })
            })
    }
    //clear errors
    const clearError = () => {
        dispatch({
            type: CLEAR_ERROR
        })
    }
    const setLoading = async value => {
        dispatch({
            type: SET_LOADING,
            payload: value
        })
    }
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                loading: state.loading,
                error: state.error,
                msg: state.msg,
                isVerified: state.isVerified,
                OTPsent: state.OTPsent,
                registerUser,
                registerConsultant,
                verifyConsultant,
                verifyUser,
                loginConsultant,
                loginUser,
                setLoading,
                clearError,
                loadConsultant,
                loadUser,
                logout
            }}>
            {props.children}
        </authContext.Provider>
    )
}
export default AuthState