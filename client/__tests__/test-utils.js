import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // Import our reducerimport reducer from '../reducers' // to access rest of reducers
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/Redux/AuthReducer';
import petReducer from '../src/Redux/PetReducer';
import { store } from '../src/Redux/store';

//custom render that includes redux provider
const render = (
  ui,
  {
    initialState,
    store = configureStore({
      reducer: { auth: authReducer },
    }),
    //createStore(reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { render };
