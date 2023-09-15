import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='body' >
    <div className='box'>
        <div className='form'>
            <div className='logo'>
                <img src="https://i.pinimg.com/originals/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.png" alt='Logo'></img>
            </div>
            <h2>Login</h2>
            
            <div className='inputBox'>
                <input type="text" className='logininput' required="required"></input>
                <span>Username</span>
                <i></i>
            </div>
            <div className='inputBox'>
                <input type="password" className='logininput' required="required"></input>
                <span>Password</span>
                <i></i>
            </div>
            <Link to='/difficulty'><input type="submit" className='logininput'value="Submit"></input></Link>
        </div>
    </div>

    </div>
    )
}

export default Login;