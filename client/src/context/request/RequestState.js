import React, { useReducer, useContext } from 'react';
import requestContext from './requestContext';
import requestReducer from './requestReducer';

import {
    FIND_REQUESTS,
    LOAD_REQUESTS
} from '../types'
import axios from 'axios'



const RequestState = (props) => {
    
        const initialState = {
        requests:[]
    }
    const [state, dispatch] = useReducer(requestReducer, initialState)

    const getrequestsuser = async (email) => {
        console.log("Hello");
        let url = '/make/request/' + email 
        console.log("going");
        await axios.get(url, {
            headers: {
                'Access-Control-Allow-Credentials': true
            }
        })
            .then(res => {
                dispatch({
                    type: FIND_REQUESTS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getrequestsconsult = async (email) => {
        console.log("Hello");
        let url = '/make/request/consult/' + email 
        console.log("going");
        await axios.get(url, {
            headers: {
                'Access-Control-Allow-Credentials': true
            }
        })
            .then(res => {
                dispatch({
                    type: FIND_REQUESTS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <requestContext.Provider
            value={{
                requests:state.requests,
                getrequestsuser,
                getrequestsconsult
            }}>
            {props.children}
        </requestContext.Provider>
    )

}
export default RequestState