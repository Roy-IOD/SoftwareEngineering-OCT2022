import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting'
import Clock from './components/Clock'
import Emoji from './components/Emoji'
function App() {
  return (
    <div>
      <Greeting name = 'John'/>
      <Clock/>
      <Emoji/>
    </div>
  );
}

export default App;
