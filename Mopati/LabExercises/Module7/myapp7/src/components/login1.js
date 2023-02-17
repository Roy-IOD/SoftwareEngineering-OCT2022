import React, { useState } from "react";
import Hello from "./Hello";

//import mui materials

//this is the FUNCTIONAL version of the Login component from Module 6. It uses the useState HOOK to manage state instead of the inherited setState class method.
function Login(props) {
  //default state values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    //login successful/true if both values exist and match
    let isLoggedIn = username && password && username === password;

    setLoggedIn(isLoggedIn);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    console.log(target);

    //can't use a generic setState call anymore, we need to call individual 'set' functions
    if (target.name === "username") setUsername(target.value);
    if (target.name === "password") setPassword(target.value);
  };

  //we can also save JSX into variables to simplify rendering
  //const message = this.state.loggedIn ? <Hello name={this.state.username}/> : 'Please log in';

  return (
    <div className="Login componentBox">
      {/* if we're logged in, use the Hello component to say hello */}
      <div>{loggedIn ? <Hello name={username} /> : "Please log in"}</div>

      <form onSubmit={handleLogin}>
        <div className="formRow">
          <label htmlFor="username">Username: </label>
          {/* every time the input changes, store the latest value into state */}
          <input
            id="username"
            value={username}
            name="username"
            onChange={handleInputChange}
          />
        </div>

        <div className="formRow">
          <label htmlFor="password">Password: </label>
          {/* every time the input changes, store the latest value into state */}
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;