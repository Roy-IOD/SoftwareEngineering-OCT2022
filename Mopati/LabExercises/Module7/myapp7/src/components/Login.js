import React, { useState } from "react";
import Hello from "./Hello";
import { TextField } from "@mui/icons-material";
import { Button } from "@mui/material";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let isLoggedIn = username && password && username === password;
    setLoggedIn(isLoggedIn);
  };

  return (
    <div className="Login componentBox">
      {loggedIn ? <Hello name={username} /> : "Please log in"}

      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <TextField
          type="password"
          label="Password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
