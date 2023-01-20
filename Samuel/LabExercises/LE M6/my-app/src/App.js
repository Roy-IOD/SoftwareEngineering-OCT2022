import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

function App() {
const greeting = {
    name: '',
  }
  return (
    <div className="App">
      <Greeting name='Sam' />
    </div>
  );
}

export default App;
