//import logo from './logo.svg';
import './App.css';

import Article from './components/Article';
import Login from './components/Login';
import Counter from './components/Counter';
import RandomQuote from './components/RandomQuote';
import Bike from './components/Bike';
import ClockDisplay from './components/Clock';
import OnlineChat from './components/OnlineChat';

function App() {
  return (
    <div className="App">

      <Article/>

      <Counter/>

      <Login />

      <RandomQuote />

      <Bike />

      <ClockDisplay />

      <OnlineChat />

    </div>
  );
}

export default App;
