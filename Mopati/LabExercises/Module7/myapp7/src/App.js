//import logo from './logo.svg';
import "./App.css";

import Login from "./components/Login";
import Hello from "./components/Greetings";
import ClockDisplay from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Login />
      <Hello />
      <ClockDisplay />
    </div>
  );
}

export default App;
