//import logo from './logo.svg';
import './App.css';

import Article from './components/Article';
import Login from './components/Login';
import Counter from './components/Counter';
import RandomQuote from './components/RandomQuote';
import Bike from './components/Bike';
import ClockDisplay from './components/Clock';
import WindowResizer from './components/WindowResizer';
import OnlineChat from './components/OnlineChat';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">

      <ThemeProvider>
        <Article/>

        <Counter/>

        <Login />

        <RandomQuote />

        <Bike />

        <ClockDisplay />

        <WindowResizer />

        <OnlineChat />
      </ThemeProvider>

    </div>
  );
}

export default App;
