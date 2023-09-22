// action.js
export const setUsername = (username) => {
    // Save the username to local storage
    try {
      localStorage.setItem('username', username);
    } catch (error) {
      // Handle errors here, if necessary
    }
  
    return {
      type: 'SET_USERNAME',
      payload: username,
    };
  };