import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import ClockDisplay from './components/Clock';
import Emoji from './components/Emoji';
import { EmojiProvider } from './context/EmojiContext';
// import Emoji2 from './components/Emoji2';
// import Calculator from './components/Calculator';

function App() {
  // const greeting = {
  //   name: 'Sam',
  // } 

  return (
    <div className="App">
      <EmojiProvider>
        <Greeting />
        <ClockDisplay />
        <Emoji />
        {/* <Emoji2 /> */}
      </EmojiProvider>
    </div>
  );
}

export default App;
