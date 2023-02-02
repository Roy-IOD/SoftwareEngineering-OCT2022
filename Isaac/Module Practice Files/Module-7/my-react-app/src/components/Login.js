import React, { useState } from 'react';
import Hello from './Hello';

function Login(props) {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        let isLoggedIn = (username && password && username === password);
        setLoggedIn(isLoggedIn);
    }

    const handleInputChange = (event) => {
        const target = event.target;
        console.log(target)
        if (target.name === 'username') setUsername(target.value);
        if (target.name === 'password') setPassword(target.value);
    }    

    return (
        <div className="Login componentBox">

            <div>{loggedIn ? <Hello name={username}/> : 'Please log in'}</div>

            <form onSubmit={handleLogin}>
                <div className="formRow">
                    <label htmlFor="username">Username: </label>
                    <input id="username" value={username} name="username" onChange={ handleInputChange }/>
                </div>

                <div className="formRow">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" value={password} onChange={ handleInputChange } />
                </div>
                
                <button>Login</button>
            </form>
            
        </div>
    );
}

export default Login;