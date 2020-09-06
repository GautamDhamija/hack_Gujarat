import {
    FIND_REQUESTS,
    LOAD_REQUESTS
 } from '../types'
 
 export default (state, action) => {
     switch (action.type) {
 
         case FIND_REQUESTS: {
             return {
                 ...state,
                 requests:action.payload
             }
         }

         default:
             return state
 
     }
 }