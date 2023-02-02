import React from 'react'
import {Hello} from '../components/Hello'
import { useEffect, useState } from "react";

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)


const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password, loggedIn)

    let isLoggedIn = (username && password && username === password)

    setLoggedIn(isLoggedIn)
}

return(
    <div className="Login componentBox">

        <p>{loggedIn ? <Hello name={username}/> : 'Please log in'}</p>

        <form onSubmit={handleLogin}>
            <div className="formRow">
                <label htmlFor="username">Username: </label>
                {/* every time the input changes, store the latest value into state */}
                <input id="username" value={username} name="username" onChange={ (e) => setUsername(e.target.value) }/>
            </div>

            <div className="formRow">
                <label htmlFor="password">Password: </label>
                {/* every time the input changes, store the latest value into state */}
                <input type="password" id="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>

            <button>Login</button>
        </form>
        
    </div>
); 
}

export default Login;