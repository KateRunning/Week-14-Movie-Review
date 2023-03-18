import React from 'react';
import './login.css'

const LoginForm = () => {
    return (
        <div className='cover'>
            <h3 className='text-black'>Log In</h3>
            <input type="text" placeholder='username' />
            <input type='password' placeholder='password' />

            <button className='btn btn-primary'>Login</button>

        </div>
    )
}

export default LoginForm