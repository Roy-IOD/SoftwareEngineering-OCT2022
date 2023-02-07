import './App.css';
import ClockDisplay from './components/Clock';
import EmojiGenerator from './components/EmojiGenerator';
import GreetingsButton from './components/GreetingsButton';
import { EmojiProvider } from './context/emojiContext';

function App() {
  return (
    <div className="App">
      <GreetingsButton />

      <EmojiProvider>

        <ClockDisplay />
        <EmojiGenerator />

      </EmojiProvider>
    </div>
  );
}

export default App;
