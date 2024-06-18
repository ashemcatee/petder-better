const initialState = {
  user: {},
  authView: 'Login',
};

// {
//   "userId": 1,
//   "userName": "Aria",
//   "image": image},

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        authView: 'Login',
      };
    case 'SET_AUTH_VIEW':
      return {
        ...state,
        authView: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
