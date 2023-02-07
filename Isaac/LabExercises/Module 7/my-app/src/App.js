import './App.css';
import Hello from './components/Hello';
import ClockDisplay from './components/Clock';
import Emoji  from './components/Emoji';
import { EmojiProvider } from './context/EmojiContext';

function App() {
  return (
    <div className="App">
      <EmojiProvider>
        <Hello />
        <ClockDisplay />
        <Emoji />
      </EmojiProvider>
    </div>
  );
}


export default App;
