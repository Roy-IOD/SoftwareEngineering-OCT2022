import React, { useState } from 'react';
import LoginSuccess from './LoginSuccess';
// import Hello from './Hello';

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password, loggedIn)
        //login successful/true if both values exist and match
        let isLoggedIn = (username && password && username === password)

        setLoggedIn(isLoggedIn);
    }

       

    //we can also save JSX into variables to simplify rendering
    //const message = this.state.loggedIn ? <Hello name={this.state.username}/> : 'Please log in';

    return (
        <div className="Login componentBox">

            {/* if we're logged in, use the Hello component to say hello */}
            <div>{loggedIn ? <LoginSuccess name={username} /> : 'Please log in'}</div>

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