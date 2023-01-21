import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Emoji from './components/Emoji';

function App() {
  const greeting = {
    name: 'Sam',
  } 

  return (
    <div className="App">
      <Greeting 
      name={greeting.name}/>
      <Emoji />
    </div>
  );
}

export default App;
