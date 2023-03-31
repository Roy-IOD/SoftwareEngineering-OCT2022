import { React, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { AppRoutes } from './routes/AppRoutes';


function App() {
  return (
<div>
<Navbar />
<br/>
<AppRoutes />
</div>

)
}

export default App;
