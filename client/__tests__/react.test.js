import React from 'react';
import { fireEvent } from '@testing-library/react';
import LoginSignup from '../pages/LoginSignup.jsx';
import { Provider } from 'react-redux';
import store from '../src/Redux/store.js';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen, cleanup } from './test-utils.js';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
const { createMemoryHistory } = require('history');

// beforeEach(() => {
//   const history = createMemoryHistory();
//   render(
//     // <Provider store={store}>
//     //   <Navbar />
//     //   <Routes>
//     //     <Route path='/' element={<LoginSignup />} />
//     //   </Routes>
//     // </Provider>
//     <Router location={history.location} navigator={history}>
//       <LoginSignup></LoginSignup>
//     </Router>
//   );
// });

afterEach(() => {
  cleanup();
});

test('test', () => {
  const div = document.createElement('div');
  // const component = render(<LoginSignup></LoginSignup>, div);
  const history = createMemoryHistory();
  const component = render(
    // <Provider store={store}>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<LoginSignup />} />
    //   </Routes>
    // </Provider>
    <Router location={history.location} navigator={history}>
      <LoginSignup></LoginSignup>
    </Router>
  );
  expect(component.container).toMatchSnapshot();
});


test('signup renders correctly', () => {
  const div = document.createElement('div');
  const history = createMemoryHistory();
  
  const onClickFunction = jest.fn();
  const { getByTestId } = render(
    <Router location={history.location} navigator={history}>
    <LoginSignup onClickFunction={onClickFunction} />
    </Router>
  )
  fireEvent.click(getByTestId('signup'))
  expect(onClickFunction).toHaveBeenCalled();
})
// describe('Unit Testing react components', () => {
//   describe('signup button', () => {
    test('renders signup component when signup button is clicked', () => {
      const div = document.createElement('div');
  // const component = render(<LoginSignup></LoginSignup>, div);
  const history = createMemoryHistory();
      const { getByText, queryByText } = render(
        <Router location={history.location} navigator={history}>
          <LoginSignup />
        </Router>
      );

      // simulate click event
      const signupButton = getByText('SignUp');
      fireEvent.click(signupButton);

      expect(getByText('Sign Up')).toBeInTheDocument();
    });



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
