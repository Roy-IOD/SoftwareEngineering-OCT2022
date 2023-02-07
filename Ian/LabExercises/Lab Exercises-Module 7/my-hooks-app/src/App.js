import logo from './logo.svg';
import './App.css';
import MyGreeting from './Components/MyGreeting';
import Clock from './Components/Clock';
import Emoji from './Components/Emoji';
import { EmojiProvider } from './context/EmojiContext';

function App( {emoji } ) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <EmojiProvider>
            <MyGreeting />
            <Clock />
            <Emoji />
          </EmojiProvider>
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
