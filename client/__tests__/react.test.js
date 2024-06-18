import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginSignup from '../pages/LoginSignup.jsx';
import { Provider } from 'react-redux';
import store  from '../src/Redux/store.js';
import { configureStore } from '@reduxjs/toolkit';

describe('Unit Testing react components', () => {

describe('signup button', () => {
    test('renders signup component when signup button is clicked', () => {
  const { getByText, queryByText } = render(
  <Provider store={store}>
    <LoginSignup />
  </Provider>);

  // simulate click event
  const signupButton = getByText('SignUp');
  fireEvent.click(signupButton);

  expect(queryByText('Sign Up')).toBeInTheDocument();
});
})})


// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import LoginSignup from './LoginSignup.jsx';
// import rootReducer from '../src/Redux/reducer'; // import your root reducer

// test('renders signup component when signup button is clicked', () => {
//   // Create a mock store
//   const store = createStore(rootReducer);

//   // Render the component wrapped in a Provider with the mock store
//   const { getByText, queryByText } = render(
//     <Provider store={store}>
//       <LoginSignup />
//     </Provider>
//   );

//   // Rest of your test code...
// });