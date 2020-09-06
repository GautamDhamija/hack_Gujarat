import React, { useReducer, useContext } from 'react';
import selectedContext from './selectedContext';
import selectedReducer from './selectedReducer';

import {
    SET_CATEGORY,
    SET_CONSULTANTS
} from '../types'
import axios from 'axios'



const SelectedState = (props) => {
    
        const initialState = {
        category:'',
        consultants:[]
    }
    const [state, dispatch] = useReducer(selectedReducer, initialState)


    const setcategory = async value => {
        console.log(value);
        dispatch({
            type: SET_CATEGORY,
            payload: value
        })
    }

    const getconsultants = async (category) => {
        console.log("Hello");
        let url = '/api/specific/' + category 
        console.log("going");
        await axios.get(url, {
            headers: {
                'Access-Control-Allow-Credentials': true
            }
        })
            .then(res => {
                dispatch({
                    type: SET_CONSULTANTS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <selectedContext.Provider
            value={{
                category:state.category,
                consultants:state.consultants,
                setcategory,
                getconsultants
            }}>
            {props.children}
        </selectedContext.Provider>
    )

}
export default SelectedState