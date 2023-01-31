import './App.css';

import Greetings from './components/Greetings';
import GreetingsButton from './components/GreetingsButton';
import EmojiGenerator from './components/EmojiGenerator';

function App() {
  return (
    <div className="App">

      <Greetings name="Mareko"/>
      <GreetingsButton />
      <EmojiGenerator />

    </div>
  );
}

export default App;
