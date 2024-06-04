import { createContext, useReducer } from "react";
import React from 'react'



export const CareersContext = createContext();

export const careersReducer = (state, action) => {
    switch(action.type) {
        case 'SET_CAREERS': 
         return {
            careers: action.payload
         }
        case 'FILTER_CAREERS': {
                return {
                    careers: state.careers.filter(career => 
                        career.title.toLowerCase().includes(action.payload.toLowerCase()))
                }
        }
        default:
            return state;
    }
}

export const CareersContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(careersReducer, {
        careers: null
    })
    return (
        <CareersContext.Provider value={{...state, dispatch}}>
            { children }
        </CareersContext.Provider>
    )
}