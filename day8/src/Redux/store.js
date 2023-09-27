import { createStore, combineReducers } from 'redux';
import userReducer from '../Redux/userReducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Load state from local storage, if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

// Save state to local storage whenever the state changes
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    // Handle errors here, if necessary
  }
};

// Create the Redux store and load initial state from local storage
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional for Redux DevTools
);

// Subscribe to changes in the store and save to local storage
store.subscribe(() => {
  saveState({
    user: store.getState().user, // Define which parts of the state you want to persist
  });
});

export default store;
