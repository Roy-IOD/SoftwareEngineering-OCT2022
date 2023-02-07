import './App.css';

import logo from './logo.svg';
import MyGreeting from './components/MyGreeting';
import Clock from './components/Clock';
import Emoji from './components/Emoji';
import { EmojiProvider } from './context/EmojiContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import NavBar from './components/NavBar';
import { AppRoutes } from './routes/AppRoutes';

function App( {emoji } ) {
  return (
    <div className="App">

      <ThemeProvider>
        <UserProvider>

          <NavBar />

          <AppRoutes />

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
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
