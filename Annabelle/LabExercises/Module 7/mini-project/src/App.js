import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./components/List"
import './App.css';
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <div className="main">
      <h1>React Search</h1>

      <div className="search">
        <TextField id="outlined-basic" variant="outlined" fullWidthlabel="Search"/>
      </div>

      <List/>
    </div>,

<div>
<DataFetching/>
</div>
  );

}


export default App;
