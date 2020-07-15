import React, { createContext, useContext, useReducer } from 'react';

// (React Context API) This is the data layer
export const StateContext = createContext();

// Build a state provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Here we use it inside a component
export const useStateValue = () => useContext(StateContext);
