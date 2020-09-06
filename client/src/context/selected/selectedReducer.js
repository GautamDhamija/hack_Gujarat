import {
    SET_CATEGORY,
    SET_CONSULTANTS
 } from '../types'
 
 export default (state, action) => {
     switch (action.type) {
 
         case SET_CATEGORY: {
             return {
                 ...state,
                 category:action.payload
             }
         }
 
         case SET_CONSULTANTS:{
             return{
                 ...state,
                 consultants:action.payload
 
             }
         }
        
         default:
             return state
 
     }
 }