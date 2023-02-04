import './App.css';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import Emoji from './components/Emoji';
import { EmojiProvider } from './context/EmojiContext';

function App() {
  const myName = "David"
  
  return (
    
    <div className="App">
      
      <EmojiProvider>
      <Greeting name = {myName}/>
      <Clock />
      <Emoji />
      </EmojiProvider>
    </div>
  );
}

export default App;
