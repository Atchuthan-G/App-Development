import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from '../src/Redux/Action';

const Login = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    const username = e.target.value;
    setUsernameInput(username);
  };

  const handleLogin = () => {
    // Dispatch the setUsername action to update the Redux state
    dispatch(setUsername(usernameInput));
  };

  return (
    <div className='body'>
      <div className='box'>
        <div className='form'>
          <div className='logo'>
            <img src="https://i.pinimg.com/originals/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.png" alt='Logo'></img>
          </div>
          <h2>Login</h2>

          <div className='newInput'>
            <span className='newText'>Username</span>
            <input
              type="text"
              className='logininput'
              required="required"
              value={usernameInput}
              onChange={handleUsernameChange}
            />
            <i></i>
          </div>
          <div className='newInput'>
            <span className='newText'>Password  </span>
            <input
              type="password"
              className='logininput'
              required="required"
            />
            <i></i>
          </div>
          <Link to='/dashboard'>
            <input
              type="submit"
              className='logininput'
              value="Submit"
              onClick={handleLogin}
            />
          </Link>
<h6 className='no_acc'><Link to="/signup">Doesn't have an account?</Link></h6>
        </div>
      </div>
    </div>
  );
};

export default Login;