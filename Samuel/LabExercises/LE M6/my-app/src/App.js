import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  const greeting = {
    name: 'Sam',
  } 

  return (
    <div className="App">
      <Greeting 
      name={greeting.name}/>
    </div>
  );
}

export default App;
