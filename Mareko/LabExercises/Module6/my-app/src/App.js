import './App.css';

import Greetings from './components/Greetings';
import GreetingsButton from './components/GreetingsButton';
import EmojiGenerator from './components/EmojiGenerator';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">

      <Greetings name="Mareko"/>
      <GreetingsButton />
      <EmojiGenerator />
      <Calculator />

    </div>
  );
}

export default App;
