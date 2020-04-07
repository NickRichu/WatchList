// store.js
import React, {createContext, useReducer} from 'react';

const initialState = {
  
            currentPage: "MARKET",
            topBarLabel: ''
        
    
    
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAVBAR_CURRENT_PAGE':
            return {
       ...state,
       currentPage: action.payload.currentPage
            };
      default:
        throw new Error();
    }
  };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
    
      const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export { store, StateProvider }

