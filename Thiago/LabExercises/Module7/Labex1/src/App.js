import logo from './logo.svg';
import './App.css';
import Hello from './components/Greeting';
import Clock from './components/Clock';
import Emoji  from './components/Emoji';
import { EmojiProvider } from './context/EmojiContext';

function App() {
  return (
    <div className="App">
       <EmojiProvider>
      <Hello />
      <Clock />
      <Emoji />
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
      </EmojiProvider>
    </div>
  );
}

export default App;
