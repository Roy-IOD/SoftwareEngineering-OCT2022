import logo from './logo.svg';
import './App.css';
import MyGreeting from './components/MyGreeting';
import PropGreeting from './components/PropGreeting';
import StateGreeting from './components/StateGreeting';
import Clock from './components/Clock';
import StudentList from './components/StudentList';
import Reservation from './components/Reservation';
import Emojis from './components/Emojis';
import Breweries from './components/Breweries';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <MyGreeting />
        <PropGreeting name='Ian' location='Sydney'/>
        <StateGreeting />
        <Clock />
        <StudentList />
        <Reservation />
        <Emojis />
        <Breweries />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
