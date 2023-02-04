import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting'
import Clock from './components/Clock'
function App() {
  return (
    <div>
      <Greeting name = 'John'/>
      <Clock/>
    </div>
  );
}

export default App;
