// userReducer.js

const initialState = {
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'LOGOUT':
      return { ...state, username: '' }; // Clear the username when logging out
    default:
      return state;
  }
};

export default userReducer;
