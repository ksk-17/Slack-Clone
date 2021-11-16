import React,{createContext,useContext, useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {/* children is our app */}
        {children} 
    </StateContext.Provider>
);


// a custom hook is created named useStateValue
export const useStateValue = () => useContext(StateContext);