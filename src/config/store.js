import { createContext, useContext } from 'react';

export const StateContext = createContext();

// we've given this particular use of context a name 'useGlobalState'
// the function that allows us to access the value
export const useGlobalState = () => useContext(StateContext);

