import React, {useReducer} from 'react';
import AppContext from './AppContext';

import {appReducer} from '../reducers/appReducer';

const AppProvider = ({children}) => {
  const initialState = {
    userSelectedId: null,
    userSelected: null,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
