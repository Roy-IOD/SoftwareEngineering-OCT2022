import React, { useState } from "react";
import Hello from "./Hello";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { Button, TextField, Box } from "@mui/material";

//this is the FUNCTIONAL version of the Login component from Module 6. It uses the useState HOOK to manage state instead of the inherited setState class method.
function Login(props) {
  const { username, setUsername } = React.useContext(UserContext);

  //default state values
  const [localUsername, setLocalUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(username);

  const { theme } = React.useContext(ThemeContext);

  //how could we use UserContext here to update a currently logged in user?

  const handleLogin = (e) => {
    e.preventDefault();

    //login successful/true if both values exist and match
    let isLoggedIn = localUsername && password && localUsername === password;

    setLoggedIn(isLoggedIn);
    setUsername(localUsername);
    //also store the user in our context
  };

  const handleInputChange = (event) => {
    const target = event.target;
    console.log(target);

    //can't use a generic setState call anymore, we need to call individual 'set' functions
    if (target.name === "username") setLocalUsername(target.value);
    if (target.name === "password") setPassword(target.value);
  };

  //we can also save JSX into variables to simplify rendering
  //const message = this.state.loggedIn ? <Hello name={this.state.username}/> : 'Please log in';

  return (
    <div
      className="Login componentBox"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      {/* if we're logged in, use the Hello component to say hello */}
      <div>{loggedIn ? <Hello name={username} /> : "Please log in"}</div>

      {/* <form onSubmit={handleLogin}> */}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        m="auto"
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          padding: "1em",
          maxWidth: 600,
        }}
      >
        <div className="formRow">
          {/* <label htmlFor="username">Username: </label> */}
          {/* every time the input changes, store the latest value into state */}
          {/* <input id="username" value={localUsername} name="username" onChange={ handleInputChange }/> */}
          <TextField
            name="username"
            label="Username"
            value={localUsername}
            onChange={handleInputChange}
            variant="outlined"
            focused
          />
        </div>

        <div className="formRow">
          {/* <label htmlFor="password">Password: </label> */}
          {/* every time the input changes, store the latest value into state */}
          {/* <input type="password" id="password" name="password" value={password} onChange={ handleInputChange } /> */}
          <TextField
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={handleInputChange}
            variant="outlined"
          />
        </div>

        <Button variant="outlined" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </div>
  );
}

export default Login;
