import './App.css';
import logo from './logo.svg';
import Greeting from './components/Greeting';
import Emoji from './components/Emoji';
import Calculator from './components/Calculator';

function App() {

  const myName = "Thiago"

  return (
    <div className="App">
      <Greeting />
      <Emoji/>
      <Calculator/>
      <header className="App-header">
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
